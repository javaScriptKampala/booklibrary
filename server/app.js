import express from 'express';
import appRouter from './router';

// initiate express
const app = express();

// index route
app.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "Helo world"
    })
})

app.use("/api", appRouter);

app.listen(5000, () => {
    console.log("listening on PORT 5000")
})
