import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import projectRoutes from './routes/projects.js';
import skillRoutes from './routes/skills.js';
import contactRoutes from './routes/contact.js';
import messageRoutes from './routes/message.js';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// CORS configuration - allow all origins
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
}));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use('/images', express.static('public/images'));
app.use('/resume', express.static('public'));

// Health check route (doesn't need database)
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'Portfolio API is running',
        timestamp: new Date().toISOString()
    });
});

// Database-dependent routes - connect to DB before handling request
app.use('/api/projects', async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (error) {
        res.status(500).json({ message: 'Database connection failed', error: error.message });
    }
}, projectRoutes);

app.use('/api/skills', async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (error) {
        res.status(500).json({ message: 'Database connection failed', error: error.message });
    }
}, skillRoutes);

app.use('/api/contact', async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (error) {
        res.status(500).json({ message: 'Database connection failed', error: error.message });
    }
}, contactRoutes);

app.use('/api/message', messageRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).json({
        message: 'Something went wrong!',
        error: process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message
    });
});

// Start server for local development
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
        console.log(`📡 API available at http://localhost:${PORT}/api`);
        console.log(`💾 MongoDB URI: ${process.env.MONGODB_URI ? 'Configured' : 'Not configured'}`);
    });
}

// Export for Vercel serverless
export default app;
