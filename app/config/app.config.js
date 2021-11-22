require('dotenv').config(); // this loads the defined variables from .env

const env = process.env.NODE_ENV; // 'dev' or 'prod'

const dev = {
    HOST: process.env.DEV_DB_HOST || 'localhost',
    PORT: process.env.DEV_PORT || 8080,
    USER: process.env.DEV_DB_USER || 'postgres',
    PASSWORD: process.env.DEV_DB_PASSWORD || '12345',
    DB: process.env.DEV_DB_NAME || 'mytestdb',
    dialect: process.env.DEV_DB_DIALECT || 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: {
        appenders: { app: { type: 'file', filename: 'logged.log' } },
        categories: { default: { appenders: ['app'], level: 'debug' } }
    }
};

const prod = {
    HOST: process.env.PROD_DB_HOST,
    PORT: process.env.PROD_PORT,
    USER: process.env.PROD_DB_USER,
    PASSWORD: process.env.PROD_DB_PASSWORD,
    DB: process.env.PROD_DB_NAME,
    dialect: process.env.PROD_DB_DIALECT,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: {
        appenders: { app: { type: 'file', filename: 'logged.log' } },
        categories: { default: { appenders: ['app'], level: 'debug' } }
    }
};

const config = {
    dev,
    prod
};

module.exports = config[env];
