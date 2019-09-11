const express = require('express');
const mongodb = require('mongodb').MongoClient;

const router = express.Router();
var ObjectID = require('mongodb').ObjectID;
//Get Dogs
router.get('/', async (req, res) => {
    try {
        const dogs = await loadDogCollection();
        res.send(await dogs.find({}).toArray());
    } catch (e) {
        console.log(e);
    }
})

router.post('/', async (req, res) => {
    try {
        const dogs = await loadDogCollection();
        await dogs.insertOne({
            breed: req.body.text
        });
        res.status(201).send('Dog added');
    } catch (e) {
        console.log(e);
    }
})

router.put('/:id', async (req, res) => {
    try {
        const dogs = await loadDogCollection();
        await dogs.updateOne({ _id: new ObjectID(req.params.id) }, {
            $inc: { score: 1 }
        })
        res.status(200).send('Updated');
    } catch (e) {
        console.log(e);
    }

})

router.delete('/:id', async (req, res) => {
    try {
        const dogs = await loadDogCollection();
        await dogs.deleteOne({
            _id: new ObjectID(req.params.id)
        });
        res.status(200).send('Dog deleted');
    } catch (e) {
        console.log(e);
    }
})

async function loadDogCollection() {
    try {
        const client = await mongodb.connect('mongodb+srv://dogAdmin:dogs43v3r@cluster0-o3njd.mongodb.net/test?retryWrites=true&w=majority', {
            useNewUrlParser: true
        });
        return client.db('dogisland').collection('dogs');
    } catch (e) {
        console.log(e);
    }

}

module.exports = router;