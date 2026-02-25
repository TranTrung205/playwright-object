# 🤖 AI Playwright Agent — Vision-Driven Automation (V8 → V10 Roadmap)

An experimental AI-powered test automation agent built on top of Playwright.

The goal of this project is to evolve from:

```
Manual QA → Automation QA → AI Automation Engineer
```

This repository currently implements **V8 Vision Agent** and is preparing for **V10 Framework-Aware Agent (auto Page Object Model generation)**.

---

# 🚀 Current Features (V8)

✅ YAML-driven test scenarios
✅ Vision-based UI analysis
✅ AI step planning
✅ Automatic Playwright test generation
✅ Automatic test execution
✅ Login detection heuristic (bypass LLM for stability)
✅ Scenario auto-scan CLI
✅ Memory + Brain architecture

---

# 🧠 Architecture Overview

```
ai/
 ├── brain/
 │    ├── analyzer/
 │    ├── planner/
 │    ├── evaluator/
 │    └── generator/
 │
 ├── memory/
 │    ├── knowledge/
 │    └── session/
 │
scripts/
    run-v8.ts
```

Agent pipeline:

```
Scenario (YAML)
        ↓
UI Analyzer (DOM + Vision)
        ↓
Planner (LLM / heuristic)
        ↓
Test Generator
        ↓
Playwright Execution
```

---

# 📂 Project Structure

```
.
├── ai/
├── scripts/
├── scenarios/
│     └── sauce-demo/
├── tests/
│     ├── ui/
│     └── api/
├── playwright.config.ts
└── package.json
```

---

# 🧪 Example Scenario

```yaml
name: Buy Product
description: Login and add product to cart then verify cart page

steps:

  - id: open_site
    action: goto
    target: https://www.saucedemo.com

  - id: login_username
    action: fill
    target: "#user-name"
    value: standard_user
```

---

# ▶️ How To Run V8 Agent

### 1. Install dependencies

```bash
npm install
```

### 2. Run agent

```bash
npx tsx scripts/run-v8.ts
```

Agent will:

1. Scan scenarios folder
2. Ask you to select scenario
3. Generate Playwright test
4. Execute automatically

---

# 🧾 Run Playwright Directly

```bash
npx playwright test
```

Headed mode:

```bash
npx playwright test --headed
```

---

# ⚡ Example Output

```
🚀 V8 AGENT STARTED
📝 Instruction: Login and add product to cart
🔎 Analyzing UI...
🧠 Planning steps...
⚙️ Generating test...
⚡ Executing test...
✅ TEST PASSED
```

---

# 🎯 Current Limitations (V8)

Tests are generated with **raw locators**, for example:

```ts
await page.locator("#user-name").fill("standard_user");
```

This is not production-level automation yet.

---

# 🔮 Next Version — V10 (Major Upgrade)

Upcoming version will introduce:

✅ Automatic Page Object Model generation
✅ Framework-aware agent
✅ Reusable pages
✅ Template-based code generation
✅ Senior-level automation structure

Target output:

```ts
await loginPage.login("standard_user", "secret_sauce");
await inventoryPage.addFirstProductToCart();
```

Folder structure:

```
pages/
tests/
fixtures/
```

---

# 🧭 Roadmap

| Version | Status     | Description                   |
| ------- | ---------- | ----------------------------- |
| V6      | ✅          | Self-planning agent           |
| V7      | ✅          | Multi-page agent              |
| V8      | ✅ Current  | Vision agent                  |
| V9      | ⏭️ Skipped | Basic POM                     |
| V10     | 🚧 Next    | Framework-aware POM generator |
| V11     | 🔮 Future  | Self-healing automation       |

---

# 🎓 Learning Purpose

This project is designed to explore:

* AI-assisted automation testing
* Autonomous agents
* Playwright architecture
* LLM-driven QA workflows

---

# 👨‍💻 Author

Automation QA Engineer exploring AI-driven testing.

---

# ⭐ Future Vision

```
Manual Test Cases → YAML → AI Agent → Production Automation
```

---

If you find this project interesting, feel free to fork or contribute 🚀
