# 🚨 Security Audit Report - Kunsthafen Webapp

**Date:** May 4, 2026  
**Severity Levels:** 🔴 Critical | 🟠 High | 🟡 Medium | 🔵 Low

---

## Executive Summary

This security audit identified **3 critical/high-severity vulnerabilities** and **2 medium-severity concerns** that could expose sensitive data, compromise API credentials, and introduce supply chain risks.

---

## 🔴 CRITICAL ISSUES

### 1. **API Key Exposure in Client Bundle** 
**Severity:** 🔴 CRITICAL  
**Location:** [vite.config.ts](vite.config.ts#L6)  
**Issue:** The `GEMINI_API_KEY` environment variable is being bundled into the client-side JavaScript bundle.

```typescript
// VULNERABLE CODE
define: {
  'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
},
```

**Why This Is Dangerous:**
- ✗ API key is visible in the browser DevTools
- ✗ API key is embedded in the production bundle (visible in `dist/`)
- ✗ Visible in source maps if not disabled
- ✗ Anyone with network access can intercept it
- ✗ Attackers can abuse the API key to make unauthorized requests
- ✗ Could incur unexpected costs

**Impact:**
- Account compromise
- Unauthorized API usage
- Resource abuse and billing fraud
- Credential theft

**Solution:**
Move API calls to a backend server. NEVER expose API keys in frontend code.

---

### 2. **Untrusted External Content Downloads**
**Severity:** 🔴 CRITICAL (Supply Chain Risk)  
**Locations:** 
- [fetch.js](fetch.js)
- [fetch-tabs.ts](fetch-tabs.ts)
- [fetch-grid.js](fetch-grid.js)
- [app/applet/fetch-grid.ts](app/applet/fetch-grid.ts)

**Issue:** The app downloads HTML files from untrusted external sources (`uilora.com`) and writes them to disk without any validation.

```javascript
// VULNERABLE CODE
https.get('https://www.uilora.com/get-started/web/components/...', (res) => {
  let data = '';
  res.on('data', (c) => data += c);
  res.on('end', () => {
    fs.writeFileSync('grid.html', data);  // ❌ Writes untrusted data!
  });
});
```

**Why This Is Dangerous:**
- ✗ No integrity verification (no checksums, no signatures)
- ✗ Vulnerable to Man-in-the-Middle (MITM) attacks
- ✗ Malicious content could be injected during transit
- ✗ No version pinning or content validation
- ✗ Files written to repo could be committed and deployed
- ✗ Potential code execution if HTML contains malicious scripts

**Impact:**
- Supply chain compromise
- Injection of malware or phishing content
- Unauthorized code execution during build
- Repository poisoning

**Solution:**
1. Use verified, integrity-checked dependencies instead
2. Pin specific versions of components
3. Use npm packages instead of downloading raw HTML
4. Add integrity verification (subresource integrity) if downloads are necessary
5. Remove these scripts from build process

---

## 🟠 HIGH SEVERITY ISSUES

### 3. **No Build-Time Content Security Policy**
**Severity:** 🟠 HIGH  
**Issue:** The external HTML downloads (`grid.html`, `tabs.html`) are created but there's no documentation on how they're used or whether they're safe.

**Risk:**
- If these files are included in the bundle and rendered without sanitization, they could introduce XSS vulnerabilities
- The HTML content is untrusted and unverified

**Solution:**
- Remove these files from the project
- Use proper npm packages instead
- If external content must be used, implement strict Content Security Policy

---

## 🟡 MEDIUM SEVERITY ISSUES

### 4. **Vague Documentation on Environment Setup**
**Severity:** 🟡 MEDIUM  
**Location:** [README.md](README.md#L12)  
**Issue:** README mentions setting `GEMINI_API_KEY` in `.env.local`, but the actual solution needs to be server-side.

```markdown
// Current (potentially unsafe) instruction
Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
```

**Why This Matters:**
- Misleads developers to expose keys in frontend
- No clear guidance on proper server-side implementation
- Could encourage insecure practices

**Solution:**
Update documentation to explain:
1. Never expose API keys to the browser
2. Create a backend endpoint for API calls
3. Store API keys securely on the server only

---

### 5. **Potential Data Exposure in Event Sharing**
**Severity:** 🔵 LOW-MEDIUM  
**Location:** [src/components/events/ShareModal.tsx](src/components/events/ShareModal.tsx#L12)

```typescript
const shareUrl = window.location.href; // Current page URL
const shareTitle = `Check out ${event.title} at Kunsthafen!`;
```

**Issue:** While currently low-risk, the share functionality could unintentionally expose user data if sensitive info is added to URLs in the future.

**Prevention:**
- Ensure shared URLs don't contain sensitive parameters
- Validate and sanitize URL parameters
- Consider using absolute URLs with event IDs only

---

## 🔵 LOW SEVERITY ISSUES

### 6. **Minor: Image Trail Component External URLs**
**Severity:** 🔵 LOW  
**Location:** [src/pages/Home.tsx](src/pages/Home.tsx#L8-L15)  
**Issue:** Using external image URLs from Unsplash. While generally safe, these could change or become unavailable.

**Recommendation:**
- Consider hosting critical images locally
- Use proper image optimization and CDN

---

## Summary Table

| Issue | Severity | Type | Fix Complexity |
|-------|----------|------|-----------------|
| API Key in Bundle | 🔴 CRITICAL | Secrets Exposure | High |
| External Downloads | 🔴 CRITICAL | Supply Chain | High |
| No CSP Documentation | 🟠 HIGH | Security Policy | Medium |
| Documentation Gaps | 🟡 MEDIUM | Guidance | Low |
| URL Data Exposure Risk | 🟡 MEDIUM | Data Leakage | Low |
| External Images | 🔵 LOW | Availability | Low |

---

## Recommended Actions (Priority Order)

### Immediate (Do First)
1. **Remove API key from vite config** - Move to backend
2. **Delete fetch-*.js/ts files** - Remove supply chain risk
3. **Delete grid.html and tabs.html** - Remove untrusted content

### Short Term
4. **Implement backend API layer** - For Gemini API calls
5. **Update README** - With secure setup instructions
6. **Add CSP headers** - To protect against XSS

### Medium Term
7. **Use npm packages** for UI components instead of downloading HTML
8. **Implement proper secrets management** - Use environment variables on server only
9. **Add security headers** - X-Content-Type-Options, X-Frame-Options, etc.

---

## Security Best Practices Checklist

- ❌ Never expose API keys in frontend code
- ❌ Don't download untrusted external content without verification
- ❌ Don't write downloaded content directly to filesystem without validation
- ✅ Use proper npm packages for dependencies
- ✅ Keep sensitive data on the backend
- ✅ Use HTTPS for all external requests
- ✅ Implement proper error handling without exposing stack traces
- ✅ Use Content Security Policy headers
- ✅ Validate and sanitize all user inputs
- ✅ Keep dependencies updated

---

## Files Requiring Changes

1. `vite.config.ts` - Remove API key definition
2. `fetch.js` - DELETE
3. `fetch-tabs.ts` - DELETE
4. `fetch-grid.js` - DELETE
5. `app/applet/fetch-grid.ts` - DELETE
6. `grid.html` - DELETE (if generated)
7. `tabs.html` - DELETE (if generated)
8. `README.md` - Update instructions
9. `.env.example` - Document server-side setup only
10. Create backend API routes for Gemini calls

