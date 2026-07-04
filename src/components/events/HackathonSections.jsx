import React from 'react';
import { Sparkles, Target, CalendarClock, Trophy, Users, Star, ArrowRight, BrainCircuit } from 'lucide-react';

const HackathonSections = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
      
      {/* ── ABOUT SECTION ── */}
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
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem',
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

      {/* ── AWARDS ── */}
      <section>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Trophy size={18} style={{ color: '#facc15' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Awards & Prizes</h3>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {[
            { title: 'Grand Winner', icon: '🥇', glow: 'rgba(250,204,21,0.2)', border: '#facc15' },
            { title: 'First Runner-Up', icon: '🥈', glow: 'rgba(200,200,200,0.1)', border: '#d4d4d8' },
            { title: 'Second Runner-Up', icon: '🥉', glow: 'rgba(180,110,60,0.1)', border: '#b45309' },
            { title: 'Best AI Innovation Award', icon: '🏆', glow: 'rgba(0,220,180,0.1)', border: '#00dcb4' },
            { title: 'Best Sustainability Solution Award', icon: '🏆', glow: 'rgba(0,220,180,0.1)', border: '#00dcb4' },
            { title: 'Best Healthcare Innovation Award', icon: '🏆', glow: 'rgba(0,220,180,0.1)', border: '#00dcb4' },
            { title: 'Best International Team Award', icon: '🏆', glow: 'rgba(0,220,180,0.1)', border: '#00dcb4' },
            { title: 'Best Student Team Award', icon: '🏆', glow: 'rgba(0,220,180,0.1)', border: '#00dcb4' },
            { title: 'Best UI/UX Design Award', icon: '🏆', glow: 'rgba(0,220,180,0.1)', border: '#00dcb4' },
            { title: 'People\'s Choice Award', icon: '🏆', glow: 'rgba(0,220,180,0.1)', border: '#00dcb4' },
          ].map((award, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '1rem',
              border: `1px solid rgba(255,255,255,0.1)`, display: 'flex', alignItems: 'center', gap: '1rem',
              boxShadow: `inset 0 0 20px ${award.glow}`
            }}>
              <span style={{ fontSize: '1.5rem' }}>{award.icon}</span>
              <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e8e8ee' }}>{award.title}</span>
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

      {/* ── JUDGES & MENTORS ── */}
      <section>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Users size={18} style={{ color: '#64b4d2' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>International Judges & Mentors</h3>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ fontSize: '0.95rem', color: '#a0a0b0', marginBottom: '1.5rem' }}>The event will feature distinguished experts from:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
             {[
               'Leading Universities',
               'Global Technology Companies',
               'Research Organizations',
               'Startup Ecosystems',
               'AI & Data Science Communities'
             ].map((org, i) => (
               <span key={i} style={{
                 padding: '0.4rem 1rem', background: 'rgba(100,180,210,0.1)', color: '#64b4d2',
                 borderRadius: '2rem', fontSize: '0.85rem', fontWeight: 600, border: '1px solid rgba(100,180,210,0.2)'
               }}>{org}</span>
             ))}
          </div>
          <p style={{ fontSize: '0.9rem', color: '#808090', marginTop: '1.5rem', fontStyle: 'italic' }}>* Judge and mentor profiles will be announced soon.</p>
        </div>
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
              <span>🚀</span> Participant Registration
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#9090a0', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Ready to innovate and compete with participants from around the world?
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem', flexGrow: 1 }}>
              {[
                'Individual & Team Participation',
                'Global Competition',
                'International Certificates',
                'Exciting Awards'
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
              <span>🎓</span> Judge Registration
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

    </div>
  );
};

export default HackathonSections;
