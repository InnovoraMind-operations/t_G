import React from 'react';
import { Target, Users, BookOpen, Star, Calendar, Flag, Award, Eye, FileText } from 'lucide-react';

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
        <SectionHeading icon={Users} label="Featured Speakers" accent={accentSolid} />
        <div style={{ 
          padding: '2.5rem 1.5rem', 
          background: 'rgba(255,255,255,0.02)', 
          border: '1px dashed rgba(255,255,255,0.15)',
          borderRadius: '0.75rem',
          textAlign: 'center'
        }}>
          <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#a0a0a0', letterSpacing: '0.05em' }}>TO BE ANNOUNCED</h4>
          <p style={{ fontSize: '0.95rem', color: '#7a7a8a', marginTop: '0.5rem' }}>We are curating a lineup of incredible speakers. Stay tuned!</p>
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
