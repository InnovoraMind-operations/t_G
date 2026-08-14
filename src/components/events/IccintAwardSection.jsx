import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Award, Trophy, Sparkles, Maximize2, Download, X, Quote, CheckCircle2, GraduationCap, Briefcase, ExternalLink } from 'lucide-react';

const IccintAwardSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const awardImage = '/images/iccint/dr-sravanthi-dontu-award.jpg';

  // Handle ESC key to close modal & prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  const highlights = [
    { label: 'Visionary Leadership', desc: 'Forward-thinking guidance in technological & corporate strategy' },
    { label: 'Fostering Innovation', desc: 'Advancing research & cutting-edge digital transformation' },
    { label: 'Sustainable Growth', desc: 'Catalyzing long-term value across tech industries' },
    { label: 'Community Influence', desc: 'Inspiring and empowering researchers & business leaders' },
  ];

  return (
    <section style={{ position: 'relative', width: '100%' }}>
      {/* ── Section Header ── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '1.75rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '0.75rem',
            background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.2), rgba(255, 152, 0, 0.08))',
            border: '1px solid rgba(255, 193, 7, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 16px rgba(255, 193, 7, 0.15)',
          }}>
            <Trophy size={18} style={{ color: '#ffc107' }} />
          </div>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#d2aa64',
              marginBottom: '0.2rem',
            }}>
              <Sparkles size={12} /> Honors & Recognition
            </div>
            <h3 style={{
              fontSize: '1.35rem',
              fontWeight: 700,
              color: '#f4f4f8',
              letterSpacing: '0.02em',
              margin: 0,
            }}>
              Conference Award Winner
            </h3>
          </div>
        </div>

        <div style={{
          padding: '0.35rem 0.85rem',
          borderRadius: '2rem',
          background: 'rgba(255, 193, 7, 0.08)',
          border: '1px solid rgba(255, 193, 7, 0.25)',
          color: '#ffc107',
          fontSize: '0.78rem',
          fontWeight: 600,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
        }}>
          <Award size={13} /> ICCINT 2026 Special Recognition
        </div>
      </div>

      {/* ── Main Award Card Container ── */}
      <div style={{
        background: 'linear-gradient(165deg, rgba(20, 24, 38, 0.92) 0%, rgba(12, 14, 24, 0.98) 100%)',
        border: '1px solid rgba(212, 175, 55, 0.3)',
        borderRadius: '1.25rem',
        padding: '2rem',
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(212, 175, 55, 0.08)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Ambient Top Light Beam */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '20%',
          right: '20%',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #ffc107, #d2aa64, transparent)',
          opacity: 0.8,
        }} />

        {/* Ambient glow corner circle */}
        <div style={{
          position: 'absolute',
          top: '-60px',
          right: '-60px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 193, 7, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}>

          {/* ── Left Column: Award Certificate Preview ── */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}>
            <div
              onClick={() => setIsModalOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setIsModalOpen(true);
                }
              }}
              style={{
                position: 'relative',
                borderRadius: '1rem',
                overflow: 'hidden',
                cursor: 'pointer',
                border: '2px solid rgba(212, 175, 55, 0.45)',
                boxShadow: '0 16px 36px rgba(0, 0, 0, 0.6), 0 0 24px rgba(255, 193, 7, 0.2)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                maxWidth: '340px',
                width: '100%',
                background: '#090a10',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.85)';
                e.currentTarget.style.boxShadow = '0 24px 50px rgba(0, 0, 0, 0.7), 0 0 35px rgba(255, 193, 7, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.45)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.6), 0 0 24px rgba(255, 193, 7, 0.2)';
              }}
            >
              <img
                src={awardImage}
                alt="ICCINT 2026 Industry Leadership Award - Dr. Sravanthi Dontu"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  aspectRatio: '9/16',
                  objectFit: 'cover',
                  objectPosition: 'top',
                }}
              />
            </div>

            {/* Single clean working full screen action button */}

          </div>

          {/* ── Right Column: Award Details & Citation ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {/* Award Category Title */}
            <div>
              <div style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#d2aa64',
                marginBottom: '0.35rem',
              }}>
                Distinguished Recognition
              </div>
              <h2 style={{
                fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                fontWeight: 800,
                letterSpacing: '0.04em',
                lineHeight: 1.25,
                background: 'linear-gradient(135deg, #FFF9C4 0%, #FFD54F 40%, #FFA000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                margin: 0,
              }}>
                INDUSTRY LEADERSHIP AWARD
              </h2>
            </div>

            {/* Recipient Profile Card */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.1rem',
              padding: '1rem 1.2rem',
              borderRadius: '0.85rem',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 193, 7, 0.2)',
            }}>
              <div style={{
                width: '3.6rem',
                height: '3.6rem',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid #ffc107',
                boxShadow: '0 0 14px rgba(255, 193, 7, 0.3)',
                flexShrink: 0,
              }}>
                <img
                  src="/images/iccint/dr-sravanthi-dontu.jpg"
                  alt="Dr. Sravanthi Dontu"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                  }}
                />
              </div>

              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}>
                  <h4 style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    margin: 0,
                  }}>
                    Dr. Sravanthi Dontu
                  </h4>
                  <CheckCircle2 size={16} style={{ color: '#ffc107' }} />
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.84rem',
                  color: '#c4c4d0',
                  marginTop: '0.25rem',
                }}>
                  <Briefcase size={12} style={{ color: '#d2aa64', flexShrink: 0 }} />
                  <span>Independent Researcher, Corporate Professional</span>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  color: '#9090a0',
                  marginTop: '0.15rem',
                }}>
                  <GraduationCap size={12} style={{ color: '#64b4d2', flexShrink: 0 }} />
                  <span>Department of Information Technology, University of the Cumberlands, USA</span>
                </div>
              </div>
            </div>

            {/* Official Citation Block */}
            <div style={{
              position: 'relative',
              padding: '1.25rem 1.4rem',
              borderRadius: '0.85rem',
              background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.05) 0%, rgba(20, 25, 40, 0.6) 100%)',
              border: '1px solid rgba(212, 175, 55, 0.22)',
              borderLeft: '4px solid #ffc107',
            }}>
              <Quote size={20} style={{ color: '#ffc107', opacity: 0.6, marginBottom: '0.5rem' }} />
              <p style={{
                fontSize: '0.92rem',
                lineHeight: 1.8,
                color: '#e4e4ec',
                fontStyle: 'italic',
                margin: 0,
              }}>
                "In recognition of your remarkable leadership, forward-thinking vision, and significant contributions to fostering innovation, excellence, and sustainable growth in your industry. Your dedication to professional achievement and your meaningful influence on the business community continue to inspire and motivate others."
              </p>
            </div>

            {/* Key Pillars / Badges */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '0.65rem',
            }}>
              {highlights.map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: '0.6rem 0.85rem',
                    borderRadius: '0.6rem',
                    background: 'rgba(255, 255, 255, 0.025)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <div style={{
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: '#ffc107',
                    marginBottom: '0.15rem',
                  }}>
                    {item.label}
                  </div>
                  <div style={{
                    fontSize: '0.74rem',
                    color: '#8e8e9e',
                    lineHeight: 1.4,
                  }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* ── Fullscreen Lightbox Modal (Rendered directly via createPortal) ── */}
      {isModalOpen && typeof document !== 'undefined' && createPortal(
        <div
          onClick={() => setIsModalOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 9999999,
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            boxSizing: 'border-box',
          }}
        >
          {/* Top Bar with Close Button */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1.5rem',
              zIndex: 10000000,
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <a
              href={awardImage}
              target="_blank"
              rel="noreferrer"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '0.5rem',
                padding: '0.45rem 0.85rem',
                color: '#ffffff',
                fontSize: '0.82rem',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                cursor: 'pointer',
              }}
            >
              <ExternalLink size={14} /> Open in New Tab
            </a>

            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close award modal"
              style={{
                background: 'rgba(255, 193, 7, 0.25)',
                border: '1px solid rgba(255, 193, 7, 0.6)',
                borderRadius: '50%',
                width: '2.5rem',
                height: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffc107',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Center Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              maxWidth: '94vw',
              maxHeight: '88vh',
              position: 'relative',
            }}
          >
            <img
              src={awardImage}
              alt="ICCINT 2026 Industry Leadership Award Full Poster - Dr. Sravanthi Dontu"
              style={{
                maxWidth: '92vw',
                maxHeight: '80vh',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '0.75rem',
                border: '2px solid rgba(212, 175, 55, 0.85)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.95), 0 0 35px rgba(255, 193, 7, 0.3)',
                display: 'block',
              }}
            />

            {/* Bottom Caption & Download Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.75rem',
              width: '100%',
              maxWidth: '500px',
              marginTop: '0.85rem',
              padding: '0.4rem 0.6rem',
              background: 'rgba(15, 18, 28, 0.85)',
              border: '1px solid rgba(255, 193, 7, 0.3)',
              borderRadius: '0.6rem',
            }}>
              <span style={{ fontSize: '0.84rem', color: '#ffc107', fontWeight: 600 }}>
                🏆 ICCINT 2026 • Dr. Sravanthi Dontu
              </span>

              <a
                href={awardImage}
                download="ICCINT-2026-Industry-Leadership-Award-Dr-Sravanthi-Dontu.jpg"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '0.4rem',
                  background: 'rgba(255, 193, 7, 0.25)',
                  border: '1px solid rgba(255, 193, 7, 0.5)',
                  color: '#ffffff',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                <Download size={13} /> Download
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default IccintAwardSection;
