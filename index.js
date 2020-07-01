const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(__dirname));

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "", "index.html"));
});

// start express server, default port is 5001
app.listen(process.env.PORT || 5001, () => {
    console.log("server started on port " + (process.env.PORT || "5001"));
});