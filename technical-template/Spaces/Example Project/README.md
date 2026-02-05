---
Created: 2024-01-15
Modified: 2024-01-15
tags:
  - project
  - space
status: active
---

# Example Project

This folder demonstrates the Spaces pattern for project-based organization.

## Purpose

The `Spaces/` directory allows you to organize work by project or context, keeping project-specific resources separate from your personal notes and media collections.

## Folder Structure

```
Spaces/
└── Example Project/
    ├── README.md          # This file - project overview
    ├── docs/              # Documentation
    ├── notes/             # Project-specific notes
    ├── resources/         # Reference materials
    └── img/               # Project images
```

## Using Spaces

### Creating a New Space

1. Create a folder under `Spaces/` with your project name
2. Add a README.md for project overview
3. Create subfolders as needed for organization
4. Use the Adafruit clipper or similar for product research

### Linking to External Files

Use the `getRelFileLink.js` script to link to external cloud storage:

```dataviewjs
const getRelFileLink = require("_scripts/getRelFileLink.js")
dv.span(getRelFileLink(dv.current().file.path, 1, "Project Folder", ""))
```

### Web Clipper Integration

The Adafruit product clipper saves to `Spaces/kobbled/Electronics/Products/` by default. Adjust the path in the clipper configuration for your project.

## Project Resources

- [ ] Add project documentation
- [ ] Link related notes
- [ ] Track tasks and milestones

## Related Notes

*Link to related notes in your vault here*
