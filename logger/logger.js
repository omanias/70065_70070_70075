// logger.js
const { createLogger, format, transports } = require('winston');

// Configuración del logger
const logger = createLogger({
    level: 'info', // Nivel de log mínimo a registrar (puede ser: error, warn, info, http, verbose, debug, silly)
    format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.printf(info => `${info.timestamp} [${info.level.toUpperCase()}]: ${info.message}`)
    ),
    transports: [
        new transports.Console(), // Imprime en la consola
        new transports.File({ filename: 'logs/combined.log' }), // Guarda en un archivo
        new transports.File({ filename: 'logs/error.log', level: 'error' }) // Guarda solo errores en otro archivo
    ],
});

// Si estamos en desarrollo, podemos agregar un formato más legible en la consola
if (process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console({
        format: format.combine(
            format.colorize(),
            format.simple()
        )
    }));
}

module.exports = logger;
