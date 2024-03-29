var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET home page. */
router.get('/', async function (req, res) {
  // res.render('index', { title: 'Listagem de Clientes' });
  try {
    res.render('index', { docs: await db.findAll() });
  } catch (ex) {
    res.redirect(`/erro=${ex}`);
  }
});

/* GET edit page. */
router.get('/edit/:id', async function (req, res, next) {
  const id = req.params.id;
  const doc = await db.findOne(id);
  try {
    res.render('new', { title: 'Edição de Cliente', doc, action: '/edit/' + doc._id });
  } catch (ex) {
    res.redirect(`/erro=${ex}`);
  }
});

/* GET new page. */
router.get('/new', async function (req, res, next) {
  res.render('new', { title: 'Cadastro de Cliente', doc: {}, action: '/new' });
});

/* POST new page. */
router.post('/new', async function (req, res) {
  const nome = req.body.nome;
  const idade = parseInt(req.body.idade);
  const uf = req.body.uf;
  try {
    await db.insert({ nome, idade, uf });
    res.redirect('/?new=true');
  } catch (ex) {
    res.redirect(`/erro=${ex}`);
  }
});

/* POST edit page. */
router.post('/edit/:id', async function (req, res) {
  const id = req.params.id;
  const nome = req.body.nome;
  const idade = parseInt(req.body.idade);
  const uf = req.body.uf;
  try {
    await db.update(id, { nome, idade, uf });
    res.redirect('/?edit=true');
  } catch (ex) {
    res.redirect(`/erro=${ex}`);
  }
});

/* GET delete page. */
router.get('/delete/:id', async function (req, res) {
  const id = req.params.id;
  try {
    await db.deleteOne(id);
    res.redirect('/?delete=true');
  } catch (ex) {
    res.redirect(`/erro=${ex}`);
  }
});

module.exports = router;
