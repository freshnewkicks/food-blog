const mongoose = require('mongoose');
const { Schema } = mongoose;
const { titles, categories, descriptions, authors } = require('./posts.js');
require('dotenv').config(); // server config

mongoose.connect('mongodb+srv://admin:fernis12@cluster0.afktq.mongodb.net/food-blog?retryWrites=true&w=majority')
    .then(() => console.log('Connected to MongoDB'))
    .catch((e) => console.log(`Error connecting to MongoDB: ${e}`));

const schema = new Schema({
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        required: true
    },
    readTime: {
        type: String,
        required: true
    }
})
const entry = mongoose.model('entry', schema);

async function seed(){
    for (let i = 0; i <= 5; i++){
        let rand = Math.floor(Math.random() * 10);
        let post = await new entry({
            category: categories[i],
            title: titles[i],
            desc: descriptions[i],
            author: authors[i],
            dateCreated: Date().toLocaleString(),
            readTime: `${rand} min read`
        })
        post.save();
    }
}
