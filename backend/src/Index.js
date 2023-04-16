const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/route");
const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  
app.use(express.json());


mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://Soumyaranjan:utnipsom@soumya-db.3rzvirb.mongodb.net/userdetails",
    { useNewUrlParser: true }
)
    .then(() => console.log("mongoDB is connected."))
    .catch((err) => console.log(err));
    

app.use("/", route);

let port = 5000;
app.listen(port, function () {

    console.log(`Express app is running on port ${port}`);
});