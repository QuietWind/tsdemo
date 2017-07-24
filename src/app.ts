import * as express from "express";
import * as debug from "debug";


const app = express();

app.get("*", function(req, res){
    res.send("hello");
})

app.listen(3000);