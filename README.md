# ⚡ Techify - 4-Page Web App for Git Practice

A lightweight, zero-dependency, 4-page modern web application designed for developers to sharpen and test their Git skills.

---

## 📂 Project Structure

```text
techify-code/
├── index.html         # Page 1: Home & Overview
├── about.html         # Page 2: About Us & Stats
├── services.html      # Page 3: Services & Pricing Tiers
├── contact.html       # Page 4: Interactive Contact Form
├── css/
│   └── styles.css     # Clean modern CSS with dark/light themes
├── js/
│   └── app.js         # Theme toggle, nav highlighter, form logic
├── .gitignore         # Configured git ignore rules
└── README.md          # Documentation and Git Practice Drills
```

---

## 🚀 Running the App Locally

You can open `index.html` directly in your browser, or start a local lightweight web server:

```bash
# Using Python 3 (installed by default on Linux/macOS)
python3 -m http.server 8000
```
Then visit: `http://localhost:8000`

---

## 🎯 Git Practice Drills (Test Your Skills)

Here is a step-by-step checklist to test and practice your Git skills from scratch:

### Level 1: Basics & Initial Setup
- [ ] **Check Status**: Run `git status` to see all untracked files.
- [ ] **Selective Staging**: Stage only `.gitignore` and `README.md` (`git add .gitignore README.md`).
- [ ] **Commit**: Commit the documentation (`git commit -m "docs: add initial readme and gitignore"`).
- [ ] **Stage Remaining**: Stage the rest of the application files (`git add .`).
- [ ] **Initial Release Commit**: Commit the app (`git commit -m "feat: complete initial 4-page application"`).

### Level 2: Branching & Feature Work
- [ ] **Create a Feature Branch**:
  ```bash
  git checkout -b feature/footer-links
  ```
- [ ] **Make a Change**: In `index.html`, add social media links to the footer.
- [ ] **Review Diffs**: Run `git diff` before committing to inspect changes.
- [ ] **Commit Feature**: Commit your changes on the branch.
- [ ] **Switch & Merge**:
  ```bash
  git checkout main
  git merge feature/footer-links
  ```

### Level 3: Simulating & Resolving a Merge Conflict
1. Create branch A: `git checkout -b branch-a`
   - Modify line 20 in `about.html` (e.g., change mission text).
   - Commit: `git commit -am "chore: update mission text on branch A"`
2. Switch back to main: `git checkout main`
3. Create branch B: `git checkout -b branch-b`
   - Modify the exact same line in `about.html` with different text.
   - Commit: `git commit -am "chore: update mission text on branch B"`
4. Merge Branch A into main:
   ```bash
   git checkout main
   git merge branch-a
   ```
5. Merge Branch B into main (triggers a conflict!):
   ```bash
   git merge branch-b
   ```
6. **Resolve Conflict**: Open `about.html`, review `<<<<<<<`, `=======`, and `>>>>>>>` markers, edit to the desired final version, and finish the merge with `git add about.html` and `git commit`.

### Level 4: Stashing & History
- [ ] **Stash**: Make an uncommitted change in `css/styles.css` and run `git stash`. Verify working directory is clean with `git status`.
- [ ] **Pop Stash**: Retrieve your stashed work using `git stash pop`.
- [ ] **Visual Log**: Run `git log --graph --oneline --all` to view your branch history.
- [ ] **Tagging**: Create an annotated release tag:
  ```bash
  git tag -a v1.0.0 -m "Release version 1.0.0"
  ```
