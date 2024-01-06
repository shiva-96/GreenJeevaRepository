const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const invMangSys = require("./routes/invMangSysApi");
const userRegLogin = require("./routes/userRegistrationLogin");
const statistics = require("./routes/statistics");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const defaultConfig = require("./config/default.json")


app.use('/ims/inventoryItem',invMangSys);
app.use('/ims/user',userRegLogin);
app.use('/ims/statistics',statistics);

app.listen(defaultConfig.PORT,()=>{
    console.log(`Inventory management system running on server ${defaultConfig.PORT}.`);
})