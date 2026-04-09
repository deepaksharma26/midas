import React from 'react';
import './OurTeam.css';

const teamMembers = [
  {
    name: 'Bhavan Dhirendra Vora',
    title: 'CEO',
    description: '25+ years in Zari business. Expert in Business Development, International Marketing, and Finance. Secured business with Michaels and Horizon Group.',
    icon: 'bi-person-circle',
  },
  {
    name: 'Devang Vora',
    title: 'CTO',
    description: 'Textile Engineering graduate. 10 years experience in coating and manufacturing. Successfully delivered to Michaels and Walmart.',
    icon: 'bi-gear-fill',
  },
  {
    name: 'Niraj Sadhu',
    title: 'Director',
    description: 'MHRM qualified. Expert in factory setup for exports and completing FCCA, CTPAT, SMETA audits for international buyers.',
    icon: 'bi-clipboard-check',
  },
  {
    name: 'Suresh Kothari',
    title: 'Director',
    description: '40+ years experience marketing Metallic Yarn and Glitter Powder in India. Deep expertise in domestic distribution.',
    icon: 'bi-graph-up',
  },
  {
    name: 'Darshana Vora',
    title: 'Product Design Head',
    description: '20+ years in design. Expertise in product development and creating versatile collections for national and international brands.',
    icon: 'bi-palette',
  },
  {
    name: 'Himani Vishen',
    title: 'Business Development Manager',
    description: '20+ years with Li & Fung, handling JC Penny, JoAnn, Michaels. Expert in buyer relations, sampling, and approvals.',
    icon: 'bi-briefcase',
  },
  {
    name: 'Vidhi Mehta',
    title: 'Director - HR & Compliance',
    description: 'MSW qualified. Expertise in HR and social compliances. Worked with Vintage Ceramics and Global Surfaces (Home Depot supplier).',
    icon: 'bi-people-fill',
  },
];

const OurTeam = () => {
  return (
    <section className="our-team-section">
      <div className="container">
        <h2 className="section-title">LEADERSHIP TEAM</h2>
        <p className="section-subtitle">Experienced professionals driving innovation and excellence</p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-icon">
                <i className={`bi ${member.icon}`}></i>
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-title">{member.title}</p>
              <p className="team-description">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;