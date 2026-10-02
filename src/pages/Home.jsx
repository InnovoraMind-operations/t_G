import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, Award, Globe2, Database, Cpu, Cloud, 
  Shield, CheckCircle2, Zap, Terminal, Sparkles, Lock, Layers,
  ChevronRight, ArrowUpRight, Code2, Smartphone
} from 'lucide-react';
import tgLogo from '../assets/tg-logo.png';
import { servicesData } from '../data/servicesData';

/* ─── Visual styling mapping for home services ─────────────── */
const serviceVisuals = {
  srv_web: {
    icon: Globe2,
    accent: '#00f0ff',
    glow: 'rgba(0, 240, 255, 0.16)',
    border: 'rgba(0, 240, 255, 0.25)',
    tag: 'Web & Enterprise Platforms',
  },
  srv_data: {
    icon: Database,
    accent: '#a855f7',
    glow: 'rgba(168, 85, 247, 0.16)',
    border: 'rgba(168, 85, 247, 0.25)',
    tag: 'Data Engineering & Analytics',
  },
  srv_ai: {
    icon: Cpu,
    accent: '#38bdf8',
    glow: 'rgba(56, 189, 248, 0.16)',
    border: 'rgba(56, 189, 248, 0.25)',
    tag: 'Agentic AI & Physical Systems',
  },
  srv_cloud: {
    icon: Cloud,
    accent: '#00dcb4',
    glow: 'rgba(0, 220, 180, 0.16)',
    border: 'rgba(0, 220, 180, 0.25)',
    tag: 'Cloud & Kubernetes Infra',
  },
  srv_cyber: {
    icon: Shield,
    accent: '#fb7185',
    glow: 'rgba(251, 113, 133, 0.16)',
    border: 'rgba(251, 113, 133, 0.25)',
    tag: 'Zero-Trust Defense & Audit',
  },
  srv_custom_software: {
    icon: Code2,
    accent: '#d2aa64',
    glow: 'rgba(210, 170, 100, 0.16)',
    border: 'rgba(210, 170, 100, 0.25)',
    tag: 'Custom Enterprise Software',
  },
  srv_mobile: {
    icon: Smartphone,
    accent: '#f472b6',
    glow: 'rgba(244, 114, 182, 0.16)',
    border: 'rgba(244, 114, 182, 0.25)',
    tag: 'Mobile App Engineering',
  },
  srv_iot: {
    icon: Layers,
    accent: '#2dd4bf',
    glow: 'rgba(45, 212, 191, 0.16)',
    border: 'rgba(45, 212, 191, 0.25)',
    tag: 'IoT & Industrial Automation',
  },
  srv_it_consulting: {
    icon: Sparkles,
    accent: '#fbbf24',
    glow: 'rgba(251, 191, 36, 0.16)',
    border: 'rgba(251, 191, 36, 0.25)',
    tag: 'IT Consulting & Strategy',
  },
  srv_qa: {
    icon: CheckCircle2,
    accent: '#34d399',
    glow: 'rgba(52, 211, 153, 0.16)',
    border: 'rgba(52, 211, 153, 0.25)',
    tag: 'QA Automation & SRE',
  },
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in flex-grow flex flex-col items-center justify-center pb-24 text-center w-full">
      <div
        className="container flex flex-col items-center"
        style={{ maxWidth: '1200px', paddingLeft: '2rem', paddingRight: '2rem' }}
      >

        {/* ── Top Hero Area ── */}
        <div className="flex flex-col items-center mb-12 mt-4" style={{ maxWidth: '960px' }}>
          
          {/* Central Logo */}
          <div className="p-5 rounded-2xl bg-white/10 shadow-[0_0_35px_rgba(0,240,255,0.35)] mb-6">
            <img src={tgLogo} alt="Techryon Global Logo" style={{ width: 64, height: 64, objectFit: 'contain' }} />
          </div>

          {/* Company Name */}
          <h1 className="text-3xl md:text-5xl font-bold title-glow mb-4 tracking-widest uppercase">
            Techryon<span className="text-accent">Global</span>
          </h1>

          {/* ── ISO 9001:2015 HIGHLIGHTED BADGE ── */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.85rem',
            padding: '0.65rem 1.35rem',
            borderRadius: '2.5rem',
            background: 'linear-gradient(135deg, rgba(210,170,100,0.18) 0%, rgba(0,240,255,0.08) 100%)',
            border: '1px solid rgba(210,170,100,0.45)',
            boxShadow: '0 0 30px rgba(210,170,100,0.15), inset 0 0 15px rgba(210,170,100,0.08)',
            marginBottom: '1.75rem',
            backdropFilter: 'blur(12px)',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: 'rgba(210,170,100,0.25)',
              color: '#d2aa64',
            }}>
              <Award size={18} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <span style={{
                fontSize: '0.82rem',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                display: 'block'
              }}>
                ISO 9001:2015 Certified
              </span>
              <span style={{ fontSize: '0.74rem', color: '#d2aa64', fontWeight: 600 }}>
                Quality Management System (QMS) Accredited Enterprise
              </span>
            </div>
            <span style={{
              fontSize: '0.68rem',
              fontWeight: 800,
              color: '#00f0ff',
              background: 'rgba(0,240,255,0.12)',
              border: '1px solid rgba(0,240,255,0.25)',
              padding: '0.2rem 0.6rem',
              borderRadius: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginLeft: '0.25rem'
            }}>
              ISO Certified
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl" style={{ color: '#e8e8ee' }}>
            Engineering the <span className="text-gradient">Future</span> of Enterprise Technology
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-secondary max-w-3xl leading-relaxed">
            TechryonGlobal is an enterprise technology consulting and software engineering firm specializing in cutting-edge digital infrastructure, artificial intelligence integration, custom cloud platforms, and cybersecurity resilience.
          </p>
        </div>

        {/* ── Trust & Capabilities Bar ── */}
        <div style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 230px), 1fr))',
          gap: '1.25rem',
          marginBottom: '5rem',
          padding: '1.5rem',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '1.25rem',
        }}>
          {[
            { label: 'Quality Standard', value: 'ISO 9001:2015', sub: 'Certified QMS Processes' },
            { label: 'System Reliability', value: '99.99%', sub: 'High-Availability Architectures' },
            { label: 'Security Model', value: 'Zero-Trust', sub: 'Intelligence-Driven Defense' },
            { label: 'Delivery Model', value: 'Full-Lifecycle', sub: 'Consulting & Engineering' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '0.5rem' }}>
              <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#00f0ff', marginBottom: '0.2rem' }}>{stat.value}</div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#e8e8ee', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</div>
              <div style={{ fontSize: '0.72rem', color: '#8a8a9a', marginTop: '0.15rem' }}>{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* ── Core Services Section ── */}
        <div style={{ width: '100%', marginBottom: '4rem' }}>
          
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <div style={{
              display: 'inline-block',
              padding: '0.35rem 1rem',
              borderRadius: '2rem',
              background: 'linear-gradient(135deg, rgba(0,240,255,0.12), rgba(0,180,220,0.06))',
              border: '1px solid rgba(0,240,255,0.25)',
              marginBottom: '1rem',
            }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#00f0ff', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Enterprise Capabilities
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-wide" style={{ color: '#e8e8ee', marginBottom: '0.5rem' }}>
              Our Enterprise IT Services
            </h2>
            <p style={{ fontSize: '1rem', color: '#9090a0', maxWidth: '640px', margin: '0 auto', lineHeight: 1.6 }}>
              Production-grade architectural consulting, full-stack software development, and mission-critical cloud deployments.
            </p>
          </div>

          {/* Services Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '1.75rem',
            textAlign: 'left'
          }}>
            {servicesData.map((service) => {
              const visual = serviceVisuals[service.id] || serviceVisuals.srv_web;
              const IconComp = visual.icon;

              return (
                <HomeServiceCard
                  key={service.id}
                  service={service}
                  visual={visual}
                  IconComp={IconComp}
                  onClick={() => navigate(`/services/${service.id}`)}
                />
              );
            })}
          </div>
        </div>

        {/* ── ISO 9001:2015 Quality Assurance Section ── */}
        <div style={{
          width: '100%',
          marginTop: '3rem',
          marginBottom: '5rem',
          padding: 'clamp(1.5rem, 4vw, 2.75rem)',
          borderRadius: '1.75rem',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(210,170,100,0.07) 100%)',
          border: '1px solid rgba(210,170,100,0.3)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.4), inset 0 0 25px rgba(210,170,100,0.05)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '2.5rem',
          alignItems: 'center',
          textAlign: 'left'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem' }}>
              <ShieldCheck size={26} style={{ color: '#d2aa64' }} />
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#d2aa64', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Certified Quality Governance
              </span>
            </div>
            <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.85rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.85rem', lineHeight: 1.3 }}>
              ISO 9001:2015 Certified Quality Management System
            </h3>
            <p style={{ fontSize: '0.94rem', color: '#9090a0', lineHeight: 1.7, margin: 0 }}>
              TechryonGlobal operates under an accredited ISO 9001:2015 certified Quality Management System. Every enterprise software deliverable, cloud architecture, and cybersecurity deployment adheres to strict international standards for zero-defect engineering, audited compliance, and continuous operational optimization.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { 
                title: 'Standardized Delivery Frameworks', 
                desc: 'Audited SDLC protocols with multi-tier code reviews and automated CI/CD security gating.' 
              },
              { 
                title: 'Information Security & Data Protection', 
                desc: 'Zero-trust architecture standards safeguarding enterprise proprietary models and data.' 
              },
              { 
                title: 'Predictable SLA & Quality Guarantees', 
                desc: 'Documented milestones, high-availability SLAs, and proactive telemetry monitoring.' 
              },
            ].map((item, idx) => (
              <div key={idx} style={{ 
                display: 'flex', alignItems: 'flex-start', gap: '0.85rem',
                padding: '0.85rem 1rem', borderRadius: '0.85rem',
                background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)'
              }}>
                <CheckCircle2 size={18} style={{ color: '#00dcb4', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#e8e8ee' }}>{item.title}</div>
                  <div style={{ fontSize: '0.8rem', color: '#8a8a9a', lineHeight: 1.5, marginTop: '0.1rem' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Enterprise Consultation CTA Banner ── */}
        <div style={{
          width: '100%',
          padding: 'clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 3rem)',
          borderRadius: '1.75rem',
          background: 'radial-gradient(ellipse at top right, rgba(0,240,255,0.15), transparent 70%), rgba(255,255,255,0.02)',
          border: '1px solid rgba(0,240,255,0.25)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5), inset 0 0 30px rgba(0,240,255,0.06)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '1.5rem',
        }}>
          <h3 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#ffffff', margin: 0, lineHeight: 1.3 }}>
            Ready to Architect Your <span className="text-gradient">Digital Infrastructure?</span>
          </h3>
          <p style={{ fontSize: '1rem', color: '#9090a0', maxWidth: '640px', lineHeight: 1.7, margin: 0 }}>
            Engage with our certified systems architects and cybersecurity specialists to design robust, scalable, and intelligent software solutions for your organization.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '0.5rem' }}>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.9rem 2.25rem',
                borderRadius: '0.875rem',
                background: '#00f0ff',
                color: '#0a0a0f',
                fontWeight: 700,
                fontSize: '0.9rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow: '0 0 30px rgba(0,240,255,0.35)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 0 45px rgba(0,240,255,0.5)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(0,240,255,0.35)';
              }}
            >
              Initiate Dialogue <ArrowRight size={16} />
            </Link>
            
            <Link
              to="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.9rem 2.25rem',
                borderRadius: '0.875rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#e8e8ee',
                fontWeight: 700,
                fontSize: '0.9rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.09)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
              }}
            >
              Explore All Services
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

