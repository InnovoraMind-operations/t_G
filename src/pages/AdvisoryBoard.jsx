import React from 'react';

const AdvisoryBoard = () => {
  return (
    <div className="animate-fade-in" style={{ minHeight: '80vh', paddingBottom: '6rem', paddingTop: '2rem', position: 'relative', overflow: 'hidden' }}>

      {/* Ambient background glows */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(0,240,255,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(112,0,255,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          paddingTop: '5rem',
        }}
      >
        {/* Eyebrow label */}
        <p
          style={{
            fontSize: '0.75rem',
            color: '#00f0ff',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontWeight: '700',
            marginBottom: '1.25rem',
          }}
        >
          Techryon Global
        </p>

        {/* Heading */}
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: '800',
            color: '#e8e8ee',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            textShadow: '0 0 60px rgba(0,240,255,0.15)',
          }}
        >
          Advisory Board
        </h1>

        {/* Cyan divider */}
        <div
          style={{
            width: '3.5rem',
            height: '3px',
            background: 'linear-gradient(90deg, #00f0ff, #7000ff)',
            borderRadius: '2px',
            marginBottom: '3rem',
          }}
        />

        {/* Coming soon card */}
        <div
          style={{
            maxWidth: '640px',
            width: '100%',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(0,240,255,0.15)',
            borderRadius: '2rem',
            padding: '3.5rem 3rem',
            boxShadow: '0 0 60px -10px rgba(0,240,255,0.1), inset 0 0 40px rgba(0,240,255,0.02)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        >
          {/* Coming soon text */}
          <h2
            style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#e8e8ee',
              marginBottom: '1rem',
              letterSpacing: '0.02em',
            }}
          >
            Advisors{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00f0ff, #7000ff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Coming Soon
            </span>
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: '#9ca3af',
              lineHeight: '1.75',
              marginBottom: '2.5rem',
            }}
          >
            We are building an exceptional advisory board of world-class experts across technology, strategy, and innovation.
            <br />
            <br />
            Want to be one? We'd love to hear from you.
          </p>

          {/* CTA Button */}
          <a
            href="https://forms.gle/8RnnLe656J3SASth8"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.9rem 2rem',
              background: 'linear-gradient(135deg, #00f0ff, #00c3cf)',
              color: '#0a0a0f',
              fontWeight: '700',
              fontSize: '0.95rem',
              borderRadius: '0.875rem',
              textDecoration: 'none',
              letterSpacing: '0.03em',
              boxShadow: '0 0 24px rgba(0,240,255,0.35)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 0 40px rgba(0,240,255,0.55)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 0 24px rgba(0,240,255,0.35)';
            }}
          >
            <span>Let us know here</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Bottom hint */}
        <p
          style={{
            marginTop: '2.5rem',
            fontSize: '0.8rem',
            color: 'rgba(156,163,175,0.45)',
            letterSpacing: '0.05em',
          }}
        >
          Applications are reviewed on a rolling basis.
        </p>
      </div>
    </div>
  );
};

export default AdvisoryBoard;
