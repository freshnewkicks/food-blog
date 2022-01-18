// brain
const express = require('express'), // express
      app = express(), // express instance
      path = require('path'), // path
      bodyParser = require('body-parser'), // req.body parser
      expressLayouts = require('express-ejs-layouts'), // ejs layouts
      methodOverride = require('method-override'), // http verb override
      port = process.env.PORT || 3000 // server port
      mongoose = require('mongoose');

require('dotenv').config(); // server config
mongoose.connect(process.env.DATABASE)
    .then(() => console.log('Connected to MongoDB'))
    .catch((e) => console.log(`Error connecting to MongoDB: ${e}`));

app.set('views', 'server/views');
app.set('view engine', 'ejs');
app.set('layout', 'layouts/main'); // main layout folder

app.use(methodOverride('_method')); // http verb override

// controllers object:
const controllers = {
    homepageController: require('./server/controllers/homepageController.js')
}
// routes object:
const routes = {
    index: require('./server/routes/indexRouter.js')
}

const api = {
    api: require('./server/routes/apiRouter.js')
}

app.use(bodyParser.urlencoded({ extended: true })); // body parser
app.use(express.static(path.join(__dirname, 'public'))); // static assets folder
app.use(expressLayouts); // express ejs layouts folder

// routes:
app.use('/', routes.index);
app.use('/api', api.api);

app.listen(port, () => console.log(`Listening on ${port}`)); // listen

module.exports = app;