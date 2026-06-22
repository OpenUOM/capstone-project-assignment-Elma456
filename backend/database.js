const dbConnection = require("./sqlite");

dbConnection
    .getDbConnection()
    .then((db) => {
        init(db);
    })
    .catch((err) => {
        console.log(err);
        throw err;
    });

let _db;

function init(db) {
    _db = db;
}

const knex_db = require("./db-config");
const testBase = require("./test/testBase");

const dbinitialize = async () => {
    await testBase.resetDatabase(knex_db);
    return { status: "Successfully initialized DB" };
}

const readTeachers = async () => {
    return knex_db('teacher').select('*');
}

const readTeacherInfo = async (id) => {
    return knex_db('teacher').where({ id }).select('*');
}

const addTeacher = async (id, name, age) => {
    await knex_db('teacher').insert({ id, name, age });
    return { status: "Successfully inserted Teacher" };
}

const updateTeacher = async (name, age, id) => {
    await knex_db('teacher').where({ id }).update({ name, age });
    return { status: "Successfully updated Teacher" };
}

const deleteTeacher = async (id) => {
    await knex_db('teacher').where({ id }).del();
    return { status: "Successfully deleted Teacher" };
}

const readStudents = async () => {
    return knex_db('student').select('*');
}

const readStudentInfo = async (id) => {
    return knex_db('student').where({ id }).select('*');
}

const addStudent = async (id, name, age, hometown) => {
    await knex_db('student').insert({ id, name, age, hometown });
    return { status: "Successfully inserted Student" };
}

const updateStudent = async (name, age, hometown, id) => {
    await knex_db('student').where({ id }).update({ name, age, hometown });
    return { status: "Successfully updated Student" };
}

const deleteStudent = async (id) => {
    await knex_db('student').where({ id }).del();
    return { status: "Successfully deleted Student" };
}

module.exports = {
    dbinitialize,
    readTeachers,
    readStudents,
    addStudent,
    addTeacher,
    deleteTeacher,
    deleteStudent,
    readStudentInfo,
    readTeacherInfo,
    updateStudent,
    updateTeacher
};
