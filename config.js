require('dotenv').config(); // this loads the defined variables from .env

const env = process.env.NODE_ENV; // 'dev' or 'prod'

const dev = {
    HOST: process.env.DEV_DB_HOST || 'localhost',
    USER: process.env.DEV_DB_USER || 'postgres',
    PASSWORD: process.env.DEV_DB_PASSWORD || '12345',
    DB: process.env.DEV_DB_NAME || 'mytestdb',
    dialect: process.env.DEV_DB_DIALECT || 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

const prod = {
    HOST: process.env.DEV_DB_HOST,
    USER: process.env.DEV_DB_USER,
    PASSWORD: process.env.DEV_DB_PASSWORD,
    DB: process.env.DEV_DB_NAME,
    dialect: process.env.DEV_DB_DIALECT,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

const config = {
    dev,
    prod
};

module.exports = config[env];
