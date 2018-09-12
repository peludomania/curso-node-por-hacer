const description = {
    alias: 'd',
    demand: true,
    type: 'string'
};

const argv = require('yargs')
    .command('create','Crea un nuevo elemento',
        {
            description,
        })
    .command('update', 'Actualiza un elemento',
        {
            description,
            complete: {
                default: true,
                type: 'boolean',
                alias: 'c',
                desc: 'Marca como completada la tarea'
            }
        })
    .command('delete','Elimina un elemento',
        {
            description
        })
    .help()
    .argv;

module.exports = {
    argv
};