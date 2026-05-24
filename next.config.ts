import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent browsers from guessing content type — stops MIME-type sniffing attacks
  { key: 'X-Content-Type-Options', value: 'nosniff' },

  // Block site from being embedded in iframes — prevents clickjacking
  { key: 'X-Frame-Options', value: 'DENY' },

  // Enable browser's built-in XSS filter
  { key: 'X-XSS-Protection', value: '1; mode=block' },

  // Only send the origin (not the full URL) in referrer headers to external sites
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },

  // Disable access to sensitive browser features we don't use
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },

  // Force HTTPS for 1 year — includes subdomains
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },

  // Content Security Policy — restrict where resources can load from
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      // Next.js needs unsafe-inline for hydration scripts; unsafe-eval for dev HMR
      "script-src 'self' 'unsafe-inline'",
      // Inline styles are used throughout; Google Fonts for typography
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Google Fonts font files
      "font-src 'self' https://fonts.gstatic.com",
      // Images from same origin, data URIs, and HTTPS sources (product images, OG)
      "img-src 'self' data: https:",
      // Video files served from same origin
      "media-src 'self'",
      // API calls only to same origin
      "connect-src 'self'",
      // No iframes allowed
      "frame-src 'none'",
      // No plugins (Flash etc.)
      "object-src 'none'",
      // Prevent base tag hijacking
      "base-uri 'self'",
      // All form submissions go to same origin only
      "form-action 'self'",
    ].join('; '),
  },
]

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig;
