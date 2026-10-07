# Ace Windows & Hardware — HGM concept v1

Responsive one-page prospect website, prepared for `acewindows.hgm.services` on Tanya's VPS. Root `hgm.services` remains on Hostinger. No build dependencies; Nginx serves static assets through Coolify.

## Current capabilities

- Product sections, original Ace logo, three AI-recreated reference visuals.
- No supplier prices, installation offer, site-measurement offer, warranties or certification claims.
- Clearly labeled concept and image disclosures; noindex metadata and headers.
- Product buttons preselect the inquiry category.
- Test-only form produces a WhatsApp message preview, acknowledgment and simulated business notification.
- No forms or tracking data leave the browser. No customer inquiry is stored. No email, WhatsApp message or automation is sent.
- Social profile links are live links. Telephone and WhatsApp contact buttons are deliberately not enabled before Ace's agreement.

## Preview locally

From the repository root: `python3 -m http.server 8080 --directory public`
Open `http://localhost:8080`. The `/health` endpoint only exists in Nginx deployment.

## Deploy through Coolify

1. Create a private GitHub repository named `ace-windows-demo`, initialized with a README, and grant the connected GitHub application access to it. Upload this project's contents at the repository root, replacing the initial README.
2. Verify the IP of the actual destination resource server in Coolify's server configuration or the VPS provider panel. The supplied Coolify dashboard URL uses `86.48.21.39`; this alone does not prove the application server has the same IP.
3. In Hostinger's DNS zone for hgm.services, add an A record named `acewindows` pointing to the verified server IPv4 address. Use default TTL. Check for conflicting A/AAAA/CNAME records for this specific subdomain. Leave root, www and mail records unchanged.
4. In Coolify, select the provided project/environment, add a Git-backed application from the new repository, branch `main`, build pack `Dockerfile`, Dockerfile location `/Dockerfile`, base directory `/` and exposed/container port `80`.
5. Set domain to `https://acewindows.hgm.services`. Do not publish container port 80 directly as a new host-port mapping; Coolify's proxy routes to it. Ensure resource server inbound ports 80 and 443 and its proxy are available.
6. Save and deploy. Verify deployment logs, HTTPS, `/health`, all images, mobile layout and demo form. Confirm DNS points to this resource server before diagnosing certificate issues.
7. No SMTP, API key, volume or database is needed for this static concept.

## Before enabling real inquiries

Obtain Ace's acceptance of contact routing and the site's claims/product visuals. Confirm actual products, brand spelling, opening hours and location. Generated images are illustrations, not exact inventory or product specification evidence. Door groove/handle details may differ from supplied products and require review.

Then enable WhatsApp click-to-chat to `12424346814` with URL-encoded message text and an explicit label: “Open WhatsApp — you still press Send.” Do not claim a click proves a sent message. Add a backend for lead storage, notifications and approved follow-up separately.

HGM demo recipient: supplied privately in chat. Do not hard-code private notification addresses into browser code. Email sending will require server-side mail configuration; it is not connected in this version.

## Measurement

This concept has no analytics integration. Real conversion measurement must be installed and tested before claiming results. Track valid inquiries and confirmed quotes/sales; exclude test entries. An on-screen demo is technical illustration, not conversion proof.

## Assets and provenance

- `public/assets/ace-logo.png`: original supplied logo, unchanged.
- `windows.webp`, `doors.webp`, `quartz.webp`: generated with built-in imagegen using supplier screenshots as references, permission supplied by Tanya.
- Window prompt: recreate the two-panel sliding window alone; preserve frame proportions; clean studio setting; no price, brand or certification text.
- Door prompt: recreate the reddish wood-tone door alone with angular grooves and black lever; clean studio setting; no supplier UI or claims.
- Quartz prompt: recreate white quartz with gray/taupe veining in a clean kitchen detail; stainless sink and black tap; no logos, prices or supplier UI.

## Official deployment references

- https://coolify.io/docs/applications/builds/dockerfile
- https://coolify.io/docs/core/networking/domains
- https://www.hostinger.com/support/8907694-how-to-create-a-subdomain-without-a-hosting-plan-at-hostinger/

## Status

Prepared locally; not yet pushed to GitHub or deployed to the VPS. Repository creation is a user step because the connected GitHub connector does not expose repository creation.
