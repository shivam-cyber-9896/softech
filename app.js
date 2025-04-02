const indexrouter=require('./Router/index')
const express=require('express')
const app = express()
const cors = require('cors');
app.use(express.json())
app.use(cors());

const port = 3000;

app.use('/',indexrouter)
// #happy birthday to you
//ljghjk
//manu don


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});