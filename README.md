# El Comparador de DMs (IA)

Este proyecto es una aplicación web Full-Stack que permite comparar la capacidad narrativa y de dirección de juego (Dungeon Master) de dos LLMs diferentes (OpenAI's ChatGPT(gpt-4o-mini) y Groq(llama-3.1-instant)) en una partida de Dungeons & Dragons.

## Características

*   **Configuración de Partida**: Inicia una aventura con un prompt de sistema personalizado.
*   **Interfaz Paralela**: Muestra las respuestas de ambas IAs lado a lado para una comparación directa.
*   **Acción Única**: Envía la misma acción a ambos DMs simultáneamente.
*   **Persistencia de Contexto**: La aplicación gestiona el historial de la conversación, permitiendo a las IAs recordar eventos pasados de la partida.
*   **Stack Tecnológico**: Next.js (React), Node.js (API Routes), y MySQL.

## Requisitos Previos

*   Node.js (v18 o superior)
*   npm o yarn
*   Un servidor de base de datos MySQL en funcionamiento.
*   Claves de API para OpenAI y Groq.

## 1. Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd el-comparador-de-dms
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

## 2. Configuración de la Base de Datos

1.  Crea una base de datos en tu servidor MySQL.
2.  Importa la estructura de tablas ejecutando el script `database-schema.sql`. Puedes usar una herramienta como MySQL Workbench, DBeaver, o la línea de comandos:
    ```bash
    mysql -u tu_usuario -p tu_base_de_datos < database-schema.sql
    ```

## 3. Configuración del Entorno

1.  Crea una copia del archivo `.env.local.example` y renómbrala a `.env.local`:
    ```bash
    cp .env.local.example .env.local
    ```

2.  Abre el archivo `.env.local` y rellena las variables con tus credenciales:
    ```env
    # Credenciales de la Base de Datos MySQL
    DB_HOST='localhost'
    DB_USER='tu_usuario_mysql'
    DB_PASSWORD='tu_contraseña_mysql'
    DB_DATABASE='tu_base_de_datos'

    # Claves de las APIs de los LLMs
    OPENAI_API_KEY='tu_clave_de_openai'
    GROQ_API_KEY='tu_clave_de_groq'
    ```

## 4. Ejecutar el Proyecto

Una vez que todo está configurado, puedes arrancar el servidor de desarrollo:

```bash
npm run dev
```

Abre tu navegador y visita [http://localhost:3000](http://localhost:3000) para empezar a usar la aplicación.


## 5. Estructura del Proyecto

/
|-- /components # Componentes de React para la UI
|-- /lib # Lógica del servidor (BBDD, APIs de IA)
|-- /pages
| |-- /api # Endpoints de la API del backend
| |-- index.js # Página principal de la aplicación
|-- /public # Archivos estáticos (CSS)
|-- .env.local # Archivo para variables de entorno (NO subir a Git)
|-- database-schema.sql # Script SQL para la creación de tablas
|-- package.json # Dependencias y scripts
|-- README.md # Este archivo