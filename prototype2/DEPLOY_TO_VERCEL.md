# Vercel Deployment Guide

It is very easy to deploy this static HTML file (`index.html`) to Vercel. You can choose one of the two main methods below.

## Method 1: Deploy using GitHub (Recommended)

This is the easiest and most common way to deploy projects. Every time you push changes to GitHub, Vercel will automatically update your live website.

1. **Push your code to a GitHub repository.** Make sure `index.html` is in the repository.
2. **Go to Vercel.** Sign up or log in at [https://vercel.com/](https://vercel.com/).
3. **Add New Project.** Click the "Add New..." button and select "Project".
4. **Import Git Repository.** Connect your GitHub account (if you haven't already) and find your repository containing the `index.html`. Click "Import".
5. **Configure Project.**
   - **Framework Preset:** Leave it as `Other`.
   - **Root Directory:** If your `index.html` is inside a folder (like `prototype2`), make sure to click "Edit" on the Root Directory and select the `prototype2` folder. If `index.html` is at the very root of your GitHub repository, just leave it as `/`.
6. **Deploy.** Click the "Deploy" button. Vercel will process it in a few seconds and give you a live URL where you can access your app from anywhere!

## Method 2: Deploy manually (Drag & Drop)

If you don't want to use GitHub right now, you can just drag and drop the folder.

1. Create an account and log in to [https://vercel.com/](https://vercel.com/).
2. On your dashboard, look for the option or area to "Drag and drop your project directory here".
3. From your computer, drag the `prototype2` folder (which contains your `index.html` and other local assets like the Excel files if you want to include them, though not necessary) and drop it into the Vercel dashboard.
4. Vercel will upload and immediately deploy it. You will get a live link within seconds!

## Setting up the Online Database (Vercel KV / Redis)

To ensure your data is saved in the cloud and synced across all your devices, you need to set up a free Redis database using Upstash Redis on Vercel.

1.  **Go to your Vercel Dashboard** and click on your deployed project.
2.  Go to the **"Storage"** tab at the top.
3.  Click **"Create Database"** and select **"Redis"** (provided by Upstash).
4.  Accept the terms and click **Create**.
5.  Wait a few moments for the database to be provisioned. Once it's ready, Vercel will automatically add the necessary environment variables (like `KV_REST_API_URL` and `KV_REST_API_TOKEN`) to your project.
6.  **Important:** You may need to trigger a new deployment for the environment variables to take effect. Go to the "Deployments" tab and click "Redeploy" on your latest commit.

Now, your application will save data directly to the cloud instead of your device's local storage.

## Things to Note:

- **Online Database:** Your app now uses Vercel's KV (Redis) database. This means if you enter data on your PC, you will see it immediately when you open the same URL on your phone!
- **Import/Export Excel:** Your backup/restore functionality using Excel still works perfectly! Use this to download a physical copy of your data for your records.