/* ─── Home Service Card Component ────────────────────────── */
const HomeServiceCard = ({ service, visual, IconComp, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
        borderRadius: '1.5rem',
        cursor: 'pointer',
        overflow: 'hidden',
        transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
        background: hovered
          ? `linear-gradient(135deg, rgba(255,255,255,0.06) 0%, ${visual.glow} 100%)`
          : 'rgba(255,255,255,0.03)',
        border: hovered
          ? `1px solid ${visual.accent}`
          : '1px solid rgba(255,255,255,0.07)',
        boxShadow: hovered
          ? `0 16px 48px ${visual.glow}, inset 0 0 32px ${visual.glow}`
          : '0 4px 24px rgba(0,0,0,0.25)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: `linear-gradient(90deg, transparent, ${visual.accent}, transparent)`,
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.35s ease',
      }} />

      {/* Header: Icon + Category Tag */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: '1.25rem',
      }}>
        <div style={{
          display: 'inline-flex', padding: '0.85rem',
          background: hovered ? visual.glow : 'rgba(255,255,255,0.05)',
          borderRadius: '0.875rem',
          color: visual.accent,
          flexShrink: 0,
          transition: 'all 0.35s ease',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          border: `1px solid ${hovered ? visual.accent : 'rgba(255,255,255,0.08)'}`,
        }}>
          <IconComp size={24} />
        </div>

        <span style={{
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          padding: '0.3rem 0.75rem',
          borderRadius: '2rem',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          color: '#a0a0b0',
        }}>
          {visual.tag}
        </span>
      </div>

      {/* Service Title */}
      <h3 style={{
        fontSize: '1.35rem', fontWeight: 800, margin: '0 0 0.65rem',
        color: hovered ? '#ffffff' : '#e8e8ee',
        transition: 'color 0.25s ease',
      }}>
        {service.title}
      </h3>

      {/* Service Overview */}
      <p style={{
        fontSize: '0.88rem', lineHeight: 1.65,
        color: '#8a8a9a', margin: '0 0 1.25rem', flexGrow: 1
      }}>
        {service.overview.length > 150 ? service.overview.slice(0, 147) + '...' : service.overview}
      </p>

      {/* Key Offerings Bullets */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.25rem' }}>
        {service.keyOfferings?.slice(0, 2).map((offering, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: visual.accent }} />
            <span style={{ fontSize: '0.8rem', color: '#cbd5e1', fontWeight: 600 }}>{offering.title}</span>
          </div>
        ))}
      </div>

      {/* Tech Stack Badges */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
        {service.techStack?.slice(0, 4).map(tech => (
          <span key={tech} style={{
            fontSize: '0.72rem',
            fontWeight: 600,
            padding: '0.2rem 0.55rem',
            borderRadius: '0.5rem',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.06)',
            color: '#a0a0b0',
          }}>
            {tech}
          </span>
        ))}
      </div>

      {/* Action footer */}
      <div style={{
        marginTop: 'auto',
        paddingTop: '0.75rem',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        fontSize: '0.8rem', fontWeight: 700,
        color: hovered ? visual.accent : '#7a7a8a',
        letterSpacing: '0.04em', textTransform: 'uppercase',
        transition: 'color 0.25s ease',
      }}>
        <span>Explore Service Architecture</span>
        <ArrowUpRight size={15} style={{
          transition: 'transform 0.25s ease',
          transform: hovered ? 'translate(2px, -2px)' : 'none'
        }} />
      </div>
    </div>
  );
};

export default Home;
