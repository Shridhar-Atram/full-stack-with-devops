const express = require("express");

const app = express();
const port = 80;

function lwabout(request,response) {
    response.send("Hey Welcome,it's about");
    console.log("somebody touched this page");
}

function lwroot(request,response) {
    response.send("Hey Welcome,it's root");
    console.log("somebody touched this page");
}

function lwhome(request,response) {
    response.sendfile(__dirname + "/home.html");
    console.log("somebody touched this page");
}

function startserver()
{
    console.log("Js App server started succsfully");

}
app.listen(port,startserver);

app.get("/",lwroot);
app.get("/about",lwabout);
app.get("/home",lwhome)
