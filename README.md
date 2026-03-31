# ambroz.cz

Personal tech sandbox and engineering notes by Filip Ambroz. Built with Jekyll, hosted on GitHub Pages.

## Stack

- **Static site generator:** [Jekyll](https://jekyllrb.com/) via the `github-pages` gem
- **Hosting:** [GitHub Pages](https://pages.github.com/) (branch: `gh-pages`)
- **Custom domain:** `ambroz.cz` (configured via `CNAME` file)
- **Typography:** [Space Mono](https://fonts.google.com/specimen/Space+Mono) (headings), [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans) (body) via Google Fonts
- **Theme:** Custom dark minimalist with sci-fi accents (`#080810` bg, `#4BB277` green accent, `#43B8D4` cyan secondary)

## Local development

```bash
# Install dependencies
bundle install

# Serve locally with live reload
bundle exec jekyll serve --livereload

# Build without serving
bundle exec jekyll build
```

The site will be available at `http://localhost:4000`.

## Project structure

```
_config.yml          # Site configuration, nav links, integrations
_includes/
  head.html          # <head> — SEO, GTM, fonts, icons
  navigation.html    # Responsive nav with mobile toggle
  footer.html        # Copyright + social icons
  scripts.html       # JS includes
  schema.html        # JSON-LD structured data
  hero-circuit.html  # Animated SVG circuit board (homepage hero)
_layouts/
  default.html       # Base layout (GTM noscript, nav, footer)
  page.html          # Static pages (about, contact, blog)
  post.html          # Blog posts with tags, sharing, pagination
_posts/              # Blog posts (Markdown)
assets/
  css/main.min.css   # All styles (single file, no build step)
  js/main.js         # Vanilla JS (nav toggle, scroll-reveal)
images/              # Author photo, site logo
```

## Integrations and services

These external services are configured and may require manual setup:

| Service | Config location | Requires account |
|---------|----------------|-----------------|
| **Google Tag Manager** | `_config.yml` → `gtm_id` | [tagmanager.google.com](https://tagmanager.google.com) |
| **Google Search Console** | `_config.yml` → `google_verify` | [search.google.com/search-console](https://search.google.com/search-console) |
| **Bing Webmaster Tools** | `_config.yml` → `bing_verify` | [bing.com/webmasters](https://www.bing.com/webmasters) |
| **GitHub Pages** | Repository Settings → Pages | GitHub account |
| **Custom domain DNS** | Domain registrar + `CNAME` file | Domain registrar |

### Google Tag Manager

GTM container ID is stored in `_config.yml` as `gtm_id`. The script and noscript tags in `head.html` and `default.html` conditionally load only when `gtm_id` is set. To disable tracking, remove or comment out the `gtm_id` line.

### Custom domain

The `CNAME` file points to `ambroz.cz`. DNS must have:
- An `A` record pointing to GitHub Pages IPs, or
- A `CNAME` record pointing to `aborym.github.io`

GitHub Pages automatically provisions an SSL certificate.

## Favicon

The site uses an SVG favicon (`favicon.svg`) with the monogram "FA" in green on dark background, matching the site theme. A legacy `favicon.ico` is kept for older browsers. The SVG is preferred by modern browsers and scales to any size.

To generate a new PNG/ICO favicon from the SVG, use any SVG-to-ICO converter or:

```bash
# Using ImageMagick
convert -background none favicon.svg -resize 32x32 favicon.ico
```

## Content

- **Homepage** (`index.html`): Hero with animated circuit SVG, expertise cards, latest posts
- **About** (`about.md`): Professional background and site purpose
- **Blog** (`blog.html`): Post listing with date and tags
- **Contact** (`contact.md`): Email, phone, LinkedIn, business address
- **Tags** (`tags.html`): Tag-based post filtering

### Writing a post

```bash
# Create a new post
touch _posts/$(date +%Y-%m-%d)-your-post-title.md
```

Front matter template:

```yaml
---
layout: post
title: "Your Post Title"
tags: [tag1, tag2]
share: true
---
```

## License

See [LICENSE](LICENSE) for details.
