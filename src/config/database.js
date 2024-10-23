require("dotenv").config(); // Charger les variables d'environnement

const sql = require("mssql");

// Configuration des bases de données
const configShipOnWeb = {
  user: process.env.DB1_USER,
  password: process.env.DB1_PASSWORD,
  server: process.env.DB1_HOST,
  port: parseInt(process.env.DB1_PORT),
  database: process.env.DB1_DATABASE,
  options: {
    encrypt: false, // Utilisez true si le serveur nécessite SSL
    enableArithAbort: true,
  },
};

const configShipOnWebAnalytic = {
  user: process.env.DB2_USER,
  password: process.env.DB2_PASSWORD,
  server: process.env.DB2_HOST,
  port: parseInt(process.env.DB2_PORT),
  database: process.env.DB2_DATABASE,
  options: {
    encrypt: false,
    enableArithAbort: true,
  },
};

// Créer des connexions pour chaque base de données
async function connectToShipOnWeb() {
  try {
    const pool = await sql.connect(configShipOnWeb);
    console.log("Connecté à la base de données ShipOnWeb");
    return pool;
  } catch (err) {
    console.error("Erreur de connexion à ShipOnWeb:", err);
  }
}

async function connectToShipOnWebAnalytic() {
  try {
    const pool = await sql.connect(configShipOnWebAnalytic);
    console.log("Connecté à la base de données ShipOnWebAnalytic");
    return pool;
  } catch (err) {
    console.error("Erreur de connexion à ShipOnWebAnalytic:", err);
  }
}

module.exports = {
  connectToShipOnWeb,
  connectToShipOnWebAnalytic,
};
