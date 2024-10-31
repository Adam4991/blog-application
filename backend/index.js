const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
const port = 8086;

app.use(express.json()); 
app.use(cors()); 

mongoose.connect('mongodb://127.0.0.1:27017/blog-application', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB 🚀'))
.catch(err => console.error('Failed to connect to MongoDB 😞', err));

app.use('/api', blogRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} 🌟`);
});

