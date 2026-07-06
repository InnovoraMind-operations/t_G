import React from 'react';
import { 
  Sparkles, Target, CalendarClock, Award, Users, Star, ArrowRight, 
  BrainCircuit, Globe, CheckCircle, UserCheck, FileText, BarChart, 
  Calendar, Handshake, Mail, MapPin, Laptop, Rocket, Medal, Trophy,
  GraduationCap
} from 'lucide-react';

const HackathonSections = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
      
      {/* ── ABOUT TECHRYONGLOBAL ── */}
      <section>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Globe size={18} style={{ color: '#64b4d2' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>About TechryonGlobal</h3>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#a0a0b0', marginBottom: '1.5rem' }}>
            TechryonGlobal is a global technology and innovation platform dedicated to fostering collaboration, research, learning, and technological advancement through international conferences, hackathons, workshops, and professional networking initiatives.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#a0a0b0' }}>
            Our mission is to connect students, researchers, educators, professionals, entrepreneurs, and industry leaders worldwide to solve real-world challenges through innovation and emerging technologies.
          </p>
        </div>
      </section>

      {/* ── ABOUT THE HACKATHON ── */}
      <section>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Sparkles size={18} style={{ color: '#00dcb4' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>About the Hackathon</h3>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#a0a0b0', marginBottom: '1.5rem' }}>
            The <strong>TechryonGlobal AI Hackathon 2026</strong> is an international virtual innovation challenge that brings together students, developers, researchers, entrepreneurs, startups, and technology enthusiasts from across the globe.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#a0a0b0', marginBottom: '1.5rem' }}>
            Organized by TechryonGlobal, this hackathon aims to foster innovation, collaboration, and technological excellence by encouraging participants to develop impactful solutions using Artificial Intelligence and emerging technologies.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#a0a0b0' }}>
            Participants will have the opportunity to showcase their creativity, technical skills, and problem-solving abilities before an esteemed panel of international judges, industry leaders, researchers, and academic experts. The event serves as a global platform where innovative ideas can be transformed into practical solutions addressing real-world challenges across industries and communities.
          </p>
        </div>
      </section>

      {/* ── THEME & TRACKS ── */}
      <section>
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
            Participants are invited to build innovative AI-powered solutions that address real-world challenges and contribute to a smarter, more sustainable, and inclusive world.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {[
            'Artificial Intelligence & Generative AI',
            'Healthcare & Wellbeing',
            'Smart Cities & Sustainability',
            'Education Technology',
            'FinTech & Financial Inclusion',
            'Cybersecurity & Digital Trust',
            'Open Innovation'
          ].map((track, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.03)', padding: '1rem 1.5rem', borderRadius: '1rem',
              border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: '0.75rem'
            }}>
              <BrainCircuit size={18} style={{ color: '#00dcb4' }} />
              <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e8e8ee' }}>{track}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── EVENT HIGHLIGHTS ── */}
      <section>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <CheckCircle size={18} style={{ color: '#64b4d2' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Event Highlights</h3>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {[
            { title: 'Global Virtual Event', desc: 'Join from anywhere in the world through our immersive online platform, breaking geographical barriers.', icon: Globe, glow: 'rgba(100,180,210,0.1)', color: '#64b4d2' },
            { title: 'AI-Focused Innovation Challenge', desc: 'Tackle real-world problems by building cutting-edge solutions powered by Artificial Intelligence and Machine Learning.', icon: BrainCircuit, glow: 'rgba(0,220,180,0.1)', color: '#00dcb4' },
            { title: 'International Judges & Mentors', desc: 'Get evaluated and guided by a diverse panel of esteemed industry leaders, researchers, and academic experts.', icon: GraduationCap, glow: 'rgba(210,170,100,0.1)', color: '#d2aa64' },
            { title: 'Team Size: 1–5 Members', desc: 'Participate as an individual or collaborate with a team to combine diverse skills and perspectives.', icon: Users, glow: 'rgba(180,110,210,0.1)', color: '#b46ed2' },
            { title: 'Digital Certificates', desc: 'Earn verifiable digital certificates to recognize your participation, achievements, and contributions.', icon: Award, glow: 'rgba(210,110,110,0.1)', color: '#d26e6e' },
            { title: 'Open Worldwide', desc: 'Accessible to students, developers, and professionals globally, fostering a truly international community.', icon: Globe, glow: 'rgba(100,180,210,0.1)', color: '#64b4d2' },
            { title: 'Fully Online Participation', desc: 'Experience seamless collaboration, project submission, and live demonstrations entirely online.', icon: Laptop, glow: 'rgba(0,220,180,0.1)', color: '#00dcb4' },
            { title: 'Multiple Innovation Tracks', desc: 'Choose from various specialized tracks including Healthcare, FinTech, Smart Cities, and Education Technology.', icon: Target, glow: 'rgba(210,170,100,0.1)', color: '#d2aa64' },
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
      <section>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <UserCheck size={18} style={{ color: '#00dcb4' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Eligibility & Team Size</h3>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 style={{ fontSize: '1.05rem', color: '#e8e8ee', fontWeight: 700, marginBottom: '1rem' }}>Eligible Participants</h4>
            <p style={{ fontSize: '0.95rem', color: '#a0a0b0', marginBottom: '1rem' }}>The hackathon is open to participants worldwide, including:</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem' }}>
              {['Undergraduate Students', 'Postgraduate Students', 'Research Scholars', 'Faculty Members', 'Developers', 'Industry Professionals', 'Entrepreneurs', 'Startups'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#9090a0' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00dcb4' }} /> {item}
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
      <section>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <CalendarClock size={18} style={{ color: '#64b4d2' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Event Schedule (02 August 2026)</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            { name: 'Opening Ceremony', ist: '04:00 PM', edt: '06:30 AM', pdt: '03:30 AM' },
            { name: 'Hackathon Begins', ist: '04:30 PM', edt: '07:00 AM', pdt: '04:00 AM' },
            { name: 'Submission Deadline', ist: '10:00 PM', edt: '12:30 PM', pdt: '09:30 AM' },
            { name: 'Project Demonstrations', ist: '10:00 PM – 11:00 PM', edt: '12:30 PM – 01:30 PM', pdt: '09:30 AM – 10:30 AM' },
            { name: 'Winners Announcement', ist: '11:00 PM', edt: '01:30 PM', pdt: '10:30 AM' }
          ].map((event, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem',
              background: 'rgba(255,255,255,0.02)', padding: '1.25rem', borderRadius: '1rem',
              borderLeft: '4px solid #64b4d2', borderTop: '1px solid rgba(255,255,255,0.05)',
              borderRight: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#e8e8ee', marginBottom: '0.3rem' }}>{event.name}</h4>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: '#9090a0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>IST (India)</span> <span style={{ color: '#64b4d2', fontWeight: 600 }}>{event.ist}</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>EDT (USA)</span> <span style={{ color: '#e8e8ee' }}>{event.edt}</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>PDT (USA)</span> <span style={{ color: '#e8e8ee' }}>{event.pdt}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SUBMISSION REQUIREMENTS ── */}
      <section>
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
              'Project Documentation',
              'Project Demonstration Video (Maximum 5 Minutes)',
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
      <section>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <BarChart size={18} style={{ color: '#00dcb4' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Evaluation Criteria</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            { name: 'Innovation & Creativity', weight: '25%' },
            { name: 'Technical Implementation', weight: '25%' },
            { name: 'Problem-Solving Impact', weight: '20%' },
            { name: 'Practical Applicability', weight: '15%' },
            { name: 'Presentation & Demonstration', weight: '15%' }
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

      {/* ── RECOGNITION & CERTIFICATES ── */}
      <section>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Award size={18} style={{ color: '#d2aa64' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Recognition & Certificates</h3>
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
            'People\'s Choice Project'
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

      {/* ── JUDGES & MENTORS ── */}
      <section>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Users size={18} style={{ color: '#64b4d2' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>International Judges & Mentors</h3>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ fontSize: '0.95rem', color: '#a0a0b0', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            TechryonGlobal AI Hackathon 2026 will feature an international panel of experts from academia, industry, research organizations, and technology companies.
          </p>
          <h4 style={{ fontSize: '1rem', color: '#e8e8ee', fontWeight: 600, marginBottom: '1rem' }}>Areas of expertise include:</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
             {[
               'Artificial Intelligence & Machine Learning',
               'Data Science & Analytics',
               'Software Engineering',
               'Cybersecurity',
               'Healthcare Technology',
               'FinTech',
               'Sustainability',
               'Entrepreneurship & Innovation'
             ].map((org, i) => (
               <span key={i} style={{
                 padding: '0.5rem 1rem', background: 'rgba(100,180,210,0.1)', color: '#64b4d2',
                 borderRadius: '2rem', fontSize: '0.85rem', fontWeight: 600, border: '1px solid rgba(100,180,210,0.2)'
               }}>{org}</span>
             ))}
          </div>
          <p style={{ fontSize: '0.9rem', color: '#808090', fontStyle: 'italic' }}>* Judge and mentor profiles will be announced soon.</p>
        </div>
      </section>

      {/* ── CALL FOR JUDGES ── */}
      <section>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Star size={18} style={{ color: '#d2aa64' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Call for Judges & Mentors</h3>
        </div>
        <div style={{ background: 'linear-gradient(135deg, rgba(210,170,100,0.05), transparent)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(210,170,100,0.15)' }}>
          <p style={{ fontSize: '0.95rem', color: '#e8e8ee', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            TechryonGlobal invites experienced professionals, researchers, faculty members, and industry experts to join the international judging and mentoring panel.
          </p>
          <h4 style={{ fontSize: '1rem', color: '#d2aa64', fontWeight: 700, marginBottom: '1rem' }}>Benefits</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
            {[
              'International Judge Certificate',
              'Recognition on Official Website',
              'Global Networking Opportunities',
              'Contribution to Innovation and Talent Development'
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: '#a0a0b0' }}>
                <CheckCircle size={16} style={{ color: '#d2aa64', flexShrink: 0, marginTop: '2px' }} /> {item}
              </li>
            ))}
          </ul>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScwI4DyHel7I26YMY9TnW1I4ahbRn96WVWoq1KK4ed2838Rgg/viewform?usp=publish-editor" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <button style={{
              background: '#d2aa64', color: '#101015',
              border: 'none', padding: '0.75rem 1.5rem', borderRadius: '0.75rem',
              fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer',
              boxShadow: '0 0 15px rgba(210,170,100,0.3)', transition: 'all 0.2s',
            }}>
              Apply as Judge
            </button>
          </a>
        </div>
      </section>

      {/* ── IMPORTANT DATES ── */}
      <section>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Calendar size={18} style={{ color: '#00dcb4' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Important Dates</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            { event: 'Registration Opens', date: 'June 2026' },
            { event: 'Judge Applications Open', date: 'June 2026' },
            { event: 'Registration Deadline', date: '31 July 2026' },
            { event: 'Hackathon Day', date: '02 August 2026', highlight: true },
            { event: 'Certificate Distribution', date: 'Within 7 Days After Event' }
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
      <section>
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
            'Collaborate with participants from around the world'
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

      {/* ── CALL TO ACTION / REGISTRATION ── */}
      <section style={{ marginTop: '2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#e8e8ee', marginBottom: '1rem' }}>Registration Section</h2>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#00dcb4', marginBottom: '1rem' }}>Join TechryonGlobal AI Hackathon 2026</h3>
          <p style={{ fontSize: '1.1rem', color: '#a0a0b0', fontWeight: 500 }}>Choose your role and register today.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          
          {/* Participant Registration Card */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0,220,180,0.1), rgba(0,180,220,0.02))',
            borderRadius: '1.5rem', padding: '2.5rem', border: '1px solid rgba(0,220,180,0.2)',
            display: 'flex', flexDirection: 'column',
            boxShadow: '0 8px 32px rgba(0,220,180,0.05)'
          }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#e8e8ee', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Rocket size={24} style={{ color: '#00dcb4' }} /> Participant Registration
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#9090a0', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Ready to innovate and compete with participants from around the world?
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem', flexGrow: 1 }}>
              {[
                'Individual & Team Participation',
                'Global Competition',
                'International Certificates',
                'Global Recognition'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', color: '#e8e8ee' }}>
                  <ArrowRight size={14} style={{ color: '#00dcb4' }} /> {item}
                </li>
              ))}
            </ul>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScVMXElEEVGpIhAX0DEWbQH3yudfyEfSiis2cQ9Oo9R8YYbIg/viewform?usp=publish-editor" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <button style={{
                width: '100%', background: '#00dcb4', color: '#101015',
                border: 'none', padding: '1rem', borderRadius: '0.75rem',
                fontSize: '1rem', fontWeight: 700, cursor: 'pointer',
                boxShadow: '0 0 15px rgba(0,220,180,0.3)', transition: 'all 0.2s',
                letterSpacing: '0.05em', textTransform: 'uppercase'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 25px rgba(0,220,180,0.5)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 15px rgba(0,220,180,0.3)'; }}
              >
                Register as Participant
              </button>
            </a>
          </div>

          {/* Judge Registration Card */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(210,170,100,0.1), rgba(180,140,80,0.02))',
            borderRadius: '1.5rem', padding: '2.5rem', border: '1px solid rgba(210,170,100,0.2)',
            display: 'flex', flexDirection: 'column',
            boxShadow: '0 8px 32px rgba(210,170,100,0.05)'
          }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#e8e8ee', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <GraduationCap size={24} style={{ color: '#d2aa64' }} /> Judge Registration
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#9090a0', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Join our distinguished panel of industry experts, researchers, and academic leaders.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem', flexGrow: 1 }}>
              {[
                'Evaluate Innovative Projects',
                'Network with Global Talent',
                'Receive Judge Certificate',
                'International Recognition'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', color: '#e8e8ee' }}>
                  <ArrowRight size={14} style={{ color: '#d2aa64' }} /> {item}
                </li>
              ))}
            </ul>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScwI4DyHel7I26YMY9TnW1I4ahbRn96WVWoq1KK4ed2838Rgg/viewform?usp=publish-editor" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <button style={{
                width: '100%', background: '#d2aa64', color: '#101015',
                border: 'none', padding: '1rem', borderRadius: '0.75rem',
                fontSize: '1rem', fontWeight: 700, cursor: 'pointer',
                boxShadow: '0 0 15px rgba(210,170,100,0.3)', transition: 'all 0.2s',
                letterSpacing: '0.05em', textTransform: 'uppercase'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 25px rgba(210,170,100,0.5)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 15px rgba(210,170,100,0.3)'; }}
              >
                Apply as Judge
              </button>
            </a>
          </div>

        </div>
      </section>

      {/* ── PARTNERS & COLLABORATORS ── */}
      <section>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Handshake size={18} style={{ color: '#64b4d2' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Partners & Collaborators</h3>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
          <p style={{ fontSize: '1rem', color: '#e8e8ee', marginBottom: '1rem', fontWeight: 600 }}>Partner and collaborator announcements will be released soon.</p>
          <p style={{ fontSize: '0.95rem', color: '#a0a0b0' }}>Organizations interested in partnering with TechryonGlobal AI Hackathon 2026 are welcome to contact us.</p>
        </div>
      </section>

      {/* ── CONTACT US ── */}
      <section>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Mail size={18} style={{ color: '#d2aa64' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Contact Us</h3>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          <div style={{ background: 'rgba(210,170,100,0.05)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid rgba(210,170,100,0.15)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(210,170,100,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Mail size={20} style={{ color: '#d2aa64' }} />
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
