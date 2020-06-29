import express from "express";
import ejs from "ejs";

// express
const app = express();

// set view dir
app.set("views", __dirname + "/views");

// view engine for HTML
app.set("view engine", "ejs");
app.engine("html", ejs.renderFile);

// static path
app.use(express.static(__dirname + "/public"));

// router
app.get("/", (req, res) => {
	res.render("index.html");
});

app.listen(4000, () => {
	console.log("LISTEN ON PORT: 4000");
});
