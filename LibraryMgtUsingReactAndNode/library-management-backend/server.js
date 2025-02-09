const express = require('express');
const cors = require('cors');
const bookRoutes = require("./routes/bookRoutes");
const app = express();
const fs = require('fs');
const PORT = 5000;

app.use(express.json());
app.use(cors());

//Routes
app.use("/api/books",bookRoutes);

app.listen(PORT,(error) => {
  if(!error) {
    console.log(`Server running on port ${PORT}`);
  }else {
    console.log(error);
  }
});