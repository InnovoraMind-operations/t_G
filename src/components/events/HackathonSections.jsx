import React, { useState } from 'react';
import { 
  Sparkles, Target, CalendarClock, Award, Users, Star, ArrowRight, 
  BrainCircuit, Globe, CheckCircle, UserCheck, FileText, BarChart, 
  Calendar, Handshake, Mail, MapPin, Laptop, Rocket, Medal, Trophy,
  GraduationCap, Lightbulb, ShieldCheck, HeartPulse, Building, 
  BookOpen, Mic, Network, HelpCircle, ChevronDown, ChevronUp, Briefcase,
  X, Cpu, Zap, Layers, Factory, Check, ExternalLink
} from 'lucide-react';

import vjPhoto from '../../assets/VJ.png';
import emeraldPhoto from '../../assets/emerald.png';
import lmPhoto from '../../assets/LM.jpeg';
import cfPhoto from '../../assets/cf.jpeg';
import engrFortunePhoto from '../../assets/engr-fortune-onyia.jpg';
import drElalimPhoto from '../../assets/dr-elalim-mohamed.jpg';
import sulaimanPhoto from '../../assets/sulaiman-kafeero.png';
import richardPhoto from '../../assets/richard-afoakwah-nti.jpg';

// Official Google Form Registration URL
const GOOGLE_FORM_URL = "https://forms.gle/eYiK9RcDKcwm5Fvt5";

