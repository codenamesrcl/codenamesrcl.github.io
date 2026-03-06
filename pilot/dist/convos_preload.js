var r={title:"Agentic Coding Pilot Brainstorming",messages:[{role:"user",type:"Basic",meta:{tokens:32,included:!0,name:"User",contentselected:"1"},content:{1:{key:"1",content:"Generate a list of example web application projects that would be useful for evaluating an agentic coding pipeline/system",tokens:32}}},{role:"assistant",type:"Basic",meta:{tokens:317,included:!0,name:"HLPR",contentselected:"1"},content:{1:{key:"1",model:"qwen/qwen3-4b-2507",temperature:.5,system:`# Role
You are a lead coordinator with the user as the director.  Your behavior is professional and detail oriented.

# Tasks
Assist the user by responding to their prompt.  If you are provided tools, use them when appropriate.

# Rules
- Avoid using emojis except in headers/titles
- Avoid using the long dash character
- Do not suggest next steps unless explicitly requested

# Code Generation Rules
- Deliver code snippets in code blocks`,content:`- A task management application with drag-and-drop interface, real-time collaboration, and AI-powered task suggestions  
- A code review assistant that analyzes pull requests and highlights potential bugs or improvements  
- A personal knowledge base with AI-driven summarization, search, and content generation capabilities  
- A code generation tool that takes natural language prompts and produces functional, reusable code snippets in multiple languages  
- An automated documentation generator that creates API docs, user guides, and code comments from source code  
- A software debugging assistant that identifies root causes of runtime errors and suggests fixes  
- A project planning tool that uses AI to generate sprint plans, assign tasks, and predict project timelines  
- A secure authentication and authorization system with AI-driven anomaly detection and access control recommendations  
- A code refactoring assistant that identifies outdated patterns and proposes optimized, maintainable alternatives  
- A real-time collaboration platform with AI-powered live code suggestions and conflict resolution  
- A repository monitoring system that detects security vulnerabilities, outdated dependencies, and performance issues  
- A developer onboarding assistant that guides new team members through setup, tools, and workflows  
- A feature flag management system with AI-driven rollout strategies and impact analysis  
- A CI/CD pipeline optimizer that suggests improvements to build times, test coverage, and deployment frequency  
- A user experience (UX) design assistant that generates wireframes, prototypes, and accessibility recommendations from text descriptions  

Each of these projects presents unique challenges and opportunities for an agentic coding pipeline to demonstrate capabilities in autonomy, reasoning, context awareness, and iterative improvement.`,tokens:317}}},{role:"user",type:"Basic",meta:{tokens:19,included:!0,name:"User",contentselected:"1"},content:{1:{key:"1",content:"remove anything that relates to deployment solutions",tokens:19}}},{role:"assistant",type:"Basic",meta:{tokens:274,included:!0,name:"HLPR",contentselected:"1"},content:{1:{key:"1",model:"qwen/qwen3-4b-2507",temperature:.5,system:`# Role
You are a lead coordinator with the user as the director.  Your behavior is professional and detail oriented.

# Tasks
Assist the user by responding to their prompt.  If you are provided tools, use them when appropriate.

# Rules
- Avoid using emojis except in headers/titles
- Avoid using the long dash character
- Do not suggest next steps unless explicitly requested

# Code Generation Rules
- Deliver code snippets in code blocks`,content:`- A task management application with drag-and-drop interface, real-time collaboration, and AI-powered task suggestions  
- A code review assistant that analyzes pull requests and highlights potential bugs or improvements  
- A personal knowledge base with AI-driven summarization, search, and content generation capabilities  
- A code generation tool that takes natural language prompts and produces functional, reusable code snippets in multiple languages  
- An automated documentation generator that creates API docs, user guides, and code comments from source code  
- A software debugging assistant that identifies root causes of runtime errors and suggests fixes  
- A project planning tool that uses AI to generate sprint plans, assign tasks, and predict project timelines  
- A secure authentication and authorization system with AI-driven anomaly detection and access control recommendations  
- A code refactoring assistant that identifies outdated patterns and proposes optimized, maintainable alternatives  
- A real-time collaboration platform with AI-powered live code suggestions and conflict resolution  
- A repository monitoring system that detects security vulnerabilities, outdated dependencies, and performance issues  
- A developer onboarding assistant that guides new team members through setup, tools, and workflows  
- A feature flag management system with AI-driven rollout strategies and impact analysis  

Each of these projects presents unique challenges and opportunities for an agentic coding pipeline to demonstrate capabilities in autonomy, reasoning, context awareness, and iterative improvement.`,tokens:274}}},{role:"user",type:"Basic",meta:{tokens:19,included:!0,name:"User",contentselected:"1"},content:{1:{key:"1",content:"group these by category/subject matter",tokens:19}}},{role:"assistant",type:"Basic",meta:{tokens:336,included:!0,name:"HLPR",contentselected:"1"},content:{1:{key:"1",model:"qwen/qwen3-4b-2507",temperature:.5,system:`# Role
You are a lead coordinator with the user as the director.  Your behavior is professional and detail oriented.

# Tasks
Assist the user by responding to their prompt.  If you are provided tools, use them when appropriate.

# Rules
- Avoid using emojis except in headers/titles
- Avoid using the long dash character
- Do not suggest next steps unless explicitly requested

# Code Generation Rules
- Deliver code snippets in code blocks`,content:`- **Task & Project Management**  
  - A task management application with drag-and-drop interface, real-time collaboration, and AI-powered task suggestions  
  - A project planning tool that uses AI to generate sprint plans, assign tasks, and predict project timelines  

- **Code Generation & Development Assistance**  
  - A code generation tool that takes natural language prompts and produces functional, reusable code snippets in multiple languages  
  - A code refactoring assistant that identifies outdated patterns and proposes optimized, maintainable alternatives  
  - A software debugging assistant that identifies root causes of runtime errors and suggests fixes  

- **Documentation & Knowledge Management**  
  - An automated documentation generator that creates API docs, user guides, and code comments from source code  
  - A personal knowledge base with AI-driven summarization, search, and content generation capabilities  

- **Collaboration & Real-Time Interaction**  
  - A real-time collaboration platform with AI-powered live code suggestions and conflict resolution  
  - A developer onboarding assistant that guides new team members through setup, tools, and workflows  

- **Security & Access Control**  
  - A secure authentication and authorization system with AI-driven anomaly detection and access control recommendations  

- **Feature & Release Management**  
  - A feature flag management system with AI-driven rollout strategies and impact analysis  

- **Repository & Code Health Monitoring**  
  - A repository monitoring system that detects security vulnerabilities, outdated dependencies, and performance issues  

Each category represents a distinct domain where an agentic coding pipeline can evaluate its ability to understand context, generate accurate and safe outputs, and operate autonomously within well-defined functional boundaries.`,tokens:336}}},{role:"user",type:"Basic",meta:{tokens:41,included:!0,name:"User",contentselected:"1"},content:{1:{key:"1",content:"I'm going to be using Cursor as my coding agent.  Generate a starting prompt for each of these examples to get the projects scaffolded/started",tokens:41}}},{role:"assistant",type:"Basic",meta:{tokens:1518,included:!0,name:"HLPR",contentselected:"1"},content:{1:{key:"1",model:"qwen/qwen3-4b-2507",temperature:.5,system:`# Role
You are a lead coordinator with the user as the director.  Your behavior is professional and detail oriented.

# Tasks
Assist the user by responding to their prompt.  If you are provided tools, use them when appropriate.

# Rules
- Avoid using emojis except in headers/titles
- Avoid using the long dash character
- Do not suggest next steps unless explicitly requested

# Code Generation Rules
- Deliver code snippets in code blocks`,content:'Certainly. Below are tailored starting prompts for each example project, designed to be used with Cursor as your coding agent. These prompts are structured to initiate scaffolding\u2014creating foundational files, directories, and basic structure\u2014while guiding the agent to maintain context, coherence, and project clarity.\n\n---\n\n**Category: Task & Project Management**  \n*Project: Task Management Application with Real-Time Collaboration*\n\n> "Scaffold a task management application using React and TypeScript. Create the following structure:  \n> - `src/` directory with `components/`, `hooks/`, `types/`, and `utils/`  \n> - `components/TaskList.tsx`, `TaskForm.tsx`, `TaskCard.tsx`, `RealTimeCollaborationPanel.tsx`  \n> - `types/task.d.ts` defining a Task interface with fields: id, title, description, status, createdAt, updatedAt, assignedTo  \n> - `hooks/useTasks.ts` for managing task state with real-time updates  \n> - A basic `App.tsx` that renders a header, task list, and form  \n> - Initialize a `package.json` with dependencies: React, React DOM, TypeScript, and Zustand for state management  \n> Ensure the app is modular, type-safe, and ready for AI-powered task suggestions and collaboration features."\n\n---\n\n**Category: Code Generation & Development Assistance**  \n*Project: Code Generation Tool from Natural Language*\n\n> "Scaffold a code generation tool that takes natural language prompts and outputs working code in multiple languages.  \n> - Create a `src/` directory with `parsers/`, `generators/`, `languages/`, and `types/`  \n> - Implement a `PromptParser.ts` that extracts intent, language, and parameters from user input  \n> - Create a `CodeGenerator.ts` that maps prompts to language-specific templates (e.g., JavaScript, Python, Rust)  \n> - Initialize a `languages/` folder with stubs for JavaScript, Python, and Go  \n> - Add a `prompt-to-code.ts` entry point that accepts a string prompt and returns a formatted code block  \n> - Generate a simple `App.tsx` that includes a text input, button, and code output area  \n> Ensure the output is syntactically valid, includes comments, and includes a basic error handling path."\n\n---\n\n**Category: Documentation & Knowledge Management**  \n*Project: Automated Documentation Generator*\n\n> "Scaffold an automated documentation generator that creates API docs, user guides, and code comments from source code.  \n> - Create a `src/` directory with `analyzers/`, `generators/`, `templates/`, and `types/`  \n> - Implement a `CodeAnalyzer.ts` that parses JS/TS files and extracts functions, parameters, and return types  \n> - Create a `DocGenerator.ts` that produces Markdown or HTML documentation from parsed data  \n> - Define a `template/api.md.j2` and `template/user-guide.md.j2` for structured output  \n> - Initialize a `process-docs.ts` script that takes a directory path and outputs documentation to a `docs/` folder  \n> - Add a `sample.ts` file to demonstrate parsing and output  \n> Ensure the output is clean, readable, and includes function signatures and examples."\n\n---\n\n**Category: Collaboration & Real-Time Interaction**  \n*Project: Real-Time Collaboration Platform with AI Suggestions*\n\n> "Scaffold a real-time collaboration platform where multiple users can edit code together with AI-driven live suggestions.  \n> - Create a `src/` directory with `components/`, `socket/`, `ai/`, `state/`, and `types/`  \n> - Implement a `RealTimeEditor.tsx` with shared state and live cursor tracking  \n> - Create a `LiveSuggestionsAI.ts` that listens to typing and generates context-aware suggestions (e.g., autocomplete, refactoring hints)  \n> - Add a `socket-client.ts` to handle real-time updates via WebSocket  \n> - Initialize `App.tsx` with editor, chat panel, and suggestion panel  \n> - Include a `types/EditorState.ts` for tracking cursor positions, edits, and user roles  \n> Ensure the platform supports real-time syncing and AI suggestions without disrupting user flow."\n\n---\n\n**Category: Security & Access Control**  \n*Project: Secure Authentication & Authorization System*\n\n> "Scaffold a secure authentication and authorization system with AI-driven anomaly detection.  \n> - Create a `src/` directory with `auth/`, `security/`, `policies/`, `types/`, and `services/`  \n> - Implement a `AuthService.ts` with login, registration, and token management  \n> - Create a `RolePolicyEngine.ts` that evaluates user roles and permissions  \n> - Add a `SecurityMonitor.ts` that logs and analyzes login patterns, IP changes, and failed attempts  \n> - Generate a `User.ts` model with fields: id, email, role, lastLogin, failedAttempts  \n> - Initialize a `App.tsx` with login screen and protected dashboard  \n> Ensure the system includes secure session handling and anomaly detection logic."\n\n---\n\n**Category: Feature & Release Management**  \n*Project: Feature Flag Management System*\n\n> "Scaffold a feature flag management system with AI-driven rollout strategies and impact analysis.  \n> - Create a `src/` directory with `flags/`, `rollouts/`, `analytics/`, `types/`, and `services/`  \n> - Define a `FeatureFlag.ts` interface with name, enabled status, target audience, rollout percentage  \n> - Implement a `RolloutStrategy.ts` that supports gradual, user-based, or geo-based rollouts  \n> - Create a `ImpactAnalyzer.ts` that estimates user impact based on feature usage and audience  \n> - Initialize a `FeatureManager.ts` that allows toggling features via API  \n> - Add a `dashboard.tsx` to visualize active flags and rollout status  \n> Ensure the system supports dynamic, AI-informed rollout decisions."\n\n---\n\n**Category: Repository & Code Health Monitoring**  \n*Project: Repository Monitoring System*\n\n> "Scaffold a repository monitoring system that detects security vulnerabilities, outdated dependencies, and performance issues.  \n> - Create a `src/` directory with `scanners/`, `health/`, `reports/`, `types/`, and `utils/`  \n> - Implement a `DependencyScanner.ts` that checks for outdated packages using a package lock file  \n> - Create a `SecurityVulnerabilityScanner.ts` that cross-references known CVEs  \n> - Develop a `PerformanceAnalyzer.ts` that evaluates code complexity, function length, and cyclomatic complexity  \n> - Generate a `HealthReport.ts` that aggregates findings into a structured JSON format  \n> - Initialize a `monitor-repo.ts` script that runs on a schedule and outputs a report to `reports/`  \n> - Add a `sample-project/` with a `package.json` to demonstrate scanning  \n> Ensure the output is actionable, prioritized, and includes severity levels."\n\n---\n\nEach of these prompts is designed to be executed directly in Cursor, prompting the agent to generate a minimal but functional scaffold that can be expanded upon with further AI-driven features or developer input. The prompts emphasize structure, type safety, and modularity\u2014key for effective agentic development.',tokens:1518}}},{role:"user",type:"Basic",meta:{tokens:44,included:!0,name:"User",contentselected:"1"},content:{1:{key:"1",content:"frame these prompts from the perspective of a user who is not experienced with code/development.  Effectively a non-developer asking a coding agent for project generation",tokens:44}}},{role:"assistant",type:"Basic",meta:{tokens:680,included:!0,name:"HLPR",contentselected:"1"},content:{1:{key:"1",model:"qwen/qwen3-4b-2507",temperature:.5,system:`# Role
You are a lead coordinator with the user as the director.  Your behavior is professional and detail oriented.

# Tasks
Assist the user by responding to their prompt.  If you are provided tools, use them when appropriate.

# Rules
- Avoid using emojis except in headers/titles
- Avoid using the long dash character
- Do not suggest next steps unless explicitly requested

# Code Generation Rules
- Deliver code snippets in code blocks`,content:`Certainly. Below are revised, user-friendly prompts rewritten from the perspective of a non-technical person\u2014someone without prior experience in coding or software development. These versions maintain clarity, avoid jargon, and focus on the *goal* of the project rather than technical implementation details.

---

**Project: Task Management App with Real-Time Collaboration**  
> "I want to create a tool where teams can manage tasks together in real time\u2014like a shared to-do list. Can you help me get started by setting up a basic app where people can add tasks, see them in real time, and update them? Just give me a simple structure with clear sections like task list, task form, and a way to see who\u2019s working on what."

---

**Project: Code Generation Tool from Natural Language**  
> "I want to be able to describe what kind of code I need\u2014like 'create a login form in JavaScript'\u2014and have the tool generate the actual code for me. Can you help me build a simple version of this tool that starts with a clean setup and lets me type a description and get back working code?"

---

**Project: Automated Documentation Generator**  
> "I have a lot of code, but I don\u2019t know how to explain it to others. I\u2019d like a tool that reads my code and automatically creates clear, easy-to-understand documentation\u2014like user guides or API instructions. Can you help me set up a basic version of this tool so it can start reading code and generating helpful docs?"

---

**Project: Real-Time Collaboration Platform with AI Suggestions**  
> "I want a place where multiple people can work on code together, like a shared editor. As they type, I\u2019d like the tool to suggest helpful fixes or improvements. Can you help me build a simple version of this platform so that people can see changes in real time and get smart suggestions as they work?"

---

**Project: Secure Authentication & Authorization System**  
> "I want a system that keeps user logins safe and ensures people only access what they\u2019re allowed to. For example, some users should only see certain parts of the app. Can you help me start building a simple login and access control system that protects user data and flags any unusual activity?"

---

**Project: Feature Flag Management System**  
> "I want to be able to roll out new features to users gradually\u2014like showing a new feature to only 10% of users at first. Can you help me set up a simple system that lets me turn features on or off, decide who sees them, and track how many users are using them?"

---

**Project: Repository Monitoring System**  
> "I want to know if my code is safe and healthy\u2014like if there are outdated libraries or hidden security risks. Can you help me create a simple tool that scans my codebase and warns me about anything that could be a problem, like outdated tools or weak security?"

---

These prompts are designed to be accessible to non-developers. They focus on the *purpose* of the tool, the *user experience*, and the *outcomes*\u2014not on technical architecture or implementation. When used with Cursor, they enable the agent to generate scaffolds that are intuitive, grounded in real-world needs, and easy to extend as the user gains confidence.`,tokens:680}}}]},e=r;var l={title:"Agentic Project Roadmap Pilot",messages:[{role:"user",type:"Basic",meta:{tokens:259,included:!0,name:"User",contentselected:"1"},content:{1:{key:"1",content:`I have a roadmap for a project to evaluate an agentic coding platform.  Can you compose a series of prompts describing each feature to create.:

Start - Multi-question form system for evaluating Agentic Coding solutions
Form.  Form contents will follow later.

Users would create a new form per platform/product they are evaluating
Users can view other user's reviews/product evaluations

----------------------------------------------------------------------

Feature 1 - Populating the initial form

Detail the basic sections and the questions within each section

----------------------------------------------------------------------

Feature 2 - Make it look pretty

Make the form and the dashboard interface look pretty

----------------------------------------------------------------------

Feature 3 - Local data storage of records

Store records saved from the form into a local sqlite database - phrase it as keep data local
  - file storage as documents
	
----------------------------------------------------------------------

Feature 4 - Basic User Account management

Have user register and login before they are able to add/update reviews

----------------------------------------------------------------------

Feature 5 - Add snippets, screenshots to the existing basic

Add visual documentation/proof on top of the Q/A style basic form

----------------------------------------------------------------------

Feature 6 - Demo downloads/section

Allow reviewers to upload a zip containing the source code for each step of their eval so that readers can see how things changed over time`,tokens:259}}},{role:"assistant",type:"Basic",meta:{tokens:1860,included:!0,name:"HLPR",contentselected:"1"},content:{1:{key:"1",model:"qwen/qwen3-4b-2507",temperature:.5,system:`# Role
You are an assistant to a lead software developer who is evaluating agentic coding tools and platforms.  Your role is to consider and compose things from a novice's perspective.

# General Rules
- Each example prompt that is to be sent to an LLM must be delivered in the following format
    - a title to describe the prompt
    - the prompt in a Markdown code block`,content:`### Title: Prompt \u2013 Feature 1: Populating the Initial Form (Basic Sections & Questions)

\`\`\`markdown
I need to design a multi-question form system for evaluating agentic coding platforms. The form should be structured into clear, logical sections to help users systematically assess each platform.

Break down the form into the following core sections, and for each section, list 3\u20135 specific, focused questions that capture key aspects of agentic coding performance. The questions should be practical, measurable, and easy for non-experts to answer.

Section 1: Core Functionality  
- What are the primary tasks the agent can perform (e.g., code generation, debugging, refactoring)?  
- How well does the agent understand and follow user instructions?  
- Can it generate multiple solutions or alternatives to a problem?  
- Does it handle edge cases or unexpected inputs effectively?  
- How accurate is the generated code in producing expected results?

Section 2: Code Quality & Safety  
- Is the generated code clean, readable, and well-structured?  
- Does it follow best practices (e.g., naming, comments, error handling)?  
- Are there any security vulnerabilities or dangerous patterns (e.g., SQL injection, hardcoded secrets)?  
- Does the agent include appropriate documentation or comments?  
- How well does it handle type safety and edge cases?

Section 3: User Experience & Interaction  
- How intuitive is the interface for giving instructions to the agent?  
- How responsive is the agent in generating output?  
- Can users easily edit or refine their prompts and see changes in real time?  
- Does it provide clear feedback on progress or errors?  
- How easy is it to navigate between steps or views?

Section 4: Error Handling & Recovery  
- When an error occurs, does the agent explain the issue clearly?  
- Can it suggest a fix or alternative approach?  
- Does it retry or adapt when initial attempts fail?  
- How transparent is the agent about when it doesn\u2019t know the answer?  
- Does it provide a way to track or log failures?

Section 5: Integration & Customization  
- Can the agent integrate with common tools (e.g., GitHub, VS Code, terminal)?  
- Can users customize the agent\u2019s behavior (e.g., prompt templates, rules)?  
- Is there support for plugins or external APIs?  
- How easy is it to extend or modify the agent\u2019s capabilities?  
- Can it be used in a team or collaborative workflow?

Each question should be phrased as a simple, closed-ended or rating-based question (e.g., "On a scale of 1\u20135, how would you rate the agent\u2019s ability to understand instructions?"). The form should be flexible enough to be reused across different platforms.
\`\`\`

---

### Title: Prompt \u2013 Feature 2: Make it Look Pretty

\`\`\`markdown
I want the form creation and evaluation dashboard to have a clean, modern, and professional appearance. The design should feel intuitive and engaging, especially for users who may not be technical.

Describe how to make the interface visually appealing and user-friendly, including:

- A modern, minimalist design with soft colors (e.g., neutral tones with accent colors like blue or green for highlights)
- Clear typography (easy-to-read fonts, consistent spacing, and hierarchy)
- Responsive layout that works well on desktop and mobile devices
- Visual indicators for form progress (e.g., step-by-step navigation bars)
- Consistent buttons and form elements (e.g., primary action buttons, "Save", "Submit", "Edit")
- Use of icons or illustrations to represent different form sections (e.g., a code icon for code quality)
- A clean dashboard that shows a list of saved forms, user reviews, and ratings with visual summaries (e.g., average scores, recent activity)
- Smooth animations or transitions when adding, editing, or viewing forms
- A "preview" mode where users can see how their form will look before submitting

The overall tone should feel trustworthy, approachable, and helpful \u2014 like a well-designed product review tool for developers. Avoid clutter; focus on clarity and usability.
\`\`\`

---

### Title: Prompt \u2013 Feature 3: Local Data Storage of Records (Keep Data Local)

\`\`\`markdown
I need the form system to store user-generated evaluations locally, without sending any data to remote servers. This means all form data and user records should be saved directly to the user\u2019s device.

Explain how to implement local data storage using SQLite, and describe how the system should behave in terms of user experience and security.

Key points:
- All form submissions, reviews, and user profiles are stored in a local SQLite database on the user\u2019s device.
- The database file is saved in a secure, user-specific folder (e.g., \`user_data/forms.db\`).
- Users can open and view their records offline \u2014 no internet connection required.
- Data is not uploaded to any external server or cloud service.
- The system should allow users to export their local database as a \`.db\` file or a readable CSV for backup or sharing.
- File storage for uploaded documents (e.g., screenshots, logs) should be saved locally in a separate folder (e.g., \`user_data/uploads/\`).
- All local data is encrypted at rest (using a simple password-protected encryption method, like AES-256).
- Users are informed clearly that their data stays private and is not shared with third parties.

Describe how this setup supports privacy, autonomy, and ease of use for users evaluating agentic tools without relying on internet connectivity.
\`\`\`

---

### Title: Prompt \u2013 Feature 4: Basic User Account Management

\`\`\`markdown
I need to add user authentication so that only registered users can create, edit, or submit form evaluations.

Create a simple user account system with the following features:

- Users can register with an email address and a password.
- Users must log in before they can:
  - Create a new evaluation form
  - Submit or update a review
  - View or edit existing reviews
- Passwords are stored securely using hashing (e.g., bcrypt) and never stored in plain text.
- Users can log out at any time.
- The system should allow users to recover their password via email (with a one-time link).
- Each user has a unique profile that shows:
  - Their name (optional)
  - List of forms they\u2019ve created
  - Summary of their average ratings across all reviews
- The login screen should be simple and secure \u2014 no social logins or third-party integrations.

Explain how this system protects user privacy and ensures that only authorized individuals can contribute to the evaluation database.
\`\`\`

---

### Title: Prompt \u2013 Feature 5: Add Snippets, Screenshots to the Existing Basic Form

\`\`\`markdown
I want to enhance the form so that users can add visual evidence or real-world examples to support their evaluations.

Describe how to add the ability for users to:

- Insert code snippets (e.g., before and after agent output) directly into the form
- Upload screenshots of the agent\u2019s interface, error messages, or generated code
- Add short descriptive notes for each visual (e.g., "This shows the agent correctly refactored the function")
- Embed images or code blocks in a clean, readable format (e.g., using markdown-style syntax or a simple image uploader)
- Allow users to tag or label each visual (e.g., "Error Handling", "Code Quality", "User Flow")

These visuals should be displayed alongside the text-based questions in the form, making it easier for other users to understand and verify the evaluation.

Explain how this improves transparency and trust in the reviews \u2014 especially for developers who want to see real examples of agent performance.
\`\`\`

---

### Title: Prompt \u2013 Feature 6: Demo Downloads/Section

\`\`\`markdown
I want reviewers to be able to upload a downloadable zip file that contains the source code for each step of their evaluation.

Describe how to implement a "Demo Download" section in the form with the following features:

- A button labeled "Upload Demo ZIP" that allows users to attach a compressed folder containing:
  - Source code files (e.g., \`.py\`, \`.js\`, \`.ts\`)
  - Screenshots or logs showing the agent\u2019s behavior
  - A \`README.md\` file explaining the steps of the evaluation
- The ZIP file is stored locally on the user\u2019s device and is only accessible to them (not shared publicly unless they choose to)
- Users can add a description of what the demo shows (e.g., "This shows how the agent generated a React component from a prompt")
- The demo section appears as a separate tab or section in the form, clearly labeled "Demo & Source Code"
- After upload, the system generates a preview of the ZIP file (e.g., listing the files inside) and allows users to download it again
- Users can remove or edit the demo at any time

This feature enables readers to verify the agent\u2019s performance by reviewing actual code changes, making evaluations more credible and actionable.
\`\`\``,tokens:1860}}},{role:"user",type:"Basic",meta:{tokens:80,included:!0,name:"User",contentselected:"1"},content:{1:{key:"1",content:`I also want a starter prompt for scaffolding the initial project as described below.  Frame it as a beginner coder prompting the agent:

 Multi-question form system for evaluating Agentic Coding solutions
Form.  Form contents will follow later.

Users would create a new form per platform/product they are evaluating
Users can view other user's reviews/product evaluations`,tokens:80}}},{role:"assistant",type:"Basic",meta:{tokens:342,included:!0,name:"HLPR",contentselected:"1"},content:{1:{key:"1",model:"qwen/qwen3-4b-2507",temperature:.5,system:`# Role
You are an assistant to a lead software developer who is evaluating agentic coding tools and platforms.  Your role is to consider and compose things from a novice's perspective.

# General Rules
- Each example prompt that is to be sent to an LLM must be delivered in the following format
    - a title to describe the prompt
    - the prompt in a Markdown code block`,content:`### Title: Prompt \u2013 Starter Prompt for Beginner Coder (Project Scaffolding)

\`\`\`markdown
I'm a beginner coder trying to build a simple web app to evaluate agentic coding platforms. I want to create a multi-question form system where users can:

- Create a new form for evaluating a specific agentic coding platform (like GitHub Copilot, Cursor, or Codeium)
- Fill out the form with questions about functionality, code quality, and user experience
- Save their form locally (no internet needed)
- View and read other users' reviews and evaluations of the same platform

I don't need it to be complex or fully featured right now \u2014 just a basic working prototype. I want to start small and build step by step.

Can you help me scaffold this project by giving me a clear, beginner-friendly plan with:

1. A simple project structure (folder layout)  
2. A list of the first 3 core features to build (in order)  
3. A basic description of what each feature should do  
4. Suggested tools or libraries to use (e.g., HTML, CSS, JavaScript, SQLite, local storage)  
5. A short step-by-step guide to get started (e.g., "Step 1: Create an index.html file...")

I'm not familiar with backend systems or databases yet \u2014 so keep it focused on front-end and local storage. I want to learn by doing, and I\u2019d like to be able to run this app in my browser without needing a server.

Just give me a clean, simple, and actionable starting point \u2014 like a roadmap for a first-time developer.
\`\`\``,tokens:342}}}]},t=l;var d={title:"Agentic Project Roadmap - Prompt refinement",messages:[{role:"user",type:"Basic",meta:{tokens:274,included:!0,name:"User",contentselected:"1"},content:{1:{key:"1",content:`I want to refine the following agentic coding prompt to be more akin to what a non-developer would prompt.  Can you produce a prompt more inline with this tone.

\`\`\`
I need the form system to store evaluations locally, without sending any data to servers. This means all form data and user records should be saved directly to the user\u2019s device.  Update the project to support the following feature points.

Key points:
- All form submissions, reviews, and user profiles are stored in a local SQLite database on the user\u2019s device.
- The database file is saved in a secure, user-specific folder (e.g., \`user_data/forms.db\`).
- Users can open and view their records offline \u2014 no internet connection required.
- Data is not uploaded to any external server or cloud service.
- The system should allow users to export their local database as a \`.db\` file or a readable CSV for backup or sharing.
- File storage for uploaded documents (e.g., screenshots, logs) should be saved locally in a separate folder (e.g., \`user_data/uploads/\`).
- All local data is encrypted at rest (using a simple password-protected encryption method, like AES-256).
- Users are informed clearly that their data stays private and is not shared with third parties.

\`\`\``,tokens:274}}},{role:"assistant",type:"Basic",meta:{tokens:311,included:!0,name:"HLPR",contentselected:"1"},content:{1:{key:"1",model:"qwen/qwen3-4b-2507",temperature:.5,system:`# Role
You are an assistant to a lead software developer who is evaluating agentic coding tools and platforms.  Your role is to consider and compose things from a novice's perspective.

# General Rules
- Each example prompt that is to be sent to an LLM must be delivered in the following format
    - a title to describe the prompt
    - the prompt in a Markdown code block`,content:`**Title: How can I make sure my form data stays private and only lives on my device?**

**Prompt:**

I want to make sure that when people fill out forms, all their data \u2014 like what they\u2019ve written, their answers, and any files they upload \u2014 stays completely on their own device. I don\u2019t want any of it going to the internet or being saved on a remote server.  

Can you help me set up the system so that:
- All form entries, reviews, and user info are saved right on the user\u2019s phone or computer, like a private notebook.
- The data is stored in a safe, personal folder (like \`my-data/forms.db\`) so no one else can access it.
- People can still open and see their records even without an internet connection.
- If they want to back up their data, they can save it as a file (like a .db or a CSV) that they can share or keep safe.
- Any files they upload \u2014 like screenshots or logs \u2014 are also saved right on their device in a separate folder (like \`my-data/uploads/\`).
- The data is protected with a password so only the user can read it (like locking a drawer with a key).
- The app clearly tells users that their data is private and never shared with companies or outside parties.

I just want peace of mind that my data stays safe, private, and only lives on my own device. Can you help me build that?`,tokens:311}}}]},n=d;var c={title:"Prompt refinement w/ reasoning",messages:[{role:"user",type:"Basic",meta:{tokens:280,included:!0,name:"User",contentselected:"1"},content:{1:{key:"1",content:`I wrote a coding prompt for an agentic coding tool.  I want to refine the prompt to be more akin to what a non-developer would prompt as I'm trying to evaluate the tool for beginners.

\`\`\`
I need the form system to store evaluations locally, without sending any data to servers. This means all form data and user records should be saved directly to the user\u2019s device.  Update the project to support the following feature points.

Key points:
- All form submissions, reviews, and user profiles are stored in a local SQLite database on the user\u2019s device.
- The database file is saved in a secure, user-specific folder (e.g., \`user_data/forms.db\`).
- Users can open and view their records offline \u2014 no internet connection required.
- Data is not uploaded to any external server or cloud service.
- The system should allow users to export their local database as a \`.db\` file or a readable CSV for backup or sharing.
- File storage for uploaded documents (e.g., screenshots, logs) should be saved locally in a separate folder (e.g., \`user_data/uploads/\`).
- All local data is encrypted at rest (using a simple password-protected encryption method, like AES-256).
- Users are informed clearly that their data stays private and is not shared with third parties.

\`\`\``,tokens:280}}},{role:"assistant",type:"Basic",meta:{tokens:157,included:!0,name:"HLPR",contentselected:"1"},content:{1:{key:"1",model:"qwen3.5:4b",temperature:.5,system:`# Role
You are an assistant to a lead software developer who is evaluating agentic coding tools and platforms.  Your role is to consider and compose things from a novice's perspective.

# General Rules
- Each example prompt that is to be sent to an LLM must be delivered in the following format
    - a title to describe the prompt
    - the prompt in a Markdown code block`,content:`# Privacy-Focused Local Storage Request

\`\`\`markdown
I need this form system to keep all my data completely private. Nothing should be sent to any servers or the internet; everything needs to be saved directly on my device.

Here are the specific things I want:
- All form submissions and user records must stay on my computer or phone in a secure folder.
- I need to be able to open and view my records even if I don't have an internet connection.
- The system must use strong password protection so only I can access my data.
- I should be able to download my data or export it as files for backup purposes.
- Please make sure users know that their information is private and not shared with anyone else.
\`\`\``,reasoning:`Thinking Process:

1.  **Analyze the Request:**
    *   **Role:** Assistant to a lead software developer evaluating agentic coding tools.
    *   **Perspective:** Novice/Non-developer (the user wants the prompt to sound like it comes from someone who isn't a developer).
    *   **Task:** Refine the provided coding prompt to be more akin to what a non-developer would write, while still conveying the necessary technical requirements for the tool being evaluated.
    *   **Input Prompt:** A fairly technical specification about local storage (SQLite, offline access, encryption, no server uploads).
    *   **Output Format:** Title + Markdown code block containing the prompt.

2.  **Analyze the Input Prompt (Technical Details):**
    *   Goal: Form system stores data locally (no server).
    *   Database: SQLite, user-specific folder (\`user_data/forms.db\`).
    *   Access: Offline viewing allowed.
    *   Privacy: No external upload/sharing.
    *   Export: \`.db\` or CSV backup.
    *   Files: Screenshots/logs stored locally (\`user_data/uploads/\`).
    *   Security: Password-protected encryption (AES-256).
    *   Notification: Users informed about privacy.

3.  **Determine the "Non-Developer" Voice:**
    *   Avoid jargon like "SQLite," "AES-256," "form submissions," "user records," "export as .db."
    *   Use analogies or simpler terms (e.g., "save on my phone/computer," "password protected," "download a copy").
    *   Focus on the *outcome* and *experience* rather than the *implementation*.
    *   Emphasize privacy, safety, and ease of use.

4.  **Drafting the Refinement (Iterative Process):**

    *   *Attempt 1 (Mental):* I want this app to save everything on my computer so it doesn't go to the internet. It needs to be password protected. I should be able to download my data if I want.
    *   *Critique 1:* Too vague. Needs to convey the specific constraints for the agent (like encryption, offline access).

    *   *Attempt 2 (Adding Detail):* Please build a form system where nothing goes to a server. Save everything on my device. Use a password to lock it so no one else sees it. I need to be able to open it without internet. Also save screenshots in a folder. Let me know if data is safe.
    *   *Critique 2:* Better, but still sounds a bit like a spec sheet. Needs to sound more like a user asking for features they care about (privacy, control).

    *   *Attempt 3 (Polishing for the "Novice" Persona):* Focus on the core value: Privacy and Control.
    *   "I want this app to keep my stuff private."
    *   "Don't send it anywhere."
    *   "Save it on my phone/computer."
    *   "Lock it with a password."
    *   "Let me download my own data later."

5.  **Finalizing the Prompt Structure:**
    *   Title: Something clear about privacy/local storage.
    *   Content: Plain English, focusing on "no internet," "password safety," "save locally," "download backup."

6.  **Refining for the Output Format:**
    *   Must use the specific format requested: Title + Markdown code block.

7.  **Review against Constraints:**
    *   The user wants to evaluate an agentic coding tool for beginners.
    *   The prompt needs to be clear enough for the AI to understand the requirements, but phrased like a non-dev asking for these features.
    *   Avoid technical terms (SQLite, AES-256) in the final output because that defeats the purpose of being a "non-developer" prompt.

8.  **Final Polish:**
    *   Make sure it implies the technical constraints without naming them explicitly. For example, instead of "AES-256," say "strong password protection." Instead of "SQLite," say "a private database on my device."

    *(Self-Correction during drafting)*: Wait, if I'm evaluating an agentic tool for a novice user, the prompt should ideally be *simple enough* that a beginner would write it, but detailed enough that the AI knows what to build. If I make it *too* simple, the AI might hallucinate features. The goal is to test how well the agent translates "non-dev" intent into code.
    Actually, reading the prompt again: "I want to refine the prompt to be more akin to what a non-developer would prompt". This means the *output text I provide* should look like a user asking for these features without using developer speak.

    Let's draft the content:
    "I'm building a form app and I really care about privacy. I don't want my data going anywhere online. Can you make sure everything stays on my computer? It needs to be password protected so only I can see it. Also, if I lose it, I need to be able to download my own records or save them as files."

    Okay, let's add the specific folder structure idea in plain English ("a special folder for my stuff").
    Let's add the offline access ("works without internet").

    *Revised Draft:*
    "I want this form system to keep all my data completely private. Nothing should be sent to any servers or the internet. Please make sure everything is saved directly on my device, like a local file. I need to be able to open and view my records even if I'm offline. It's important that it's password protected so only I can access it. Also, please include a way for me to save my data as a backup file or export it myself."

    *Check against original requirements:*
    - Local SQLite? -> "saved directly on my device"
    - Secure folder? -> Implied by "private/local"
    - Offline? -> "open... even if I'm offline"
    - No upload? -> "Nothing should be sent to any servers"
    - Export .db/CSV? -> "backup file or export it myself"
    - File storage? -> "save my data" (covers uploads)
    - Encryption? -> "password protected"

    This looks good. It captures the essence without the jargon.

9.  **Final Formatting:** Ensure the output matches the requested structure exactly.

    Title: "Privacy-Focused Local Storage Request"
    Prompt: [The drafted text]

    Wait, I should check if there are specific constraints on the *format* of the prompt itself (e.g., bullet points vs paragraph). The original used bullets. A non-dev might use paragraphs or simple lists. Let's keep it readable but conversational.

    Let's refine the "Encryption" part. Non-devs say "password protected."
    Let's refine "SQLite". Non-devs say "database on my device."
    Let's refine "AES-256". Non-devs say "strong encryption."

    Okay, ready to write.

    Wait, one more thing: The user is evaluating the tool *for beginners*. So the prompt itself should be something a beginner would actually type into an AI coding assistant. It shouldn't be too complex for them to understand.

    Let's finalize the text.
    "I need this app to save everything on my computer instead of sending it online. I want to make sure my data stays private and secure."
    "Here is what I need:
    - No data should go to any servers or the internet.
    - Everything needs to be saved in a secure folder on my device.
    - I should be able to view my records even without an internet connection.
    - The system needs to be password protected so only I can see it.
    - I need to be able to download my data or export it as files for backup."

    This is good. It's structured but conversational.

    Wait, looking at the instruction again: "I want to refine the prompt to be more akin to what a non-developer would prompt".
    So I am providing the *refined prompt* in the code block.

    Let's make sure the title is appropriate. "Privacy and Local Storage Request" works.

    Okay, proceeding to generate response.cw`,tokens:157}}}]},o=c;var p={title:"Pilot roadmap - Refinement",messages:[{role:"user",type:"Basic",meta:{tokens:230,included:!0,name:"User",contentselected:"1"},content:{1:{key:"1",content:`I have a roadmap for a project to evaluate an agentic coding platform.  Can you compose a starter prompt to pass to the agentic coding assistant.

-------
Project Starter - Create the Project

Start - Multi-question form system for evaluating Agentic Coding solutions
Form.  Form contents will follow later.

Users would create a new form per platform/product they are evaluating
Users can view other user's reviews/product evaluations

Main platforms would be Dotnet 10, C#, MVC Web, local Sqlite database, Bootstrap for front-end, vanilla javascript, Serilog for logging, dependency injection for services, services would be the connection point to the database and supply data to the controllers/views.  Javascript and CSS should not be inline in the views, they should be in their own files.  Serilog should be logging to the sqlite database.  There should be a web viewer for the serilog logs.  Appsettings.json should have 5 levels, "Development", "Integration", "Testing", "Staging", and "Production".  Include a utility to access the appsettings values.`,tokens:230}}},{role:"assistant",type:"Basic",meta:{tokens:478,included:!0,name:"HLPR",contentselected:"1"},content:{1:{key:"1",model:"qwen3.5:9b",temperature:.5,system:`# Role
You are an assistant to a lead software developer who is evaluating agentic coding tools and platforms.  Your role is to consider and compose things from a experienced developer's perspective.

# General Rules
- Each example prompt that is to be sent to an LLM must be delivered in the following format
    - a title to describe the prompt
    - the prompt in a Markdown code block`,content:`# Agentic Evaluation Platform - Initial Scaffolding Prompt

\`\`\`markdown
Act as a Senior .NET Developer and Solution Architect. I need you to scaffold a new ASP.NET Core MVC web application project designed for evaluating agentic coding platforms. Follow these specific technical requirements and architectural constraints strictly:

## Project Overview
- **Name:** AgenticEvalPlatform
- **Framework:** ASP.NET Core MVC (Targeting .NET 10)
- **Purpose:** Multi-question form system to collect and display reviews/evaluations of various agentic coding solutions.
- **Database:** Local SQLite database (Entity Framework Core).

## Architecture & Structure
1. **Dependency Injection:** Use DI for all services. Services must act as the connection point to the database and supply data to Controllers/Views.
2. **Frontend:** 
   - Use Bootstrap for styling.
   - All JavaScript and CSS must be external files (located in \`/wwwroot/css\` and \`/wwwroot/js\`). Do NOT use inline styles or scripts in views.
3. **Configuration:**
   - \`appsettings.json\` must support 5 environment levels: "Development", "Integration", "Testing", "Staging", and "Production".
   - Create a utility service (\`IConfigService\`) to access these values securely at runtime.

## Logging Requirements
- Use Serilog for all logging.
- Configure Serilog to write logs directly into the SQLite database (not just files).
- Create an MVC View that displays the logged entries from the database in a readable table format.

## Core Functionality
1. **Forms Management:** 
   - Allow users to create a new "Evaluation Form" per platform/product being tested.
   - Store form metadata and questions in the database.
2. **Review System:**
   - Users can submit evaluations against these forms.
   - Implement a view to list and read reviews submitted by other users.
3. **Data Models:** Create appropriate EF Core models for Forms, Questions, Evaluations, and Logs.

## Immediate Task
Initialize the project structure, configure the environment files (appsettings), set up the database context with SQLite provider, create the logging configuration, and scaffold the initial Controller/View/Model skeleton for the "Forms" and "Logs" features. Ensure all external assets are referenced correctly in the layout.
\`\`\``,reasoning:`Thinking Process:

1.  **Analyze the Request:**
    *   **Role:** Assistant to a lead software developer evaluating agentic coding tools/platforms. Perspective should be experienced, practical, and structured.
    *   **Task:** Compose a starter prompt to pass to an agentic coding assistant.
    *   **Context:** The user has a roadmap for evaluating an agentic coding platform. They need a "Project Starter" prompt.
    *   **Specific Requirements (from the user's input):**
        *   Project: Multi-question form system for evaluating Agentic Coding solutions.
        *   Features: Create new forms per platform/product, view other users' reviews/evaluations.
        *   Tech Stack: .NET 10 (Note: .NET 10 is not out yet, likely means .NET 9 or a hypothetical future version, but I should stick to the user's spec or clarify. Actually, as an AI assistant, I should probably respect the spec but maybe note it if it's unrealistic. However, for the *prompt* generation task, I need to write the prompt that the developer will send to the agentic tool. The prompt needs to instruct the agent to build this.)
        *   Specifics: C#, MVC Web, local Sqlite DB, Bootstrap (front-end), Vanilla JS, Serilog (logging to SQLite), DI for services, Services connect DB/Supply data to Controllers/Views, JS/CSS in separate files, Serilog logs viewer, Appsettings.json with 5 levels (Development, Integration, Testing, Staging, Production), Utility to access appsettings values.
    *   **Output Format:** Each example prompt must be in a specific format: Title + Markdown code block containing the prompt.

2.  **Determine the Goal of the Prompt:**
    *   The prompt needs to be clear, actionable, and comprehensive enough for an agentic coding tool (like Cursor, Devin, GitHub Copilot Workspace, etc.) to understand the scope and constraints.
    *   It should set the stage for the agent to scaffold the project correctly.
    *   It needs to incorporate all the technical constraints provided in the "Project Starter" section.

3.  **Drafting the Prompt Content:**
    *   *Objective:* Build a multi-question form system for evaluating agentic coding solutions.
    *   *Architecture:* .NET 10 (I will write ".NET 10" as requested, even if it's bleeding edge/future, to respect the user's specific roadmap), MVC Web, Sqlite.
    *   *Frontend:* Bootstrap, Vanilla JS/CSS in external files.
    *   *Logging:* Serilog -> SQLite + Web Viewer.
    *   *Config:* Appsettings.json with 5 environments + Utility class for config access.
    *   *Data Model:* Forms (platforms/products), Reviews/Evaluations.
    *   *Actions:* Create new form, View others' reviews.

4.  **Refining the Prompt for an Agent:**
    *   Agents work best with clear context, constraints, and step-by-step instructions.
    *   I need to make sure the prompt explicitly tells the agent *what* to build first (the scaffold).
    *   I should emphasize separation of concerns (JS/CSS files, Services/Controllers).
    *   I should mention the logging requirements clearly.

5.  **Reviewing Constraints & Rules:**
    *   Output format: Title + Markdown code block.
    *   Role: Experienced developer perspective (implied in the quality of the prompt).
    *   The user asked me to "compose a starter prompt".

6.  **Constructing the Prompt:**
    *   Start with a clear project description.
    *   List technical requirements bullet-point style for clarity.
    *   Define the core functionality (CRUD for Forms/Evaluations).
    *   Specify the environment configuration strategy.
    *   Request scaffolding of the solution structure.

7.  **Final Polish:**
    *   Ensure the prompt is self-contained.
    *   Check against the "General Rules" regarding format.

    *Self-Correction on .NET Version:* The user specified ".NET 10". As of my current knowledge, .NET 9 is the latest stable/preview. .NET 10 is likely a typo or future-proofing. However, since I am acting as an assistant to the lead dev who has a roadmap, I should probably respect their specific text in the prompt they generate for the agent, but maybe add a note? No, the instruction says "Each example prompt... must be delivered in the following format". I need to output the *prompt itself*. I will stick to the user's text (".NET 10") because that is part of their specific roadmap requirement, even if it sounds like a future version. It might be a hypothetical scenario or they mean .NET 8/9 but typed 10. I will use ".NET 10" as written in the requirements to ensure fidelity to the user's request.

    *Wait, looking closer at the prompt instructions:* "Each example prompt that is to be sent to an LLM must be delivered in the following format - a title to describe the prompt - the prompt in a Markdown code block".
    So I need to output exactly one Title and one Code Block containing the prompt text.

    *Content of the Prompt:*
    "Act as a senior .NET developer. Scaffold a new ASP.NET Core MVC web application..."
    Include all constraints: Sqlite, Serilog, Bootstrap, DI, Config levels, etc.

8.  **Finalizing the Output:**
    *   Title: \`Agentic Coding Evaluation Platform - Project Scaffolding Prompt\`
    *   Code Block: The actual text the developer will copy-paste into their agentic tool.

    Let's write the prompt text carefully to ensure it captures all nuances (e.g., "JS/CSS not inline", "Serilog logs viewer").

    *Drafting the prompt text:*
    "Initialize a new ASP.NET Core MVC web application project named 'AgenticEvalPlatform'. Use .NET 10 SDK. Structure the solution with separate folders for Models, Controllers, Views, Services, and Scripts (for JS/CSS). Implement a local SQLite database using Entity Framework Core. Configure Serilog to write logs directly to the SQLite database and include an MVC view to display these logs. Create an Appsettings.json structure supporting 'Development', 'Integration', 'Testing', 'Staging', and 'Production' environments, along with a dedicated utility service to read configuration values. Implement a form system where users can create new evaluation forms for different platforms (e.g., Dotnet 10, C#, MVC Web) and view existing reviews from other users. Ensure all JavaScript and CSS are external files, not inline. Use Dependency Injection for all services connecting the database."

    *Refining for Agent Clarity:* Make it more directive. "Create the following structure...", "Ensure...", etc.

    *Wait, one more check:* The user's input says "Project Starter - Create the Project". This looks like a header they want included or context. I will incorporate that into the prompt instructions.

    Let's assemble the final output.

    *Title:* \`Agentic Evaluation Platform - Initial Scaffolding Prompt\`
    *Code Block:* The prompt content.

    (Self-Correction): Ensure the prompt is robust enough for an agent to not hallucinate features but stick to the spec.

    Okay, ready to generate.cw`,tokens:478}}}]},a=p;var u={title:"Pilot - second prompt",messages:[{role:"user",type:"Basic",meta:{tokens:259,included:!0,name:"User",contentselected:"1"},content:{1:{key:"1",content:`I have a roadmap for a project to evaluate an agentic coding platform.  Can you compose a series of prompts describing each feature to create.:

Start - Multi-question form system for evaluating Agentic Coding solutions
Form.  Form contents will follow later.

Users would create a new form per platform/product they are evaluating
Users can view other user's reviews/product evaluations

----------------------------------------------------------------------

Feature 1 - Populating the initial form

Detail the basic sections and the questions within each section

----------------------------------------------------------------------

Feature 2 - Make it look pretty

Make the form and the dashboard interface look pretty

----------------------------------------------------------------------

Feature 3 - Local data storage of records

Store records saved from the form into a local sqlite database - phrase it as keep data local
  - file storage as documents
	
----------------------------------------------------------------------

Feature 4 - Basic User Account management

Have user register and login before they are able to add/update reviews

----------------------------------------------------------------------

Feature 5 - Add snippets, screenshots to the existing basic

Add visual documentation/proof on top of the Q/A style basic form

----------------------------------------------------------------------

Feature 6 - Demo downloads/section

Allow reviewers to upload a zip containing the source code for each step of their eval so that readers can see how things changed over time`,tokens:259}}},{role:"assistant",type:"Basic",meta:{tokens:1860,included:!0,name:"HLPR",contentselected:"1"},content:{1:{key:"1",model:"qwen/qwen3-4b-2507",temperature:.5,system:`# Role
You are an assistant to a lead software developer who is evaluating agentic coding tools and platforms.  Your role is to consider and compose things from a novice's perspective.

# General Rules
- Each example prompt that is to be sent to an LLM must be delivered in the following format
    - a title to describe the prompt
    - the prompt in a Markdown code block`,content:`### Title: Prompt \u2013 Feature 1: Populating the Initial Form (Basic Sections & Questions)

\`\`\`markdown
I need to design a multi-question form system for evaluating agentic coding platforms. The form should be structured into clear, logical sections to help users systematically assess each platform.

Break down the form into the following core sections, and for each section, list 3\u20135 specific, focused questions that capture key aspects of agentic coding performance. The questions should be practical, measurable, and easy for non-experts to answer.

Section 1: Core Functionality  
- What are the primary tasks the agent can perform (e.g., code generation, debugging, refactoring)?  
- How well does the agent understand and follow user instructions?  
- Can it generate multiple solutions or alternatives to a problem?  
- Does it handle edge cases or unexpected inputs effectively?  
- How accurate is the generated code in producing expected results?

Section 2: Code Quality & Safety  
- Is the generated code clean, readable, and well-structured?  
- Does it follow best practices (e.g., naming, comments, error handling)?  
- Are there any security vulnerabilities or dangerous patterns (e.g., SQL injection, hardcoded secrets)?  
- Does the agent include appropriate documentation or comments?  
- How well does it handle type safety and edge cases?

Section 3: User Experience & Interaction  
- How intuitive is the interface for giving instructions to the agent?  
- How responsive is the agent in generating output?  
- Can users easily edit or refine their prompts and see changes in real time?  
- Does it provide clear feedback on progress or errors?  
- How easy is it to navigate between steps or views?

Section 4: Error Handling & Recovery  
- When an error occurs, does the agent explain the issue clearly?  
- Can it suggest a fix or alternative approach?  
- Does it retry or adapt when initial attempts fail?  
- How transparent is the agent about when it doesn\u2019t know the answer?  
- Does it provide a way to track or log failures?

Section 5: Integration & Customization  
- Can the agent integrate with common tools (e.g., GitHub, VS Code, terminal)?  
- Can users customize the agent\u2019s behavior (e.g., prompt templates, rules)?  
- Is there support for plugins or external APIs?  
- How easy is it to extend or modify the agent\u2019s capabilities?  
- Can it be used in a team or collaborative workflow?

Each question should be phrased as a simple, closed-ended or rating-based question (e.g., "On a scale of 1\u20135, how would you rate the agent\u2019s ability to understand instructions?"). The form should be flexible enough to be reused across different platforms.
\`\`\`

---

### Title: Prompt \u2013 Feature 2: Make it Look Pretty

\`\`\`markdown
I want the form creation and evaluation dashboard to have a clean, modern, and professional appearance. The design should feel intuitive and engaging, especially for users who may not be technical.

Describe how to make the interface visually appealing and user-friendly, including:

- A modern, minimalist design with soft colors (e.g., neutral tones with accent colors like blue or green for highlights)
- Clear typography (easy-to-read fonts, consistent spacing, and hierarchy)
- Responsive layout that works well on desktop and mobile devices
- Visual indicators for form progress (e.g., step-by-step navigation bars)
- Consistent buttons and form elements (e.g., primary action buttons, "Save", "Submit", "Edit")
- Use of icons or illustrations to represent different form sections (e.g., a code icon for code quality)
- A clean dashboard that shows a list of saved forms, user reviews, and ratings with visual summaries (e.g., average scores, recent activity)
- Smooth animations or transitions when adding, editing, or viewing forms
- A "preview" mode where users can see how their form will look before submitting

The overall tone should feel trustworthy, approachable, and helpful \u2014 like a well-designed product review tool for developers. Avoid clutter; focus on clarity and usability.
\`\`\`

---

### Title: Prompt \u2013 Feature 3: Local Data Storage of Records (Keep Data Local)

\`\`\`markdown
I need the form system to store user-generated evaluations locally, without sending any data to remote servers. This means all form data and user records should be saved directly to the user\u2019s device.

Explain how to implement local data storage using SQLite, and describe how the system should behave in terms of user experience and security.

Key points:
- All form submissions, reviews, and user profiles are stored in a local SQLite database on the user\u2019s device.
- The database file is saved in a secure, user-specific folder (e.g., \`user_data/forms.db\`).
- Users can open and view their records offline \u2014 no internet connection required.
- Data is not uploaded to any external server or cloud service.
- The system should allow users to export their local database as a \`.db\` file or a readable CSV for backup or sharing.
- File storage for uploaded documents (e.g., screenshots, logs) should be saved locally in a separate folder (e.g., \`user_data/uploads/\`).
- All local data is encrypted at rest (using a simple password-protected encryption method, like AES-256).
- Users are informed clearly that their data stays private and is not shared with third parties.

Describe how this setup supports privacy, autonomy, and ease of use for users evaluating agentic tools without relying on internet connectivity.
\`\`\`

---

### Title: Prompt \u2013 Feature 4: Basic User Account Management

\`\`\`markdown
I need to add user authentication so that only registered users can create, edit, or submit form evaluations.

Create a simple user account system with the following features:

- Users can register with an email address and a password.
- Users must log in before they can:
  - Create a new evaluation form
  - Submit or update a review
  - View or edit existing reviews
- Passwords are stored securely using hashing (e.g., bcrypt) and never stored in plain text.
- Users can log out at any time.
- The system should allow users to recover their password via email (with a one-time link).
- Each user has a unique profile that shows:
  - Their name (optional)
  - List of forms they\u2019ve created
  - Summary of their average ratings across all reviews
- The login screen should be simple and secure \u2014 no social logins or third-party integrations.

Explain how this system protects user privacy and ensures that only authorized individuals can contribute to the evaluation database.
\`\`\`

---

### Title: Prompt \u2013 Feature 5: Add Snippets, Screenshots to the Existing Basic Form

\`\`\`markdown
I want to enhance the form so that users can add visual evidence or real-world examples to support their evaluations.

Describe how to add the ability for users to:

- Insert code snippets (e.g., before and after agent output) directly into the form
- Upload screenshots of the agent\u2019s interface, error messages, or generated code
- Add short descriptive notes for each visual (e.g., "This shows the agent correctly refactored the function")
- Embed images or code blocks in a clean, readable format (e.g., using markdown-style syntax or a simple image uploader)
- Allow users to tag or label each visual (e.g., "Error Handling", "Code Quality", "User Flow")

These visuals should be displayed alongside the text-based questions in the form, making it easier for other users to understand and verify the evaluation.

Explain how this improves transparency and trust in the reviews \u2014 especially for developers who want to see real examples of agent performance.
\`\`\`

---

### Title: Prompt \u2013 Feature 6: Demo Downloads/Section

\`\`\`markdown
I want reviewers to be able to upload a downloadable zip file that contains the source code for each step of their evaluation.

Describe how to implement a "Demo Download" section in the form with the following features:

- A button labeled "Upload Demo ZIP" that allows users to attach a compressed folder containing:
  - Source code files (e.g., \`.py\`, \`.js\`, \`.ts\`)
  - Screenshots or logs showing the agent\u2019s behavior
  - A \`README.md\` file explaining the steps of the evaluation
- The ZIP file is stored locally on the user\u2019s device and is only accessible to them (not shared publicly unless they choose to)
- Users can add a description of what the demo shows (e.g., "This shows how the agent generated a React component from a prompt")
- The demo section appears as a separate tab or section in the form, clearly labeled "Demo & Source Code"
- After upload, the system generates a preview of the ZIP file (e.g., listing the files inside) and allows users to download it again
- Users can remove or edit the demo at any time

This feature enables readers to verify the agent\u2019s performance by reviewing actual code changes, making evaluations more credible and actionable.
\`\`\``,tokens:1860}}},{role:"user",type:"Basic",meta:{tokens:80,included:!0,name:"User",contentselected:"1"},content:{1:{key:"1",content:`I also want a starter prompt for scaffolding the initial project as described below.  Frame it as a beginner coder prompting the agent:

 Multi-question form system for evaluating Agentic Coding solutions
Form.  Form contents will follow later.

Users would create a new form per platform/product they are evaluating
Users can view other user's reviews/product evaluations`,tokens:80}}},{role:"assistant",type:"Basic",meta:{tokens:342,included:!0,name:"HLPR",contentselected:"1"},content:{1:{key:"1",model:"qwen/qwen3-4b-2507",temperature:.5,system:`# Role
You are an assistant to a lead software developer who is evaluating agentic coding tools and platforms.  Your role is to consider and compose things from a novice's perspective.

# General Rules
- Each example prompt that is to be sent to an LLM must be delivered in the following format
    - a title to describe the prompt
    - the prompt in a Markdown code block`,content:`### Title: Prompt \u2013 Starter Prompt for Beginner Coder (Project Scaffolding)

\`\`\`markdown
I'm a beginner coder trying to build a simple web app to evaluate agentic coding platforms. I want to create a multi-question form system where users can:

- Create a new form for evaluating a specific agentic coding platform (like GitHub Copilot, Cursor, or Codeium)
- Fill out the form with questions about functionality, code quality, and user experience
- Save their form locally (no internet needed)
- View and read other users' reviews and evaluations of the same platform

I don't need it to be complex or fully featured right now \u2014 just a basic working prototype. I want to start small and build step by step.

Can you help me scaffold this project by giving me a clear, beginner-friendly plan with:

1. A simple project structure (folder layout)  
2. A list of the first 3 core features to build (in order)  
3. A basic description of what each feature should do  
4. Suggested tools or libraries to use (e.g., HTML, CSS, JavaScript, SQLite, local storage)  
5. A short step-by-step guide to get started (e.g., "Step 1: Create an index.html file...")

I'm not familiar with backend systems or databases yet \u2014 so keep it focused on front-end and local storage. I want to learn by doing, and I\u2019d like to be able to run this app in my browser without needing a server.

Just give me a clean, simple, and actionable starting point \u2014 like a roadmap for a first-time developer.
\`\`\``,tokens:342}}},{role:"user",type:"Basic",meta:{tokens:512,included:!0,name:"User",contentselected:"1"},content:{1:{key:"1",content:`what do you think about this prompt

\`\`\`
I need to add a fixed set of sections and questions to the forms so that each review has at least a partial set of consistent questions.  Add support for sections in the form template.  The form designer should be able to modify the set of fixed questions without code changes as the nature of reviews can change over time with changing priorities.  Below is the first section and questions for that section to include in the fixed set.

Section 1: Core Functionality  
- What are the primary tasks the agent can perform (e.g., code generation, debugging, refactoring)?  
- How well does the agent understand and follow user instructions?  
- Can it generate multiple solutions or alternatives to a problem?  
- Does it handle edge cases or unexpected inputs effectively?  
- How accurate is the generated code in producing expected results?

Section 2: Code Quality & Safety  
- Is the generated code clean, readable, and well-structured?  
- Does it follow best practices (e.g., naming, comments, error handling)?  
- Are there any security vulnerabilities or dangerous patterns (e.g., SQL injection, hardcoded secrets)?  
- Does the agent include appropriate documentation or comments?  
- How well does it handle type safety and edge cases?

Section 3: User Experience & Interaction  
- How intuitive is the interface for giving instructions to the agent?  
- How responsive is the agent in generating output?  
- Can users easily edit or refine their prompts and see changes in real time?  
- Does it provide clear feedback on progress or errors?  
- How easy is it to navigate between steps or views?

Section 4: Error Handling & Recovery  
- When an error occurs, does the agent explain the issue clearly?  
- Can it suggest a fix or alternative approach?  
- Does it retry or adapt when initial attempts fail?  
- How transparent is the agent about when it doesn\u2019t know the answer?  
- Does it provide a way to track or log failures?

Section 5: Integration & Customization  
- Can the agent integrate with common tools (e.g., GitHub, VS Code, terminal)?  
- Can users customize the agent\u2019s behavior (e.g., prompt templates, rules)?  
- Is there support for plugins or external APIs?  
- How easy is it to extend or modify the agent\u2019s capabilities?  
- Can it be used in a team or collaborative workflow?
\`\`\``,rendertime:{start:"2026-03-06T20:52:57.742Z",end:"2026-03-06T20:52:58.291Z",time:{full:"549ms",short:"549ms"}},tokens:512}}},{role:"assistant",type:"Basic",meta:{tokens:1124,included:!0,name:"HLPR",contentselected:"1"},content:{1:{key:"1",model:"qwen3.5:9b",temperature:.5,system:`# Role
You are an assistant to a lead software developer who is evaluating agentic coding tools and platforms.  Your role is to consider and compose things from a experienced developer's perspective.

# General Rules
- Each example prompt that is to be sent to an LLM must be delivered in the following format
    - a title to describe the prompt
    - the prompt in a Markdown code block`,content:`This is a strong starting point for defining the content of your evaluation forms. From an experienced developer's perspective, here is my analysis of the prompt you wrote, along with suggestions to make it more robust for implementation (especially if you are using an LLM to generate the code or logic).

### Critique & Analysis

**Strengths:**
*   **Clear Content:** The questions are specific and cover the essential dimensions of agentic coding (functionality, safety, UX, error handling, integration). This reduces ambiguity when building the form.
*   **Consistency Focus:** Explicitly asking for a "fixed set" ensures data comparability across different reviews, which is crucial for benchmarking platforms.
*   **Flexibility Requirement:** The request to modify questions "without code changes" correctly identifies the need for configuration-driven development (e.g., JSON schema or YAML config) rather than hardcoding HTML/DB columns.

**Areas for Improvement:**
1.  **"Without Code Changes" Implementation:** To an LLM or developer, this needs a specific technical definition. You should specify using a **JSON Schema** or **YAML file** stored in the project to define these questions. This allows the UI to read and render them dynamically.
2.  **Data Structure:** The prompt mentions modifying questions but doesn't specify how the data is stored. If you want to keep it local (as per Feature 3), the form definition should be a separate file (e.g., \`form_schema.json\`) rather than part of the database records themselves, or the DB schema needs to be flexible (JSONB).
3.  **UI Rendering:** The prompt implies the questions exist but doesn't explicitly tell the builder how they should appear on screen (e.g., "Render as a dynamic list based on the config file").
4.  **Versioning:** If priorities change over time, you might need version control for the form schema so that old reviews aren't broken by new question structures.

### Refined Prompt Suggestion

Below is a refined version of your prompt. I have added technical constraints regarding configuration files and data storage to ensure the LLM (or developer) knows exactly how to implement the "no code change" requirement using JSON/YAML.

\`\`\`markdown
I need to implement a dynamic form system where the core evaluation questions are defined by a configuration file, not hard-coded into the application logic. This allows us to update the evaluation criteria without rebuilding the app.

Please design the backend and frontend structure to support this:

1. **Configuration File:** Create a JSON schema file (e.g., \`form_schema.json\`) that holds the fixed set of sections and questions.
2. **Dynamic Rendering:** The UI must read this file and render the form fields dynamically. If I update the JSON, the new questions appear on the next load without code changes.
3. **Data Storage:** Store user answers in a SQLite database. Use a flexible schema (e.g., JSONB column or separate rows per question) to accommodate changing question sets over time.
4. **Content:** Include the following initial sections and questions in the configuration file:

   Section 1: Core Functionality  
   - What are the primary tasks the agent can perform (e.g., code generation, debugging, refactoring)?  
   - How well does the agent understand and follow user instructions?  
   - Can it generate multiple solutions or alternatives to a problem?  
   - Does it handle edge cases or unexpected inputs effectively?  
   - How accurate is the generated code in producing expected results?

   Section 2: Code Quality & Safety  
   - Is the generated code clean, readable, and well-structured?  
   - Does it follow best practices (e.g., naming, comments, error handling)?  
   - Are there any security vulnerabilities or dangerous patterns (e.g., SQL injection, hardcoded secrets)?  
   - Does the agent include appropriate documentation or comments?  
   - How well does it handle type safety and edge cases?

   Section 3: User Experience & Interaction  
   - How intuitive is the interface for giving instructions to the agent?  
   - How responsive is the agent in generating output?  
   - Can users easily edit or refine their prompts and see changes in real time?  
   - Does it provide clear feedback on progress or errors?  
   - How easy is it to navigate between steps or views?

   Section 4: Error Handling & Recovery  
   - When an error occurs, does the agent explain the issue clearly?  
   - Can it suggest a fix or alternative approach?  
   - Does it retry or adapt when initial attempts fail?  
   - How transparent is the agent about when it doesn't know the answer?  
   - Does it provide a way to track or log failures?

   Section 5: Integration & Customization  
   - Can the agent integrate with common tools (e.g., GitHub, VS Code, terminal)?  
   - Can users customize the agent's behavior (e.g., prompt templates, rules)?  
   - Is there support for plugins or external APIs?  
   - How easy is it to extend or modify the agent's capabilities?  
   - Can it be used in a team or collaborative workflow?

5. **UI/UX:** Ensure the form looks consistent even when questions change. Use icons or labels for each section to help users navigate.

Provide the code for the configuration file, the database schema logic to handle dynamic fields, and the frontend rendering logic.
\`\`\``,reasoning:`Thinking Process:

1.  **Analyze the Request:**
    *   **User's Goal:** The user wants my opinion on a specific prompt they've written.
    *   **Context:** This is part of a larger project to evaluate agentic coding platforms. The project involves creating a multi-question form system.
    *   **The Prompt in Question:** It asks for a "fixed set of sections and questions" but also wants the ability to modify them without code changes (configurable). It provides the specific content for 5 sections (Core Functionality, Code Quality & Safety, User Experience & Interaction, Error Handling & Recovery, Integration & Customization) with specific questions.
    *   **My Role:** I am an assistant to a lead software developer evaluating agentic coding tools. I need to respond from an experienced developer's perspective.
    *   **General Rules:** Each example prompt must be delivered in a specific format (Title + Markdown code block). However, this request is asking for my *opinion* on the prompt, not necessarily generating a new prompt for the LLM yet. Wait, looking at the "General Rules" section of the system instruction: "Each example prompt that is to be sent to an LLM must be delivered in the following format...". This usually applies when I am generating prompts *for* the user to send elsewhere. But here, the user is asking me ("what do you think about this prompt").
    *   **Interpretation:** The system instruction says "Each example prompt that is to be sent to an LLM must be delivered in the following format". This implies if I am generating a prompt *for* them to use, I should use that format. If I am critiquing their prompt, I should probably explain my thoughts clearly, but since I'm acting as an assistant helping them compose prompts, I should likely frame my response as feedback or a refined version. However, the instruction says "Each example prompt...". It doesn't explicitly forbid non-prompt responses, but the persona is "assistant to a lead software developer... composing things from an experienced developer's perspective."
    *   **Decision:** I will provide a critique/analysis of their prompt from the perspective of an experienced developer, highlighting strengths and potential weaknesses, and then offer a refined version or suggestions on how to optimize it for an LLM. I should probably wrap my final suggestion (if any) in the required format, but since they are asking for an opinion, I'll provide the analysis first, then perhaps a "Revised Prompt" option if needed, or just keep the critique clear. Actually, looking at the instruction "Each example prompt that is to be sent to an LLM must be delivered in the following format", this applies to *prompts I generate*. If I'm just giving advice, I don't necessarily need to wrap the advice in a code block unless I'm generating a new prompt for them.
    *   **Refinement:** To stay safe and helpful, I will provide the critique in normal text (as it's an opinion) but if I suggest a revised prompt, I will use the format. Actually, the instruction says "Each example prompt that is to be sent to an LLM". This implies my output should generally follow the format if I'm providing a prompt. But here I'm evaluating *their* prompt. I'll structure my response as a professional critique, and perhaps offer a refined version of their prompt in the required format at the end, or just keep it conversational but high-quality.
    *   **Wait, re-reading the system instruction:** "Each example prompt that is to be sent to an LLM must be delivered in the following format". This is a constraint on *my* output if I am generating a prompt for them. If I am just chatting/critiquing, does it apply? Usually, these constraints are strict for the task of "composing prompts". Since the user is asking "what do you think about this prompt", they want feedback. I should provide feedback. To be safe and adhere to the persona (experienced developer), I will give a structured critique. I will not wrap the entire response in a code block unless I am providing a *new* prompt for them to use. However, to ensure compliance with the "format" rule which might be interpreted strictly ("Each example prompt..."), I should check if my response counts as an "example prompt". It doesn't. It's feedback. But often, these system instructions mean "When you are outputting a prompt, use this format".
    *   **Better approach:** I will provide the critique in plain text (as it's advice), but if I suggest a revised version of the prompt to send to an LLM, I will use the code block format for that specific suggestion. This balances helpfulness with compliance.
    *   **Wait, one more check:** The instruction says "Each example prompt that is to be sent to an LLM must be delivered in the following format". It doesn't say "Your entire response must be in this format". It says "Each example prompt". So if I'm writing feedback, that's fine. If I write a new prompt for them, it must be in the format.
    *   **Plan:**
        1.  Acknowledge the prompt's intent (fixed questions + configurability).
        2.  Analyze strengths (clear content, specific sections).
        3.  Identify potential weaknesses/ambiguities (how to handle "without code changes" - JSON config? Database schema?), context for the AI agent building this.
        4.  Suggest improvements (e.g., defining the data structure, handling dynamic forms).
        5.  Offer a refined version of the prompt in the required format if I think it would be useful for them to send to an LLM to implement this feature.

    *   **Wait, looking at the user's input:** They pasted a prompt they intend to use (or have used). They want my opinion.
    *   **My Persona:** Experienced developer assistant.
    *   **Tone:** Professional, constructive, technical but accessible.
    *   **Constraint Check:** If I generate a new prompt for them based on my advice, I must use the Title + Code Block format. I will do that for the "Revised Prompt" suggestion to be safe and compliant.

    *   **Critique Points:**
        1.  **Configurability:** The user wants "without code changes". This implies a configuration file (JSON/YAML) or a schema definition. The prompt needs to specify *how* this is stored (e.g., \`schema.json\`).
        2.  **Dynamic vs Fixed:** The prompt says "fixed set" but also "modify... without code changes". This is slightly contradictory terminology. Better to say "Core Schema" that can be versioned or configured.
        3.  **UI/UX:** How will the user see these questions? The prompt should mention rendering logic.
        4.  **Scalability:** What if they want to add custom sections later? The prompt mentions "fixed set" but implies changeability. Need to clarify if *only* fixed or fixed + custom.
        5.  **LLM Clarity:** If this is for an LLM to build the feature, the prompt needs to be more specific about the implementation strategy (e.g., "Use a JSON schema file to define questions").

    *   **Action:** I will provide a detailed critique and then offer an optimized version of the prompt in the required format.

2.  **Drafting the Response:**
    *   Start with a positive reinforcement (it's clear, well-structured).
    *   Point out the "without code changes" requirement needs technical implementation details (JSON config, DB schema).
    *   Suggest adding instructions on how the UI should handle these dynamic questions.
    *   Provide the refined prompt in the required format.

3.  **Final Polish:** Ensure the output matches the requested format for any prompts I generate. Since I am generating a "Revised Prompt" suggestion, I will use the format for that part. For the critique text, I will write normally.

    *Wait, actually:* The instruction says "Each example prompt that is to be sent to an LLM must be delivered in the following format". It doesn't say "Your entire response must be a code block". So I can write normal text for the critique, and then put the refined prompt in the code block.

    *Wait, looking at the instruction again:* "Each example prompt that is to be sent to an LLM must be delivered in the following format - a title to describe the prompt - the prompt in a Markdown code block".
    Okay, so if I output a prompt for them to use, it must be in that format. If I'm just talking, it's fine.
    However, to be most helpful and consistent with the persona, I will structure my feedback clearly, and then provide the "Optimized Prompt" in the required format at the end.

    *Wait, one nuance:* The user asked "what do you think about this prompt". They want an opinion. I shouldn't just output a prompt. I should explain *why* it's good/bad.
    Okay, I'll write the critique first, then offer the improved version in the code block format if they decide to use it.

    *Wait, checking the instruction again:* "Each example prompt that is to be sent to an LLM must be delivered in the following format". This implies *if* I am sending a prompt. The user's input is not a prompt for me (it's a request). My output contains advice. If I include a suggested prompt, it must follow the format.
    Okay, I will write the critique in normal text, and then provide a "Refined Prompt" option in the code block format.

    *Wait, actually:* The system instruction is quite strict: "Each example prompt that is to be sent to an LLM must be delivered in the following format". This might mean *all* my outputs should follow this if they are prompts. But I am not sending a prompt to an LLM here (I am the AI). I am responding to the user. The user wants me to evaluate their prompt.
    Okay, I will interpret "Each example prompt" as "If you generate a prompt for the user".
    So, Critique = Normal text. Suggested Prompt = Code Block with Title.

    Let's refine the critique:
    1.  **Strengths:** Clear content, specific questions, good coverage of agent capabilities.
    2.  **Weaknesses:** "Without code changes" is vague for an LLM implementation (needs JSON schema). Needs to specify how the UI renders these. Needs to handle versioning if priorities change.
    3.  **Suggestion:** Add instructions on data structure (JSON/YAML) and UI rendering logic.

    Let's draft the response.

    *Self-Correction:* The instruction says "Each example prompt that is to be sent to an LLM must be delivered in the following format". This is a constraint on *my* behavior when generating prompts. It doesn't mean I can't write normal text. However, to be safe and consistent with the "Assistant" persona who helps compose prompts, I will ensure any *new prompt* I suggest follows the rules.

    Okay, plan:
    1.  Critique in plain text.
    2.  Offer a refined version of their prompt (for them to send to an LLM) in the required format.

    Wait, I should check if the user wants me to *act* as the LLM receiving this prompt? No, they are asking me ("what do you think"). So I am the expert.
    Okay, I'll proceed with the critique + refined prompt approach.

    *Wait, one more thing:* The instruction says "Each example prompt that is to be sent to an LLM must be delivered in the following format". It doesn't say I can't write normal text. But often these constraints are meant to ensure consistency. I will write the critique normally, and then provide the refined prompt in the code block.

    Actually, looking at previous turns in the conversation (the user provided prompts for features 1-6), they want me to compose prompts *for them*. Now they are asking for my opinion on a specific text.
    I will provide the analysis and then a polished version of their prompt that they can use to instruct an LLM to build this feature.

    Let's make sure the refined prompt is high quality.
    It should tell the LLM:
    - Use a JSON schema for questions.
    - Store in DB or file.
    - Render dynamically.
    - Keep the content provided.

    Okay, ready to write.

    Wait, I need to make sure I don't violate the "format" rule if I output a prompt. The rule says "Each example prompt that is to be sent to an LLM". So if I write a prompt for them to send elsewhere, it must be in the format.
    Okay.

    Let's start the response.
    Structure:
    1. Introduction (Positive feedback).
    2. Technical Analysis (What works, what needs clarification).
    3. Suggestions (JSON config, UI rendering, Versioning).
    4. Refined Prompt (In the required format).

    Wait, I should check if I need to wrap the *entire* response in a code block? No, "Each example prompt...". So only the prompts.
    Okay.

    One more thing: The user's prompt text is quite long. I should summarize it in my critique.
    Okay.
    Let's go.`,rendertime:{start:"2026-03-06T20:52:58.311Z",end:"2026-03-06T20:54:01.119Z",time:{full:"01m:02s:808ms",short:"01m:02s"}},tokens:1124}}}]},s=u;var i=[e,t,n,o,a,s];Object.freeze(i);var C=i;export{C as default};
