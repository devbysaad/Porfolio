import express from 'express';
import Skill from '../models/Skill.js';

const router = express.Router();

// GET all skills
router.get('/', async (req, res) => {
    try {
        const skills = await Skill.find().sort({ order: 1 });
        res.json(skills);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching skills', error: error.message });
    }
});

export default router;
