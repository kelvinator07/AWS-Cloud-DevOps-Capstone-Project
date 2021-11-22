const express = require('express');
const cors = require('cors');
const log4js = require('log4js');

const app = express();

const dbConfig = require('./app/config/app.config');

log4js.configure(dbConfig.logging);
const logger = log4js.getLogger('server');

// const db = require('./app/models');

// db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
//     // eslint-disable-next-line no-console
//     logger.debug('Drop and re-sync db.');
// });

const corsOptions = {
    origin: 'http://localhost:8081'
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to geeky application.' });
});

// require('./app/routes/tutorial.routes')(app);

// set port, listen for requests
const PORT = dbConfig.PORT || 9000;
app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    logger.info(`Server is running on port ${PORT}.`);
    // eslint-disable-next-line no-console
    logger.debug('Press CTRL-C to stop\n');
});
