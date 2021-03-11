const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Bienvenido a Node.js' });
});

router.get('/AcercaDe', (req, res) => {
  res.render('AcercaDe', {title: "Acerca De"});
});

router.get('/framework', (req, res) => {
  res.render('framework', { title: 'Framework' });
});

module.exports = router;
