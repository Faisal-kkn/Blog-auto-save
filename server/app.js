
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });


import http from 'http';
import { Server } from 'socket.io'

const app = express();

const httpServer = http.createServer(app)
const io = new Server(httpServer, {
    path: "/api/socket.io",
    cors: {
        origin: ['http://localhost:3000'],
        methods: ["GET", "POST"]
    }
})

// 

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json());
app.use(cors());

const CONNECTION_URL = process.env.DATABASE;
const PORT = process.env.PORT || 5000;


io.on("connection", socket => {
    console.log('connected');

    // socket.on("disconnect", () => {
    // })
});



mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    httpServer.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    console.log('Database is connected');
}).catch((error) => {
    console.error('Error connecting to the database:', error);
});




