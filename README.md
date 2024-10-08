# 🚀 Algorithm practice Chrome extension

![License: Commercial](https://img.shields.io/badge/license-Commercial-blue)
![Open Issues](https://img.shields.io/github/issues/Jagoda11/algorithm-practice-extension?style=flat-square&color=orange)
![Last Commit](https://img.shields.io/github/last-commit/Jagoda11/algorithm-practice-extension/main?style=flat-square&color=blue)
![Build Status](https://github.com/Jagoda11/algorithm-practice-extension/actions/workflows/.github/workflows/🚀ci.yml/badge.svg?branch=main)
![Build Status](https://github.com/Jagoda11/algorithm-practice-extension/actions/workflows/⬆️npm-update.yml/badge.svg?branch=main)

## What Does This Chrome Extension Do?

The **Algorithm Practice Chrome Extension** is designed to help users practice and improve their algorithm skills directly within their browser. This extension includes a variety of algorithm problems that are commonly asked in technical interviews, particularly for positions at major tech companies like Google, Microsoft, Amazon, and more.

### Features

- **Algorithm Problems**: Presents a range of algorithm problems for users to solve.
- **Solution Reveal**: Allows users to view the solution to each problem with a simple toggle button.

#### How to Use

1. **Browse Problems**: Open the extension to browse through a list of algorithm problems.
2. **Solve and Learn**: Attempt to solve the problems on your own.
3. **Reveal Solutions**: Click the "Show Solution" button to view the solution, which then toggles to "Hide Solution" for better control over your learning process.

This extension is perfect for anyone looking to sharpen their algorithm skills and prepare for coding interviews in a convenient and engaging way.

### Installation

You can install the extension from the [Chrome Web Store](https://chromewebstore.google.com/detail/algorithm-practice-extens/hgbpcikpmnmcngopkojepmilakhajgjd).

made with :

- React ⚛️
- Tailwind 🎨
- Babel 🐵
- TypeScript 🔵
- ESLint 🛠️
- Prettier 🖋️
- Jest 🃏
- Husky 🐶

## 🚀 Initial Setup

First, install the project dependencies:

```bash
npm install
```

## ⚠️ Note on Commits

If you're having trouble making a commit, it might be due to the `precommit` hook, which runs the `lint` and `test` scripts before each commit. If these scripts find any errors, the commit will be blocked. Check the output for any lint or test errors and fix them before trying to commit again.

## 📜 Scripts

To run these scripts, use `npm run <script-name>`:

- `start`: 🚀 Builds the TypeScript code and starts the application.
- `build`: 🔨 Compiles the TypeScript code using the TypeScript compiler (`tsc`).
- `test`: 🧪 Runs tests using Jest and generates a coverage report.
- `format`: 🖋️ Formats the code using Prettier.
- `lint`: 🧹 Lints all JavaScript and TypeScript files in the project using ESLint.
- `precommit`: 🔒 Runs the `lint` and `test` scripts before each commit to ensure code quality. This is managed by Husky 🐶.
- `pretest`: 🔍 Lints the code before running tests.
- `watch`: 👀 Runs tests in watch mode using Jest.
- `debug`: 🐞 Starts the application in debug mode using `nodemon`.
- `clean`: 🧽 Removes the `node_modules` directory and `package-lock.json` file.
- `prepare`: 🐾 Sets up Husky for managing git hooks.
- `create-zip`: 📦 Creates a ZIP file of the extension.
- `package-extension`: 📦 Packages the extension by removing .DS_Store files and creating a ZIP file.

## 🛠️ Testing Locally in Your Browser

To test the extension locally in your browser, follow these steps:

1. **Update `manifest.json` and `package.json`**: Ensure the version numbers are incremented.
2. **Package the extension**:

   ```bash
   npm run package-extension
   ```

3. **Load the extension** locally in Chrome:
   Open Chrome and go to `chrome://extensions/`
   Enable "Developer mode" by toggling the switch in the upper-right corner.

- Click the "Load unpacked" button.

- Select the directory containing your extension files (not just the dist directory, but the entire project directory).

## 📦 Uploading to the Chrome Web Store

To upload your extension to the Chrome Web Store, follow these steps:

### Update Version in `manifest.json` and `package.json`

Increment the version number in both files to reflect the new version.

```json
{
  "version": "2.0.0" // Example version number update
}
```

1. Go to the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard) and log in with your Google account.
2. Find your existing extension in the dashboard and click on it to edit.
3. Click the "Package" button in the sidebar menu.
4. Click "Upload New Package".
5. Select the ZIP file created in step 2 and upload it.
6. Submit the changes and wait for the review process to complete.

By following these steps, you can successfully update and upload your web extension to the Chrome Web Store.

## 🤖 GitHub Actions Workflows

This template includes several GitHub Actions workflows that automate various tasks:

- `ci.yml`: Runs your project's continuous integration (CI) tasks.
- `close-merged-pull-requests.yml`: Automatically closes pull requests that have been merged.
- `close-stale-issues-and-prs.yml`: Closes stale issues and pull requests.
- `label-new-pull-requests.yml`: Automatically adds labels to new pull requests.
- `thank-contributors-on-issue-close.yml`: Thanks contributors when an issue they commented on is closed.
- `welcome-new-pull-requests.yml`: Posts a welcome message on new pull requests.
- `welcome.yml`: Posts a welcome message on new issues.
- `⬆️npm-update.yml`: checks for new versions of the dependencies and updates package.json and package-lock.json, scans with
  [Debricked](https://debricked.com/) for vulnerabilities before it pushes the changes.

These workflows use the `secrets.GITHUB_TOKEN` secret, which GitHub automatically creates for every repository. You can create a personal access token and add it as a secret in your repository. For more information, see [Creating and storing encrypted secrets](https://docs.github.com/en/actions/reference/encrypted-secrets).

## 🌐 GitHub Codespaces Support

This project includes a `.devcontainer.json` file which allows you to work on this project in a Docker container using [GitHub Codespaces](https://github.com/features/codespaces). This helps to maintain a consistent development environment, making it easier for you to collaborate with others without having to worry about individual setup.

GitHub Codespaces configures your development environment based on your project's needs using this file. When you create a new codespace for this project, the Codespaces environment is automatically configured as per the settings defined in `.devcontainer.json`.

To use GitHub Codespaces:

1. Navigate to the main page of the repository.
2. Click the Code button and then click "Open with Codespaces".
3. Click "+ New codespace".

Your development environment is now set up and running in a Docker container in the cloud. All commands you run in the Codespaces terminal will be executed inside the container. Any changes you make to the project will be reflected in the container and vice versa.

## 💖 Support

If you appreciate my work and would like to support me, consider sponsoring me on [GitHub Sponsors](https://github.com/sponsors/Jagoda11). Your support is greatly appreciated and helps me continue my contributions to open source and volunteer work.

## 🤝 Contributing

Contributions are welcome! Please read the [Contributing Guide](CONTRIBUTING.md).
for details on our code of conduct and the process for submitting pull requests.

## 📜 Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

© 2024 Jagoda11

## Credits

- Icons made by [Flat Icons](https://www.flaticon.com/free-icons/algorithm) from [Flaticon](https://www.flaticon.com)
