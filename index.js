const express = require('express');
const path = require('path');
const app = express();
const userRouter = require('./routers/userRoutes');
const blogRouter = require('./routers/blogRoutes');
const staticRouter = require('./routers/staticRouter');
const bodyParser = require('body-parser');


// Configuratiions
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

// Middlewares
app.use(express.static(path.resolve('./public')));
app.use(bodyParser.json());




// Register The Routes

app.use('/user', userRouter);
app.use('/blog', blogRouter);
app.use('/', staticRouter);


// Listner
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});