// get home page ('index');
const Entry = require("../models/posts");

exports.homepage = async(req,res) => {
    let entries = await Entry.find({})
    await res.render('index', {
        title: 'Food Blog | Tyler Duke Dev',
        entries
    });
};