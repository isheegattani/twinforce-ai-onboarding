**# TwinForce: AI RampUp Buddy**

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
![Architecture](./A_diagram_created_in_a_digital_vector_graphic_medi.png)

#### 💬 Slack Slash Command
![Slash Command](./A_digital_screenshot_displays_the_%22Create_New_Comm.png)

#### ⚙️ Render Deployment
![Render Logs](./A_digital_screenshot_displays_a_Render_web_service.png)

#### 👋 Bot Welcome Flow
![Bot Welcome](./A_digital_screenshot_shows_a_Salesforce_Einstein_B.png)

#### ⛔ No Agent Response
![No Agent](./file-JBTWsyod7xY8n6EvuVJDKj.png) <!-- Replace with saved version if uploaded separately -->

---

### What We’d Do With More Time
- Fully automate Slack user onboarding workflow
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

**Note:** TwinForce was developed for the Salesforce Agentforce Hackathon 2025. Slack integration is mocked due to workspace install restrictions, but backend functionality is fully implemented and demonstrated via live Render server.
