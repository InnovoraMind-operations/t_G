/**
 * ============================================================================
 * TechryonGlobal Industrial Hackathon 2026 — Google Form Auto-Generator
 * ============================================================================
 * 
 * HOW TO USE:
 * 1. Open Google Drive (drive.google.com) or Google Apps Script (script.google.com).
 * 2. Click "New Project" (+ icon).
 * 3. Delete any default code in Code.gs, paste this entire script, and click "Save".
 * 4. Click "Run" at the top toolbar (authorize permissions when prompted).
 * 5. Check the "Execution log" at the bottom — your live Google Form links will be printed!
 */

function createIndustrialHackathonForm() {
  // 1. Create the Form
  var formTitle = "TechryonGlobal Industrial Hackathon 2026 — Official Registration";
  var form = FormApp.create(formTitle);

  // 2. Set Description and Settings
  var description = 
    "International Online Virtual Hackathon | 27 September 2026\n" +
    "Theme: Industry 5.0, Smart Manufacturing & Industrial AI\n" +
    "Organized & Hosted by: Techryon Global (https://www.techryonglobal.com)\n\n" +
    "Target Audience: Developers, engineers, researchers, professors, and startups worldwide.\n\n" +
    "Please complete this official registration form. A confirmation email and Discord collaboration workspace invitation will be sent to your registered email address.";

  form.setDescription(description);
  form.setConfirmationMessage(
    "Thank you for registering for the TechryonGlobal Industrial Hackathon 2026!\n\n" +
    "Your registration has been successfully recorded. You will receive an email with event access links, Discord server onboarding, and briefing documents.\n\n" +
    "For inquiries, contact: inquiries@techryonglobal.com"
  );
  form.setAllowResponseEdits(true);
  form.setPublishingSummary(false);
  form.setShowLinkToRespondAgain(false);

  // =========================================================================
  // SECTION 1: PARTICIPANT / LEAD INFORMATION
  // =========================================================================
  
  // Full Name
  form.addTextItem()
    .setTitle("1. Full Name")
    .setHelpText("Enter your full legal or professional name.")
    .setRequired(true);

  // Professional Email
  var emailItem = form.addTextItem()
    .setTitle("2. Professional / Primary Email Address")
    .setHelpText("All hackathon access links, credentials, and schedule notifications will be dispatched here.")
    .setRequired(true);

  // Phone / WhatsApp
  form.addTextItem()
    .setTitle("3. Contact Number / WhatsApp (with Country Code)")
    .setHelpText("e.g. +1 415 555 0132 or +91 98765 43210")
    .setRequired(true);

  // Country of Residence
  form.addTextItem()
    .setTitle("4. Country / Location")
    .setHelpText("Specify your current country and city.")
    .setRequired(true);

  // Organization / Institution
  form.addTextItem()
    .setTitle("5. Company / University / Research Institution")
    .setHelpText("Name of your current organization, lab, university, or startup.")
    .setRequired(true);

  // Current Role / Profile
  form.addListItem()
    .setTitle("6. Your Primary Role / Professional Background")
    .setHelpText("Select the category that best describes your background.")
    .setChoiceValues([
      "Software Developer / Systems Architect",
      "Robotics / Embedded / Hardware Engineer",
      "AI / Machine Learning Engineer",
      "Researcher / Research Scholar",
      "Professor / University Faculty Member",
      "Startup Founder / Tech Lead",
      "Industrial / Automation Professional",
      "Product Designer / UI-UX Specialist",
      "Other"
    ])
    .setRequired(true);

  // LinkedIn Profile
  form.addTextItem()
    .setTitle("7. LinkedIn Profile URL")
    .setHelpText("e.g. https://www.linkedin.com/in/username")
    .setRequired(true);

  // GitHub / Portfolio
  form.addTextItem()
    .setTitle("8. GitHub Profile / Technical Portfolio URL")
    .setHelpText("Optional but highly recommended for developers and engineers.")
    .setRequired(false);

  // =========================================================================
  // SECTION 2: PARTICIPATION CATEGORY & TEAM DETAILS
  // =========================================================================
  form.addPageBreakItem()
    .setTitle("Participation Category & Team Composition")
    .setHelpText("You may participate as an individual or in a collaborative team of 1 to 5 members.");

  // Individual or Team
  form.addMultipleChoiceItem()
    .setTitle("9. Are you participating individually or as part of a team?")
    .setChoiceValues([
      "Individual Participant (1 Member)",
      "Team (2 to 5 Members)"
    ])
    .setRequired(true);

  // Team Name
  form.addTextItem()
    .setTitle("10. Team Name (if participating as a team)")
    .setHelpText("Leave blank or write 'N/A' if participating individually.")
    .setRequired(false);

  // Number of Members
  form.addListItem()
    .setTitle("11. Total Number of Team Members")
    .setChoiceValues(["1 (Solo)", "2", "3", "4", "5"])
    .setRequired(true);

  // Team Members Details
  form.addParagraphTextItem()
    .setTitle("12. Team Members' Names, Emails & Roles")
    .setHelpText("If participating as a team, please list each additional member's Full Name, Email Address, and Role (e.g., '1. Alice Smith - alice@email.com - ML Engineer'). If solo, enter 'N/A'.")
    .setRequired(true);

  // =========================================================================
  // SECTION 3: INDUSTRIAL CHALLENGE TRACK
  // =========================================================================
  form.addPageBreakItem()
    .setTitle("Industrial Challenge Track Selection")
    .setHelpText("Select the primary track your project aligns with.");

  // Track Selection
  form.addMultipleChoiceItem()
    .setTitle("13. Select Your Primary Challenge Track")
    .setHelpText("Select one primary track for project evaluation.")
    .setChoiceValues([
      "Track 1: Industry 5.0 & Human-Centric Automation (Cobots, Wearables, Ergonomics)",
      "Track 2: Industrial IoT, Sensor Telemetry & Edge AI (OPC-UA, Low-Latency Anomaly Detection)",
      "Track 3: Digital Twins & Predictive Maintenance (PdM) (RUL Models, Simulation)",
      "Track 4: Autonomous Mobile Robots (AMR) & Intralogistics (SLAM, Fleet Coordination)",
      "Track 5: Industrial Cybersecurity & OT/SCADA Defense (Zero Trust, PLC Security)",
      "Track 6: Sustainable Manufacturing & Energy Optimization (Decarbonization, Green Factories)",
      "Track 7: Generative AI & LLMs for Industrial Engineering (PLC synthesis, CAD, Schematics)"
    ])
    .setRequired(true);

  // Project Idea
  form.addParagraphTextItem()
    .setTitle("14. Preliminary Project Idea / Problem Statement (Optional)")
    .setHelpText("Briefly describe the industrial problem you intend to solve and your proposed technical solution.")
    .setRequired(false);

  // Planned Tech Stack
  form.addCheckboxItem()
    .setTitle("15. Technologies & Tooling Planned for Your Project")
    .setChoiceValues([
      "Python / PyTorch / TensorFlow",
      "ROS2 / Robotics Simulation (Gazebo, Isaac Sim)",
      "C++ / Rust / Embedded Firmware",
      "Edge AI Nodes (NVIDIA Jetson, Coral, Raspberry Pi)",
      "Industrial Protocols (OPC-UA, MQTT, Modbus, PROFINET)",
      "Cloud & Data Pipelines (AWS / Azure / GCP / Kafka)",
      "Digital Twin Platforms (Unity, Unreal Engine, Blender)",
      "Web / Mobile Interfaces (React, Next.js, Node.js)",
      "Other"
    ])
    .setRequired(false);

  // =========================================================================
  // SECTION 4: ROLE CONFIRMATION & DECLARATION
  // =========================================================================
  form.addPageBreakItem()
    .setTitle("Role Confirmation & Professional Agreement")
    .setHelpText("Final declarations and agreements.");

  // Applied Role
  form.addMultipleChoiceItem()
    .setTitle("16. Role for Which You Are Registering")
    .setChoiceValues([
      "Hackathon Competitor / Team Member",
      "Industry Judge / Evaluation Panelist (Subject to Committee Review)",
      "Keynote Speaker / Session Host",
      "Academic / Industry Partner Representative"
    ])
    .setRequired(true);

  // Virtual Platform Consent
  form.addCheckboxItem()
    .setTitle("17. Platform & Communication Consent")
    .setChoiceValues([
      "I agree to join the official TechryonGlobal Discord/Slack workspace for hackathon announcements, mentor office hours, and project submission guidelines."
    ])
    .setRequired(true);

  // Originality & Code of Conduct
  form.addCheckboxItem()
    .setTitle("18. Code of Conduct & Originality Declaration")
    .setChoiceValues([
      "I agree to adhere to the TechryonGlobal code of conduct, maintain professional sportsmanship, and ensure that all submitted source code is original work created during or for this competition."
    ])
    .setRequired(true);

  // =========================================================================
  // 4. Log URLs for User
  // =========================================================================
  Logger.log("====================================================================");
  Logger.log("🎉 TechryonGlobal Industrial Hackathon 2026 Google Form Created!");
  Logger.log("====================================================================");
  Logger.log("Form Title : " + form.getTitle());
  Logger.log("Edit URL   (to edit your form)       : " + form.getEditUrl());
  Logger.log("Public URL (to share with attendees) : " + form.getPublishedUrl());
  Logger.log("====================================================================");
}
