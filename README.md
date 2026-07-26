# EVAS ::. Research Cooperative

## Project Structure

```text
/
├── src
│   ├── assets
│   │   ├── collections
│   │   │   ├── research/           # [authors].[year].[slug].md
│   │   │   └── humans/             # [firstname]_[lastname].md
│   │   │       └── pictures/       # portraits referenced by humans/*.md
│   │   ├── pages
│   │   │   └── index.json          # landing page content (intro, research, humans)
│   │   └── site/                   # configuration, images, styles
│   │
│   ├── atoms/                      # small reusable UI building blocks
│   │   └── [blocks]                # card, container, divider elements
│   │   └── [typography]            # headline, leading elements
│   │
│   ├── components/                 # publication and human renderer
│   ├── layouts/                    # core layout component
│   │   └── partials/               # navbar, footer, hero (index)
│   ├── pages/                      # index
│   │
│   ├── content.config.ts           # schemas for the data collections
│   └── styles.global.css
└── package.json
```

## Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro check`              |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Contributing

### Add a publication

Create a file at `src/assets/collections/research/[authors].[year].[slug].md`:

```markdown
---
authors: "First1 Last1, First2 Last2, [...]"
year: 2026
title: "Your Paper Title"
venue: "Name of the Conference or Journal"
url: "https://permant.url/to-your-paper?doi"
---

A short abstract or summary of the paper.
```

### Add yourself as a member

Create a new file at `src/assets/collections/humans/[firstname]_[lastname].md`:

```markdown
---
name: "First Lastname"
picture: "pictures/your_picture.webp"
website: "https://your-personal-site.example.com"
research: "https://{scholar.google, orcid, dldp}.com"
---

A short bio describing your role and research interests within EVAS.
```

Place the referenced image under `src/assets/collections/humans/pictures/`.

## Astro Information

Check out the [Astro documentation](https://docs.astro.build).
