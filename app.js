const argv = require('./config/yargs').argv;
const toDoFunctions = require('./to-do/to-do');

const colors = require('colors');

let command = argv._[0];

switch (command) {

    case 'create':
        let toDo = toDoFunctions.create( argv.description );
        console.log(toDo);
        break;
    case 'list':

        let list = toDoFunctions.getListToDo();

        for (let task of list) {
            console.log('========Por hacer======='.green);
            console.log(task.description);
            console.log(`Estado: ${ task.complete }` );
            console.log('========================'.green);
        }
        break;
    case 'update':
        toDoFunctions.update( argv.description, argv.complete );
        break;
    case 'delete':
        toDoFunctions.del( argv.description, argv.complete );
        break;
    default:
        console.log('Comando no reconocido');
        break;

}