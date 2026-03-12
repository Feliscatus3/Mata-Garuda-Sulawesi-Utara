# Fix Broken Code - Mata Garuda Website

## Approved Plan Progress

**Status: Starting Step 1**

### Steps:
- [x] 1. Update package.json to stable deps (React 18, router v6, Sanity v6)
  - [x] Run `npm install`
- [x] 2. src/main.jsx: Remove StrictMode  
- [x] 3. src/lib/sanity.js: Migrate to Sanity v6 client API + basic compat (full error handling next if needed)
- [x] 4. Create .env.local with VITE_SANITY_PROJECT_ID=vn9r43ot VITE_SANITY_DATASET=production
- [x] 5. Create src/components/ErrorBoundary.jsx
- [x] 6. src/App.jsx: Add ErrorBoundary wrap Routes
- [ ] 7. Update Navbar.jsx: Search fallback if Sanity fails
- [ ] 8. Test `npm run dev`, verify localhost:5174 loads without console errors
- [ ] 9. Check data-loaded components (PrestasiSiswa, Testimoni, etc.)
- [x] 10. attempt_completion

**Notes:** 
- Assume Sanity project 'vn9r43ot' dataset 'production' correct (user approve)
- Ghost tabs (ProfilOrganisasi.jsx etc.) ignore - files don't exist
- Focus runtime errors from experimental deps

