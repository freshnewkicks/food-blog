const express = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;

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

async function seed(multiplier){
    let rand = Math.floor(Math.random() * multiplier);
    for (let i = 0; i < rand; i++){
        let post = await new entry({
            category: 'News',
            title: 'Some Title',
            desc: 'Some description about some title',
            author: 'Alfred Von Ludwig',
            dateCreated: Date().toLocaleString(),
            readTime: '6 min read'
        })
        post.save();
    }
}