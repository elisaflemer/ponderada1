const express = require("express");
const cors = require("cors");
const Kudo = require("./models/models");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/kudos", async (req, res) => {
    try {
        const kudosCount = await Kudo.countDocuments();
        res.json({ count: kudosCount });
      } catch (error) {
        res.status(500).json({ message: 'Error retrieving kudos count' });
      }
});

app.get("/kudo/new", async (req, res) => {
  try {
    const kudo = new Kudo({});
    await kudo.save();
    res.status(201).json({ message: "Kudo added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding kudo" });
  }
});

module.exports = app;
