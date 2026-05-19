import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";

const basePort = Number(process.env.PORT) || 5000
let port = basePort
const maxPort = basePort + 5

const startServer = () => {
  const server = app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
  })

  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE' && port < maxPort) {
      console.warn(`Port ${port} is in use. Trying port ${port + 1}...`)
      port += 1
      startServer()
    } else {
      console.error(error)
      process.exit(1)
    }
  })
}

startServer()