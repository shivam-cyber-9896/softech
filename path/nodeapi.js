const slist = require("./student"); // Ensure student.js exists
const express = require('express');
const database=require("./database/db")
const app = express()
app.use(express.json())


const port = 3000;

app.get('/apstudent', async(req, res) => {
    const db= await database.main();
    const collection=db.collection('studentlist2');
    const final = await collection.find({}).toArray();
    res.send({
        "data": final,
        "status": 200
    });
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.post ('/sty',async(req,res)=>{   
    try {
       
        const db = await database.main();
        const collection = db.collection('styd');
        let result = await collection.insertOne(req.body);
       console.log(result)
        res.send({
            status: 200,
            message: "record inserted successfully",
            data:result
        })
    }
    catch (err) {
        res.send({
            message: "something went wrong , please try again later" + err,
            status: 500
   })
    }
})

app.delete('/deletedate', async (req, res) => {
    try {
        const db = await database.main();
        const collection = db.collection('styd'); 

        if (!req.query.name) {
            return res.status(400).send({
                status: 400,
                message: "Missing required parameter: name"
            });
        }

        console.log("Attempting to delete record:", req.query.name);
        const result = await collection.deleteOne({ name: req.query.name });

        if (result.deletedCount > 0) {
            return res.status(200).send({
                status: 200,
                message: "Record deleted successfully",
                data: result
            });
        } else {
            return res.status(404).send({
                status: 404,
                message: "Record not found"
            });
        }
    } catch (err) {
        console.error("Deletion error:", err);
        res.status(500).send({
            message: "Something went wrong, please try again later.",
            error: err.message,
            status: 500
        });
    }
});
app.put('/updatedata',async(req,res)=>{
    try{
        const db=await database.main();
        const collection = db.collection('styd'); 
        var newvalues={ $set:req.body};
        const result=await collection.updateOne({name: req.query.name},newvalues);
        console.log(result);
        if(result.modifiedCount>0){
            res.send({
                message:"",
                status:200,
                data:"record updated sucesssfully"
            })
        }
        else{
            res.send({
                message:"please try again"
            })
        }
    }
    catch (err) {
        console.error("Deletion error:", err);
        res.status(500).send({
            message: "Something went wrong, please try again later.",
            error: err.message,
            status: 500
        });
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});