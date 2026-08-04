const fs = require('fs');
const file = 'c:/Users/spurt/Desktop/tech/t_G/src/components/events/IccintSections.jsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Swap the blocks
const lines = content.split('\n');

const delegatesStart = lines.findIndex(l => l.includes('label="International Delegates"')) - 1;
const expertsStart = lines.findIndex(l => l.includes('label="Session Experts"')) - 1;
const tracksStart = lines.findIndex(l => l.includes('label="Conference Tracks"')) - 1;

const beforeDelegates = lines.slice(0, delegatesStart);
const delegatesBlock = lines.slice(delegatesStart, expertsStart);
const expertsBlock = lines.slice(expertsStart, tracksStart);
const afterExperts = lines.slice(tracksStart);

const newLines = [...beforeDelegates, ...expertsBlock, ...delegatesBlock, ...afterExperts];
content = newLines.join('\n');

// 2. Change the Featured Speakers layout
const speakersStartStr = `        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1.5rem',
          marginTop: '0.5rem'
        }}>`;
const newSpeakersStartStr = `        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '2.5rem',
          marginTop: '1.5rem',
          justifyItems: 'center'
        }}>`;

content = content.replace(speakersStartStr, newSpeakersStartStr);

const oldMapBody = `          ].map((speaker, idx) => (
            <div key={idx} style={{
              background: 'linear-gradient(145deg, rgba(100,180,210,0.06), rgba(255,255,255,0.02))',
              border: '1px solid rgba(100,180,210,0.15)',
              borderRadius: '1rem',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              cursor: 'default',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(100,180,210,0.18)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Photo */}
              <div style={{
                width: '100%',
                aspectRatio: '1 / 1',
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.04)',
              }}>
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    display: 'block',
                  }}
                />
              </div>

              {/* Info */}
              <div style={{
                padding: '1rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.3rem',
                width: '100%',
                boxSizing: 'border-box',
              }}>
                <h5 style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#e8e8ee',
                  margin: 0,
                  lineHeight: 1.3,
                }}>
                  {speaker.name}
                </h5>
                <p style={{
                  fontSize: '0.8rem',
                  color: '#64b4d2',
                  margin: 0,
                  fontStyle: 'italic',
                  lineHeight: 1.4,
                }}>
                  {speaker.role}
                </p>
                {speaker.institution && (
                  <p style={{
                    fontSize: '0.78rem',
                    color: '#9090a0',
                    margin: 0,
                    lineHeight: 1.4,
                  }}>
                    {speaker.institution}
                  </p>
                )}
                <div style={{
                  marginTop: '0.4rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(100,180,210,0.08)',
                  border: '1px solid rgba(100,180,210,0.2)',
                  borderRadius: '999px',
                  padding: '0.2rem 0.7rem',
                  fontSize: '0.75rem',
                  color: '#b0b0c0',
                }}>
                  <span>{speaker.country}</span>
                </div>
              </div>
            </div>
          ))}`;

const newMapBody = `          ].map((speaker, idx) => (
            <div key={idx} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              width: '100%',
              maxWidth: '220px'
            }}>
              {/* Circular Photo */}
              <div style={{
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.04)',
                marginBottom: '1rem',
                border: \`2px solid transparent\`,
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#00d285';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 210, 133, 0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    display: 'block',
                  }}
                />
              </div>

              {/* Info */}
              <h5 style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#00d285',
                margin: '0 0 0.3rem 0',
                lineHeight: 1.3,
              }}>
                {speaker.name}
              </h5>
              <p style={{
                fontSize: '0.85rem',
                color: '#9090a0',
                margin: '0 0 0.5rem 0',
                lineHeight: 1.4,
              }}>
                {speaker.role}{speaker.institution ? \`, \${speaker.institution}\` : ''}
              </p>
              <div style={{
                fontSize: '0.75rem',
                color: '#00d285',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {speaker.country}
              </div>
            </div>
          ))}`;

content = content.replace(oldMapBody, newMapBody);

fs.writeFileSync(file, content);
