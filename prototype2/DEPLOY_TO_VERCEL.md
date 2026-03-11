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

## Things to Note:

- **Local Storage limitation:** Since your app relies heavily on `localStorage`, your "inventory database" will only be saved locally on the browser/device where you opened the website. If you enter data on your PC, you won't see it when you open the same URL on your phone.
- **Import/Export Excel:** Your backup/restore functionality using Excel will work perfectly! Use this to transfer data between different devices if you need to use the website simultaneously.
