# 🚀 QUICK START - Deploy Your Portfolio NOW

Your code is ready! Just follow these 3 steps:

## Step 1: Update Frontend Environment Variable

**Edit this file**: `G:\Projects\Portfolio\frontend\.env`

**Change it to**:
```
VITE_API_URL=https://porfolio-backend-server-deployment.vercel.app/api
```

## Step 2: Set Vercel Environment Variables

Go to your **backend** Vercel project → Settings → Environment Variables

Add these:
```
MONGODB_URI = your_mongodb_connection_string_here
EMAIL_USER = dev.bysaad@gmail.com  
EMAIL_PASS = your_gmail_app_password_here
NODE_ENV = production
```

## Step 3: Deploy Both Projects

### Deploy Backend:
```bash
cd G:\Projects\Portfolio\backend
git add .
git commit -m "fix: serverless configuration"
git push
```

### Deploy Frontend:
```bash
cd G:\Projects\Portfolio\frontend
git add .
git commit -m "fix: backend URLs"
git push
```

## ✅ Verify It Works

1. Open: `https://porfolio-backend-server-deployment.vercel.app/api/health`
   - Should show: `{"status":"OK"}`

2. Open your frontend URL
   - Everything should load!

---

**That's it! Your portfolio is ready for your client! 🎉**

For detailed troubleshooting, see `deployment_guide.md`
