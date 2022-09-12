import express from "express";
const app = express();
app.get("/ads", (req, res) => {
    res.json({
        user: "alo"
    });
});
app.listen(3000);
