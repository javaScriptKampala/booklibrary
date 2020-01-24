import express from 'express';
import appRouter from './router';
import dotenv from 'dotenv'

dotenv.config()

// initiate express
const app = express();

// index route
app.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "Helo world"
    })
})

const PORT = process.env.PORT;

app.use("/api", appRouter);

app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
})
