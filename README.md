# Muhammad Saad - Full Stack Portfolio

A modern, professional full-stack portfolio website showcasing Muhammad Saad's skills and projects as a Full Stack Engineer.

## 🚀 Tech Stack

### Frontend
- **React 18** - UI Library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

## ✨ Features

- 🎨 Modern, responsive design with smooth animations
- 📱 Mobile-first approach
- 🌐 RESTful API architecture
- 🎯 Dynamic content loading from MongoDB
- 🚀 Production-ready deployment setup
- ⚡ Fast performance with Vite
- 🎭 Glassmorphism and gradient effects
- 📊 Professional project showcase
- 💼 Technical skills display
- 🏆 Experience and education sections

## 📁 Project Structure

```
Portfolio/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js                 # Database connection
│   │   ├── models/
│   │   │   ├── Project.js            # Project schema
│   │   │   ├── Skill.js              # Skill schema
│   │   │   └── Contact.js            # Contact schema
│   │   ├── routes/
│   │   │   ├── projects.js           # Projects API routes
│   │   │   ├── skills.js             # Skills API routes
│   │   │   └── contact.js            # Contact API routes
│   │   ├── seed/
│   │   │   └── seedData.js           # Database seeding script
│   │   └── server.js                 # Express server setup
│   ├── .env                          # Environment variables
│   ├── .env.example                  # Environment template
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Header.jsx            # Header with contact info
    │   │   ├── Summary.jsx           # Professional summary
    │   │   ├── Skills.jsx            # Technical skills display
    │   │   ├── Experience.jsx        # Work experience
    │   │   ├── Projects.jsx          # Featured projects
    │   │   ├── Education.jsx         # Education & certifications
    │   │   └── Footer.jsx            # Footer with links
    │   ├── services/
    │   │   └── api.js                # API service layer
    │   ├── App.jsx                   # Main application
    │   ├── App.css                   # Global styles
    │   └── main.jsx                  # React entry point
    ├── .env                          # Frontend environment
    ├── .env.example                  # Environment template
    ├── index.html                    # HTML template
    ├── package.json
    ├── tailwind.config.js            # Tailwind configuration
    ├── postcss.config.js             # PostCSS configuration
    └── vite.config.js                # Vite configuration
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (v6 or higher) running locally
- npm or yarn package manager

### 1. Clone the Repository
```bash
cd G:/Projects/Portfolio
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file (copy from .env.example)
cp .env.example .env

# Seed the database with initial data
npm run seed

# Start the development server
npm run dev
```

The backend server will start on `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env file (copy from .env.example)
cp .env.example .env

# Start the development server
npm run dev
```

The frontend will open automatically at `http://localhost:5173`

## 🔧 Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
```

## 📡 API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project

### Skills
- `GET /api/skills` - Get all technical skills

### Contact
- `GET /api/contact` - Get contact information

### Health Check
- `GET /api/health` - Server health status

## 🚀 Deployment

### Frontend (Vercel)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy frontend:
```bash
cd frontend
vercel
```

3. Set environment variables in Vercel dashboard:
   - `VITE_API_URL` - Your backend API URL

### Backend (Railway/Render/AWS)

#### Railway:
```bash
cd backend
railway init
railway up
```

#### Render:
1. Create a new Web Service
2. Connect your repository
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables

#### AWS EC2:
1. Launch an EC2 instance
2. Install Node.js and MongoDB
3. Clone repository
4. Run `npm install` and `npm start`
5. Configure security groups for ports 5000 and 27017

### Production Build

```bash
# Frontend production build
cd frontend
npm run build

# Backend (no build needed, runs directly)
cd backend
npm start
```

## 📝 Scripts

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run seed` - Seed database with initial data

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎨 Customization

### Update Personal Information
Edit the seed data in `backend/src/seed/seedData.js`:
- Projects
- Skills
- Contact information

Then re-run:
```bash
npm run seed
```

### Styling
- Tailwind configuration: `frontend/tailwind.config.js`
- Global styles: `frontend/src/App.css`
- Component-specific styles: Use Tailwind utility classes

## 🐛 Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running: `mongod` or start MongoDB service
- Check connection string in `.env`
- Verify MongoDB is listening on port 27017

### CORS Errors
- Backend CORS is configured to allow all origins in development
- For production, update CORS settings in `backend/src/server.js`

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:5000 | xargs kill
```

## 📱 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 👨‍💻 Author

**Muhammad Saad**
- Title: Full Stack Engineer
- Phone: 0333-5959-829
- Email: [Contact via portfolio]
- LinkedIn: [Profile link from database]
- GitHub: [Profile link from database]

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🙏 Acknowledgments

- Sheryians Coding School for comprehensive training
- React and Node.js communities
- Modern web development tools and frameworks

---

**Built with ❤️ using React, Node.js, Express, and MongoDB**
# Porfolio
