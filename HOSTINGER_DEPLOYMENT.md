# Hostinger Deployment Guide for Hashfinity

## 🚀 Deployment Steps for Hostinger

### 1. **Build Your Project**

Run these commands in your project directory:

```bash
# Install dependencies
npm install

# Build the static site
npm run build
```

This will create an `out/` folder with all your static files.

### 2. **What Gets Generated**

After running `npm run build`, you'll see an `out/` folder containing:
```
out/
├── _next/           # Static assets (CSS, JS, images)
├── index.html       # Home page
├── contact/
│   └── index.html   # Contact page
├── sitemap.xml      # SEO sitemap
├── robots.txt       # Search engine instructions
├── manifest.json    # PWA manifest
└── favicon.ico      # Site icon
```

### 3. **Upload to Hostinger**

#### Option A: File Manager (Recommended)
1. **Login to Hostinger hPanel**
2. **Go to File Manager**
3. **Navigate to `public_html/` folder**
4. **Upload ALL contents of the `out/` folder** to `public_html/`
   - Make sure you upload the **contents**, not the `out/` folder itself
   - Your `public_html/` should contain `index.html` directly

#### Option B: FTP/SFTP
1. **Use FTP client** (FileZilla, WinSCP, etc.)
2. **Connect to your Hostinger hosting**
3. **Upload all `out/` folder contents to `public_html/`**

### 4. **Domain Configuration**

#### If using a custom domain:
1. **Point your domain** to Hostinger nameservers
2. **Add domain** in Hostinger hPanel
3. **Enable SSL certificate** (free Let's Encrypt)

#### If using Hostinger subdomain:
- Your site will be available at `yourdomain.hostinger.site`

### 5. **Important File Structure**

Make sure your `public_html/` looks like this:
```
public_html/
├── _next/
├── index.html       ← Homepage
├── contact/
│   └── index.html   ← Contact page
├── sitemap.xml
├── robots.txt
├── Logos/           ← Client logos
│   ├── AbhiJaat Sankalpana.png
│   ├── Caller_Desk.png
│   └── ... (all logo files)
├── logo1.png
├── favicon.ico
└── .nojekyll        ← Prevents Jekyll processing
```

### 6. **Verification Steps**

After upload, check:
- ✅ Homepage loads: `https://yoursite.com`
- ✅ Contact page loads: `https://yoursite.com/contact/`
- ✅ Images display correctly
- ✅ Sitemap accessible: `https://yoursite.com/sitemap.xml`
- ✅ Robots.txt accessible: `https://yoursite.com/robots.txt`

### 7. **SEO Setup After Deployment**

1. **Google Search Console:**
   - Add your domain
   - Submit sitemap: `https://yoursite.com/sitemap.xml`
   - Replace verification code in `layout.tsx` and rebuild

2. **Google Analytics:**
   - Add GA4 tracking code if needed

### 8. **Future Updates**

When you make changes:
1. **Make your edits**
2. **Run `npm run build`**
3. **Upload new `out/` folder contents to `public_html/`**
4. **Clear browser cache to see changes**

### 9. **Troubleshooting**

#### Common Issues:

**🚫 Page not found (404)**
- Check that `index.html` is in the correct folder
- Ensure trailing slashes in URLs: `/contact/` not `/contact`

**🚫 Images not loading**
- Verify all image files are uploaded
- Check file paths and case sensitivity

**🚫 CSS/JS not loading**
- Ensure `_next/` folder is uploaded completely
- Check that static assets folder structure is preserved

**🚫 SEO not working**
- Verify `sitemap.xml` and `robots.txt` are accessible
- Check meta tags in page source

### 10. **Performance Tips**

- ✅ **Enable Gzip compression** in Hostinger settings
- ✅ **Use Cloudflare** for additional CDN (free plan available)
- ✅ **Enable browser caching** for static assets
- ✅ **Monitor Core Web Vitals** with Google PageSpeed Insights

### 11. **Backup Strategy**

- Keep a copy of your `out/` folder
- Version control your source code
- Export Hostinger files regularly

## 📞 Support

If you encounter issues:
- Check Hostinger documentation
- Contact Hostinger support
- Verify your build process locally first

## 🎉 Success!

Your Hashfinity website should now be live with:
- ✅ Full SEO optimization
- ✅ Fast loading static files
- ✅ Mobile-responsive design
- ✅ Professional business presence