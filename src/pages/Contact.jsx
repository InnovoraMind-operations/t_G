import React from 'react';
import { Mail, MapPin, Phone, ArrowRight, MessageSquare, CheckCircle2, Shield } from 'lucide-react';

const Contact = () => {
  return (
    <div className="animate-fade-in pb-24 relative w-full mt-12">
      <div
        className="container relative z-10"
        style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
      >
        {/* Header */}
        <div style={{ marginBottom: '4rem', maxWidth: '800px' }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide leading-tight" style={{ color: '#e8e8ee' }}>
            Initiate <span className="text-gradient">Dialogue.</span>
          </h1>
          <p className="text-xl text-secondary leading-relaxed">
            Whether you require deep architectural consulting, offensive security audits, or custom AI integrations, our engineers are ready to build constraints-defying solutions for your enterprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left Column: Contact Info */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-2xl font-bold tracking-wide mb-8 uppercase" style={{ color: '#e8e8ee', letterSpacing: '0.1em' }}>
                Corporate Headquarters
              </h2>
              <div className="flex flex-col gap-6">

                <div className="group flex items-start" style={{ gap: '1.25rem' }}>
                  <div className="transition-all duration-300 shrink-0 mt-1" style={{ padding: '0.75rem', background: 'rgba(0, 240, 255, 0.1)', color: '#00f0ff', borderRadius: '0.75rem' }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-1">Office Location</h3>
                    <p className="text-secondary leading-relaxed text-base">
                      4th floor, Silviana, Opposite to Gera’s Regent Park and Towers,<br />
                      PAN Card Club Road, Baner, Pune, Maharashtra 411069
                    </p>
                  </div>
                </div>

                <div className="group flex items-start" style={{ gap: '1.25rem' }}>
                  <div className="transition-all duration-300 shrink-0 mt-1" style={{ padding: '0.75rem', background: 'rgba(168, 85, 247, 0.1)', color: '#a855f7', borderRadius: '0.75rem' }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-1">Official Communications</h3>
                    <a href="mailto:inquiries@techryonglobal.com" className="text-secondary hover:text-cyan-400 transition-colors leading-relaxed text-base font-medium">
                      inquiries@techryonglobal.com
                    </a>
                  </div>
                </div>

                <div className="group flex items-start" style={{ gap: '1.25rem' }}>
                  <div className="transition-all duration-300 shrink-0 mt-1" style={{ padding: '0.75rem', background: 'rgba(236, 72, 153, 0.1)', color: '#ec4899', borderRadius: '0.75rem' }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-1">Direct Line</h3>
                    <p className="text-secondary leading-relaxed text-base font-medium">
                      +91 93224 07176
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Accreditation note */}
            <div style={{
              padding: '1.25rem 1.5rem',
              borderRadius: '1rem',
              background: 'rgba(210,170,100,0.06)',
              border: '1px solid rgba(210,170,100,0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(210,170,100,0.18)',
                color: '#d2aa64',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Shield size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.04em' }}>
                  ISO 9001:2015 Quality Certified Enterprise
                </div>
                <div style={{ fontSize: '0.76rem', color: '#a0a0b0', marginTop: '0.15rem' }}>
                  Guaranteed confidentiality, SLA compliance, and enterprise NDA assurance.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct WhatsApp Contact Card */}
          <div
            className="flex flex-col justify-between"
            style={{
              background: 'linear-gradient(145deg, rgba(16, 24, 38, 0.85) 0%, rgba(10, 15, 25, 0.95) 100%)',
              border: '1px solid rgba(37, 211, 102, 0.3)',
              borderRadius: '1.5rem',
              padding: '2.5rem',
              boxShadow: '0 12px 40px 0 rgba(0, 0, 0, 0.45), 0 0 35px rgba(37, 211, 102, 0.08)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Ambient background glow */}
            <div
              style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '220px',
                height: '220px',
                background: 'radial-gradient(circle, rgba(37, 211, 102, 0.22) 0%, rgba(0,0,0,0) 70%)',
                filter: 'blur(35px)',
                pointerEvents: 'none',
              }}
            />

            <div>
              {/* Live Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{
                background: 'rgba(37, 211, 102, 0.12)',
                border: '1px solid rgba(37, 211, 102, 0.35)',
              }}>
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                <span className="text-xs font-bold tracking-wider text-[#25D366] uppercase">
                  Fastest Response Channel
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-wide">
                Connect Directly on WhatsApp
              </h3>
              <p className="text-secondary mb-6 leading-relaxed text-base">
                Chat directly with our principal engineering leaders and enterprise solution architects. Receive rapid technical consultation, custom project scoping, and enterprise solution roadmaps.
              </p>

              {/* Service Highlights */}
              <div className="flex flex-col gap-3.5 mb-8">
                <div className="flex items-center gap-3 text-sm text-gray-200">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center bg-[#25D366]/20 text-[#25D366] shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <span>Instant project scoping & technical feasibility review</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-200">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center bg-[#25D366]/20 text-[#25D366] shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <span>Direct 1-on-1 access to senior IT architects & developers</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-200">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center bg-[#25D366]/20 text-[#25D366] shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <span>Consulting for Web, AI/ML, Cloud, Cyber, IoT & Custom Software</span>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct Button */}
            <div>
              <a
                href="https://wa.me/919322407176?text=Hello%20TechryonGlobal%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20enterprise%20IT%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 font-bold tracking-wide uppercase flex items-center justify-center gap-3 transition-all duration-300 text-white group cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                  borderRadius: '0.85rem',
                  boxShadow: '0 4px 20px rgba(37, 211, 102, 0.35)',
                  fontSize: '1rem',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(37, 211, 102, 0.55)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(37, 211, 102, 0.35)';
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="transition-transform group-hover:scale-110"
                >
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.72 11.5c-.26-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.58.13-.17.26-.67.85-.82 1.02-.15.17-.3.19-.56.06-.26-.13-1.1-.41-2.09-1.29-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.79-1.92-.21-.5-.42-.43-.58-.44h-.49c-.17 0-.45.06-.68.32-.24.26-.91.89-.91 2.17 0 1.28.93 2.52 1.06 2.7.13.17 1.83 2.8 4.44 3.93.62.27 1.11.43 1.49.55.63.2 1.2.17 1.65.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.07-.11-.24-.17-.5-.3z" />
                </svg>
                <span>Chat on WhatsApp</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <p className="text-center text-xs text-secondary/70 mt-3">
                Typically responds in under 15 minutes • Direct line: +91 93224 07176
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
