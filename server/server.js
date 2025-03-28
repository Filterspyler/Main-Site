import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";


dotenv.config();
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(express.json());
/*
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
*/

app.get('/products', (req, res) => {
    res.json([
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' }
    ]);
});

// Serve static files for the frontend
const frontendPath = path.join(__dirname, '../client/public');
app.use(express.static(frontendPath));

// Catch-all route for serving the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
});

app.get("/", (req, res) => res.send("Server is running..."));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));