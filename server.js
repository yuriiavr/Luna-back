const mongoose = require('mongoose');

const app = require('./app');

const { DB_HOST, PORT = 3001 } = process.env;

mongoose.set('strictQuery', true)

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Server is running and healthy.' });
});

mongoose.connect(DB_HOST)
  .then(() => app.listen(PORT, () => {
    console.log(`Database connection successful at port ${PORT}`)
  }))
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  })
