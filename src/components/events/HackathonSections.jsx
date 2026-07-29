import React, { useState } from 'react';
import { 
  Sparkles, Target, CalendarClock, Award, Users, Star, ArrowRight, 
  BrainCircuit, Globe, CheckCircle, UserCheck, FileText, BarChart, 
  Calendar, Handshake, Mail, MapPin, Laptop, Rocket, Medal, Trophy,
  GraduationCap, Lightbulb, ShieldCheck, HeartPulse, Building, 
  BookOpen, Mic, Network, HelpCircle, ChevronDown, ChevronUp, Briefcase
} from 'lucide-react';

const HackathonSections = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index);
    }
  };

  const faqs = [
    { q: "Who can participate in the event?", a: "The event is open worldwide to students, researchers, developers, entrepreneurs, startups, faculty members, and industry professionals." },
    { q: "Is there any registration fee?", a: "No, participation in the Global Hackathon and Innovation Forum is completely free." },
    { q: "Can I participate individually?", a: "Yes, you can participate as an individual or form a team of up to 5 members." },
    { q: "What is the format of the event?", a: "The event is fully virtual, allowing participants from all over the world to join seamlessly." },
    { q: "How do I submit my hackathon project?", a: "You must submit a GitHub repository, installation guide, README, AI model details, and an optional live demo link." },
    { q: "Will I get a certificate?", a: "Yes, all eligible participants, judges, mentors, and speakers will receive internationally recognized digital certificates." },
    { q: "Can I attend only the Innovation Forum?", a: "Yes, you can register as a participant to attend the keynote sessions, panels, and networking events without submitting a hackathon project." },
    { q: "Who are the judges for the hackathon?", a: "Our judging panel comprises globally recognized experts, academic leaders, and industry professionals." },
    { q: "What is the main theme of the hackathon?", a: "The theme is 'AI for a Smarter, Sustainable & Inclusive Future'." },
    { q: "How are the winners evaluated?", a: "Evaluation is based on Innovation & Creativity (25%), Technical Excellence (20%), Impact & Scalability (20%), Practical Implementation (15%), Presentation & Demonstration (10%), and User Experience (10%)." },
    { q: "Will sessions be recorded?", a: "Yes, keynotes and expert panels from the Innovation Forum will be recorded and shared with registered participants." },
    { q: "Can startups showcase their products?", a: "Yes, there is a Startup Innovation Showcase where startups can present their solutions." },
    { q: "How can I apply as a speaker?", a: "You can apply using the Speaker Registration link in the Registration section." },
    { q: "Are there sponsorship opportunities?", a: "Yes, we welcome industry, academic, and media partners. Please use the Partner/Sponsor registration." },
    { q: "Where can I find the event schedule?", a: "The detailed event schedule is available in the Event Schedule section on this page." },
    { q: "What happens during the networking sessions?", a: "Participants can interact with speakers, mentors, and other attendees in dedicated virtual networking rooms." },
    { q: "How do I join the opening and closing ceremonies?", a: "Links to the virtual platform will be emailed to all registered participants prior to the event." }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
      
      {/* ── ABOUT EVENT ── */}
      <section id="about-event">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Sparkles size={18} style={{ color: '#00dcb4' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>About the Event</h3>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#a0a0b0', marginBottom: '1.5rem' }}>
            The <strong>TechryonGlobal Innovation Forum & Global Hackathon 2026</strong> is an international virtual platform that brings together students, researchers, developers, entrepreneurs, startups, faculty members, innovators, and industry professionals from across the world.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#a0a0b0', marginBottom: '1.5rem' }}>
            The event combines an Innovation Forum, featuring keynote talks, expert discussions, networking, and knowledge sharing, with an exciting Global Hackathon, where participants collaborate to develop innovative solutions addressing real-world challenges using Artificial Intelligence and emerging technologies.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#a0a0b0' }}>
            Designed to foster creativity, interdisciplinary collaboration, and technological excellence, the event provides a unique opportunity to connect with global experts, showcase innovative ideas, receive mentorship, and gain international recognition.
          </p>
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
            Our mission is to connect students, researchers, educators, professionals, entrepreneurs, and industry leaders worldwide to solve real-world challenges through innovation and emerging technologies.
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
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Theme & Challenge Tracks</h3>
        </div>
        <div style={{
          background: 'linear-gradient(135deg, rgba(210,170,100,0.1), transparent)',
          padding: '1.5rem 2rem', borderRadius: '1rem', border: '1px solid rgba(210,170,100,0.2)',
          marginBottom: '2rem'
        }}>
          <h4 style={{ fontSize: '1.1rem', color: '#d2aa64', fontWeight: 700, marginBottom: '0.5rem' }}>
            AI for a Smarter, Sustainable & Inclusive Future
          </h4>
          <p style={{ fontSize: '0.95rem', color: '#9090a0', lineHeight: 1.6 }}>
            Participants are encouraged to develop innovative solutions that leverage Artificial Intelligence to improve lives, empower communities, accelerate sustainable development, and drive digital transformation across industries.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {[
            { title: 'Artificial Intelligence & Generative AI', desc: 'Develop intelligent systems, automation tools, AI assistants, large language model applications, and next-generation AI solutions.' },
            { title: 'Healthcare & Wellbeing', desc: 'Create AI-driven diagnostics, patient care optimization, mental health tech, and innovative medical solutions.' },
            { title: 'Smart Cities & Sustainability', desc: 'Build green tech, energy optimization models, smart infrastructure, and environmental monitoring tools.' },
            { title: 'Education Technology', desc: 'Design personalized learning experiences, accessibility tools, and intelligent tutoring systems.' },
            { title: 'FinTech & Financial Inclusion', desc: 'Develop secure payment models, predictive financial analytics, and fraud detection systems.' },
            { title: 'Cybersecurity & Digital Trust', desc: 'Create threat detection models, privacy-preserving AI, and blockchain-based security solutions.' },
            { title: 'Open Innovation', desc: 'Any creative solution utilizing AI to address a significant real-world challenge not covered in other tracks.' }
          ].map((track, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '1rem',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <BrainCircuit size={18} style={{ color: '#00dcb4', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e8e8ee' }}>{track.title}</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#9090a0', lineHeight: 1.5, paddingLeft: '1.85rem' }}>{track.desc}</p>
            </div>
          ))}
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
                'Undergraduate Students', 'Postgraduate Students', 'Research Scholars', 
                'Faculty Members', 'Developers', 'Industry Professionals', 
                'Entrepreneurs', 'Startups', 'AI Enthusiasts', 'Product Designers', 
                'Data Scientists', 'Innovation Communities', 'Technology Clubs', 'NGOs'
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
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Event Schedule (30 August 2026)</h3>
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
            'Best Student Team',
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Mic size={18} style={{ color: '#64b4d2' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Featured Speakers</h3>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ fontSize: '0.95rem', color: '#a0a0b0', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            International keynote speakers from academia, industry, startups, and research organizations will share their expertise on AI, innovation, entrepreneurship, and digital transformation.
          </p>
          <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(100,180,210,0.05)', borderRadius: '1rem', border: '1px dashed rgba(100,180,210,0.3)' }}>
             <p style={{ fontSize: '1.1rem', color: '#64b4d2', fontWeight: 600 }}>Speaker Announcements Coming Soon</p>
             <p style={{ fontSize: '0.9rem', color: '#a0a0b0', marginTop: '0.5rem' }}>We are curating an exceptional lineup of global AI and tech leaders.</p>
          </div>
        </div>
      </section>

      {/* ── INTERNATIONAL JUDGES ── */}
      <section id="judges">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Users size={18} style={{ color: '#64b4d2' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>International Judges</h3>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ fontSize: '0.95rem', color: '#a0a0b0', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Meet the distinguished panel of international experts, researchers, professors, and industry leaders responsible for evaluating innovative AI solutions.
          </p>
          <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(100,180,210,0.05)', borderRadius: '1rem', border: '1px dashed rgba(100,180,210,0.3)' }}>
             <p style={{ fontSize: '1.1rem', color: '#64b4d2', fontWeight: 600 }}>Panel Announcements Coming Soon</p>
             <p style={{ fontSize: '0.9rem', color: '#a0a0b0', marginTop: '0.5rem' }}>We are curating an exceptional lineup of global AI leaders. Stay tuned for updates.</p>
          </div>
        </div>
      </section>

      {/* ── MENTORS & EXPERTS ── */}
      <section id="mentors">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <GraduationCap size={18} style={{ color: '#d2aa64' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Mentors & Experts</h3>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ fontSize: '0.95rem', color: '#a0a0b0', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Connect with experienced professionals, researchers, and technology experts who will provide guidance, technical insights, and mentorship throughout the event.
          </p>
          <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(210,170,100,0.05)', borderRadius: '1rem', border: '1px dashed rgba(210,170,100,0.3)' }}>
             <p style={{ fontSize: '1.1rem', color: '#d2aa64', fontWeight: 600 }}>Mentorship Roster to be Revealed</p>
             <p style={{ fontSize: '0.9rem', color: '#a0a0b0', marginTop: '0.5rem' }}>Our network of industry professionals is currently being finalized.</p>
          </div>
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
            { event: 'Registration Deadline', date: '25 August 2026' },
            { event: 'Innovation Forum & Global Hackathon', date: '30 August 2026', highlight: true },
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
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#e8e8ee', marginBottom: '1rem' }}>Registration Section</h2>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#00dcb4', marginBottom: '1rem' }}>Join the Global Event</h3>
          <p style={{ fontSize: '1.1rem', color: '#a0a0b0', fontWeight: 500 }}>Choose your role and register today.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          
          {/* Participant */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0,220,180,0.1), rgba(0,180,220,0.02))',
            borderRadius: '1.5rem', padding: '2rem', border: '1px solid rgba(0,220,180,0.2)',
            display: 'flex', flexDirection: 'column'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#e8e8ee', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Rocket size={20} style={{ color: '#00dcb4' }} /> Participant
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#9090a0', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
              Join the hackathon or attend the Innovation Forum to network and learn.
            </p>
            <a href="#" style={{
              display: 'inline-block', textAlign: 'center', textDecoration: 'none',
              width: '100%', background: '#00dcb4', color: '#101015',
              border: 'none', padding: '0.8rem', borderRadius: '0.75rem',
              fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer',
              boxShadow: '0 0 15px rgba(0,220,180,0.3)', boxSizing: 'border-box'
            }}>
              Register as Participant
            </a>
          </div>

          {/* Judge */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(210,170,100,0.1), rgba(180,140,80,0.02))',
            borderRadius: '1.5rem', padding: '2rem', border: '1px solid rgba(210,170,100,0.2)',
            display: 'flex', flexDirection: 'column'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#e8e8ee', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <GraduationCap size={20} style={{ color: '#d2aa64' }} /> Judge
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#9090a0', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
              Evaluate projects, mentor participants, and share your industry expertise.
            </p>
            <a href="#" style={{
              display: 'inline-block', textAlign: 'center', textDecoration: 'none',
              width: '100%', background: '#d2aa64', color: '#101015',
              border: 'none', padding: '0.8rem', borderRadius: '0.75rem',
              fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer',
              boxShadow: '0 0 15px rgba(210,170,100,0.3)', boxSizing: 'border-box'
            }}>
              Apply as Judge
            </a>
          </div>

          {/* Speaker */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(180,110,210,0.1), rgba(150,80,180,0.02))',
            borderRadius: '1.5rem', padding: '2rem', border: '1px solid rgba(180,110,210,0.2)',
            display: 'flex', flexDirection: 'column'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#e8e8ee', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mic size={20} style={{ color: '#b46ed2' }} /> Speaker
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#9090a0', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
              Deliver keynotes and share insights in our Innovation Forum.
            </p>
            <a href="#" style={{
              display: 'inline-block', textAlign: 'center', textDecoration: 'none',
              width: '100%', background: '#b46ed2', color: '#fff',
              border: 'none', padding: '0.8rem', borderRadius: '0.75rem',
              fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer',
              boxShadow: '0 0 15px rgba(180,110,210,0.3)', boxSizing: 'border-box'
            }}>
              Apply as Speaker
            </a>
          </div>

          {/* Partner / Sponsor */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(100,180,210,0.1), rgba(70,150,180,0.02))',
            borderRadius: '1.5rem', padding: '2rem', border: '1px solid rgba(100,180,210,0.2)',
            display: 'flex', flexDirection: 'column'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#e8e8ee', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Handshake size={20} style={{ color: '#64b4d2' }} /> Partner/Sponsor
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#9090a0', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
              Support innovation and gain global visibility across the ecosystem.
            </p>
            <a href="#" style={{
              display: 'inline-block', textAlign: 'center', textDecoration: 'none',
              width: '100%', background: '#64b4d2', color: '#101015',
              border: 'none', padding: '0.8rem', borderRadius: '0.75rem',
              fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer',
              boxShadow: '0 0 15px rgba(100,180,210,0.3)', boxSizing: 'border-box'
            }}>
              Become a Partner
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
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Organizing Committee</h3>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
          <p style={{ fontSize: '1.1rem', color: '#d2aa64', fontWeight: 600 }}>Coming Soon</p>
          <p style={{ fontSize: '0.9rem', color: '#a0a0b0', marginTop: '0.5rem' }}>We will soon introduce the team behind this global event.</p>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ── */}
      <section id="faq">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <HelpCircle size={18} style={{ color: '#b46ed2' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Frequently Asked Questions</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {faqs.map((faq, index) => (
            <div key={index} style={{
              background: 'rgba(255,255,255,0.02)', borderRadius: '0.75rem',
              border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden'
            }}>
              <div 
                onClick={() => toggleFAQ(index)}
                style={{ 
                  padding: '1.25rem', display: 'flex', justifyContent: 'space-between', 
                  alignItems: 'center', cursor: 'pointer' 
                }}
              >
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e8e8ee' }}>{faq.q}</span>
                {openFAQ === index ? <ChevronUp size={18} color="#b46ed2" /> : <ChevronDown size={18} color="#a0a0b0" />}
              </div>
              {openFAQ === index && (
                <div style={{ padding: '0 1.25rem 1.25rem', fontSize: '0.9rem', color: '#a0a0b0', lineHeight: 1.6 }}>
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
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Contact Us</h3>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          <div style={{ background: 'rgba(0,220,180,0.05)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid rgba(0,220,180,0.15)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0,220,180,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Mail size={20} style={{ color: '#00dcb4' }} />
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', color: '#a0a0b0', marginBottom: '0.2rem' }}>Email</div>
              <a href="mailto:inquiries@techryonglobal.com" style={{ fontSize: '1rem', color: '#e8e8ee', fontWeight: 600, textDecoration: 'none' }}>inquiries@techryonglobal.com</a>
            </div>
          </div>
          <div style={{ background: 'rgba(100,180,210,0.05)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid rgba(100,180,210,0.15)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(100,180,210,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MapPin size={20} style={{ color: '#64b4d2' }} />
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', color: '#a0a0b0', marginBottom: '0.2rem' }}>Location</div>
              <div style={{ fontSize: '1rem', color: '#e8e8ee', fontWeight: 600 }}>Virtual Event | Worldwide Participation</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HackathonSections;
