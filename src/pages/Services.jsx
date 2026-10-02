import React, { useState } from 'react';
import { 
  Shield, Globe2, Database, Cpu, Cloud, ArrowRight, Zap, 
  Code2, Smartphone, Layers, Sparkles, CheckCircle2, Award, ShieldCheck 
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

/* ─── Accent colours — must match visualMap in ServiceDetail.jsx ── */
const servicesList = [
  {
    id: "srv_web",
    title: "Web Development & Digital Platforms",
    description: "Scalable, high-performance web applications built with modern frameworks, composable architectures, and sub-second edge rendering.",
    icon: Globe2,
    accent: 'rgba(56,189,248,0.85)',
    glow:   'rgba(56,189,248,0.14)',
  },
  {
    id: "srv_data",
    title: "Data Science & Big Data Analytics",
    description: "Transform raw data into actionable insights with advanced analytics, distributed ETL pipelines, and predictive modeling.",
    icon: Database,
    accent: 'rgba(167,139,250,0.85)',
    glow:   'rgba(167,139,250,0.14)',
  },
  {
    id: "srv_ai",
    title: "AI / ML Integration & Agentic Systems",
    description: "Custom artificial intelligence solutions, autonomous multi-agent systems, and enterprise RAG pipelines to automate business processes.",
    icon: Cpu,
    accent: 'rgba(96,165,250,0.85)',
    glow:   'rgba(96,165,250,0.14)',
  },
  {
    id: "srv_cloud",
    title: "Cloud Computing & Cloud-Native Infra",
    description: "Robust cloud architectures, Kubernetes orchestration, and GitOps CI/CD migrations designed for maximum uptime and scalability.",
    icon: Cloud,
    accent: 'rgba(0,220,180,0.85)',
    glow:   'rgba(0,220,180,0.14)',
  },
  {
    id: "srv_cyber",
    title: "Cybersecurity & Zero-Trust Defense",
    description: "Comprehensive security audits, threat hunting, red team simulations, and infrastructure hardening to protect digital assets.",
    icon: Shield,
    accent: 'rgba(251,113,133,0.85)',
    glow:   'rgba(251,113,133,0.14)',
  },
  {
    id: "srv_custom_software",
    title: "Custom Enterprise Software Engineering",
    description: "Bespoke, mission-critical enterprise applications, distributed backend microservices, and legacy monolith modernization.",
    icon: Code2,
    accent: 'rgba(210,170,100,0.85)',
    glow:   'rgba(210,170,100,0.14)',
  },
  {
    id: "srv_mobile",
    title: "Mobile Application Engineering",
    description: "Native and cross-platform mobile apps for iOS and Android with offline-first synchronization and biometric security.",
    icon: Smartphone,
    accent: 'rgba(244,114,182,0.85)',
    glow:   'rgba(244,114,182,0.14)',
  },
  {
    id: "srv_iot",
    title: "IoT & Industrial Automation (Industry 5.0)",
    description: "Connecting operational technology with cloud intelligence, edge telemetry gateways, SCADA/PLC systems, and real-time digital twins.",
    icon: Layers,
    accent: 'rgba(45,212,191,0.85)',
    glow:   'rgba(45,212,191,0.14)',
  },
  {
    id: "srv_it_consulting",
    title: "IT Consulting & Digital Transformation",
    description: "Strategic technology blueprints, cloud migration roadmaps, technical due diligence, and fractional CTO advisory.",
    icon: Sparkles,
    accent: 'rgba(251,191,36,0.85)',
    glow:   'rgba(251,191,36,0.14)',
  },
  {
    id: "srv_qa",
    title: "QA Automation, DevOps & SRE",
    description: "Automated end-to-end testing, chaos engineering, continuous performance benchmarking, and 24/7 site reliability monitoring.",
    icon: CheckCircle2,
    accent: 'rgba(52,211,153,0.85)',
    glow:   'rgba(52,211,153,0.14)',
  },
];

/* ─── Service Card ────────────────────────────────────────── */
const ServiceCard = ({ service, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const IconComp = service.icon;
  const accentSolid = service.accent.replace('0.85', '1');

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
          ? `linear-gradient(135deg, rgba(255,255,255,0.06) 0%, ${service.glow} 100%)`
          : 'rgba(255,255,255,0.03)',
        border: hovered
          ? `1px solid ${service.accent}`
          : '1px solid rgba(255,255,255,0.08)',
        boxShadow: hovered
          ? `0 16px 48px ${service.glow}, inset 0 0 32px ${service.glow}`
          : '0 4px 24px rgba(0,0,0,0.25)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)`,
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.35s ease',
      }} />

      {/* Icon + Title row */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '1rem',
        marginBottom: '1rem',
      }}>
        <div style={{
          display: 'inline-flex', padding: '0.85rem',
          background: hovered ? service.glow : 'rgba(255,255,255,0.05)',
          borderRadius: '0.875rem',
          color: hovered ? accentSolid : 'rgba(255,255,255,0.5)',
          flexShrink: 0,
          transition: 'all 0.35s ease',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          border: `1px solid ${hovered ? service.accent.replace('0.85','0.3') : 'rgba(255,255,255,0.08)'}`,
        }}>
          <IconComp size={22} />
        </div>
        <h3 style={{
          fontSize: '1.15rem', fontWeight: 700, margin: 0,
          color: hovered ? '#ffffff' : '#e8e8ee',
          transition: 'color 0.25s ease',
        }}>
          {service.title}
        </h3>
      </div>

      {/* Description */}
      <p style={{
        fontSize: '0.88rem', lineHeight: 1.7,
        color: '#8a8a9a', flexGrow: 1, margin: 0,
      }}>
        {service.description}
      </p>

      {/* Accent underline bar */}
      <div style={{
        height: '2px', marginTop: '1.5rem',
        background: `linear-gradient(90deg, ${accentSolid}, ${service.accent.replace('0.85','0.3')})`,
        borderRadius: '2px',
        width: hovered ? '100%' : '0%',
        transition: 'width 0.5s cubic-bezier(0.4,0,0.2,1)',
      }} />

      {/* View Details hint */}
      <div style={{
        marginTop: '1rem',
        display: 'flex', alignItems: 'center', gap: '0.35rem',
        fontSize: '0.78rem', fontWeight: 700,
        color: hovered ? accentSolid : '#5a5a6a',
        letterSpacing: '0.06em', textTransform: 'uppercase',
        transition: 'color 0.25s ease',
      }}>
        <Zap size={12} /> View Architecture Details
      </div>
    </div>
  );
};

