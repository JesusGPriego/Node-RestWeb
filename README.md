## Description

base node.js configured with ts-node

### Scripts


```
  "dev": "tsnd --respawn -r tsconfig-paths/register --clear src/app.ts",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"
```
