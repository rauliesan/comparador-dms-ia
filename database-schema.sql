-- Este script crea la estructura de la base de datos para el Comparador de DMs.

-- Tabla para almacenar cada partida/comparación.
CREATE TABLE games (
    id INT AUTO_INCREMENT PRIMARY KEY,
    system_prompt TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla para almacenar cada mensaje de cada partida.
-- 'sender' puede ser 'user', 'dm1' (ChatGPT), o 'dm2' (Grok).
CREATE TABLE messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    game_id INT NOT NULL,
    turn INT NOT NULL,
    sender VARCHAR(10) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE
);