import React from 'react';
import '../styles/TrustedCommunity.css';

const communityMembers = [
  {
    id: 1,
    name: 'Zyra Quell',
    species: 'Andromedan',
    role: 'Orbital Broker',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=ZyraQuell',
    blurb: 'Meticulous negotiator who closes complex moon-habitat deals without drama.',
  },
  {
    id: 2,
    name: 'Grunk Tallo',
    species: 'Titan Miner',
    role: 'Land Scout',
    rating: 4,
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=GrunkTallo',
    blurb: 'Blunt but reliable. Knows every mineral-rich frontier zone in the outer rim.',
  },
  {
    id: 3,
    name: 'Veli Sorn',
    species: 'Venusian Cloudborn',
    role: 'Luxury Specialist',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=VeliSorn',
    blurb: 'Elegant and exacting. Matches high-net-worth clients with floating estates.',
  },
  {
    id: 4,
    name: 'Krax 9',
    species: 'Synthetic',
    role: 'Compliance Auditor',
    rating: 4,
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Krax9',
    blurb: 'Rule-focused AI consultant who catches legal issues before contracts are signed.',
  },
  {
    id: 5,
    name: 'Mira Flux',
    species: 'Solar Nomad',
    role: 'First-Time Buyer Guide',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=MiraFlux',
    blurb: 'Patient mentor who helps new settlers avoid overpriced crater plots.',
  },
  {
    id: 6,
    name: 'Drogo Fen',
    species: 'Martian Engineer',
    role: 'Habitat Inspector',
    rating: 3,
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=DrogoFen',
    blurb: 'Hyper-technical inspector. Great reports, occasionally too direct with feedback.',
  },
  {
    id: 7,
    name: 'Luma Vex',
    species: 'Nebula Mystic',
    role: 'Community Host',
    rating: 4,
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=LumaVex',
    blurb: 'Warm and social, runs welcome circles for newcomers on multi-species colonies.',
  },
  {
    id: 8,
    name: 'Torg Helm',
    species: 'Jovian',
    role: 'Commercial Agent',
    rating: 4,
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=TorgHelm',
    blurb: 'Specialist in trade hubs and docking districts with high freight turnover.',
  },
  {
    id: 9,
    name: 'Iri Nova',
    species: 'Lunar Archivist',
    role: 'Title Historian',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=IriNova',
    blurb: 'Tracks ownership chains across centuries. Trusted for zero-surprise closings.',
  },
  {
    id: 10,
    name: 'Braxie Jolt',
    species: 'Mercurian',
    role: 'Auction Runner',
    rating: 3,
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=BraxieJolt',
    blurb: 'Fast-talking dealmaker who thrives in timed auctions and volatile markets.',
  },
  {
    id: 11,
    name: 'Sela Prism',
    species: 'Crystalline Being',
    role: 'Design Consultant',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=SelaPrism',
    blurb: 'Transforms basic domes into stunning homes with bioluminescent architecture.',
  },
  {
    id: 12,
    name: 'Nok Pellar',
    species: 'Asteroid Drifter',
    role: 'Remote Property Scout',
    rating: 4,
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=NokPellar',
    blurb: 'Tracks underpriced outposts most agents miss beyond mapped transport lanes.',
  },
  {
    id: 13,
    name: 'Yuna Arc',
    species: 'Plasmaform',
    role: 'Tenant Advocate',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=YunaArc',
    blurb: 'Protects renter rights and negotiates fair long-term station leases.',
  },
  {
    id: 14,
    name: 'Rex Null',
    species: 'Cybernetic',
    role: 'Security Reviewer',
    rating: 4,
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=RexNull',
    blurb: 'Audits colony defense systems and flags properties with weak perimeter controls.',
  },
  {
    id: 15,
    name: 'Pip Comet',
    species: 'Cometling',
    role: 'Transit Concierge',
    rating: 2,
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=PipComet',
    blurb: 'Friendly and energetic, but occasionally late on follow-ups during peak seasons.',
  },
  {
    id: 16,
    name: 'Orla Tide',
    species: 'Ocean Mooner',
    role: 'Resort Curator',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=OrlaTide',
    blurb: 'Excellent taste and strong network for premium coastal ring habitats.',
  },
  {
    id: 17,
    name: 'Dax Ember',
    species: 'Volcanic',
    role: 'Risk Analyst',
    rating: 3,
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=DaxEmber',
    blurb: 'Cautious advisor who prioritizes stability and avoids speculative zones.',
  },
  {
    id: 18,
    name: 'Nyla Orbit',
    species: 'Starseed',
    role: 'Family Relocation Lead',
    rating: 4,
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=NylaOrbit',
    blurb: 'Coordinates smooth moves for families across systems with school-ready plans.',
  },
  {
    id: 19,
    name: 'Quor Blink',
    species: 'Quantum Splitter',
    role: 'Multi-Unit Investor Rep',
    rating: 1,
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=QuorBlink',
    blurb: 'Aggressive and impatient; known for pushing high-risk investment packages.',
  },
  {
    id: 20,
    name: 'Astra Rune',
    species: 'Celestial Hybrid',
    role: 'Community Mediator',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=AstraRune',
    blurb: 'Respected peacemaker who resolves disputes and builds trust between buyers and sellers.',
  },
];

const renderStars = (rating) =>
  Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < rating ? 'star filled' : 'star'}>
      ★
    </span>
  ));

function TrustedCommunity() {
  return (
    <div className="trusted-community-page">
      <section className="trusted-community-hero">
        <h1>👽 Trusted Community</h1>
        <p>Meet 20 verified alien members with strong reputations across the intergalactic market.</p>
      </section>

      <section className="community-grid">
        {communityMembers.map((member) => (
          <article className="community-card" key={member.id}>
            <img src={member.avatar} alt={`${member.name} profile`} className="community-avatar" />
            <h2>{member.name}</h2>
            <p className="member-meta">
              {member.species} · {member.role}
            </p>
            <p className="member-blurb">{member.blurb}</p>
            <div className="member-rating" aria-label={`${member.rating} star reputation`}>
              {renderStars(member.rating)}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default TrustedCommunity;
