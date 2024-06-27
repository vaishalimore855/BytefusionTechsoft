// // const express = require('express');
// // const router = express.Router();
// // // Mock data
// // let users = [
// //   { id: 1, name: 'Vaishali More', email: 'vaishali@example.com' },
// //   { id: 2, name: 'Arun More', email: 'arun@example.com' },
// // ];
// // // Get all users
// // router.get('/', (req, res) => {
// //   res.json(users);
// // });
// // // Get a user by ID
// // router.get('/:id', (req, res) => {
// //   const user = users.find(u => u.id === parseInt(req.params.id));
// //   if (user) {
// //     res.json(user);
// //   } else {
// //     res.status(404).send('User not found');
// //   }
// // });
// // // Create a new user
// // router.post('/', (req, res) => {
// //   const newUser = {
// //     id: users.length + 1,
// //     name: req.body.name,
// //     email: req.body.email
// //   };
// //   users.push(newUser);
// //   res.status(201).json(newUser);
// // });
// // // Update an existing user
// // router.put('/:id', (req, res) => {
// //   const user = users.find(u => u.id === parseInt(req.params.id));
// //   if (user) {
// //     user.name = req.body.name;
// //     user.email = req.body.email;
// //     res.json(user);
// //   } else {
// //     res.status(404).send('User not found');
// //   }
// // });
// // // Delete a user
// // router.delete('/:id', (req, res) => {
// //   users = users.filter(u => u.id !== parseInt(req.params.id));
// //   res.status(204).send();
// // });
// // module.exports = router;


// //Refactoring our routes    
// // routes/user.js
// const express = require('express');
// const router = express.Router();

// // Mock data
// let users = [
//   { id: 1, name: 'John Doe', email: 'john@example.com' },
//   { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
// ];

// // Get all users
// router.get('/', (req, res) => {
//   res.json(users);
// });

// // Get a user by ID
// router.get('/:id', (req, res) => {
//   const user = users.find(u => u.id === parseInt(req.params.id));
//   if (user) {
//     res.json(user);
//   } else {
//     res.status(404).send('User not found');
//   }
// });

// // Create a new user
// router.post('/', (req, res) => {
//   const newUser = {
//     id: users.length + 1,
//     name: req.body.name,
//     email: req.body.email
//   };
//   users.push(newUser);
//   res.status(201).json(newUser);
// });
// // Update an existing user
// router.put('/:id', (req, res) => {
//   const user = users.find(u => u.id === parseInt(req.params.id));
//   if (user) {
//     user.name = req.body.name;
//     user.email = req.body.email;
//     res.json(user);
//   } else {
//     res.status(404).send('User not found');
//   }});
// // Delete a user
// router.delete('/:id', (req, res) => {
//   users = users.filter(u => u.id !== parseInt(req.params.id));
//   res.status(204).send();
// });
// module.exports = router;

