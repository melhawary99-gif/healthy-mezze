import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const csp = `
default-src 'self';
base-uri 'self';
object-src 'none';
frame-ancestors 'self';
form-action 'self';

script-src
  'self'
  'unsafe-inline'
  'unsafe-eval'
  https://www.googletagmanager.com
  https://www.google-analytics.com
  https://pagead2.googlesyndication.com
  https://googleads.g.doubleclick.net
  https://fundingchoicesmessages.google.com
  https://www.clarity.ms
  https://scripts.clarity.ms
  https://challenges.cloudflare.com;

style-src
  'self'
  'unsafe-inline';

img-src
  'self'
  data:
  blob:
  https://www.google-analytics.com
  https://pagead2.googlesyndication.com
  https://*.googlesyndication.com
  https://*.g.doubleclick.net
  https://www.clarity.ms
  https:;

font-src
  'self'
  data:;

connect-src
  'self'
  https://www.google-analytics.com
  https://region1.google-analytics.com
  https://www.clarity.ms
  https://c.clarity.ms
  https://z.clarity.ms
  https://t.clarity.ms
  https://n.clarity.ms
  https://pagead2.googlesyndication.com
  https://challenges.cloudflare.com;

frame-src
  'self'
  https://googleads.g.doubleclick.net
  https://*.googlesyndication.com
  https://fundingchoicesmessages.google.com
  https://challenges.cloudflare.com;

worker-src
  'self'
  blob:;

manifest-src 'self';

upgrade-insecure-requests;
`
  .replace(/\n/g, "")
  .replace(/\s{2,}/g, " ")
  .trim();

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 540],
    qualities: [65, 70, 75, 85, 90],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },

          // REPORT ONLY (does NOT block anything)
          {
            key: "Content-Security-Policy",
            value: csp,
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
