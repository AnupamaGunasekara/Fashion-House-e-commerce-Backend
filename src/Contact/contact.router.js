const express = require('express');
const router = express.Router();
const Contact = require('./contact.model'); // Ensure you have the contact model file created as "contact.model.js"

// Create new contact endpoint
router.post('/create', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        // Create a new contact instance
        const contact = new Contact({ name, email, phone, message });

        // Save the contact to the database
        await contact.save();

        res.status(201).send({ message: "Contact details submitted successfully" });
    } catch (error) {
        console.error("Error creating contact details", error);
        res.status(500).send({ message: "Error submitting contact details" });
    }
});

module.exports = router;
