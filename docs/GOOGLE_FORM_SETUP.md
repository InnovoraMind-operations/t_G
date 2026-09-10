# TechryonGlobal Industrial Hackathon 2026 — Google Form Setup Guide

This guide provides everything needed to deploy the official Google Form for the **TechryonGlobal Industrial Hackathon 2026**.

---

## Method 1: Instant 1-Click Auto-Creation (Recommended)

You don't need to manually type 18 questions! A Google Apps Script has been prepared at [`scripts/create_google_form.gs`](file:///d:/t_G/scripts/create_google_form.gs).

### Steps:
1. Open your browser and go to: **[script.google.com](https://script.google.com/home/start)**
2. Click **+ New project** (top-left).
3. In the code editor, delete any existing code.
4. Copy and paste the entire script from [`d:/t_G/scripts/create_google_form.gs`](file:///d:/t_G/scripts/create_google_form.gs).
5. Click the **Save** icon (Floppy disk), then click **Run** on the top toolbar.
6. When prompted, click **Review permissions** and sign in with your Google account.
7. Once finished (about 3 seconds), look at the **Execution log** at the bottom. You will see:
   ```
   ====================================================================
   🎉 TechryonGlobal Industrial Hackathon 2026 Google Form Created!
   ====================================================================
   Edit URL   : https://docs.google.com/forms/d/.../edit
   Public URL : https://docs.google.com/forms/d/e/.../viewform
   ====================================================================
   ```
8. The Google Form is now created directly inside your Google Drive!

---

## Method 2: Manual Creation Specification

If you prefer building it manually on **[forms.google.com](https://forms.google.com)**, use the specification below:

### Form Header
- **Title**: `TechryonGlobal Industrial Hackathon 2026 — Official Registration`
- **Description**:
  > International Online Virtual Hackathon | 27 September 2026  
  > Theme: Industry 5.0, Smart Manufacturing & Industrial AI  
  > Organized & Hosted by: Techryon Global (https://www.techryonglobal.com)  
  > 
  > Open worldwide to developers, engineers, researchers, professors, and startups.  
  > Please complete this registration form to confirm your participation, team details, or role.

---

### Section 1: Participant Information
1. **Full Name** — *Short answer* `[Required]`
2. **Professional / Primary Email Address** — *Short answer* `[Required]`
3. **Contact Number / WhatsApp (with Country Code)** — *Short answer* `[Required]`
4. **Country & City** — *Short answer* `[Required]`
5. **Company / University / Research Institution** — *Short answer* `[Required]`
6. **Primary Role / Background** — *Dropdown* `[Required]`
   - Software Developer / Systems Architect
   - Robotics / Embedded / Hardware Engineer
   - AI / Machine Learning Engineer
   - Researcher / Research Scholar
   - Professor / University Faculty Member
   - Startup Founder / Tech Lead
   - Industrial / Automation Professional
   - Product Designer / UI-UX Specialist
   - Other
7. **LinkedIn Profile URL** — *Short answer* `[Required]`
8. **GitHub Profile / Technical Portfolio URL** — *Short answer* `[Optional]`

---

### Section 2: Team Composition
9. **Participation Mode** — *Multiple choice* `[Required]`
   - Individual Participant (1 Member)
   - Team (2 to 5 Members)
10. **Team Name** — *Short answer* `[Optional]`
11. **Total Number of Team Members** — *Dropdown* `[Required]`
    - 1 (Solo)
    - 2
    - 3
    - 4
    - 5
12. **Team Members' Names, Emails & Roles** — *Paragraph* `[Required]`
    *(Enter "N/A" if solo)*

---

### Section 3: Industrial Challenge Track
13. **Primary Challenge Track** — *Multiple choice* `[Required]`
    - Track 1: Industry 5.0 & Human-Centric Automation (Cobots, Wearables)
    - Track 2: Industrial IoT, Sensor Telemetry & Edge AI (OPC-UA, Low Latency)
    - Track 3: Digital Twins & Predictive Maintenance (PdM) (RUL Models, Simulation)
    - Track 4: Autonomous Mobile Robots (AMR) & Intralogistics (SLAM, Fleet)
    - Track 5: Industrial Cybersecurity & OT/SCADA Defense (Zero Trust, PLC Security)
    - Track 6: Sustainable Manufacturing & Energy Optimization (Decarbonization, Green Factories)
    - Track 7: Generative AI & LLMs for Industrial Engineering (PLC synthesis, CAD)
14. **Preliminary Project Idea / Problem Statement** — *Paragraph* `[Optional]`
15. **Planned Tech Stack** — *Checkboxes* `[Optional]`
    - Python / PyTorch / TensorFlow
    - ROS2 / Robotics Simulation (Gazebo, Isaac Sim)
    - C++ / Rust / Embedded Firmware
    - Edge AI Nodes (NVIDIA Jetson, Coral, Raspberry Pi)
    - Industrial Protocols (OPC-UA, MQTT, Modbus)
    - Cloud & Data Pipelines (AWS / Azure / GCP)
    - Digital Twin Platforms (Unity, Unreal Engine, Blender)
    - Web / Mobile Dashboards (React, Next.js, Node.js)
    - Other

---

### Section 4: Role Confirmation & Declarations
16. **Role Applied For** — *Multiple choice* `[Required]`
    - Hackathon Competitor / Team Member
    - Industry Judge / Evaluation Panelist
    - Keynote Speaker / Session Host
    - Academic / Industry Partner Representative
17. **Virtual Platform Consent** — *Checkboxes* `[Required]`
    - [x] I agree to join the official TechryonGlobal Discord/Slack workspace for hackathon announcements, mentor office hours, and project submission guidelines.
18. **Code of Conduct Declaration** — *Checkboxes* `[Required]`
    - [x] I agree to adhere to the TechryonGlobal code of conduct, maintain professional sportsmanship, and ensure that all submitted source code is original work created for this competition.

---

## Linking Form to Website

Once your Google Form is created, copy its share link (e.g. `https://forms.gle/XXXXX`) and update `GOOGLE_FORM_URL` in [`src/components/events/HackathonSections.jsx`](file:///d:/t_G/src/components/events/HackathonSections.jsx).
