# TwinForce: AI RampUp Buddy

### Overview
TwinForce is your AI-powered onboarding assistant that mimics a high-performing teammate. It helps new hires ramp up faster by providing personalized guidance, answering onboarding questions, and offering contextual nudges—integrated seamlessly with Salesforce and Slack.

---

### Problem
New employees often struggle with information overload, inconsistent onboarding experiences, and a lack of immediate support. Managers, on the other hand, are stretched thin and unable to offer personalized onboarding at scale.

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

**TwinForce System Flow:**

- **Slack Bot**: User interface where the new hire interacts via natural language.
- **Agentforce (Salesforce)**: Handles logic and orchestrates onboarding tasks.
- **Salesforce Data Cloud**: Stores personalized onboarding content, user profile, and progress.
- **RAG (Retrieval-Augmented Generation)**: Provides intelligent answers grounded in internal knowledge base (policies, docs, etc.).

```plaintext
[User - Slack]
     ⇅
[Slack Bot]
     ⇅
[Agentforce Agent]
     ⇅                      ⇅
[Data Cloud]        [RAG Knowledge Base]


---

### Features
- **Slack Integration**: Conversational onboarding experience for new hires.
- **Agent Builder**: Logic defined using Salesforce Agentforce framework.
- **Salesforce Data Cloud**: Stores and retrieves onboarding content, user profile data.
- **Retrieval-Augmented Generation**: Delivers smart, context-aware responses to questions.
- **Progress Tracker**: Visualize ramp-up progress; alert managers about blockers.

---

### Tech Stack
- Salesforce Agentforce
- Salesforce Data Cloud
- Slack SDK
- Retrieval-Augmented Generation (RAG)
- Notion (for initial knowledge base)

---

### Screenshots (To Be Added)
- Agent Builder setup screen
- Slack chat example
- Progress dashboard mock
- Architecture diagram

---

### What We’d Do With More Time
- Add multilingual and accessibility support
- Connect to LinkedIn Learning and Trailhead
- Expand for cross-functional onboarding (Sales, Eng, HR)
- Add sentiment analysis for employee wellness

---

### Submission Info (For Devpost)
- **Project Title**: AI RampUp Buddy
- **Tagline**: Your AI twin that accelerates onboarding and builds confidence.
- **Built With**: Agentforce, Slack, Data Cloud, RAG, Salesforce Platform
- **Demo Video**: [Insert YouTube link]

---

### Contact
**Mayank Jain**  
Email: mayankja09@gmail.com  
LinkedIn: [https://www.linkedin.com/in/manuj4u/](https://www.linkedin.com/in/manuj4u/)  

**Ishee Gattani**  
Email: ishee.gattani30@gmail.com  
LinkedIn: [https://www.linkedin.com/in/isheegattani/](https://www.linkedin.com/in/isheegattani/)


---

**Note:** TwinForce is a submission to the Salesforce Agentforce Virtual Hackathon (2025) and is currently in development. The org provisioning issue has been reported, and we're still building around this limitation to demonstrate value.

