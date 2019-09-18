const express = require('express');
const mongodb = require('mongodb').MongoClient;

const router = express.Router();
var ObjectID = require('mongodb').ObjectID;
//Get Dogs
router.get('/', async (req, res) => {
    try {
        const client = await openConnection();
        const dogCollection = client.db('dogisland').collection('dogs');
        res.send(await dogCollection.find({}).toArray());
        client.close();
    } catch (e) {
        console.log(e);
    }
})

//Get random dogs
router.get('/candidates', async (req, res) => {
    try {
        const client = await openConnection();
        const dogCollection = client.db('dogisland').collection('dogs');
        res.send(await dogCollection.find({"candidate": true}).toArray());
        client.close();
    } catch (e) {
        console.log(e);
    }
})

router.post('/', async (req, res) => {
    try {
        const client = await openConnection();
        const dogCollection = client.db('dogisland').collection('dogs');
        await dogCollection.insertOne({
            breed: req.body.text,
            score: 0
        });
        res.status(201).send('Dog added');
        client.close();
    } catch (e) {
        console.log(e);
    }
})

router.put('/:id', async (req, res) => {
    try {
        const client = await openConnection();
        const dogCollection = client.db('dogisland').collection('dogs');
        await dogCollection.updateOne({ _id: new ObjectID(req.params.id) }, {
            $inc: { score: 1 }
        })
        res.status(200).send('Updated');
        client.close();
    } catch (e) {
        console.log(e);
    }

})

router.delete('/:id', async (req, res) => {
    try {
        const client = await openConnection();
        const dogCollection = client.db('dogisland').collection('dogs');
        await dogCollection.deleteOne({
            _id: new ObjectID(req.params.id)
        });
        res.status(200).send('Dog deleted');
        client.close();
    } catch (e) {
        console.log(e);
    }
})

async function openConnection() {
    try {
        const client = await mongodb.connect('mongodb+srv://dogAdmin:dogs43v3r@cluster0-o3njd.mongodb.net/test?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        return client;
    } catch (e) {
        console.log(e);
    }

}


module.exports = router;