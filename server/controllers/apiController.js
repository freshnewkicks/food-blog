// get home page ('index');
const Entry = require("../models/posts");

exports.requests = async(req,res) => {
    let entries = await Entry.find({})
    await res.json(entries);
    };