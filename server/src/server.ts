import express from "express";

const app = express()



app.get("/ads", (req, res) => {
    res.json([
        {user: "1"},
        {user: "2"}
    ])
})

app.listen(3000)
