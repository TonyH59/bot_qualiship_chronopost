const loginChronopostExport = require("../bot_qualiship_chronopost/src/transporters/chronopost/chronopostExport");
const loginChronopostImport = require("../bot_qualiship_chronopost/src/transporters/chronopost/chronopostImport");
const loginChronopostTickets = require("../bot_qualiship_chronopost/src/transporters/chronopost/chronopostTickets");
const logger = require("./src/utils/logger");

async function startAutomation() {
  logger.info("Démarrage de toutes les opérations des bots...");

  // Lancer Chronopost Export indépendamment
  try {
    logger.info("Lancement de l'export de Chronopost...");
    await loginChronopostExport();
    logger.info("Export de Chronopost terminé avec succès.");
  } catch (error) {
    logger.warn(
      "Erreur ou absence de nouvelles réclamations lors de l'export de Chronopost :",
      error.message
    );
  }

  // Lancer Chronopost Import indépendamment
  try {
    logger.info("Lancement de l'import de Chronopost...");
    await loginChronopostImport();
    logger.info("Import de Chronopost terminé avec succès.");
  } catch (error) {
    logger.warn("Erreur lors de l'import de Chronopost :", error.message);
  }

  // Lancer Chronopost Tickets indépendamment
  try {
    logger.info("Lancement de l'import de Chronopost pour les tickets...");
    await loginChronopostTickets();
    logger.info("Import des tickets Chronopost terminé avec succès.");
  } catch (error) {
    logger.warn("Erreur lors de l'import de Chronopost :", error.message);
  }
}

startAutomation();
