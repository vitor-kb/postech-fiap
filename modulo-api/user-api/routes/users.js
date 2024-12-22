const express = require('express');
const router = express.Router();
const User = require('../models/user');

let users = [
   new User(1, 'Thiago S Adriano', 'tadriano@fiap.com.br')
];

// GET: /api/users
router.get('/', (req, res) => {
   res.json(users);
});

// GET: /api/users/:id
router.get('/:id', (req, res) => {
   const user = users.find(u => u.id === parseInt(req.params.id));
   if (!user) return res.status(404).send('User not found');
   res.json(user);
});

// POST: /api/users
router.post('/', (req, res) => {
   const { name, email } = req.body;
   const user = new User(users.length + 1, name, email);
   users.push(user);
   res.status(201).json(user);
});

// PUT: /api/users/:id
router.put('/:id', (req, res) => {
   const user = users.find(u => u.id === parseInt(req.params.id));
   if (!user) return res.status(404).send('User not found');
  
   const { name, email } = req.body;
   user.name = name;
   user.email = email;
   res.json(user);
});

// DELETE: /api/users/:id
router.delete('/:id', (req, res) => {
   const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
   if (userIndex === -1) return res.status(404).send('User not found');
  
   users.splice(userIndex, 1);
   res.status(204).send();
});

module.exports = router;