<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/79792d22-f7a0-48b9-8a4d-640a5be1d53c

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

**Note on API Keys:** The Gemini API key should NOT be exposed in the frontend code. If you need to use the Gemini API, implement a backend API endpoint that handles the calls securely with credentials stored on the server only.
