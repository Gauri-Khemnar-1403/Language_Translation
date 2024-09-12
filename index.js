const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3001;

const corsOption = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
};

app.use(cors(corsOption));

app.get("/translation/:lang", (req, res) => {
    const lang = req.params.lang;
    const filePath = path.join(__dirname, "translation", `${lang.split('-')[0]}.json`);
    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            return res.status(404).json({
                error: "Translation file not found.",
            });
        }
        try {
            const jsonData = JSON.parse(data);
            res.set("Cache-Control", "public, max-age=3600");
            res.json(jsonData);
        } catch (parseError) {
            res.status(500).json({ error: "Error parsing translation file." });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
