# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration for the contact form.

## Prerequisites

1. A Google account
2. Access to Google Cloud Console
3. A Google Sheet where you want to store form submissions

## Step-by-Step Setup

### 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Enter a project name (e.g., "hashfinity-contact-form")
4. Click "Create"

### 2. Enable Google Sheets API

1. In your Google Cloud Console, go to "APIs & Services" → "Library"
2. Search for "Google Sheets API"
3. Click on it and press "Enable"

### 3. Create a Service Account

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "Service Account"
3. Enter a name (e.g., "contact-form-service")
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

### 4. Generate Service Account Key

1. In the "Credentials" page, click on your service account email
2. Go to the "Keys" tab
3. Click "Add Key" → "Create New Key"
4. Choose "JSON" format and click "Create"
5. Download and save the JSON file securely

### 5. Set Up Your Google Sheet

1. Create a new Google Sheet or use an existing one
2. Set up the first row with headers (optional but recommended):
   ```
   Timestamp | Name | Email | Phone | Company | Service Type | Subject | Message
   ```
3. Copy the Sheet ID from the URL (the long string between `/d/` and `/edit`)

### 6. Share the Sheet with Service Account

1. In your Google Sheet, click "Share"
2. Add the service account email (found in the JSON file as `client_email`)
3. Give it "Editor" permissions
4. Uncheck "Notify people" and click "Share"

### 7. Configure Environment Variables

1. Create a `.env.local` file in your project root
2. Add the following variables:

```env
GOOGLE_SHEET_ID=your_sheet_id_here
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project-id.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key from JSON file\n-----END PRIVATE KEY-----\n"
```

**Important Notes:**
- Replace `your_sheet_id_here` with your actual Google Sheet ID
- Replace the email with the `client_email` from your JSON file
- Replace the private key with the `private_key` from your JSON file
- Make sure to keep the quotes and newline characters (`\n`) in the private key

### 8. Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to `/contact`
3. Fill out and submit the form
4. Check your Google Sheet for the new row

## Troubleshooting

### Common Issues:

1. **"Missing Google Sheets configuration" error**
   - Make sure all environment variables are set correctly
   - Restart your development server after adding env variables

2. **"Error appending to Google Sheet" error**
   - Verify the service account has access to the sheet
   - Check that the sheet ID is correct
   - Ensure the Google Sheets API is enabled

3. **Authentication errors**
   - Verify the private key format (should include `\n` characters)
   - Make sure the service account email is correct

### Testing Without Google Sheets

The contact form will still work even without Google Sheets configuration. Form submissions will be logged to the console, and you can implement alternative storage methods.

## Security Notes

- Never commit `.env.local` to version control
- Keep your service account key file secure
- Regularly rotate service account keys for production use
- Consider using Google Cloud Secret Manager for production deployments

## Alternative Storage Options

If you prefer not to use Google Sheets, you can modify the API route to:
- Send emails using services like SendGrid or Nodemailer
- Store data in a database (MongoDB, PostgreSQL, etc.)
- Integrate with CRM systems
- Use other form handling services
