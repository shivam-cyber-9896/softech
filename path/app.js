const indexrouter=require('./Router/index')
const express=require('express')
const app = express()
app.use(express.json())


const port = 3000;

app.use('/',indexrouter)
// #happy

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});