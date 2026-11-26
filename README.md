# Mohit Bathla — Portfolio

Built with Next.js 15 and Tailwind CSS v4.

## Edit content
Everything on the page lives in `data/profile.js`. To change the resume, replace `public/Mohit_Bathla_Resume.pdf` and keep the same file name.

## Run locally
```bash
npm install
npm run dev        # open http://localhost:3000
```

## Deploy to Vercel
1. Install Node.js 20 or later and Git.
2. Unzip this folder, then from inside it run:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   ```
3. On GitHub, create an empty repo called `portfolio` (no README), then run:
   ```bash
   git branch -M main
   git remote add origin https://github.com/bathlamohit/portfolio.git
   git push -u origin main
   ```
4. Go to vercel.com and sign up with GitHub. Click **Add New → Project**, import `portfolio`, leave the defaults (Next.js is detected automatically) and click **Deploy**.
5. In about a minute the site is live at `https://portfolio-xxxx.vercel.app`.
   - To rename it, go to **Settings → Domains** and edit the address, for example to `mohitbathla.vercel.app`.
   - To use a custom domain, go to **Settings → Domains → Add** and follow the DNS instructions.
6. To update the site, edit, commit and `git push`. Vercel redeploys automatically.
