---
dropbox: /Users/username/Dropbox
userFolder: /Users/username
onedrive: C:/Users/username/OneDrive
---

# Device Configuration

This file stores device-specific paths for cross-platform sync. Update the frontmatter properties with your actual paths for each device.

## Path Reference

### Windows Desktop

```
D:/Dropbox
C:/Users/YourName/OneDrive
C:/Users/YourName
```

### Windows Laptop

```
C:/Users/YourName/Dropbox
C:/Users/YourName/OneDrive
C:/Users/YourName
```

### macOS

```
/Users/YourName/Library/Mobile Documents/com~apple~CloudDocs/
/Users/YourName/Dropbox
/Users/YourName
```

### Linux (Ubuntu)

```
/home/YourName/Dropbox
/home/YourName
```

### Android

```
/storage/emulated/0/Android/data/com.dropbox.android
```

## Usage

Scripts like `getCurrFolder.js` and `getRelFileLink.js` can reference these paths to generate correct file:// links across devices.

### Example: Linking to Cloud Storage

```dataviewjs
const config = dv.page("config")
const dropboxPath = config.dropbox
dv.span(`[Open Dropbox](file://${dropboxPath})`)
```

### Example: Device-Specific Path

```javascript
// In a Templater script
const configFile = app.vault.getAbstractFileByPath("config.md")
const configContent = await app.vault.read(configFile)
// Parse frontmatter to get paths
```

## Setup Instructions

1. Copy this file to your vault root
2. Update the frontmatter with paths for your primary device
3. After syncing, update paths on each device as needed
4. Use in scripts that need device-specific paths

## Notes

- Paths should use forward slashes even on Windows
- Don't include trailing slashes
- Test links before relying on them
