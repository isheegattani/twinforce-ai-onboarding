# TwinForce: AI RampUp Buddy

### Overview
TwinForce is your AI-powered onboarding assistant that mimics a high-performing teammate. It helps new hires ramp up faster by providing personalized guidance, answering onboarding questions, and offering contextual nudges—integrated seamlessly with Salesforce and Slack.

---

### Problem
New employees often struggle with information overload, inconsistent onboarding experiences, and lack of immediate support. Managers, on the other hand, are stretched thin and unable to offer personalized onboarding at scale.

---

### Solution
TwinForce provides each new hire with an AI twin—an onboarding buddy trained on the journey of top-performing peers. It provides:
- Daily onboarding tasks
- Instant answers to FAQs via Slack
- Personalized resource suggestions
- Meeting reminders and progress nudges
- Manager dashboard with ramp-up insights

---

### Architecture Diagram
![Architecture](./A_diagram_created_in_a_digital_vector_graphic_medi.png)

---

### Slack-to-Agentforce Integration Flow
This illustrates how Slack commands trigger backend logic, which communicates with Salesforce Agentforce and optionally uses RAG for knowledge-based responses.
![Slack Integration](./A_diagram_illustrates_the_integration_workflow_bet.png)

---

### Features
- **Slack Integration**: Conversational onboarding experience using the `/twinforce` command.
- **Agent Builder**: Logic defined in Salesforce Agentforce via Einstein Bot.
- **Salesforce Data Cloud**: Stores and retrieves onboarding content and profile data.
- **Retrieval-Augmented Generation**: Delivers smart, context-aware responses.
- **Progress Tracker**: Visualize ramp-up progress; alert managers about blockers.

---

### Tech Stack
- Salesforce Einstein Bot Builder (Agentforce)
- Salesforce Data Cloud
- Slack (Custom Slash Command)
- Node.js + Express (Backend on Render)
- Retrieval-Augmented Generation (RAG)
- Notion / Google Docs (Mock KB)

---

### Screenshots
#### 🧠 Architecture
<img width="372" alt="image" src="https://github.com/user-attachments/assets/1c7a4e9a-aaee-4359-af3f-c336c55c7ffd" />

#### 💬 Slack Slash Command
<img width="364" alt="image" src="https://github.com/user-attachments/assets/177e85bd-afe0-4946-a685-92817bd313ba" />

#### ⚙️ Render Deployment
<img width="1444" alt="image" src="https://github.com/user-attachments/assets/705a2087-f038-43b2-b638-e8c5b37b6023" />

#### 👋 Bot Welcome Flow
<img width="1448" alt="image" src="https://github.com/user-attachments/assets/e1abbb2d-9a0e-4170-895e-9940d6b5e455" />

#### ⛔ No Agent Response
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/fc09c651-61f2-4cf0-8fff-2fc8e74fc1b8" />

---

### What We’d Do With More Time
- Train TwinForce using onboarding documents like Confluence pages, team architecture diagrams, service wikis, and knowledge transfer materials so new joiners can get technical context directly within Slack
- Fully automate Slack user onboarding workflow
- Integrate with Trailhead & LinkedIn Learning
- Add sentiment tracking & AI nudges
- Expand for multiple onboarding types (HR, Sales, Engineering) Train TwinForce using technical onboarding materials like Confluence wikis, architecture diagrams, service documentation, and team workflows
- Fully automate Slack user onboarding workflow
- Integrate with Trailhead & LinkedIn Learning
- Add sentiment tracking & AI nudges
- Expand for multiple onboarding types (HR, Sales, Engineering) Fully automate Slack user onboarding workflow
- Integrate with Trailhead & LinkedIn Learning
- Add sentiment tracking & AI nudges
- Expand for multiple onboarding types (HR, Sales, Engineering)

---

### Submission Info (For Devpost)
- **Project Title**: AI RampUp Buddy
- **Tagline**: Your AI twin that accelerates onboarding and builds confidence.
- **Built With**: Agentforce, Slack, Data Cloud, RAG, Render, GitHub
- **Backend URL**: https://twinforce-ai-onboarding.onrender.com
- **Slash Command**: `/twinforce` (Mocked if app not installed)

---

### Contact
**Mayank Jain**  
Email: mayankja09@gmail.com  
LinkedIn: [https://www.linkedin.com/in/manuj4u/](https://www.linkedin.com/in/manuj4u/)

**Ishee Gattani**  
Email: ishee.gattani30@gmail.com  
LinkedIn: [https://www.linkedin.com/in/isheegattani/](https://www.linkedin.com/in/isheegattani/)

GitHub Repo: [https://github.com/isheegattani/twinforce-ai-onboarding](https://github.com/isheegattani/twinforce-ai-onboarding)

---

**Note:** TwinForce was developed for the Salesforce Agentforce Hackathon 2025. Slack integration is mocked due to workspace install restrictions, but backend functionality is fully implemented and demonstrated via a live Render server.
