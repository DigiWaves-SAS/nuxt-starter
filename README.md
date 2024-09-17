# Progetto Nuxt 3 con MongoDB Atlas e Redis (Upstash)

Questo progetto è costruito utilizzando **Nuxt 3** e integra **MongoDB Atlas** per l'archiviazione dei dati e **Redis** tramite **Upstash** per la cache.

## Prerequisiti

Assicurati di avere installato:

- **Node.js** versione 16 o superiore
- **npm** o **yarn**

## Configurazione del Progetto

### 1. Clona il Repository

```bash
git clone https://github.com/DigiWaves-SAS/nuxt-starter.git .
cd tuo-progetto
```

### 2. Elimina la cartella di GIT

```bash
rm -rf .git
```

### 3. Installa le dipendenze

```bash
npm install
```

### 4. Configura MongoDB Atlas

- Crea un nuovo cluster su MongoDB Atlas.
- Configura l'accesso e crea un database e una collezione secondo le tue necessità.
- Crea un utente con le giuste autorizzazioni e prendi nota della stringa di connessione (connection string) dal tab Connect.

### 5. Configura Redis Upstash

- Registrati su Upstash e crea un nuovo database Redis.
- Copia l'URL e il token di autenticazione per Redis.

### 6. Configura le variabili d'ambiente

- Crea il file .env da .env-example
```bash
cp .env-example .env
```
- Incolla nelle relative variabili le stringhe di connessione

### 7. Avvia lo sviluppo

```bash
npm run dev
```

Happy coding! 🎉🎉