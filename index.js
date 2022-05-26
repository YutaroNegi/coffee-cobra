const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const router = require('./routes/route')
const path = require('path')
require("dotenv").config();

const app = express()
const PORT = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'front/build')))
router.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'front/build/index.html'), function(error){
        if(error) res.send(error)
    })
})

app.use('/', router)

  
app.listen(PORT, ()=>{
    console.log('Coffee Cobra running on port:', PORT);
})

main()
async function main() {
    try {
        await mongoose.connect(process.env.MONGO_CONNECT);
        console.log('      )  (');
        console.log('     (   ) )');
        console.log('      ) ( (');
        console.log('    _______)_');
        console.log(` .-'---------|  `);
        console.log('( C|/)/)/)//)|');
        console.log(` '-./)/)/)//)|`);
        console.log(`   '_________'`);
        console.log(`    '-------'`);
        console.log('Connected to Mongo! Ready to brew some coffee');
    } catch (error) {
        console.log('error connecting to Mongo!');
        console.log(error);
    } 
}