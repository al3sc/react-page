## Deployment Guide for GitHub Pages with React + Vite

[Youtube tutorial](https://www.youtube.com/watch?v=Bk28snjHr7c)

### 1. Update `vite.config.js`
Add the following configuration to `vite.config.js` file:
```
  base: "/{repo-name}",
```

### 2. Github workflow
In './' add new file `'.github/workflows/deploy.yml'`

#### 2.1. File content
Add deploy configuration (as in the file of this repository)

### 3. Setup Github Pages to run the react application
Go to the GitHub repository

#### 3.1. Settings
* 3.1.1. Actions (left)
* 3.1.2. General
* 3.1.3. Workflow permissions > chose "Read and write permissions"
* 3.1.4. Save

#### 3.2. Actions (top)
* 3.2.1. select the failed workfloy run
* 3.2.2. in the top right: Re-run jobs > Re-run failed jobs

#### 3.3. Settings
* 3.3.1. Pages (left)
* 3.3.2. Branch > none > gh-pages
* 3.3.3. Save

#### 3.4. Actions
* 3.4.1. wait for deployment

#### 3.5. Visit the page link
* [https://{profile_name}.github.io/{repo_name}](https://al3sc.github.io/react-page)

