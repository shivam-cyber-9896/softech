const express = require("express");
const connectDB = require("./database/db2");

const app = express();

// Connect to MongoDB
connectDB();

app.get('/apstudent', async(req, res) => {
    const db= await database.main();
    const collection=db.collection('studentlist2');
    const final = await collection.find({}).toArray();
    res.send({
        "data": final,
        "status": 200
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