/* ─── Main Services Page ──────────────────────────────────── */
const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in pb-28 relative w-full">
      <div
        className="container relative z-10"
        style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
      >

        {/* Page Title & ISO Highlight */}
        <div style={{ marginBottom: '3.5rem', maxWidth: '800px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.65rem',
            padding: '0.4rem 1rem',
            borderRadius: '2rem',
            background: 'rgba(210,170,100,0.12)',
            border: '1px solid rgba(210,170,100,0.3)',
            marginBottom: '1rem'
          }}>
            <Award size={16} style={{ color: '#d2aa64' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#d2aa64', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              ISO 9001:2015 Certified Enterprise Engineering
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-wide" style={{ color: '#e8e8ee', marginBottom: '0.75rem' }}>
            Enterprise IT Services & Capabilities
          </h1>
          <p style={{ fontSize: '1rem', color: '#9090a0', lineHeight: 1.7 }}>
            Comprehensive architectural consulting, full-stack software development, cloud infrastructure, AI integrations, and cybersecurity defense engineered for high-concurrency enterprises.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onClick={() => navigate(`/services/${service.id}`)}
            />
          ))}

          {/* Contact CTA Card */}
          <div className="service-card group hover:border-cyan-400/40 bg-gradient-to-br from-white/5 to-cyan-500/5 flex flex-col justify-center items-center text-center p-8 rounded-2xl border border-white/10">
            <ShieldCheck size={36} className="text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-white">Need a Custom Architecture?</h3>
            <p className="text-secondary mb-6 text-sm leading-relaxed">
              Our certified solutions architects and engineers will analyze your constraints and build a tailored technical blueprint.
            </p>
            <Link to="/contact" className="btn btn-outline border-cyan-400/30 text-cyan-400 hover:bg-cyan-400 hover:text-black w-full" style={{ marginTop: 'auto' }}>
              Initiate Dialogue <ArrowRight size={18} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
