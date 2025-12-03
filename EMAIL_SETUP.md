# 📧 Email Setup Instructions

To enable the contact form to send emails to dev.bysaad@gmail.com, you need to configure Gmail App Password:

## Steps to Get Gmail App Password:

1. **Enable 2-Factor Authentication** on your Google Account:
   - Go to https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Generate App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Name it "Portfolio Contact Form"
   - Click "Generate"
   - Copy the 16-character password

3. **Update Backend .env File**:
   ```
   cd G:/Projects/Portfolio/backend
   ```
   
   Edit `.env` and add:
   ```
   EMAIL_USER=dev.bysaad@gmail.com
   EMAIL_PASS=your_16_character_app_password_here
   ```

4. **Restart Backend Server**:
   ```
   npm run dev
   ```

## Testing the Contact Form:

1. Open http://localhost:5173
2. Scroll to the "SEND MESSAGE" section
3. Fill out the form and submit
4. Check dev.bysaad@gmail.com for the message

## Note:
- Never commit the `.env` file to Git (it's already in .gitignore)
- The app password is different from your regular Gmail password
- For production deployment, use environment variables in your hosting platform
