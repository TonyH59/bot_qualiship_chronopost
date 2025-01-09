# bot_qualiship_chronopost
bot chronopost pour les réclamations automatiques avec des transferts de fichiers SFTP entrants et sortants

# bot_qualiship_chronopost

Ce projet est un bot automatisé développé en **Node.js** pour l'entreprise **QualiShip**. Il permet la gestion des réclamations automatiques avec des transferts de fichiers SFTP entrants et sortants.

## Table des matières

- [Introduction](#introduction)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Architecture du projet](#architecture-du-projet)
- [Configuration](#configuration)
- [Fonctionnalités](#fonctionnalités)
- [Contributions](#contributions)
- [Dépendances](#dépendances)
- [FAQ](#faq)

---

## Introduction

**bot_qualiship_chronopost** est un outil qui facilite la gestion des réclamations automatisées pour QualiShip. Le bot intègre des transferts SFTP sécurisés pour échanger des fichiers entre systèmes internes et externes.

## Installation

1. Clonez ce dépôt GitHub :

```bash
https://github.com/TonyH59/bot_qualiship_chronopost.git
```

2. Accédez au répertoire cloné :

```bash
cd bot_qualiship_chronopost
```

3. Installez les dépendances Node.js :

```bash
npm install
```

4. Configurez les variables d'environnement dans le fichier `.env`.

## Utilisation

Pour exécuter le bot :

```bash
node bot.js
```

Les journaux d'exécution seront enregistrés dans :
- `combined.log`
- `error.log`

## Architecture du projet

Voici la structure principale des fichiers :

```
.
├── node_modules        # Modules Node.js installés
├── src                 # Fichiers source
├── .env                # Variables d'environnement
├── README.md           # Documentation du projet
├── bot.js              # Script principal du bot
├── combined.log        # Journaux combinés
├── error.log           # Journaux d'erreurs
├── package.json        # Dépendances et scripts npm
├── package-lock.json   # Verrouillage des dépendances
```

## Configuration

Le fichier `.env` contient les paramètres nécessaires au fonctionnement du bot. Exemple de configuration :

```
DB_HOST=localhost
DB_USER=your_username
DB_PASS=your_password
SFTP_HOST=sftp.qualiship.com
SFTP_USER=sftp_user
SFTP_PASS=sftp_password
```

## Fonctionnalités

- Gestion automatique des réclamations.
- Transferts de fichiers SFTP entrants et sortants.
- Journaux détaillés des activités (`combined.log`, `error.log`).

## Contributions

1. Forcez le projet.
2. Créez une branche pour votre fonctionnalité :

```bash
git checkout -b feature/ma-fonctionnalite
```

3. Faites vos modifications et soumettez un pull request.

## Dépendances

Les dépendances principales sont :

- Node.js (>=14.x)
- Modules NPM (voir `package.json`)

## FAQ

**Comment résoudre une erreur de connexion SFTP ?**
- Vérifiez les identifiants dans `.env`.
- Assurez-vous que le serveur SFTP est accessible.

**Comment activer les journaux ?**
- Par défaut, les journaux sont générés dans `combined.log` et `error.log`. Vérifiez les autorisations du dossier si aucun fichier n'est créé.

---

Pour toute autre question, contactez l'administrateur du projet.

