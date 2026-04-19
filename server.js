const express = require('express');
const app = express();

app.use(express.json());

// Sample storage
let students = [];

// Basic Routes
app.get('/', (req, res) => {
    res.send('Welcome to Student Management System');
});

app.get('/about', (req, res) => {
    res.send('This project supports SDG 4, SDG 9, SDG 10');
});

// CRUD Operations

// CREATE
app.post('/students', (req, res) => {
    const student = req.body;
    students.push(student);
    res.send('Student added successfully');
});

// READ
app.get('/students', (req, res) => {
    res.json(students);
});

// UPDATE
app.put('/students/:id', (req, res) => {
    const id = req.params.id;
    students[id] = req.body;
    res.send('Student updated');
});

// DELETE
app.delete('/students/:id', (req, res) => {
    const id = req.params.id;
    students.splice(id, 1);
    res.send('Student deleted');
});

// Start server (ONLY ONCE)
app.listen(3000, () => {
    console.log('Server running on port 3000');
});