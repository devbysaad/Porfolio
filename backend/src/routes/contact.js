import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

// GET contact information
router.get('/', async (req, res) => {
    try {
        const contact = await Contact.findOne();
        if (!contact) {
            return res.status(404).json({ message: 'Contact information not found' });
        }
        res.json(contact);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching contact information', error: error.message });
    }
});

export default router;
