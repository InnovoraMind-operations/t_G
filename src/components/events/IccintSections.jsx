import React from 'react';
import { Target, Users, User, BookOpen, Star, Calendar, Flag, Award, Eye, FileText } from 'lucide-react';

const SectionHeading = ({ icon: Icon, label, accent }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
    <Icon size={18} style={{ color: accent }} />
    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>{label}</h3>
  </div>
);

const IccintSections = () => {
  const accentSolid = '#64b4d2';
  const glow = 'rgba(100,180,210,0.1)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      
      <section>
        <SectionHeading icon={BookOpen} label="About ICCINT 2026" accent={accentSolid} />
        <p style={{ fontSize: '1rem', lineHeight: 1.85, color: '#9090a0', marginBottom: '1rem' }}>
          The International Conference on Connected Intelligence and Next-Generation Technologies (ICCINT 2026) is designed to bring together experts from academia, industry, government organizations, startups, and research institutions worldwide to discuss transformative innovations that are redefining science, engineering, and technology.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.85, color: '#9090a0', marginBottom: '1rem' }}>
          The conference emphasizes interdisciplinary collaboration, encouraging participants to explore intelligent systems, digital transformation, sustainable engineering solutions, and emerging computing paradigms that contribute to economic growth and societal development.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.85, color: '#9090a0' }}>
          ICCINT provides an inclusive platform for presenting original research, exchanging ideas, establishing collaborations, and promoting innovation across multiple disciplines.
        </p>
      </section>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />

      <section>
        <SectionHeading icon={Star} label="Conference Theme" accent={accentSolid} />
        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#e8e8ee', marginBottom: '1rem' }}>Connected Intelligence for a Smarter, Sustainable, and Digital Future</h4>
        <p style={{ fontSize: '1rem', lineHeight: 1.85, color: '#9090a0', marginBottom: '1rem' }}>
          The rapid convergence of Artificial Intelligence, Internet of Things, Cloud Computing, Edge Intelligence, Robotics, Digital Twins, and advanced engineering is creating interconnected intelligent ecosystems capable of solving complex global challenges.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.85, color: '#9090a0' }}>
          ICCINT 2026 explores how connected intelligence can enable resilient infrastructure, smart industries, sustainable development, digital healthcare, intelligent transportation, cybersecurity, and future-ready societies.
        </p>
      </section>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />

      <section>
        <SectionHeading icon={Target} label="Conference Objectives" accent={accentSolid} />
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#9090a0', fontSize: '0.95rem', lineHeight: 2 }}>
          <li>Promote interdisciplinary research and innovation.</li>
          <li>Bridge academia, industry, and government collaboration.</li>
          <li>Showcase emerging technologies solving real-world problems.</li>
          <li>Encourage sustainable technological development.</li>
          <li>Foster global networking among researchers and professionals.</li>
          <li>Support early-career researchers and young innovators.</li>
          <li>Discuss ethical, secure, and responsible technology adoption.</li>
          <li>Explore future directions in intelligent engineering and digital transformation.</li>
        </ul>
      </section>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />


      <section>
        <SectionHeading icon={Users} label="Featured Speakers" accent={accentSolid} />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '2.5rem',
          marginTop: '1.5rem',
          justifyItems: 'center'
        }}>
          {[
            {
              name: 'Dr. Ayoub Regragui',
              role: 'Researcher',
              institution: 'Mohammed V University, Rabat',
              country: 'Morocco',
              photo: '/images/iccint/dr-ayoub-regragui.jpg'
            },
            {
              name: 'Hicham ELKHOUAJA',
              role: 'Researcher',
              institution: '',
              country: 'Morocco',
              photo: '/images/iccint/hicham-elkhouaja.jpg'
            },
            {
              name: 'Dr. Ruth Abiola Adimula',
              role: 'Academic & Researcher',
              institution: 'University of Ilorin',
              country: 'Nigeria',
              photo: '/images/iccint/dr-ruth-adimula.jpg'
            },
            {
              name: 'Roksolana Trach',
              role: 'Independent Crypto Analyst & International Financial Market Analyst',
              institution: '',
              country: 'USA',
              photo: '/images/iccint/roksolana-trach.jpg'
            },
            {
              name: 'Mouhssin Ait El Mouden',
              role: 'Researcher',
              institution: 'Ibn Tofail University',
              country: 'Morocco',
              photo: '/images/iccint/mouhssin-ait-el-mouden.jpeg'
            },
            {
              name: 'Dr. Sravanthi Dontu',
              role: 'Independent Researcher, Corporate Professional',
              institution: 'Department of Information Technology',
              country: '',
              photo: '/images/iccint/dr-sravanthi-dontu.jpg'
            },
            {
              name: 'Prof. Dr. Alvin B. Punongbayan',
              role: 'Director, Instabright Publication & Chairman and Founder, Instabright International Guild of Researchers and Educators, Inc.',
              institution: 'CALABARZON',
              country: 'Philippines',
              photo: '/images/iccint/prof-alvin-punongbayan.jpg'
            },
            {
              name: 'Emerald Abena Amponsah Baffour',
              role: 'CEO',
              institution: 'G-Fash Networks — CEO leading technological advancements and network solutions',
              country: 'Ghana',
              photo: '/images/iccint/emerald-abena-baffour.jpg'
            },
            {
              name: 'Okopi Fredrick',
              role: 'CEO',
              institution: 'Unique UJ SERVICE LIMITED — CEO driving strategic business services',
              country: 'Nigeria',
              photo: '/images/iccint/okopi-fredrick.jpg'
            },
            {
              name: 'Sourav Sarkar',
              role: 'Senior Worldwide Specialist Solutions Architect',
              institution: '',
              country: 'USA',
              photo: '/images/iccint/sourav-sarkar.jpg'
            },
            {
              name: 'Pankaj Arora',
              role: 'Healthcare Supply Chain Leader',
              institution: 'Leader in Healthcare Supply Chain Optimizations',
              country: 'United States',
              photo: '/images/iccint/pankaj-arora.jpg'
            },
            {
              name: 'Mr. Hari Rowtu',
              role: 'Independent Researcher',
              institution: 'Founder & CEO, Futurality Inc — California',
              country: 'United States',
              photo: '/images/iccint/hari-rowtu.jpg'
            },
            {
              name: 'Dr. Rutherford Pascal',
              role: 'Founder',
              institution: 'Glass Walls Leadership',
              country: 'Arizona, US',
              photo: '/images/iccint/dr-rutherford-pascal.jpeg'
            },
            {
              name: 'Hastimal Jangid',
              role: 'Researcher',
              institution: 'University of Missouri–Kansas City',
              country: 'USA',
              photo: '/images/iccint/hastimal-jangid.jpeg'
            },
            {
              name: 'Fatima Ezzahra Elmansouri',
              role: '',
              institution: 'ENCG, Hassan II, Casablanca',
              country: 'Morocco',
              photo: '/images/iccint/fatima-ezzahra-elmansouri.png'
            },
          ].map((speaker, idx) => (
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
                border: `2px solid transparent`,
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
                {speaker.role}{speaker.institution ? `, ${speaker.institution}` : ''}
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
          ))}
        </div>
      </section>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />

      <section>
        <SectionHeading icon={User} label="Session Experts" accent={accentSolid} />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '2.5rem',
          marginTop: '1.5rem',
          justifyItems: 'center'
        }}>
          {[
            {
              name: 'Dr. Muhammad Tahir Jan',
              role: 'Associate Professor',
              institution: '',
              country: 'Malaysia',
              photo: '/images/iccint/dr-muhammad-tahir-jan.jpg'
            },
            {
              name: 'Dr. Nadia Adnan',
              role: 'Assistant Professor & Research Scientist',
              institution: '',
              country: 'Saudi Arabia',
              photo: '/images/iccint/dr-nadia-adnan.jpg'
            },
            {
              name: 'Osman ARAYICI',
              role: 'Professor',
              institution: 'Mimar Sinan University',
              country: 'Turkey',
              photo: '/images/iccint/osman-arayici.jpg'
            },
            {
              name: 'Jawaher Al-Zeidi',
              role: 'English Language Lecturer',
              institution: '',
              country: 'Oman',
              photo: '/images/iccint/jawaher-al-zeidi.jpg'
            }
          ].map((expert, idx) => (
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
                border: `2px solid transparent`,
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
                  src={expert.photo}
                  alt={expert.name}
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
                {expert.name}
              </h5>
              <p style={{
                fontSize: '0.85rem',
                color: '#9090a0',
                margin: '0 0 0.5rem 0',
                lineHeight: 1.4,
              }}>
                {expert.role}{expert.institution ? `, ${expert.institution}` : ''}
              </p>
              <div style={{
                fontSize: '0.75rem',
                color: '#00d285',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {expert.country}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />

      <section>
        <SectionHeading icon={User} label="International Delegates" accent={accentSolid} />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginTop: '0.5rem'
        }}>
          {[
            { name: 'Andreza Malena Guedes da Costa Silva', role: 'IPM', country: 'Brazil' },
            { name: 'Fatimah Alneel', role: 'The University of Arizona', country: 'United States' },
            { name: 'Marghescu Cristina-Florentina', role: 'University Politehnica of Bucharest', country: 'Romania' },
            { name: 'Khadran Mohammed A Alsahaimi', role: 'Jamia Hamdard', country: 'Saudi Arabia' },
            { name: 'James Abdul Malik', role: 'Academy for Cultural Diplomacy', country: 'Germany' },
            { name: 'Dr. Jitendra Pandey, FHEA', role: 'Middle East College', country: 'Oman' },
            { name: 'Emem Akpabio', role: 'Invited Delegate', country: 'South Africa' }
          ].map((delegate, idx) => (
            <div key={idx} style={{
              background: 'linear-gradient(145deg, rgba(100,180,210,0.06), rgba(255,255,255,0.02))',
              border: '1px solid rgba(100,180,210,0.15)',
              borderRadius: '1rem',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
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
              <h5 style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#e8e8ee',
                margin: '0 0 1.5rem 0',
                lineHeight: 1.3,
              }}>
                {delegate.name}
              </h5>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 'auto'
              }}>
                <span style={{
                  fontSize: '0.95rem',
                  color: '#9090a0',
                }}>
                  {delegate.role}
                </span>
                <span style={{
                  fontSize: '0.95rem',
                  color: accentSolid,
                }}>
                  {delegate.country}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />

      <section>
        <SectionHeading icon={BookOpen} label="Conference Tracks" accent={accentSolid} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {[
            {
              title: "Artificial Intelligence & Intelligent Systems",
              topics: "Machine Learning, Deep Learning, Generative AI, Agentic AI, Explainable AI, Responsible AI, AI Governance, AI Applications"
            },
            {
              title: "Data Science & Intelligent Analytics",
              topics: "Big Data Analytics, Predictive Analytics, Data Engineering, Business Intelligence, Decision Support Systems, Data Visualization"
            },
            {
              title: "Cybersecurity & Digital Trust",
              topics: "Network Security, Cloud Security, AI Security, Blockchain Security, Digital Identity, Privacy-Preserving Computing, Threat Intelligence"
            },
            {
              title: "Internet of Things & Smart Systems",
              topics: "IoT Architectures, Edge Computing, Embedded Systems, Wireless Sensor Networks, Smart Agriculture, Smart Homes, Smart Cities"
            },
            {
              title: "Cloud Computing & Digital Infrastructure",
              topics: "Cloud Platforms, Edge AI, Fog Computing, Distributed Computing, High Performance Computing, Virtualization"
            },
            {
              title: "Software Engineering & Intelligent Applications",
              topics: "Software Architecture, DevOps, Agile Engineering, Web Technologies, Mobile Computing, Human Computer Interaction"
            },
            {
              title: "Robotics & Autonomous Systems",
              topics: "Industrial Robotics, Autonomous Vehicles, Computer Vision, Human Robot Interaction, Intelligent Automation, Drones, Swarm Intelligence"
            },
            {
              title: "Communication & Networking Technologies",
              topics: "5G/6G Networks, Optical Communication, Wireless Communication, Network Optimization, Satellite Communication"
            },
            {
              title: "Electronics, Embedded Systems & VLSI",
              topics: "Embedded AI, FPGA Applications, Semiconductor Technologies, Nanoelectronics, Microelectronics, Intelligent Sensors"
            },
            {
              title: "Electrical & Energy Systems",
              topics: "Smart Grids, Renewable Energy, Electric Vehicles, Energy Storage, Power Electronics, Intelligent Energy Management"
            },
            {
              title: "Mechanical & Smart Manufacturing",
              topics: "Industry 5.0, Additive Manufacturing, Digital Twins, Industrial Automation, Intelligent Production Systems, Smart Materials"
            },
            {
              title: "Civil Engineering & Smart Infrastructure",
              topics: "Smart Buildings, Sustainable Construction, Digital Infrastructure, Intelligent Transportation, Structural Health Monitoring"
            },
            {
              title: "Healthcare & Biomedical Technologies",
              topics: "Digital Health, AI in Healthcare, Medical Imaging, Wearable Technologies, Telemedicine, Biomedical Signal Processing"
            },
            {
              title: "Environmental & Sustainable Technologies",
              topics: "Climate Technologies, Water Resource Management, Circular Economy, Carbon Reduction, Green Computing, Environmental Monitoring"
            },
            {
              title: "Education, Business & Digital Society",
              topics: "Smart Education, Educational Technology, Digital Business, FinTech, E-Governance, Innovation Management, Digital Economy"
            }
          ].map((track, i) => (
            <div key={i} style={{ 
              padding: '1.25rem', 
              background: glow, 
              borderLeft: `4px solid ${accentSolid}`,
              borderRadius: '0.5rem'
            }}>
              <h5 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#e8e8ee', marginBottom: '0.5rem' }}>{track.title}</h5>
              <p style={{ fontSize: '0.9rem', color: '#9090a0', lineHeight: 1.6 }}>{track.topics}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />

      <section>
        <SectionHeading icon={Star} label="Key Features" accent={accentSolid} />
        <ul style={{ 
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
          gap: '0.75rem', listStyleType: 'none', padding: 0 
        }}>
          {[
            "International Keynote Speakers", "Invited Expert Talks", "Technical Paper Presentations",
            "Panel Discussions", "Industry Sessions", "Workshops & Tutorials",
            "Networking Opportunities", "Student Innovation Showcase", "Best Paper Awards",
            "Young Researcher Awards", "Startup Innovation Forum", "Research Collaboration Opportunities",
            "Publication Opportunities"
          ].map((feature, idx) => (
            <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#d2d2d2', fontSize: '0.9rem' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: accentSolid }} />
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />

      <section>
        <SectionHeading icon={FileText} label="Publication Opportunities" accent={accentSolid} />
        <p style={{ fontSize: '1rem', lineHeight: 1.85, color: '#9090a0' }}>
          Accepted and presented papers will be considered for publication in the conference proceedings. Selected high-quality papers may be recommended for publication in indexed journals or special issues, subject to the respective journal's peer-review process and editorial policies.
        </p>
      </section>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />

      <section>
        <SectionHeading icon={Calendar} label="Important Dates" accent={accentSolid} />
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
            <tbody>
              {[
                { activity: 'Paper Submission Opens', date: '15 January 2026' },
                { activity: 'Full Paper Submission Deadline', date: '30 April 2026' },
                { activity: 'Notification of Acceptance', date: '15 June 2026' },
                { activity: 'Camera Ready Submission', date: '10 July 2026' },
                { activity: 'Early Bird Registration', date: '20 July 2026' },
                { activity: 'Conference Dates', date: '9 August 2026' }
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem', color: '#e8e8ee', fontWeight: 500 }}>{row.activity}</td>
                  <td style={{ padding: '1rem', color: accentSolid, fontWeight: 600, textAlign: 'right' }}>{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />

      <section>
        <SectionHeading icon={Flag} label="Why Participate?" accent={accentSolid} />
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#9090a0', fontSize: '0.95rem', lineHeight: 2 }}>
          <li>Present innovative research to an international audience.</li>
          <li>Learn from globally recognized experts and industry leaders.</li>
          <li>Build collaborations with researchers and institutions worldwide.</li>
          <li>Gain insights into emerging technologies and interdisciplinary innovations.</li>
          <li>Enhance research visibility and professional networking.</li>
          <li>Explore opportunities for publication and future collaborations.</li>
        </ul>
      </section>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />

      <section>
        <SectionHeading icon={Users} label="Who Should Attend" accent={accentSolid} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>
          {[
            "Researchers", "Faculty Members", "Scientists", "Industry Professionals",
            "Engineers", "Technology Leaders", "Startup Founders", "Entrepreneurs",
            "PhD Scholars", "Postgraduate Students", "Undergraduate Students", 
            "Government Officials", "Innovation Centers", "Research Organizations"
          ].map((item, idx) => (
            <div key={idx} style={{ 
              background: 'rgba(255,255,255,0.03)', 
              padding: '0.75rem 1rem', 
              borderRadius: '0.5rem',
              border: '1px solid rgba(255,255,255,0.06)',
              fontSize: '0.9rem',
              color: '#d2d2d2'
            }}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />

      <section>
        <SectionHeading icon={Eye} label="Vision & Mission" accent={accentSolid} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#e8e8ee', marginBottom: '0.5rem' }}>Vision</h4>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#9090a0' }}>
              To become a globally recognized interdisciplinary conference that fosters innovation, knowledge exchange, and collaborative research for building intelligent, connected, sustainable, and future-ready societies.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#e8e8ee', marginBottom: '0.5rem' }}>Mission</h4>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#9090a0' }}>
              To provide an inclusive platform that promotes scientific excellence, technological innovation, ethical research, and meaningful collaboration among academia, industry, government, and society through the advancement of connected intelligence and next-generation technologies.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default IccintSections;
