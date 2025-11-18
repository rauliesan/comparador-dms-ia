// pages/index.js
import { useState } from 'react';
import Head from 'next/head';
import InitialConfig from '../components/InitialConfig';
import GameView from '../components/GameView';

export default function Home() {
  const [gameId, setGameId] = useState(null);
  const [loading, setLoading] = useState(false);
  // Un único log que contiene todos los mensajes
  const [log, setLog] = useState([]);

  const handleStartGame = async (systemPrompt) => {
    setLoading(true);
    try {
      const response = await fetch('/api/start-game', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ systemPrompt }),
      });

      if (!response.ok) {
        throw new Error('Error al crear la partida');
      }

      const data = await response.json();
      setGameId(data.gameId);
      // Inicia el log con las respuestas iniciales
      setLog([
        { turn: 0, sender: 'dm1', content: data.initialResponses.dm1 },
        { turn: 0, sender: 'dm2', content: data.initialResponses.dm2 },
      ]);
    } catch (error) {
      console.error(error);
      alert('No se pudo iniciar la partida. Revisa la consola para más detalles.');
    } finally {
      setLoading(false);
    }
  };
  
  // Función para añadir nuevos mensajes al log
  const handleNewLog = (newMessages) => {
    setLog(prevLog => [...prevLog, ...newMessages]);
  };

  return (
    <>
      <Head>
        <title>El Comparador de DMs (IA)</title>
        <meta name="description" content="Comparador de LLMs como Dungeon Masters" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <h1>El Comparador de DMs (IA)</h1>
        
        {!gameId ? (
          <InitialConfig onStartGame={handleStartGame} loading={loading} />
        ) : (
          <GameView gameId={gameId} initialMessages={log} onNewLog={handleNewLog} />
        )}
      </main>
    </>
  );
}