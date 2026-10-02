export const servicesData = [
  {
    "id": "srv_web",
    "title": "Web Development & Digital Platforms",
    "overview": "We architect scalable, high-performance web applications that serve as the operational backbone for modern enterprises. Moving beyond static brochures, we build composable, API-first ecosystems that integrate seamlessly with your existing infrastructure, prioritizing edge-rendering for instant load times and strict type safety for zero-defect deployments.",
    "keyOfferings": [
      { "title": "Composable Architecture", "description": "Decoupling frontend presentation from backend logic using Headless CMS and serverless microservices." },
      { "title": "Progressive Web Apps (PWAs)", "description": "App-like experiences with offline capabilities, push notifications, and hardware acceleration." },
      { "title": "Performance Optimization", "description": "Rigorous adherence to Core Web Vitals, utilizing edge caching and intelligent asset hydration." }
    ],
    "techStack": ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Astro"]
  },
  {
    "id": "srv_data",
    "title": "Data Science & Big Data Analytics",
    "overview": "Transform your raw enterprise telemetry into a strategic asset. Our data science pipelines ingest massive, unstructured datasets and apply advanced statistical modeling to uncover hidden patterns. We specialize in complex time-series forecasting and predictive analytics to drive proactive, rather than reactive, business decisions.",
    "keyOfferings": [
      { "title": "Predictive Modeling", "description": "Deploying hybrid neural network architectures for highly accurate forecasting." },
      { "title": "Distributed Data Pipelines", "description": "Building robust, low-latency ETL/ELT pipelines using distributed processing frameworks." },
      { "title": "Interactive Executive Dashboards", "description": "Real-time data visualization platforms translating complex metrics into actionable insights." }
    ],
    "techStack": ["Python", "TensorFlow", "Pandas", "TCN-LSTM", "Apache Kafka", "PostgreSQL", "Apache Spark"]
  },
  {
    "id": "srv_ai",
    "title": "AI / ML Integration & Agentic Systems",
    "overview": "Deploy intelligent automation securely within your corporate firewall. We build custom artificial intelligence solutions, focusing on agentic workflows and parameter-efficient fine-tuning (PEFT) of foundational models. Our integrations allow LLMs to securely query your proprietary data without exposing it to public networks.",
    "keyOfferings": [
      { "title": "Retrieval-Augmented Generation (RAG)", "description": "Grounding large language models in your specific corporate documents and databases." },
      { "title": "Autonomous Agentic Workflows", "description": "Developing multi-agent AI systems capable of multi-step reasoning, tool usage, and API execution." },
      { "title": "Computer Vision & Edge Inferencing", "description": "Implementing real-time image and video analysis for industrial quality control and automated surveillance." }
    ],
    "techStack": ["PyTorch", "LangChain", "Vercel AI SDK", "Pinecone", "Hugging Face", "Ollama", "FastAPI"]
  },
  {
    "id": "srv_cloud",
    "title": "Cloud Computing & Cloud-Native Infra",
    "overview": "Achieve high-availability and elastic scaling through immutable infrastructure. We design and migrate monolithic systems to cloud-native, containerized topologies. Our focus on infrastructure-as-code ensures that your environments are reproducible, self-healing, and optimized for minimal operational expenditure.",
    "keyOfferings": [
      { "title": "Container Orchestration", "description": "Deploying and managing microservices using Kubernetes and advanced service meshes (Istio/Linkerd)." },
      { "title": "CI/CD & GitOps Automation", "description": "Building zero-downtime deployment pipelines with automated testing and instant rollback protocols." },
      { "title": "Serverless Architectures", "description": "Event-driven compute solutions that scale automatically and eliminate server provisioning." }
    ],
    "techStack": ["AWS", "Google Cloud", "Kubernetes", "Docker", "Terraform", "GitHub Actions", "ArgoCD"]
  },
  {
    "id": "srv_cyber",
    "title": "Cybersecurity & Zero-Trust Defense",
    "overview": "Protect your digital attack surface with proactive, intelligence-driven defense. We move beyond perimeter security, implementing zero-trust architectures and automated heuristic analysis. Our team conducts rigorous vulnerability assessments and deploys continuous monitoring to detect anomalies before they escalate into breaches.",
    "keyOfferings": [
      { "title": "Proactive Threat Hunting & SIEM", "description": "Integrating advanced SIEM platforms with AI to identify persistent threats and zero-day vulnerabilities." },
      { "title": "Zero-Trust Microsegmentation", "description": "Implementing identity-aware proxies, strict IAM controls, and network micro-segmentation." },
      { "title": "Red Team & Penetration Testing", "description": "Conducting controlled adversary simulations to validate defenses and harden critical infrastructure." }
    ],
    "techStack": ["Splunk", "Wazuh", "Kali Linux", "CrowdStrike", "Suricata", "Snort", "Wireshark"]
  },
  {
    "id": "srv_custom_software",
    "title": "Custom Enterprise Software Engineering",
    "overview": "We design and build bespoke, mission-critical enterprise applications engineered for high throughput, massive concurrency, and fault tolerance. From distributed microservices to core ERP/CRM middleware, we deliver clean, modular code architectures tailored to complex business logic.",
    "keyOfferings": [
      { "title": "High-Throughput Microservices", "description": "Architecting resilient, event-driven backend systems using domain-driven design principles." },
      { "title": "Legacy Monolith Modernization", "description": "Deconstructing monolithic codebases into scalable, independent micro-architectures with zero business downtime." },
      { "title": "Enterprise Middleware & API Gateways", "description": "Designing secure, high-performance REST and GraphQL API gateways integrating legacy and modern systems." }
    ],
    "techStack": ["Java / Spring Boot", "Node.js", "Go", "Python", "gRPC", "GraphQL", "Redis", "Kafka"]
  },
  {
    "id": "srv_mobile",
    "title": "Mobile Application Engineering",
    "overview": "Build high-performance, native-feel mobile applications for iOS and Android. We specialize in cross-platform frameworks, offline-first architectures, biometric security, and low-latency synchronization with enterprise backends.",
    "keyOfferings": [
      { "title": "Cross-Platform App Development", "description": "Single-codebase deployment using React Native and Flutter with native 60fps performance." },
      { "title": "Offline-First Data Sync", "description": "Robust local database caching and conflict-free replicated data synchronization." },
      { "title": "Enterprise Mobile Security", "description": "End-to-end payload encryption, biometric authentication, and certificate pinning." }
    ],
    "techStack": ["React Native", "Flutter", "Swift", "Kotlin", "SQLite", "Firebase", "GraphQL"]
  },
  {
    "id": "srv_iot",
    "title": "IoT & Industrial Automation (Industry 5.0)",
    "overview": "Connect physical machines and industrial operational technology (OT) with enterprise cloud software. We engineer edge telemetry systems, SCADA/PLC integrations, predictive maintenance pipelines, and real-time digital twins for smart manufacturing.",
    "keyOfferings": [
      { "title": "Edge Telemetry & Gateways", "description": "Deploying low-latency industrial gateways supporting MQTT, OPC-UA, and Modbus protocols." },
      { "title": "Digital Twins & 3D Simulation", "description": "Real-time 3D spatial simulation mirroring factory floor equipment and telemetry in under 100ms." },
      { "title": "On-Device Edge Inferencing", "description": "Deploying quantized neural vision and vibration models onto edge hardware for real-time defect sorting." }
    ],
    "techStack": ["OPC-UA", "MQTT", "ROS2", "NVIDIA Jetson", "Raspberry Pi", "C++", "Python", "Three.js"]
  },
  {
    "id": "srv_it_consulting",
    "title": "IT Consulting & Digital Transformation",
    "overview": "Align technology strategies with business objectives. Our senior technology advisors provide comprehensive tech stack evaluations, architecture blueprints, cloud migration roadmaps, and fractional CTO leadership to de-risk major technical investments.",
    "keyOfferings": [
      { "title": "Enterprise Architecture Blueprints", "description": "Comprehensive target-state architectural roadmaps designed for long-term scalability and cost efficiency." },
      { "title": "Cloud Migration & Modernization Audits", "description": "In-depth feasibility, compliance, and TCO evaluations for migrating on-premise infrastructure." },
      { "title": "Technical Due Diligence & Fractional CTO", "description": "Independent technology audits for mergers, acquisitions, venture investments, and executive leadership." }
    ],
    "techStack": ["TOGAF", "Enterprise Strategy", "Cloud Economics", "Security Audits", "Compliance & Governance"]
  },
  {
    "id": "srv_qa",
    "title": "QA Automation, DevOps & SRE",
    "overview": "Ensure continuous software quality and zero-regression deployments with automated testing suites, chaos engineering, and Site Reliability Engineering (SRE) practices that protect revenue and customer trust.",
    "keyOfferings": [
      { "title": "Automated End-to-End Testing", "description": "Comprehensive UI, API, and regression test suites integrated directly into CI/CD deployment pipelines." },
      { "title": "Performance & Load Testing", "description": "Simulating high-concurrency traffic spikes to benchmark system throughput and eliminate bottlenecks." },
      { "title": "24/7 SRE Monitoring & Chaos Testing", "description": "Injecting controlled faults to validate resilience, failover systems, and SLA recovery time (RTO/RPO)." }
    ],
    "techStack": ["Playwright", "Cypress", "Selenium", "k6", "JMeter", "Prometheus", "Grafana", "Datadog"]
  }
];
