const fs = require('fs');


let listToDo = [];

const saveDB = () => {

    let data = JSON.stringify(listToDo);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) console.log('Ha habido un problema al escribir el fichero');
    });
};

const getDB = () => {

    try {
        listToDo = require('../db/data.json');
    } catch (e) {
        listToDo = [];
    }

};

const getListToDo = () => {

    getDB();

    return listToDo;
};

const create = (description) => {

    let toDo = {
        description,
        complete: false
    };

    getDB();

    listToDo.push(toDo);

    saveDB();

    return toDo;
};

const update = (description, complete) => {
    getDB();

    let index = listToDo.findIndex((task) => task.description === description );

    if (index >= 0) {
        listToDo[index].complete = complete;

        saveDB();

        return true;
    } else {
        return false;
    }

};

const del = (description) => {
    getDB();

    let index = listToDo.findIndex((task) => task.description === description );

    if (index >= 0) {
        listToDo.splice(index,1);

        saveDB();

        return true;
    } else {
        return false;
    }

};

module.exports = {
    create,
    getListToDo,
    update,
    del
};