const HackathonSections = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // ── Keynote & Expert Speakers ───────────────────────────────
  const speakersList = [
    {
      name: 'Engr. Fortune Chibuike Onyia (MNSE)',
      role: 'Lecturer, Civil Engineering Department & Entrepreneur',
      org: 'Federal Polytechnic Oko',
      location: 'Anambra State, Nigeria',
      displayTitle: 'Engr. Fortune Chibuike Onyia (MNSE)',
      topic: 'Sustainable Technology',
      bio: 'Engr. Fortune Chibuike Onyia (MNSE) is a Civil Engineer, lecturer, researcher, and entrepreneur with extensive experience in engineering education and practice. He has lectured in the Civil Engineering Department of Federal Polytechnic Oko, Anambra State, since 2016. His professional interests include urban hydrology, flood management, nature-based solutions, GIS applications, and sustainable infrastructure development. He is committed to advancing engineering knowledge through teaching, research, innovation, and professional practice, while contributing meaningfully to community development and the growth of the engineering profession in Nigeria.',
      photo: engrFortunePhoto,
      confirmed: true,
      color: '#64b4d2',
      glow: 'rgba(100,180,210,0.2)',
      tags: ['Sustainable Technology', 'Infrastructure', 'GIS Applications', 'Urban Hydrology'],
      initials: 'FO'
    },
    {
      name: 'Dr. Elalim Eltayeb Abdurrahman Mohamed',
      role: 'Medical Doctor, Researcher & Medical Educator',
      org: 'Red Sea University Faculty of Medicine & ACMER',
      location: 'Port Sudan / International',
      displayTitle: 'Medical Doctor, Researcher & Medical Educator',
      topic: 'AI in Healthcare: Transforming Medical Research, Education, and Evidence-Based Practice',
      bio: 'Dr. Elalim Eltayeb Abdurrahman Mohamed is a Medical Doctor, Researcher, and Medical Educator with interests spanning clinical medicine, medical research, neuroscience, public health, and medical education. He is the Chair of the Board of the Abou-Aloum Centre for Medical Education and Research (ACMER), where he contributes to initiatives focused on strengthening research capacity, evidence-based practice, and medical education. His current interests focus on the responsible integration of Artificial Intelligence and emerging technologies into medical research, evidence synthesis, healthcare education, and clinical practice, with particular interest in their potential to improve healthcare and research capacity in resource-limited and conflict-affected settings.',
      photo: drElalimPhoto,
      confirmed: true,
      color: '#00dcb4',
      glow: 'rgba(0,220,180,0.2)',
      tags: ['AI in Healthcare', 'Medical Research', 'Evidence-Based Practice', 'Neuroscience'],
      initials: 'EM'
    },
    {
      name: 'Sulaiman Kafeero',
      role: 'President & CEO, Muslim Centre for Justice and Law',
      org: 'Muslim Centre for Justice and Law (MCJL)',
      location: 'Kampala, Uganda',
      displayTitle: 'Development Consultant in Monitoring, Evaluation and Learning',
      topic: 'Future of Work',
      bio: 'Sulaiman Kafeero is a seasoned Monitoring, Evaluation, and Learning Specialist and CEO at Muslim Centre for Justice and Law (MCJL), with over 20 years of experience in social development, project management, and research. His work focuses on social justice, violence prevention, and marginalized populations, with expertise in strategic planning, data analysis, participatory knowledge systems, and stakeholder engagement. Sulaiman has collaborated with organizations such as NUDIPU, Uganda AIDS Commission, ActionAid Uganda, and Wasafiri Consulting System Craft, contributing to national and international initiatives funded by CAFOD-UK, EU, UKAID, and others. Recognized for his mentorship and innovative approaches, Sulaiman’s work emphasizes outcome harvesting and problem-driven iterative processes to foster real-time social change.',
      photo: sulaimanPhoto,
      confirmed: true,
      color: '#d2aa64',
      glow: 'rgba(210,170,100,0.2)',
      tags: ['Future of Work', 'Monitoring & Evaluation', 'Social Development', 'Strategic Planning'],
      initials: 'SK'
    },
    {
      name: 'Richard Afoakwah-Nti',
      role: 'Founder & CEO, Rich Dream Consult | IT Expert & Entrepreneur',
      org: 'Rich Dream Consult (RDC)',
      location: 'Accra, Ghana',
      displayTitle: 'Founder & CEO, Rich Dream Consult',
      topic: 'AI-Powered Entrepreneurship: Transforming Businesses for a Smarter and More Inclusive Future',
      bio: 'Richard Afoakwah-Nti is a Ghanaian entrepreneur, IT expert, and business consultant, and the Founder & CEO of Rich Dream Consult (RDC), a multi-award-winning professional consultancy firm operating across IT, Business Management, and Travel Consultancy. With a strong interest in technology and innovation, he focuses on helping businesses and entrepreneurs identify opportunities, embrace digital transformation, and build sustainable, competitive ventures. Richard is also passionate about empowering young entrepreneurs to leverage emerging technologies for growth and impact, advocating for the responsible and inclusive use of AI to create opportunities in emerging markets.',
      photo: richardPhoto,
      confirmed: true,
      color: '#b46ed2',
      glow: 'rgba(180,110,210,0.2)',
      tags: ['AI-Powered Entrepreneurship', 'Digital Transformation', 'Emerging Tech', 'Business Innovation'],
      initials: 'RA'
    },
    {
      name: 'Dr. Klaus Obermeier',
      role: 'VP of Industrial Automation & Digital Systems',
      org: 'Siemens Digital Industries',
      location: 'Munich, Germany',
      topic: 'Autonomous Manufacturing & Industry 5.0: The Convergence of OT and AI',
      color: '#00dcb4',
      glow: 'rgba(0,220,180,0.15)',
      tags: ['Industry 5.0', 'Industrial IoT', 'Smart Systems'],
      initials: 'KO'
    },
    {
      name: 'Elena Rostova',
      role: 'Chief AI Architect & Head of Robotics',
      org: 'ABB Robotics & Discrete Automation',
      location: 'Zurich, Switzerland',
      topic: 'Next-Gen Collaborative Robotics (Cobots) & Adaptive Vision',
      color: '#64b4d2',
      glow: 'rgba(100,180,210,0.15)',
      tags: ['Robotics', 'Cobots', 'Adaptive AI'],
      initials: 'ER'
    },
    {
      name: 'Dr. Marcus Vance',
      role: 'Director of Industrial Digital Twins',
      org: 'GE Digital & MIT Industrial AI Lab',
      location: 'Boston, USA',
      topic: 'High-Fidelity Digital Twins for Zero-Downtime Heavy Engineering',
      color: '#d2aa64',
      glow: 'rgba(210,170,100,0.15)',
      tags: ['Digital Twins', 'Predictive Maintenance', 'Edge AI'],
      initials: 'MV'
    },
    {
      name: 'Prof. Kenji Takahashi',
      role: 'Chair of Cyber-Physical Production Systems',
      org: 'University of Tokyo',
      location: 'Tokyo, Japan',
      topic: 'Ultra-Low-Latency Edge Computing in Precision Factory Automation',
      color: '#b46ed2',
      glow: 'rgba(180,110,210,0.15)',
      tags: ['Edge Computing', 'Cyber-Physical', 'Precision Auto'],
      initials: 'KT'
    },
    {
      name: 'Dr. Aisha Al-Mansoor',
      role: 'Head of Smart Factory Innovation',
      org: 'Global Industrial Automation Hub',
      location: 'Dubai, UAE',
      topic: 'Green Manufacturing & Decarbonized Autonomous Production Networks',
      color: '#00dcb4',
      glow: 'rgba(0,220,180,0.15)',
      tags: ['Green Manufacturing', 'Decarbonization', 'Smart Factory'],
      initials: 'AM'
    },
    {
      name: 'David Chen',
      role: 'Principal Cloud & Industrial IoT Architect',
      org: 'Microsoft Azure Industrial IoT',
      location: 'Redmond, USA',
      topic: 'Securing Industrial Cloud Telemetry & SCADA Interoperability',
      color: '#64b4d2',
      glow: 'rgba(100,180,210,0.15)',
      tags: ['Cloud IoT', 'SCADA', 'Industrial Cyber'],
      initials: 'DC'
    }
  ];

  // ── International Judges Panel ─────────────────────────────
  const judgesList = [
    {
      name: 'Dr. Sophia Ramirez',
      role: 'Global Lead of Industrial Machine Learning',
      org: 'Tesla Gigafactory Engineering',
      location: 'Austin, USA',
      focus: 'Computer Vision Defect Inspection & Shopfloor Anomaly Detection',
      color: '#00dcb4',
      glow: 'rgba(0,220,180,0.15)',
      tags: ['Industrial ML', 'Defect Inspection', 'Real-time Vision'],
      initials: 'SR'
    },
    {
      name: 'Dr. Henrik Lindqvist',
      role: 'Director of Autonomous Systems & Robotics',
      org: 'Volvo Group Industrial Technology',
      location: 'Gothenburg, Sweden',
      focus: 'Autonomous Mobile Robots (AMR), AGVs & Intralogistics Optimization',
      color: '#64b4d2',
      glow: 'rgba(100,180,210,0.15)',
      tags: ['AMR Fleets', 'Intralogistics', 'Robotics'],
      initials: 'HL'
    },
    {
      name: 'Prof. Ronald Sterling',
      role: 'Chair of Critical Infrastructure & OT Security',
      org: 'Imperial College London',
      location: 'London, UK',
      focus: 'SCADA Vulnerability Hardening, ICS Protocols & Industrial Zero Trust',
      color: '#d26e6e',
      glow: 'rgba(210,110,110,0.15)',
      tags: ['SCADA Defense', 'Zero Trust', 'Critical Infra'],
      initials: 'RS'
    },
    {
      name: 'Amara Okafor',
      role: 'VP of Advanced Manufacturing & Sustainability',
      org: 'Global Advanced Manufacturing Consortium',
      location: 'Singapore',
      focus: 'Circular Factory Operations, Carbon Tracking & Resource Efficiency',
      color: '#d2aa64',
      glow: 'rgba(210,170,100,0.15)',
      tags: ['Sustainability', 'Circular Economy', 'Resource Efficiency'],
      initials: 'AO'
    },
    {
      name: 'Dr. Marco Bellini',
      role: 'Chief Technology Officer & Systems Architect',
      org: 'Leonardo Industrial Automation & Aerospace',
      location: 'Milan, Italy',
      focus: 'Embedded Real-time Systems, Deterministic Fieldbus & Safety SIL-3/4',
      color: '#b46ed2',
      glow: 'rgba(180,110,210,0.15)',
      tags: ['Embedded Systems', 'Safety Standards', 'Fieldbus'],
      initials: 'MB'
    },
    {
      name: 'Siddharth Mehta',
      role: 'Global Director of Industrial IoT & Edge Intelligence',
      org: 'Hitachi Vantara',
      location: 'San Jose, USA',
      focus: 'Asset Health Prediction, Vibration Telemetry & Distributed Sensors',
      color: '#00dcb4',
      glow: 'rgba(0,220,180,0.15)',
      tags: ['Sensor Fusion', 'Asset Health', 'Edge Compute'],
      initials: 'SM'
    }
  ];

  // ── Technical Mentors ──────────────────────────────────────
  const mentorsList = [
    {
      name: 'Dr. Sarah Jenkins',
      role: 'Lead Robotics Software Engineer',
      org: 'Boston Dynamics',
      location: 'USA',
      expertise: 'Robot Kinematics, Path Planning & ROS2 Integration'
    },
    {
      name: 'Tariq Benali',
      role: 'Senior SCADA & OT Cybersecurity Architect',
      org: 'Schneider Electric',
      location: 'France',
      expertise: 'PLC Protocols, Modbus/TCP, OPC-UA & Perimeter Isolation'
    },
    {
      name: 'Mei-Ling Zhou',
      role: 'Computer Vision & Defect Detection Lead',
      org: 'Foxconn Industrial Internet',
      location: 'Taiwan',
      expertise: 'Optical Inspection, Edge Inference & Thermal Imaging'
    },
    {
      name: 'Carlos Mendes',
      role: 'Industrial Energy & Decarbonization Specialist',
      org: 'Enel Green Power',
      location: 'Brazil',
      expertise: 'Factory Microgrids, Waste Heat Recovery & Energy Telemetry'
    }
  ];

  // ── Organizing Committee ───────────────────────────────────
  const committeeList = [
    {
      name: 'Dr. Vilas Joshi',
      role: 'Executive Director - Technology',
      org: 'Techryon Global',
      photo: vjPhoto
    },
    {
      name: 'Emerald Abena Amponsah Baffour',
      role: 'Global Partnership & Strategy Director',
      org: 'Techryon Global',
      photo: emeraldPhoto
    },
    {
      name: 'Lawrence Mazaki Mashati',
      role: 'General Director',
      org: 'Techryon Global',
      photo: lmPhoto
    },
    {
      name: 'Marghescu Cristina-Florentina',
      role: 'Independent Director',
      org: 'Techryon Global',
      photo: cfPhoto
    }
  ];

  const faqs = [
    { q: "How can I participate in the hackathon?", a: "The TechryonGlobal Industrial Hackathon 2026 is open to participants worldwide. Simply register through the online portal and choose whether you are competing as an individual or in a team." },
    { q: "What is the format of the event?", a: "The event is 100% online and virtual, allowing participants from all over the world to build, collaborate, and pitch seamlessly." },
    { q: "Can I participate individually or do I need a team?", a: "You can participate as an individual or form a team of up to 5 members." },
    { q: "Who are the judges for the hackathon?", a: "Our international judging panel comprises esteemed industry leaders and professors from Siemens, Tesla, ABB, Volvo Group, Imperial College London, and University of Tokyo." },
    { q: "What is the main theme of the hackathon?", a: "The theme is 'Industry 5.0, Smart Manufacturing & Industrial AI', covering robotics, digital twins, IoT, and OT cybersecurity." },
    { q: "How do I submit my hackathon project?", a: "You must submit a GitHub repository, installation guide, README, architecture diagrams, demo video (max 5 mins), and optional live deployed demonstration link." },
    { q: "Will I get a verified certificate?", a: "Yes, all verified participants, finalists, judges, mentors, and speakers will receive internationally recognized digital certificates." },
    { q: "How are the winners evaluated?", a: "Evaluation is based on Industrial Applicability & Impact (25%), Technical Depth & Architecture (25%), Innovation & Novelty (20%), Working Demonstration (15%), and Presentation (15%)." },
    { q: "Will sessions be recorded?", a: "Yes, all keynotes and panel discussions will be recorded and made accessible to registered participants." },
    { q: "How do I connect with mentors?", a: "Participants will receive direct access to private Discord/Slack breakout channels with dedicated mentor office hours." }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>

      {/* ── GLOBAL PARTICIPATION CALLOUT BANNER ── */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(0,220,180,0.12), rgba(0,180,220,0.04))',
        border: '1px solid rgba(0,220,180,0.3)',
        borderRadius: '1.5rem',
        padding: '1.75rem 2rem',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1.5rem',
        boxShadow: '0 0 30px rgba(0,220,180,0.12)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', maxWidth: '680px' }}>
          <div style={{
            width: '54px', height: '54px', borderRadius: '1rem',
            background: 'rgba(0,220,180,0.15)', border: '1px solid rgba(0,220,180,0.35)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
          }}>
            <Award size={28} style={{ color: '#00dcb4' }} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
              <span style={{
                fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase',
                padding: '0.2rem 0.65rem', borderRadius: '2rem',
                background: '#00dcb4', color: '#0b1015', letterSpacing: '0.08em'
              }}>
                Global Hackathon 2026
              </span>
              <span style={{ fontSize: '0.8rem', color: '#64b4d2', fontWeight: 600 }}>
                Worldwide Online Hackathon
              </span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#e8e8ee', margin: 0 }}>
              Global Industrial Hackathon 2026: AI, Industry 5.0 & Smart Manufacturing
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#9090a0', margin: '0.4rem 0 0', lineHeight: 1.5 }}>
              Compete virtually, collaborate with global mentors, and pitch directly to an international panel of industry leaders.
            </p>
          </div>
        </div>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#00dcb4', color: '#0b1015', border: 'none',
            padding: '0.85rem 1.8rem', borderRadius: '0.85rem',
            fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer',
            boxShadow: '0 0 20px rgba(0,220,180,0.35)',
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            textDecoration: 'none',
            transition: 'all 0.25s ease'
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
        >
          Register Now <ExternalLink size={16} />
        </a>
      </div>
      
      {/* ── ABOUT EVENT ── */}
      <section id="about-event">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Sparkles size={18} style={{ color: '#00dcb4' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>About the Industrial Hackathon</h3>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#a0a0b0', marginBottom: '1.5rem' }}>
            The <strong>TechryonGlobal Industrial Hackathon 2026</strong> is an international virtual event bringing together developers, engineers, researchers, professors, and startups from across the world. Focused on <strong>Industry 5.0, Smart Manufacturing, Industrial AI, Digital Twins, Robotics, and OT Cybersecurity</strong>, this premier online competition challenges participants to build practical, scalable industrial solutions.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#a0a0b0', marginBottom: '1.5rem' }}>
            The event combines an Innovation Forum featuring world-class keynote talks from companies like Siemens, ABB, GE Digital, and Tokyo University, with an intense 24-hour virtual hackathon where participants receive expert technical mentorship and evaluation from an international jury.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            {[
              { label: 'Event Format', val: '100% Online / Virtual' },
              { label: 'Registration', val: 'Online Open' },
              { label: 'Participation', val: 'Worldwide Open' },
              { label: 'Team Size', val: '1 to 5 Members' },
            ].map((stat, i) => (
              <div key={i} style={{ background: 'rgba(0,220,180,0.05)', padding: '1rem', borderRadius: '0.85rem', border: '1px solid rgba(0,220,180,0.15)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#8a8a9a', textTransform: 'uppercase' }}>{stat.label}</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#00dcb4', marginTop: '0.2rem' }}>{stat.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT TECHRYONGLOBAL ── */}
      <section id="about-techryonglobal">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Globe size={18} style={{ color: '#64b4d2' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>About TechryonGlobal</h3>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#a0a0b0', marginBottom: '1.5rem' }}>
            TechryonGlobal is a global technology and innovation platform dedicated to fostering collaboration, research, learning, and technological advancement through international conferences, hackathons, workshops, and professional networking initiatives.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#a0a0b0', marginBottom: '1.5rem' }}>
            Our mission is to connect developers, engineers, researchers, professors, entrepreneurs, and industry leaders worldwide to solve real-world challenges through innovation and emerging technologies.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#a0a0b0' }}>
            Through its global initiatives, TechryonGlobal empowers innovators by creating opportunities for collaboration, knowledge exchange, research dissemination, and technological advancement across academia, industry, startups, and government sectors.
          </p>
        </div>
      </section>

      {/* ── INNOVATION FORUM ── */}
      <section id="innovation-forum">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Lightbulb size={18} style={{ color: '#b46ed2' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Innovation Forum</h3>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#a0a0b0', marginBottom: '1.5rem' }}>
            The Innovation Forum serves as an international platform where participants engage with global experts, researchers, entrepreneurs, and industry leaders through insightful discussions on emerging technologies, innovation ecosystems, digital transformation, entrepreneurship, artificial intelligence, sustainability, and future technologies.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
            {[
              'Keynote Sessions',
              'Expert Talks',
              'Industry Panel Discussions',
              'Startup Innovation Showcase',
              'Research Presentations',
              'Networking Sessions',
              'Future Technology Discussions'
            ].map((item, i) => (
              <div key={i} style={{
                background: 'rgba(180,110,210,0.05)', padding: '1rem', borderRadius: '0.75rem',
                border: '1px solid rgba(180,110,210,0.15)', display: 'flex', alignItems: 'center', gap: '0.75rem'
              }}>
                <CheckCircle size={16} style={{ color: '#b46ed2', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e8e8ee' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GLOBAL HACKATHON ── */}
      <section id="global-hackathon">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Laptop size={18} style={{ color: '#00dcb4' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Global Hackathon</h3>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#a0a0b0' }}>
            The Global Hackathon challenges participants to transform innovative ideas into practical solutions by leveraging Artificial Intelligence and emerging technologies. Participants will collaborate individually or in teams to solve real-world problems while receiving guidance from mentors and evaluation from an international panel of judges.
          </p>
        </div>
      </section>

      {/* ── THEME & TRACKS ── */}
      <section id="tracks">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Target size={18} style={{ color: '#d2aa64' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Industrial Challenge Tracks</h3>
        </div>
        <div style={{
          background: 'linear-gradient(135deg, rgba(210,170,100,0.1), transparent)',
          padding: '1.5rem 2rem', borderRadius: '1rem', border: '1px solid rgba(210,170,100,0.2)',
          marginBottom: '2rem'
        }}>
          <h4 style={{ fontSize: '1.15rem', color: '#d2aa64', fontWeight: 700, marginBottom: '0.4rem' }}>
            Theme: Industry 5.0, Smart Manufacturing & Industrial AI
          </h4>
          <p style={{ fontSize: '0.92rem', color: '#9090a0', lineHeight: 1.6, margin: 0 }}>
            Participants can select from 7 specialized industrial tracks. All solutions should emphasize scalability, reliability, safety compliance, and direct applicability to modern industrial environments.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
          {[
            { 
              title: 'Industry 5.0 & Human-Centric Automation', 
              desc: 'Develop adaptive collaborative robotic systems (Cobots), operator-augmented wearable systems, and ergonomic robotic workcells combining human dexterity with machine precision.',
              icon: Factory,
              color: '#00dcb4'
            },
            { 
              title: 'Industrial IoT, Sensor Telemetry & Edge AI', 
              desc: 'Design low-latency edge sensor nodes, multi-protocol industrial gateways (OPC-UA/MQTT), and on-device neural inferencing for real-time factory floor anomaly detection.',
              icon: Cpu,
              color: '#64b4d2'
            },
            { 
              title: 'Digital Twins & Predictive Maintenance (PdM)', 
              desc: 'Build real-time virtual factory replicas, RUL (Remaining Useful Life) prognostic models, vibration spectrum analysis, and autonomous maintenance work-order generators.',
              icon: Layers,
              color: '#d2aa64'
            },
            { 
              title: 'Autonomous Mobile Robots (AMR) & Intralogistics', 
              desc: 'Create intelligent path-planning algorithms, multi-robot swarm fleet coordination, automated docking, and SLAM navigation for high-density industrial warehouse logistics.',
              icon: Rocket,
              color: '#b46ed2'
            },
            { 
              title: 'Industrial Cybersecurity & OT/SCADA Defense', 
              desc: 'Architect zero-trust security frameworks for operational technology, PLC firmware attestation, Modbus protocol fuzzing defense, and air-gapped forensic monitoring.',
              icon: ShieldCheck,
              color: '#d26e6e'
            },
            { 
              title: 'Sustainable Manufacturing & Energy Optimization', 
              desc: 'Build intelligent energy auditing pipelines, carbon footprint calculators for assembly lines, scrap reduction algorithms, and industrial heat recovery automation.',
              icon: Zap,
              color: '#00dcb4'
            },
            { 
              title: 'Generative AI & LLMs for Industrial Engineering', 
              desc: 'Harness LLMs and generative design to auto-synthesize PLC ladder logic, parse industrial schematics, accelerate CAD drafting, and assist maintenance field technicians.',
              icon: BrainCircuit,
              color: '#64b4d2'
            }
          ].map((track, i) => {
            const Icon = track.icon;
            return (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '1.25rem',
                border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', gap: '0.75rem',
                transition: 'all 0.25s ease'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ padding: '0.6rem', borderRadius: '0.75rem', background: `${track.color}15`, border: `1px solid ${track.color}30` }}>
                    <Icon size={20} style={{ color: track.color }} />
                  </div>
                  <h4 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#e8e8ee', margin: 0 }}>{track.title}</h4>
                </div>
                <p style={{ fontSize: '0.86rem', color: '#9090a0', lineHeight: 1.6, margin: 0 }}>{track.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── EVENT HIGHLIGHTS ── */}
      <section id="highlights">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <CheckCircle size={18} style={{ color: '#64b4d2' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Event Highlights</h3>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {[
            { title: 'Global Innovation Forum', desc: 'Interact with global experts through keynote sessions, panel discussions, and networking opportunities.', icon: Lightbulb, glow: 'rgba(180,110,210,0.1)', color: '#b46ed2' },
            { title: 'Global Hackathon', desc: 'Develop innovative AI-powered solutions addressing real-world challenges.', icon: Laptop, glow: 'rgba(0,220,180,0.1)', color: '#00dcb4' },
            { title: 'International Speakers', desc: 'Hear from distinguished researchers, entrepreneurs, and technology leaders.', icon: Mic, glow: 'rgba(100,180,210,0.1)', color: '#64b4d2' },
            { title: 'International Judges', desc: 'Receive evaluation from globally recognized experts.', icon: GraduationCap, glow: 'rgba(210,170,100,0.1)', color: '#d2aa64' },
            { title: 'Expert Mentorship', desc: 'Learn directly from experienced professionals.', icon: Users, glow: 'rgba(210,110,110,0.1)', color: '#d26e6e' },
            { title: 'Global Networking', desc: 'Connect with innovators from around the world.', icon: Network, glow: 'rgba(100,200,200,0.1)', color: '#64c8c8' },
            { title: 'Digital Certificates', desc: 'Receive internationally recognized certificates.', icon: Award, glow: 'rgba(250,204,21,0.1)', color: '#facc15' },
            { title: 'Worldwide Participation', desc: 'Open to participants across all countries.', icon: Globe, glow: 'rgba(100,180,210,0.1)', color: '#64b4d2' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '1rem',
                border: `1px solid rgba(255,255,255,0.1)`, display: 'flex', alignItems: 'flex-start', gap: '1rem',
                boxShadow: `inset 0 0 15px ${item.glow}`, transition: 'transform 0.2s', cursor: 'pointer'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ padding: '0.6rem', borderRadius: '0.5rem', background: item.glow, flexShrink: 0 }}>
                  <Icon size={24} style={{ color: item.color }} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#e8e8ee', marginBottom: '0.4rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#9090a0', lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── ELIGIBILITY ── */}
      <section id="eligibility">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <UserCheck size={18} style={{ color: '#00dcb4' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Eligibility & Team Size</h3>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 style={{ fontSize: '1.05rem', color: '#e8e8ee', fontWeight: 700, marginBottom: '1rem' }}>Eligible Participants</h4>
            <p style={{ fontSize: '0.95rem', color: '#a0a0b0', marginBottom: '1rem' }}>The event is open to participants worldwide, including:</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '0.5rem' }}>
              {[
                'Developers', 'Engineers', 'Researchers', 'Professors',
                'Research Scholars', 'Faculty Members', 'Industry Professionals',
                'Entrepreneurs', 'Startups', 'AI Specialists', 'Product Designers',
                'Data Scientists', 'Innovation Communities', 'Technology Teams'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#9090a0' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00dcb4', flexShrink: 0 }} /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: 'linear-gradient(135deg, rgba(210,170,100,0.1), rgba(180,140,80,0.02))', padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(210,170,100,0.2)' }}>
            <h4 style={{ fontSize: '1.05rem', color: '#d2aa64', fontWeight: 700, marginBottom: '1rem' }}>Team Size</h4>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#e8e8ee', marginBottom: '0.5rem' }}>1–5</div>
            <div style={{ fontSize: '1.1rem', color: '#a0a0b0', fontWeight: 600, marginBottom: '1rem' }}>Members per team</div>
            <p style={{ fontSize: '0.95rem', color: '#a0a0b0', lineHeight: 1.6 }}>
              You can participate as an individual or form a team of up to 5 members. Collaboration is highly encouraged!
            </p>
          </div>
        </div>
      </section>

      {/* ── SCHEDULE ── */}
      <section id="schedule">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <CalendarClock size={18} style={{ color: '#64b4d2' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Event Schedule (27 September 2026)</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            { name: 'Opening Ceremony', time: 'TBA' },
            { name: 'Innovation Forum', time: 'TBA' },
            { name: 'Keynote Session', time: 'TBA' },
            { name: 'Expert Panel', time: 'TBA' },
            { name: 'Networking Session', time: 'TBA' },
            { name: 'Hackathon Launch', time: 'TBA' },
            { name: 'Mentoring', time: 'TBA' },
            { name: 'Project Submission', time: 'TBA' },
            { name: 'Final Presentation', time: 'TBA' },
            { name: 'Closing Ceremony', time: 'TBA' },
            { name: 'Winner Announcement', time: 'TBA' }
          ].map((event, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              background: 'rgba(255,255,255,0.02)', padding: '1.25rem', borderRadius: '1rem',
              borderLeft: '4px solid #64b4d2', borderTop: '1px solid rgba(255,255,255,0.05)',
              borderRight: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#e8e8ee' }}>{event.name}</h4>
              <span style={{ fontSize: '0.9rem', color: '#a0a0b0', fontWeight: 600 }}>{event.time}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SUBMISSION REQUIREMENTS ── */}
      <section id="submission-requirements">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <FileText size={18} style={{ color: '#d2aa64' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Submission Requirements</h3>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ fontSize: '0.95rem', color: '#a0a0b0', marginBottom: '1.5rem' }}>Each team must submit the following deliverables:</p>
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {[
              'Project Presentation (PPT or PDF)',
              'Source Code Repository Link',
              'GitHub Repository',
              'Installation Guide',
              'README File',
              'Project Documentation',
              'Project Demonstration Video (Maximum 5 Minutes)',
              'AI Model Details (if applicable)',
              'Dataset Source (if applicable)',
              'Optional Live Demo Link'
            ].map((item, i) => (
              <li key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                background: 'rgba(210,170,100,0.05)', padding: '1rem', borderRadius: '0.75rem', border: '1px solid rgba(210,170,100,0.1)'
              }}>
                <CheckCircle size={16} style={{ color: '#d2aa64', marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', color: '#e8e8ee', lineHeight: 1.5 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── EVALUATION CRITERIA ── */}
      <section id="evaluation">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <BarChart size={18} style={{ color: '#00dcb4' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Evaluation Criteria</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            { name: 'Innovation & Creativity', weight: '25%' },
            { name: 'Technical Excellence', weight: '20%' },
            { name: 'Impact & Scalability', weight: '20%' },
            { name: 'Practical Implementation', weight: '15%' },
            { name: 'Presentation & Demonstration', weight: '10%' },
            { name: 'User Experience', weight: '10%' }
          ].map((criteria, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              background: 'rgba(255,255,255,0.02)', padding: '1rem 1.5rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.05)'
            }}>
              <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e8e8ee' }}>{criteria.name}</span>
              <span style={{ fontSize: '1rem', fontWeight: 700, color: '#00dcb4', background: 'rgba(0,220,180,0.1)', padding: '0.2rem 0.8rem', borderRadius: '2rem' }}>{criteria.weight}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── AWARDS, RECOGNITION & CERTIFICATES ── */}
      <section id="awards">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Award size={18} style={{ color: '#d2aa64' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Awards, Recognition & Certificates</h3>
        </div>
        
        <p style={{ fontSize: '0.95rem', color: '#a0a0b0', marginBottom: '1.5rem' }}>
          All eligible participants, judges, mentors, and organizing committee members will receive digital certificates issued by TechryonGlobal.
        </p>

        <h4 style={{ fontSize: '1.05rem', color: '#e8e8ee', fontWeight: 700, marginBottom: '1rem' }}>Certificates Available</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
          {[
            { title: 'Participation Certificate', icon: Award, glow: 'rgba(0,220,180,0.1)', color: '#00dcb4' },
            { title: 'Winner Certificate', icon: Trophy, glow: 'rgba(250,204,21,0.1)', color: '#facc15' },
            { title: 'Runner-Up Certificate', icon: Medal, glow: 'rgba(200,200,200,0.1)', color: '#c8c8c8' },
            { title: 'Judge Certificate', icon: GraduationCap, glow: 'rgba(100,180,210,0.1)', color: '#64b4d2' },
            { title: 'Mentor Certificate', icon: Handshake, glow: 'rgba(210,170,100,0.1)', color: '#d2aa64' },
            { title: 'Organizing Team Certificate', icon: FileText, glow: 'rgba(180,110,210,0.1)', color: '#b46ed2' }
          ].map((cert, i) => {
            const Icon = cert.icon;
            return (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '1rem',
                border: `1px solid rgba(255,255,255,0.1)`, display: 'flex', alignItems: 'center', gap: '1rem',
                boxShadow: `inset 0 0 20px ${cert.glow}`
              }}>
                <Icon size={24} style={{ color: cert.color }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e8e8ee' }}>{cert.title}</span>
              </div>
            );
          })}
        </div>

        <h4 style={{ fontSize: '1.05rem', color: '#e8e8ee', fontWeight: 700, marginBottom: '1rem' }}>Special Recognitions</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {[
            'Best AI Innovation',
            'Best Sustainability Solution',
            'Best Healthcare Innovation',
            'Best Engineering Team',
            'Best International Team',
            'Best UI/UX Design',
            'People\'s Choice Project',
            'Innovation Excellence Award',
            'Best Social Impact Project',
            'Best Startup Innovation',
            'Outstanding Research Award',
            'Best Technical Solution',
            'Emerging Innovator Award'
          ].map((rec, i) => (
            <div key={i} style={{
              background: 'rgba(0,220,180,0.05)', padding: '1rem', borderRadius: '0.75rem',
              border: `1px solid rgba(0,220,180,0.15)`, display: 'flex', alignItems: 'center', gap: '0.75rem'
            }}>
              <Award size={16} style={{ color: '#00dcb4', flexShrink: 0 }} />
              <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e8e8ee' }}>{rec}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED SPEAKERS ── */}
      <section id="speakers">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <Mic size={18} style={{ color: '#64b4d2' }} />
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Featured Keynote & Expert Speakers</h3>
          </div>
          <span style={{ fontSize: '0.8rem', color: '#64b4d2', fontWeight: 600, background: 'rgba(100,180,210,0.1)', padding: '0.25rem 0.75rem', borderRadius: '1rem', border: '1px solid rgba(100,180,210,0.2)' }}>
            Distinguished Global Leaders & Academicians
          </span>
        </div>
        
        <p style={{ fontSize: '0.95rem', color: '#a0a0b0', marginBottom: '1.75rem', lineHeight: 1.6 }}>
          International technology visionaries, distinguished professors, and industry leaders confirmed and delivering exclusive keynote addresses and technical sessions during the online hackathon and innovation forum:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
          {speakersList.map((spk, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '1.25rem',
              border: `1px solid ${spk.confirmed ? 'rgba(0,220,180,0.3)' : 'rgba(255,255,255,0.08)'}`,
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: `inset 0 0 20px ${spk.glow}`,
              transition: 'transform 0.25s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                {spk.photo ? (
                  <div style={{
                    width: '64px', height: '64px', borderRadius: '50%',
                    border: `2px solid ${spk.color}`,
                    overflow: 'hidden', flexShrink: 0,
                    boxShadow: `0 0 16px ${spk.glow}`
                  }}>
                    <img src={spk.photo} alt={spk.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ) : (
                  <div style={{
                    width: '54px', height: '54px', borderRadius: '50%',
                    background: `linear-gradient(135deg, ${spk.color}30, ${spk.color}10)`,
                    border: `2px solid ${spk.color}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 800, fontSize: '1.15rem', color: spk.color, flexShrink: 0
                  }}>
                    {spk.initials}
                  </div>
                )}
                <div style={{ minWidth: 0, flexGrow: 1 }}>
                  {spk.confirmed && (
                    <div style={{ marginBottom: '0.3rem' }}>
                      <span style={{
                        fontSize: '0.68rem', fontWeight: 700, color: '#00dcb4',
                        background: 'rgba(0,220,180,0.12)', border: '1px solid rgba(0,220,180,0.3)',
                        padding: '0.15rem 0.55rem', borderRadius: '1rem',
                        display: 'inline-flex', alignItems: 'center', gap: '0.25rem'
                      }}>
                        <CheckCircle size={10} /> Confirmed Speaker
                      </span>
                    </div>
                  )}
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#e8e8ee', margin: 0, lineHeight: 1.3 }}>{spk.name}</h4>
                  <div style={{ fontSize: '0.82rem', color: spk.color, fontWeight: 600, marginTop: '0.2rem' }}>{spk.role}</div>
                  <div style={{ fontSize: '0.8rem', color: '#8a8a9a', marginTop: '0.1rem' }}>{spk.org} • {spk.location}</div>
                  {spk.orcid && (
                    <div style={{ marginTop: '0.35rem' }}>
                      <a
                        href={`https://orcid.org/${spk.orcid}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: '0.72rem', color: '#00dcb4', textDecoration: 'none',
                          display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                          background: 'rgba(0,220,180,0.06)', padding: '0.15rem 0.5rem',
                          borderRadius: '0.4rem', border: '1px solid rgba(0,220,180,0.2)',
                          fontWeight: 600
                        }}
                      >
                        <span style={{ color: '#a6ce39', fontWeight: 800 }}>iD</span> ORCID: {spk.orcid} <ExternalLink size={10} />
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <div style={{
                background: 'rgba(255,255,255,0.02)', padding: '0.9rem 1.1rem',
                borderRadius: '0.75rem', borderLeft: `3px solid ${spk.color}`,
                marginBottom: '1rem', flexGrow: 1
              }}>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: '#8a8a9a', fontWeight: 700, letterSpacing: '0.05em' }}>
                  {spk.confirmed ? 'Confirmed Expert Session / Talk' : 'Keynote Address'}
                </div>
                <div style={{ fontSize: '0.92rem', color: '#e8e8ee', fontWeight: 600, marginTop: '0.25rem', fontStyle: 'italic' }}>
                  "{spk.topic}"
                </div>
                {spk.bio && (
                  <p style={{ fontSize: '0.82rem', color: '#a0a0b0', lineHeight: 1.6, marginTop: '0.75rem', marginBottom: 0 }}>
                    {spk.bio}
                  </p>
                )}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {spk.tags.map((t, idx) => (
                  <span key={idx} style={{
                    fontSize: '0.72rem', padding: '0.2rem 0.55rem', borderRadius: '1rem',
                    background: 'rgba(255,255,255,0.05)', color: '#a0a0b0', border: '1px solid rgba(255,255,255,0.08)'
                  }}>
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INTERNATIONAL JUDGES ── */}
      <section id="judges">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <Users size={18} style={{ color: '#00dcb4' }} />
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>International Judges Panel</h3>
          </div>
          <span style={{ fontSize: '0.8rem', color: '#00dcb4', fontWeight: 600, background: 'rgba(0,220,180,0.1)', padding: '0.25rem 0.75rem', borderRadius: '1rem', border: '1px solid rgba(0,220,180,0.2)' }}>
            Rigorous Independent Evaluation
          </span>
        </div>

        <p style={{ fontSize: '0.95rem', color: '#a0a0b0', marginBottom: '1.75rem', lineHeight: 1.6 }}>
          Our international jury consists of distinguished industrial directors, lead research scientists, and technology executives who evaluate project architecture, code quality, and commercial viability:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {judgesList.map((jdg, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '1.25rem',
              border: `1px solid rgba(255,255,255,0.08)`,
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: `inset 0 0 20px ${jdg.glow}`,
              transition: 'transform 0.25s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '54px', height: '54px', borderRadius: '50%',
                  background: `linear-gradient(135deg, ${jdg.color}30, ${jdg.color}10)`,
                  border: `2px solid ${jdg.color}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: '1.15rem', color: jdg.color, flexShrink: 0
                }}>
                  {jdg.initials}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#e8e8ee', margin: 0 }}>{jdg.name}</h4>
                  <div style={{ fontSize: '0.82rem', color: jdg.color, fontWeight: 600, marginTop: '0.15rem' }}>{jdg.role}</div>
                  <div style={{ fontSize: '0.8rem', color: '#8a8a9a' }}>{jdg.org} • {jdg.location}</div>
                </div>
              </div>

              <div style={{
                background: 'rgba(255,255,255,0.02)', padding: '0.85rem 1rem',
                borderRadius: '0.75rem', borderLeft: `3px solid ${jdg.color}`,
                marginBottom: '1rem', flexGrow: 1
              }}>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: '#8a8a9a', fontWeight: 700, letterSpacing: '0.05em' }}>Domain Evaluation Focus</div>
                <div style={{ fontSize: '0.86rem', color: '#e8e8ee', fontWeight: 500, marginTop: '0.2rem' }}>
                  {jdg.focus}
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {jdg.tags.map((t, idx) => (
                  <span key={idx} style={{
                    fontSize: '0.72rem', padding: '0.2rem 0.55rem', borderRadius: '1rem',
                    background: 'rgba(255,255,255,0.05)', color: '#a0a0b0', border: '1px solid rgba(255,255,255,0.08)'
                  }}>
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MENTORS & EXPERTS ── */}
      <section id="mentors">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <GraduationCap size={18} style={{ color: '#d2aa64' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Industry Mentors & Technical Coaches</h3>
        </div>
        <p style={{ fontSize: '0.95rem', color: '#a0a0b0', marginBottom: '1.5rem', lineHeight: 1.6 }}>
          Hands-on technical mentors available throughout the virtual hacking sprint to debug architectures, provide code reviews, and guide teams on industrial safety standards:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '1.25rem' }}>
          {mentorsList.map((m, i) => (
            <div key={i} style={{
              background: 'rgba(210,170,100,0.04)', padding: '1.5rem', borderRadius: '1rem',
              border: '1px solid rgba(210,170,100,0.15)', display: 'flex', flexDirection: 'column', gap: '0.6rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Handshake size={18} style={{ color: '#d2aa64' }} />
                <h4 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#e8e8ee', margin: 0 }}>{m.name}</h4>
              </div>
              <div style={{ fontSize: '0.82rem', color: '#d2aa64', fontWeight: 600 }}>{m.role}</div>
              <div style={{ fontSize: '0.8rem', color: '#8a8a9a' }}>{m.org} ({m.location})</div>
              <div style={{ fontSize: '0.82rem', color: '#a0a0b0', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.6rem', marginTop: '0.2rem' }}>
                <strong>Mentorship:</strong> {m.expertise}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED INNOVATORS ── */}
      <section id="featured-innovators">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Rocket size={18} style={{ color: '#00dcb4' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Featured Innovators</h3>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ fontSize: '0.95rem', color: '#a0a0b0', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Discover outstanding teams, innovators, startups, researchers, and developers participating in the TechryonGlobal Innovation Forum & Global Hackathon 2026.
          </p>
          <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(0,220,180,0.05)', borderRadius: '1rem', border: '1px dashed rgba(0,220,180,0.3)' }}>
             <p style={{ fontSize: '1.1rem', color: '#00dcb4', fontWeight: 600 }}>Innovators Showcase Launching Soon</p>
             <p style={{ fontSize: '0.9rem', color: '#a0a0b0', marginTop: '0.5rem' }}>Exciting teams and startups will be featured here as registrations progress.</p>
          </div>
        </div>
      </section>

      {/* ── INNOVATION FORUM TOPICS ── */}
      <section id="forum-topics">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <BookOpen size={18} style={{ color: '#b46ed2' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Innovation Forum Topics</h3>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {[
            'Artificial Intelligence', 'Generative AI', 'Digital Transformation', 'Cybersecurity', 
            'Healthcare Innovation', 'Smart Cities', 'Education Technology', 'Future of Work', 
            'Sustainable Technologies', 'FinTech Innovation', 'Research Commercialization', 
            'Entrepreneurship', 'Innovation Ecosystems'
          ].map((topic, i) => (
            <span key={i} style={{
              display: 'inline-flex', alignItems: 'center', padding: '0.5rem 1rem', 
              borderRadius: '2rem', background: 'rgba(180,110,210,0.07)', 
              border: '1px solid rgba(180,110,210,0.18)', color: '#b46ed2',
              fontSize: '0.85rem', fontWeight: 600
            }}>
              {topic}
            </span>
          ))}
        </div>
      </section>

      {/* ── CALL FOR ACTION (JUDGES, SPEAKERS, PARTNERS) ── */}
      <section id="call-for-action">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Star size={18} style={{ color: '#d2aa64' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Get Involved</h3>
        </div>
        <div style={{ background: 'linear-gradient(135deg, rgba(210,170,100,0.05), transparent)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(210,170,100,0.15)' }}>
          <p style={{ fontSize: '0.95rem', color: '#e8e8ee', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            TechryonGlobal invites experienced professionals, researchers, faculty members, and industry experts to join us as judges, mentors, speakers, or partners.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <a href="#" style={{
              display: 'inline-block', textAlign: 'center', textDecoration: 'none',
              background: '#d2aa64', color: '#101015',
              border: 'none', padding: '0.75rem 1.5rem', borderRadius: '0.75rem',
              fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer',
              boxShadow: '0 0 15px rgba(210,170,100,0.3)', transition: 'all 0.2s',
            }}>
              Apply as Judge
            </a>
            <a href="#" style={{
              display: 'inline-block', textAlign: 'center', textDecoration: 'none',
              background: 'rgba(210,170,100,0.1)', color: '#d2aa64',
              border: '1px solid #d2aa64', padding: '0.75rem 1.5rem', borderRadius: '0.75rem',
              fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer',
              transition: 'all 0.2s',
            }}>
              Apply as Speaker
            </a>
            <a href="#" style={{
              display: 'inline-block', textAlign: 'center', textDecoration: 'none',
              background: 'rgba(210,170,100,0.1)', color: '#d2aa64',
              border: '1px solid #d2aa64', padding: '0.75rem 1.5rem', borderRadius: '0.75rem',
              fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer',
              transition: 'all 0.2s',
            }}>
              Become a Partner
            </a>
            <a href="#" style={{
              display: 'inline-block', textAlign: 'center', textDecoration: 'none',
              background: 'rgba(210,170,100,0.1)', color: '#d2aa64',
              border: '1px solid #d2aa64', padding: '0.75rem 1.5rem', borderRadius: '0.75rem',
              fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer',
              transition: 'all 0.2s',
            }}>
              Become a Sponsor
            </a>
          </div>
        </div>
      </section>

      {/* ── IMPORTANT DATES ── */}
      <section id="important-dates">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Calendar size={18} style={{ color: '#00dcb4' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Important Dates</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            { event: 'Registration Opens', date: 'June 2026' },
            { event: 'Judge Applications Open', date: 'June 2026' },
            { event: 'Speaker Applications Open', date: 'June 2026' },
            { event: 'Registration Deadline', date: '22 September 2026' },
            { event: 'Innovation Forum & Global Hackathon', date: '27 September 2026', highlight: true },
            { event: 'Certificates', date: 'Within 7 Days' }
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              background: item.highlight ? 'rgba(0,220,180,0.05)' : 'rgba(255,255,255,0.02)', 
              padding: '1rem 1.5rem', borderRadius: '0.75rem', 
              border: `1px solid ${item.highlight ? 'rgba(0,220,180,0.2)' : 'rgba(255,255,255,0.05)'}`
            }}>
              <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e8e8ee' }}>{item.event}</span>
              <span style={{ fontSize: '0.95rem', fontWeight: 700, color: item.highlight ? '#00dcb4' : '#a0a0b0' }}>{item.date}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY PARTICIPATE ── */}
      <section id="why-participate">
         <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Star size={18} style={{ color: '#d2aa64' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Why Participate?</h3>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
          {[
            'Showcase your innovation on a global platform',
            'Gain recognition from international experts',
            'Network with researchers and industry leaders',
            'Receive mentorship and feedback',
            'Build impactful AI solutions',
            'Earn international certificates and awards',
            'Collaborate with multidisciplinary teams',
            'Present before international experts',
            'Expand your professional network',
            'Publish your innovative ideas',
            'Learn from keynote speakers',
            'Explore emerging technologies',
            'Receive international exposure'
          ].map((item, i) => (
            <li key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
              background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.05)'
            }}>
              <ArrowRight size={16} style={{ color: '#00dcb4', marginTop: '2px', flexShrink: 0 }} />
              <span style={{ fontSize: '0.95rem', color: '#a0a0b0', lineHeight: 1.5 }}>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── REGISTRATION SECTION ── */}
      <section id="registration" style={{ marginTop: '2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{
            display: 'inline-block', padding: '0.35rem 1.1rem', borderRadius: '2rem',
            background: 'rgba(0,220,180,0.12)', border: '1px solid rgba(0,220,180,0.3)',
            color: '#00dcb4', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase',
            marginBottom: '0.75rem'
          }}>
            Online Registration Open • Worldwide Access
          </div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#e8e8ee', marginBottom: '0.5rem' }}>
            Register for the Industrial Hackathon
          </h2>
          <p style={{ fontSize: '1rem', color: '#a0a0b0', maxWidth: '620px', margin: '0 auto 1.5rem' }}>
            Join worldwide participants. Select your role below or submit your registration directly via our official Google Form.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'rgba(0,220,180,0.15)', color: '#00dcb4',
                border: '1px solid rgba(0,220,180,0.35)',
                padding: '0.65rem 1.4rem', borderRadius: '0.75rem',
                fontSize: '0.88rem', fontWeight: 700, textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#00dcb4'; e.currentTarget.style.color = '#0b1015'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,220,180,0.15)'; e.currentTarget.style.color = '#00dcb4'; }}
            >
              Official Google Form Registration <ExternalLink size={15} />
            </a>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          
          {/* Participant */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0,220,180,0.12), rgba(0,180,220,0.02))',
            borderRadius: '1.5rem', padding: '2rem', border: '1px solid rgba(0,220,180,0.3)',
            display: 'flex', flexDirection: 'column', position: 'relative'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#e8e8ee', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Rocket size={20} style={{ color: '#00dcb4' }} /> Participant / Team
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#9090a0', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
              Compete individually or in teams of up to 5 members. Receive mentor guidance, submit code on GitHub, and pitch to international judges.
            </p>
            <a 
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '100%', background: '#00dcb4', color: '#0b1015',
                border: 'none', padding: '0.85rem', borderRadius: '0.75rem',
                fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer',
                boxShadow: '0 0 15px rgba(0,220,180,0.3)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Register as Participant <ExternalLink size={15} />
            </a>
          </div>

          {/* Judge */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(210,170,100,0.1), rgba(180,140,80,0.02))',
            borderRadius: '1.5rem', padding: '2rem', border: '1px solid rgba(210,170,100,0.25)',
            display: 'flex', flexDirection: 'column'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#e8e8ee', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <GraduationCap size={20} style={{ color: '#d2aa64' }} /> Judge / Jury
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#9090a0', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
              Industrial experts, senior researchers, and professors invited to evaluate projects and mentor high-impact solutions.
            </p>
            <a 
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '100%', background: '#d2aa64', color: '#0b1015',
                border: 'none', padding: '0.85rem', borderRadius: '0.75rem',
                fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer',
                boxShadow: '0 0 15px rgba(210,170,100,0.3)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Apply as Judge <ExternalLink size={15} />
            </a>
          </div>

          {/* Speaker */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(180,110,210,0.1), rgba(150,80,180,0.02))',
            borderRadius: '1.5rem', padding: '2rem', border: '1px solid rgba(180,110,210,0.25)',
            display: 'flex', flexDirection: 'column'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#e8e8ee', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mic size={20} style={{ color: '#b46ed2' }} /> Keynote Speaker
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#9090a0', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
              Deliver keynote presentations and share industry expertise in our virtual Innovation Forum sessions.
            </p>
            <a 
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '100%', background: '#b46ed2', color: '#fff',
                border: 'none', padding: '0.85rem', borderRadius: '0.75rem',
                fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer',
                boxShadow: '0 0 15px rgba(180,110,210,0.3)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Apply as Speaker <ExternalLink size={15} />
            </a>
          </div>

          {/* Partner / Sponsor */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(100,180,210,0.1), rgba(70,150,180,0.02))',
            borderRadius: '1.5rem', padding: '2rem', border: '1px solid rgba(100,180,210,0.25)',
            display: 'flex', flexDirection: 'column'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#e8e8ee', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Handshake size={20} style={{ color: '#64b4d2' }} /> Partner / Sponsor
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#9090a0', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
              Support developer & startup innovators by providing cloud infrastructure, datasets, or specialized challenge bounties.
            </p>
            <a 
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '100%', background: '#64b4d2', color: '#0b1015',
                border: 'none', padding: '0.85rem', borderRadius: '0.75rem',
                fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer',
                boxShadow: '0 0 15px rgba(100,180,210,0.3)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Become a Partner <ExternalLink size={15} />
            </a>
          </div>

        </div>
      </section>

      {/* ── PARTNERS & COLLABORATORS ── */}
      <section id="partners">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Building size={18} style={{ color: '#64b4d2' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Partners & Collaborators</h3>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ fontSize: '0.95rem', color: '#a0a0b0', marginBottom: '1.5rem', textAlign: 'center' }}>
            We collaborate with industry leaders and communities worldwide. Opportunities exist for:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            {[
              'Academic Partners', 'Industry Partners', 'Research Organizations', 
              'Innovation Partners', 'Media Partners', 'Technology Partners', 
              'Startup Partners', 'Community Partners'
            ].map((p, i) => (
              <span key={i} style={{
                background: 'rgba(100,180,210,0.05)', color: '#64b4d2',
                border: '1px solid rgba(100,180,210,0.2)', padding: '0.5rem 1rem',
                borderRadius: '0.5rem', fontSize: '0.85rem', fontWeight: 600
              }}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORGANIZING COMMITTEE ── */}
      <section id="organizing-committee">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Briefcase size={18} style={{ color: '#d2aa64' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Organizing Committee & Leadership</h3>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {committeeList.map((member, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '1.25rem',
              border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center',
              display: 'flex', flexDirection: 'column', alignItems: 'center'
            }}>
              <div style={{
                width: '84px', height: '84px', borderRadius: '50%',
                overflow: 'hidden', marginBottom: '1rem', border: '2px solid rgba(210,170,100,0.4)',
                boxShadow: '0 0 15px rgba(210,170,100,0.15)'
              }}>
                <img src={member.photo} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#e8e8ee', margin: '0 0 0.3rem' }}>{member.name}</h4>
              <div style={{ fontSize: '0.84rem', color: '#d2aa64', fontWeight: 600 }}>{member.role}</div>
              <div style={{ fontSize: '0.78rem', color: '#8a8a9a', marginTop: '0.2rem' }}>{member.org}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ── */}
      <section id="faq">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <HelpCircle size={18} style={{ color: '#b46ed2' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Frequently Asked Questions</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          {faqs.map((faq, index) => (
            <div key={index} style={{
              background: 'rgba(255,255,255,0.02)', borderRadius: '0.85rem',
              border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden'
            }}>
              <div 
                onClick={() => toggleFAQ(index)}
                style={{ 
                  padding: '1.25rem', display: 'flex', justifyContent: 'space-between', 
                  alignItems: 'center', cursor: 'pointer' 
                }}
              >
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e8e8ee' }}>{faq.q}</span>
                {openFAQ === index ? <ChevronUp size={18} color="#00dcb4" /> : <ChevronDown size={18} color="#a0a0b0" />}
              </div>
              {openFAQ === index && (
                <div style={{ padding: '0 1.25rem 1.25rem', fontSize: '0.9rem', color: '#a0a0b0', lineHeight: 1.7 }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT US ── */}
      <section id="contact">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Mail size={18} style={{ color: '#00dcb4' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Contact & Support</h3>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          <div style={{ background: 'rgba(0,220,180,0.05)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid rgba(0,220,180,0.15)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(0,220,180,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Mail size={22} style={{ color: '#00dcb4' }} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: '#8a8a9a', textTransform: 'uppercase', fontWeight: 600 }}>Inquiries & Partnerships</div>
              <a href="mailto:inquiries@techryonglobal.com" style={{ fontSize: '1rem', color: '#e8e8ee', fontWeight: 600, textDecoration: 'none' }}>inquiries@techryonglobal.com</a>
            </div>
          </div>
          <div style={{ background: 'rgba(100,180,210,0.05)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid rgba(100,180,210,0.15)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(100,180,210,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Globe size={22} style={{ color: '#64b4d2' }} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: '#8a8a9a', textTransform: 'uppercase', fontWeight: 600 }}>Location & Access</div>
              <div style={{ fontSize: '1rem', color: '#e8e8ee', fontWeight: 600 }}>100% Online Virtual Platform • Global Access</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HackathonSections;
