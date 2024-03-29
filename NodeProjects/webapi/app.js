const { MongoClient, ObjectId } = require('mongodb');
async function connect() {
  if (global.db) return global.db;
  const conn = await MongoClient.connect('mongodb://localhost:27017/');
  if (!conn) return new Error("Can't connect");
  global.db = await conn.db('workshop');
  return global.db;
}

const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// rotas
const router = express.Router();
// router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
router.get('/clientes/:id?', async (req, res, next) => {
  try {
    const db = await connect();
    if (req.params.id)
      res.json(await db.collection('customers').findOne({ _id: new ObjectId(req.params.id) }));
    else res.json(await db.collection('customers').find().toArray());
  } catch (ex) {
    console.log(ex);
    res.status(400).json({ erro: `${ex}` });
  }
});
app.use('/', router);

router.post('/clientes', async (req, res, next) => {
  try {
    const customer = req.body;
    const db = await connect();
    res.json(await db.collection('customers').insertOne(customer));
  } catch (ex) {
    console.log(ex);
    res.status(400).json({ erro: `${ex}` });
  }
});

router.put('/clientes/:id', async (req, res, next) => {
  try {
    const customer = req.body;
    const db = await connect();
    res.json(
      await db
        .collection('customers')
        .updateOne({ _id: new ObjectId(req.params.id) }, { $set: customer })
    );
  } catch (ex) {
    console.log(ex);
    res.status(400).json({ erro: `${ex}` });
  }
});

router.patch('/clientes/:id', async (req, res, next) => {
  try {
    const customer = req.body;
    const db = await connect();
    const id = { _id: new ObjectId(req.params.id) };
    res.json(await db.collection('customers').updateOne(id, { $set: customer }));
  } catch (ex) {
    console.log(ex);
    res.status(400).json({ erro: `${ex}` });
  }
});

router.delete('/clientes/:id', async (req, res, next) => {
  try {
    const db = await connect();
    res.json(await db.collection('customers').deleteOne({ _id: new ObjectId(req.params.id) }));
  } catch (ex) {
    console.log(ex);
    res.status(400).json({ erro: `${ex}` });
  }
});

// inicia servidor
app.listen(port);
console.log('API funcionando!');
