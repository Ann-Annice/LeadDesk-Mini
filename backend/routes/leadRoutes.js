const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const auth = require("../middleware/auth");

const prisma = new PrismaClient();

// Create Lead
router.post("/", async (req, res) => {
  try {
    const { name, email, budget, message } = req.body;

    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        budget,
        message,
      },
    });

    res.status(201).json(lead);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Get All Leads
router.get("/", auth, async (req, res) => {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(leads);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Update Status
router.patch("/:id", auth, async (req, res) => {
  try {
    const { status } = req.body;

    const lead = await prisma.lead.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        status,
      },
    });

    res.json(lead);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;