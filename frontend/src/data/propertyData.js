// Mock property data for different planets across galaxies
export const propertyData = {
  galaxies: [
    {
      id: 1,
      name: 'Milky Way',
      description: 'Our home galaxy with diverse planetary real estate',
      planets: [
        {
          id: 1,
          name: 'Mars',
          description: 'The Red Planet - Perfect for pioneers',
          properties: [
            {
              id: 101,
              name: 'Olympus Mons Penthouse',
              planet: 'Mars',
              galaxy: 'Milky Way',
              price: 2500000,
              bedrooms: 5,
              bathrooms: 3,
              area: 4500,
              image: '🏠',
              description: 'Luxury penthouse with view of the largest volcano in the solar system. High-altitude living with premium life support systems.',
              features: ['Anti-gravity gym', 'Martian dust filtration', 'Panoramic viewports', 'Hydroponic garden'],
              isPremium: true
            },
            {
              id: 102,
              name: 'Valles Marineris Canyon View',
              planet: 'Mars',
              galaxy: 'Milky Way',
              price: 1800000,
              bedrooms: 4,
              bathrooms: 2,
              area: 3500,
              image: '🏠',
              description: 'Expansive property overlooking the massive canyon system. Perfect for explorers and researchers.',
              features: ['Canyon view', 'Research lab', 'Solar panels', 'Water extraction unit'],
              isPremium: true
            },
            {
              id: 103,
              name: 'Jezero Crater Hab-Dome',
              planet: 'Mars',
              galaxy: 'Milky Way',
              price: 950000,
              bedrooms: 2,
              bathrooms: 1,
              area: 1800,
              image: '🏠',
              description: 'Modern hab-dome in a climate-controlled ecosystem. Great starter property for Mars colonists.',
              features: ['Biodome environment', 'Efficient power usage', 'Ground floor', 'Ready to move in'],
              isPremium: false
            },
            {
              id: 104,
              name: 'Hellas Planitia Estate',
              planet: 'Mars',
              galaxy: 'Milky Way',
              price: 3200000,
              bedrooms: 6,
              bathrooms: 4,
              area: 5500,
              image: '🏠',
              description: 'Grand estate in the deepest impact basin. Ultimate luxury Mars living.',
              features: ['Wine cellar', 'Home theater', 'Spa facilities', 'Geothermal heating'],
              isPremium: true
            },
            {
              id: 105,
              name: 'New Beijing Settlement Module',
              planet: 'Mars',
              galaxy: 'Milky Way',
              price: 650000,
              bedrooms: 2,
              bathrooms: 1,
              area: 1400,
              image: '🏠',
              description: 'Affordable module in established settlement. Community amenities included.',
              features: ['Shared common areas', 'Security system', 'Hydroponics access', 'Low maintenance'],
              isPremium: false
            }
          ]
        },
        {
          id: 2,
          name: 'Venus',
          description: 'Cloud City living with advanced tech',
          properties: [
            {
              id: 201,
              name: 'Floating Cloud Palace',
              planet: 'Venus',
              galaxy: 'Milky Way',
              price: 4500000,
              bedrooms: 7,
              bathrooms: 5,
              area: 6000,
              image: '☁️',
              description: 'Exclusive floating residence above Venus clouds. State-of-the-art temperature control.',
              features: ['Anti-corrosion coating', 'Pressure vessels', 'Thermal equilibrium system', 'Observation deck'],
              isPremium: true
            },
            {
              id: 202,
              name: 'Aphrodite Terra Tower',
              planet: 'Venus',
              galaxy: 'Milky Way',
              price: 2800000,
              bedrooms: 5,
              bathrooms: 3,
              area: 4200,
              image: '☁️',
              description: 'High-rise cloud city apartment with exclusive amenities.',
              features: ['Altitude control', 'Pressure monitoring', 'Atmospheric sensors', 'Luxury finishes'],
              isPremium: true
            },
            {
              id: 203,
              name: 'Cloud Station Alpha',
              planet: 'Venus',
              galaxy: 'Milky Way',
              price: 1500000,
              bedrooms: 3,
              bathrooms: 2,
              area: 2500,
              image: '☁️',
              description: 'Mid-level cloud station apartment. Good investment potential.',
              features: ['Stable altitude', 'Power backup', 'Air circulation', 'Sealed environment'],
              isPremium: false
            },
            {
              id: 204,
              name: 'Ishtar Terra Summit Residence',
              planet: 'Venus',
              galaxy: 'Milky Way',
              price: 3500000,
              bedrooms: 5,
              bathrooms: 3,
              area: 4800,
              image: '☁️',
              description: 'Premium position near the highest peaks of Venus.',
              features: ['Cloud garden', 'Sunset views', 'Solar collectors', 'Emergency escape pod'],
              isPremium: true
            },
            {
              id: 205,
              name: 'Lower Atmosphere Studio',
              planet: 'Venus',
              galaxy: 'Milky Way',
              price: 800000,
              bedrooms: 1,
              bathrooms: 1,
              area: 900,
              image: '☁️',
              description: 'Compact living in the lower cloud layers. Affordable luxury.',
              features: ['Compact design', 'Basic amenities', 'Cloud landing pad', 'Maintenance included'],
              isPremium: false
            }
          ]
        },
        {
          id: 3,
          name: 'Jupiter (Colonies)',
          description: 'Floating habitats in gas giant colonies',
          properties: [
            {
              id: 301,
              name: 'Europa Station Nexus',
              planet: 'Jupiter (Europa)',
              galaxy: 'Milky Way',
              price: 3800000,
              bedrooms: 6,
              bathrooms: 4,
              area: 5200,
              image: '🌋',
              description: 'Underground base on Jupiter\'s moon Europa with ice-mining facilities.',
              features: ['Thermal drilling', 'Water resources', 'Research labs', 'Compressed air system'],
              isPremium: true
            },
            {
              id: 302,
              name: 'Io Lava Haven',
              planet: 'Jupiter (Io)',
              galaxy: 'Milky Way',
              price: 2200000,
              bedrooms: 4,
              bathrooms: 2,
              area: 3300,
              image: '🌋',
              description: 'Geothermal powered home on Io. Abundant energy sources.',
              features: ['Geothermal power', 'Sulfur mining rights', 'Lava shielding', 'Isolation pod'],
              isPremium: true
            },
            {
              id: 303,
              name: 'Ganymede Research Outpost',
              planet: 'Jupiter (Ganymede)',
              galaxy: 'Milky Way',
              price: 1600000,
              bedrooms: 3,
              bathrooms: 2,
              area: 2800,
              image: '🌙',
              description: 'Scientific research facility with living quarters. Perfect for academics.',
              features: ['Lab equipment', 'Observation instruments', 'Archive systems', 'Communication hub'],
              isPremium: false
            },
            {
              id: 304,
              name: 'Callisto Crater Mansion',
              planet: 'Jupiter (Callisto)',
              galaxy: 'Milky Way',
              price: 2900000,
              bedrooms: 5,
              bathrooms: 3,
              area: 4400,
              image: '🌙',
              description: 'Luxury estate in a secure crater location.',
              features: ['Impact crater protection', 'Ice reserves', 'Radiation shielding', 'Panoramic dome'],
              isPremium: true
            },
            {
              id: 305,
              name: 'Small Station Unit',
              planet: 'Jupiter (Europa)',
              galaxy: 'Milky Way',
              price: 900000,
              bedrooms: 2,
              bathrooms: 1,
              area: 1500,
              image: '🌙',
              description: 'Compact habitation unit. Expansion possible.',
              features: ['Expandable', 'Basic utilities', 'Docking port', 'Backup power'],
              isPremium: false
            }
          ]
        },
        {
          id: 4,
          name: 'Saturn',
          description: 'Ring settlements with zero-gravity architecture',
          properties: [
            {
              id: 401,
              name: 'Titan Mega-Complex',
              planet: 'Saturn (Titan)',
              galaxy: 'Milky Way',
              price: 5200000,
              bedrooms: 8,
              bathrooms: 5,
              area: 6500,
              image: '🏢',
              description: 'Multi-level complex on Titan with methane lakes and dense atmosphere.',
              features: ['Methane refinery', 'Organic chemical labs', 'Hydrocarbon storage', 'Cryogenic systems'],
              isPremium: true
            },
            {
              id: 402,
              name: 'Ring-side Vista Estate',
              planet: 'Saturn (Rings)',
              galaxy: 'Milky Way',
              price: 3900000,
              bedrooms: 6,
              bathrooms: 4,
              area: 5000,
              image: '💎',
              description: 'Exclusive property with stunning ring vistas and ice mining rights.',
              features: ['Ring observation deck', 'Ice mining equipment', 'Zero-gravity recreation', 'Luxury fittings'],
              isPremium: true
            },
            {
              id: 403,
              name: 'Enceladus Water World',
              planet: 'Saturn (Enceladus)',
              galaxy: 'Milky Way',
              price: 2100000,
              bedrooms: 4,
              bathrooms: 2,
              area: 3200,
              image: '🏠',
              description: 'Underground settlement beneath ice shell with access to water ocean.',
              features: ['Water access', 'Pressure dome', 'Thermal vents', 'Biosphere labs'],
              isPremium: true
            },
            {
              id: 404,
              name: 'Dione Orbital Station',
              planet: 'Saturn (Dione)',
              galaxy: 'Milky Way',
              price: 1700000,
              bedrooms: 3,
              bathrooms: 2,
              area: 2700,
              image: '🌙',
              description: 'Orbiting station near Dione with excellent views.',
              features: ['Orbital mechanics', 'Docking facilities', 'Observation windows', 'Rotation gravity'],
              isPremium: false
            },
            {
              id: 405,
              name: 'Iapetus Prime',
              planet: 'Saturn (Iapetus)',
              galaxy: 'Milky Way',
              price: 1200000,
              bedrooms: 2,
              bathrooms: 1,
              area: 1900,
              image: '🌙',
              description: 'Compact living on Iapetus with unique bimodal geology.',
              features: ['Dual surface zones', 'Ridge location', 'Scenic views', 'Isolated location'],
              isPremium: false
            }
          ]
        },
        {
          id: 5,
          name: 'Mercury',
          description: 'Extreme temperature properties with advanced cooling',
          properties: [
            {
              id: 501,
              name: 'Twilight Zone Royal Estate',
              planet: 'Mercury',
              galaxy: 'Milky Way',
              price: 4200000,
              bedrooms: 7,
              bathrooms: 4,
              area: 5800,
              image: '🏠',
              description: 'Permanent twilight location with stable temperatures. The ultimate Mercury property.',
              features: ['Thermal insulation', 'Radiative cooling', 'Solar collection', 'Deep shade location'],
              isPremium: true
            },
            {
              id: 502,
              name: 'Substellar Point Fortress',
              planet: 'Mercury',
              galaxy: 'Milky Way',
              price: 2600000,
              bedrooms: 5,
              bathrooms: 3,
              area: 4100,
              image: '🏠',
              description: 'Premium property near the point facing the sun with advanced heat management.',
              features: ['Heat reflective shields', 'Liquid cooling system', 'Solar power plant', 'Buried foundation'],
              isPremium: true
            },
            {
              id: 503,
              name: 'Crater Refuge Colony',
              planet: 'Mercury',
              galaxy: 'Milky Way',
              price: 1400000,
              bedrooms: 3,
              bathrooms: 2,
              area: 2400,
              image: '🏠',
              description: 'Safe location inside deep crater with natural temperature regulation.',
              features: ['Crater shading', 'Stable ground', 'Ice deposits', 'Echo shield'],
              isPremium: false
            },
            {
              id: 504,
              name: 'Caloris Basin Premium',
              planet: 'Mercury',
              galaxy: 'Milky Way',
              price: 3300000,
              bedrooms: 5,
              bathrooms: 3,
              area: 4700,
              image: '🏠',
              description: 'Massive impact basin property with seismic stability concerns and unique geology.',
              features: ['Central peak location', 'Scarps protection', 'Radiation shielding', 'Scientific value'],
              isPremium: true
            },
            {
              id: 505,
              name: 'Terminator Line Studio',
              planet: 'Mercury',
              galaxy: 'Milky Way',
              price: 750000,
              bedrooms: 1,
              bathrooms: 1,
              area: 800,
              image: '🏠',
              description: 'Budget option at the day-night boundary. Simple but functional.',
              features: ['Temperature stable', 'Minimal systems', 'Easy maintenance', 'Starter property'],
              isPremium: false
            }
          ]
        },
        {
          id: 6,
          name: 'Kepler-452b',
          description: 'Earth-like exoplanet in habitable zone',
          properties: [
            {
              id: 601,
              name: 'New Terra Grand Estate',
              planet: 'Kepler-452b',
              galaxy: 'Milky Way',
              price: 6500000,
              bedrooms: 9,
              bathrooms: 6,
              area: 7500,
              image: '🌍',
              description: 'Sprawling estate on Earth-like world with perfect conditions. Lifetime investment.',
              features: ['Perfect gravity', 'Breathable atmosphere', 'Vast land plots', 'Farming potential'],
              isPremium: true
            },
            {
              id: 602,
              name: 'Golden Valley Vineyard',
              planet: 'Kepler-452b',
              galaxy: 'Milky Way',
              price: 4200000,
              bedrooms: 6,
              bathrooms: 4,
              area: 5200,
              image: '🌍',
              description: 'Working vineyard property with excellent wine-making conditions.',
              features: ['Orchard', 'Wine cellar', 'Irrigation systems', 'Agricultural equipment'],
              isPremium: true
            },
            {
              id: 603,
              name: 'Coastal Paradise Villa',
              planet: 'Kepler-452b',
              galaxy: 'Milky Way',
              price: 3100000,
              bedrooms: 5,
              bathrooms: 3,
              area: 4300,
              image: '🏖️',
              description: 'Beachfront property with exotic ocean and perfect climate.',
              features: ['Ocean access', 'Sandy beaches', 'Water sports amenities', 'Sea views'],
              isPremium: true
            },
            {
              id: 604,
              name: 'Mountain Retreat Cabin',
              planet: 'Kepler-452b',
              galaxy: 'Milky Way',
              price: 1900000,
              bedrooms: 4,
              bathrooms: 2,
              area: 3100,
              image: '⛰️',
              description: 'Cozy mountain home with breathtaking vistas.',
              features: ['Mountain views', 'Natural springs', 'Forest surroundings', 'Hiking trails'],
              isPremium: true
            },
            {
              id: 605,
              name: 'Settler\'s Homestead',
              planet: 'Kepler-452b',
              galaxy: 'Milky Way',
              price: 950000,
              bedrooms: 3,
              bathrooms: 1,
              area: 2200,
              image: '🏠',
              description: 'Starter home perfect for new colonists. Great community.',
              features: ['New settler discount', 'Community support', 'Tools included', 'Easy financing'],
              isPremium: false
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'Andromeda Galaxy',
      description: 'Ancient civilization properties in neighboring galaxy',
      planets: [
        {
          id: 101,
          name: 'Zephyr Prime',
          description: 'High-tech civilization hub',
          properties: [
            {
              id: 7001,
              name: 'Neo-Tokyo Highrise',
              planet: 'Zephyr Prime',
              galaxy: 'Andromeda',
              price: 5800000,
              bedrooms: 8,
              bathrooms: 5,
              area: 6200,
              image: '🏢',
              description: 'Futuristic mega-city high-rise apartment with gravity control.',
              features: ['Gravity manipulation', 'Holographic windows', 'AI assistance', 'Teleportation pad'],
              isPremium: true
            },
            {
              id: 7002,
              name: 'Sky Garden Complex',
              planet: 'Zephyr Prime',
              galaxy: 'Andromeda',
              price: 3400000,
              bedrooms: 5,
              bathrooms: 3,
              area: 4600,
              image: '🌳',
              description: 'Vertical garden tower with lush bio-engineered plants.',
              features: ['Living walls', 'Air purification', 'Oxygen production', 'Vertical farming'],
              isPremium: true
            },
            {
              id: 7003,
              name: 'Crystal Tower Apartment',
              planet: 'Zephyr Prime',
              galaxy: 'Andromeda',
              price: 2100000,
              bedrooms: 4,
              bathrooms: 2,
              area: 3300,
              image: '💎',
              description: 'Made from crystalline structures, naturally beautiful.',
              features: ['Crystal walls', 'Self-cleaning', 'Natural cooling', 'Transparent rooms'],
              isPremium: true
            },
            {
              id: 7004,
              name: 'Mid-Rise Living Unit',
              planet: 'Zephyr Prime',
              galaxy: 'Andromeda',
              price: 1300000,
              bedrooms: 3,
              bathrooms: 1,
              area: 2100,
              image: '🏠',
              description: 'Standard apartment in mixed-use district.',
              features: ['Central location', 'Walking accessible', 'Public transport', 'Shopping nearby'],
              isPremium: false
            },
            {
              id: 7005,
              name: 'Efficiency Studio Pod',
              planet: 'Zephyr Prime',
              galaxy: 'Andromeda',
              price: 650000,
              bedrooms: 1,
              bathrooms: 1,
              area: 700,
              image: '🏠',
              description: 'Compact living pod with smart systems.',
              features: ['Smart automation', 'Multi-functional furniture', 'Compact kitchen', 'AI roommate'],
              isPremium: false
            }
          ]
        },
        {
          id: 102,
          name: 'Aurora Seven',
          description: 'Peaceful artist colony world',
          properties: [
            {
              id: 7101,
              name: 'Artist\'s Celestial Sanctuary',
              planet: 'Aurora Seven',
              galaxy: 'Andromeda',
              price: 3600000,
              bedrooms: 6,
              bathrooms: 3,
              area: 5000,
              image: '🎨',
              description: 'Creative haven with natural lighting and inspiring vistas.',
              features: ['Art studios', 'Exhibition space', 'Natural light', 'Sculpture garden'],
              isPremium: true
            },
            {
              id: 7102,
              name: 'Musician\'s Dream Villa',
              planet: 'Aurora Seven',
              galaxy: 'Andromeda',
              price: 2800000,
              bedrooms: 5,
              bathrooms: 3,
              area: 4200,
              image: '🎵',
              description: 'Acoustically perfect property with concert hall.',
              features: ['Concert hall', 'Recording studio', 'Soundproof rooms', 'Performance stage'],
              isPremium: true
            },
            {
              id: 7103,
              name: 'Writer\'s Cottage',
              planet: 'Aurora Seven',
              galaxy: 'Andromeda',
              price: 1600000,
              bedrooms: 4,
              bathrooms: 2,
              area: 2800,
              image: '📚',
              description: 'Quiet retreat for creative writing and inspiration.',
              features: ['Library room', 'Outdoor study', 'Quiet zones', 'Meditation garden'],
              isPremium: true
            },
            {
              id: 7104,
              name: 'Community Artist Space',
              planet: 'Aurora Seven',
              galaxy: 'Andromeda',
              price: 1100000,
              bedrooms: 3,
              bathrooms: 1,
              area: 1800,
              image: '🎨',
              description: 'Shared creative facility with other artists.',
              features: ['Shared studios', 'Group exhibitions', 'Mentorship program', 'Art supplies'],
              isPremium: false
            },
            {
              id: 7105,
              name: 'Creativity Pod',
              planet: 'Aurora Seven',
              galaxy: 'Andromeda',
              price: 550000,
              bedrooms: 1,
              bathrooms: 1,
              area: 600,
              image: '🏠',
              description: 'Affordable creative space for emerging artists.',
              features: ['Basic workspace', 'Community access', 'Subsidized rent', 'Mentorship'],
              isPremium: false
            }
          ]
        },
        {
          id: 103,
          name: 'Stellaris IV',
          description: 'Biotech research planets',
          properties: [
            {
              id: 7201,
              name: 'Genetic Empire Mansion',
              planet: 'Stellaris IV',
              galaxy: 'Andromeda',
              price: 4900000,
              bedrooms: 7,
              bathrooms: 4,
              area: 5900,
              image: '🏠',
              description: 'Home of biotech titans with integrated laboratories.',
              features: ['Bio-labs', 'Gene sequencing', 'Cloning facility', 'Luxury amenities'],
              isPremium: true
            },
            {
              id: 7202,
              name: 'Life Enhancement Center',
              planet: 'Stellaris IV',
              galaxy: 'Andromeda',
              price: 2700000,
              bedrooms: 5,
              bathrooms: 3,
              area: 4100,
              image: '⚗️',
              description: 'Residential medical facility with health optimization features.',
              features: ['Medical facilities', 'Therapy chambers', 'Biomods', 'Health monitoring'],
              isPremium: true
            },
            {
              id: 7203,
              name: 'Research Habitat Module',
              planet: 'Stellaris IV',
              galaxy: 'Andromeda',
              price: 1800000,
              bedrooms: 4,
              bathrooms: 2,
              area: 2900,
              image: '⚗️',
              description: 'Advanced living quarters for biotech researchers.',
              features: ['Sealed environment', 'Sterile protocols', 'Observation decks', 'Lab access'],
              isPremium: false
            },
            {
              id: 7204,
              name: 'Bio-Dome Community Unit',
              planet: 'Stellaris IV',
              galaxy: 'Andromeda',
              price: 1200000,
              bedrooms: 3,
              bathrooms: 1,
              area: 2000,
              image: '🏠',
              description: 'Shared bio-dome residential space.',
              features: ['Biodome environment', 'Shared labs', 'Community dining', 'Quarantine facility'],
              isPremium: false
            },
            {
              id: 7205,
              name: 'Scientist\'s Quarters',
              planet: 'Stellaris IV',
              galaxy: 'Andromeda',
              price: 700000,
              bedrooms: 2,
              bathrooms: 1,
              area: 1100,
              image: '🏠',
              description: 'Entry-level housing for scientists.',
              features: ['Basic lab access', 'Peer housing', 'Cafeteria included', 'Low maintenance'],
              isPremium: false
            }
          ]
        },
        {
          id: 104,
          name: 'Nexus Station',
          description: 'Space trading hub colonies',
          properties: [
            {
              id: 7301,
              name: 'Trade Prince\'s Palace',
              planet: 'Nexus Station',
              galaxy: 'Andromeda',
              price: 6200000,
              bedrooms: 9,
              bathrooms: 6,
              area: 7200,
              image: '👑',
              description: 'Opulent residence for intergalactic merchants and traders.',
              features: ['Private docking bay', 'Treasury vault', 'Conference halls', 'Rooftop landing pad'],
              isPremium: true
            },
            {
              id: 7302,
              name: 'Merchant\'s Guild Estate',
              planet: 'Nexus Station',
              galaxy: 'Andromeda',
              price: 3300000,
              bedrooms: 5,
              bathrooms: 3,
              area: 4500,
              image: '🏪',
              description: 'Premium property with integrated trading facilities.',
              features: ['Auction house', 'Market access', 'Vault space', 'Business center'],
              isPremium: true
            },
            {
              id: 7303,
              name: 'Trader\'s Apartment',
              planet: 'Nexus Station',
              galaxy: 'Andromeda',
              price: 1900000,
              bedrooms: 4,
              bathrooms: 2,
              area: 3200,
              image: '🏠',
              description: 'Convenient location for active traders.',
              features: ['Market proximity', 'Storage unit', 'Exchange desk', 'Business hours'],
              isPremium: true
            },
            {
              id: 7304,
              name: 'Station Residential Block',
              planet: 'Nexus Station',
              galaxy: 'Andromeda',
              price: 1100000,
              bedrooms: 3,
              bathrooms: 1,
              area: 1900,
              image: '🏠',
              description: 'Community housing near market district.',
              features: ['Market access', 'Common areas', 'Security', 'Maintenance included'],
              isPremium: false
            },
            {
              id: 7305,
              name: 'Budget Trader\'s Room',
              planet: 'Nexus Station',
              galaxy: 'Andromeda',
              price: 450000,
              bedrooms: 1,
              bathrooms: 1,
              area: 500,
              image: '🏠',
              description: 'Affordable housing for small merchants.',
              features: ['Basic utilities', 'Market access', 'Security deposit', 'Starter friendly'],
              isPremium: false
            }
          ]
        },
        {
          id: 105,
          name: 'Ocean Paradise',
          description: 'Water world with underwater cities',
          properties: [
            {
              id: 7401,
              name: 'Atlantis Luxury Dome',
              planet: 'Ocean Paradise',
              galaxy: 'Andromeda',
              price: 5500000,
              bedrooms: 8,
              bathrooms: 5,
              area: 6300,
              image: '🐚',
              description: 'Underwater palace with breathtaking marine life views.',
              features: ['Submarine docking', 'Ocean observation', 'Reef access', 'Luxury finishes'],
              isPremium: true
            },
            {
              id: 7402,
              name: 'Coral Reef Manor',
              planet: 'Ocean Paradise',
              galaxy: 'Andromeda',
              price: 3200000,
              bedrooms: 5,
              bathrooms: 3,
              area: 4400,
              image: '🐠',
              description: 'Integrated with natural coral formations.',
              features: ['Reef proximity', 'Marina dock', 'Aquarium windows', 'Diving gear included'],
              isPremium: true
            },
            {
              id: 7403,
              name: 'Depth Dwelling Villa',
              planet: 'Ocean Paradise',
              galaxy: 'Andromeda',
              price: 2100000,
              bedrooms: 4,
              bathrooms: 2,
              area: 3300,
              image: '🏠',
              description: 'Deep ocean residence with unique pressure engineering.',
              features: ['Deep location stability', 'Thermal vents', 'Whale migration views', 'Pressure sealed'],
              isPremium: true
            },
            {
              id: 7404,
              name: 'Island Colony Townhouse',
              planet: 'Ocean Paradise',
              galaxy: 'Andromeda',
              price: 1300000,
              bedrooms: 3,
              bathrooms: 1,
              area: 2200,
              image: '🏝️',
              description: 'Tropical island community property.',
              features: ['Island living', 'Beach access', 'Tide pools', 'Boat dock'],
              isPremium: false
            },
            {
              id: 7405,
              name: 'Basic Water Station',
              planet: 'Ocean Paradise',
              galaxy: 'Andromeda',
              price: 700000,
              bedrooms: 2,
              bathrooms: 1,
              area: 1200,
              image: '🏠',
              description: 'Simple habitat module on artificial platform.',
              features: ['Platform living', 'Water farming', 'Fishing rights', 'Maintenance included'],
              isPremium: false
            }
          ]
        }
      ]
    },
    {
      id: 3,
      name: 'Triangulum Galaxy',
      description: 'Distant frontier properties perfect for adventurers',
      planets: [
        {
          id: 201,
          name: 'Frontier Station Alpha',
          description: 'Remote outpost with frontier spirit',
          properties: [
            {
              id: 8001,
              name: 'Outpost Commander\'s Fortress',
              planet: 'Frontier Station Alpha',
              galaxy: 'Triangulum',
              price: 2800000,
              bedrooms: 6,
              bathrooms: 3,
              area: 4300,
              image: '🏰',
              description: 'Command center estate with strategic location.',
              features: ['Command center', 'Defense systems', 'Radar array', 'Communication tower'],
              isPremium: true
            },
            {
              id: 8002,
              name: 'Explorer\'s Lodge',
              planet: 'Frontier Station Alpha',
              galaxy: 'Triangulum',
              price: 1800000,
              bedrooms: 4,
              bathrooms: 2,
              area: 2900,
              image: '🏛️',
              description: 'Rest station for intrepid explorers.',
              features: ['Supply storage', 'Equipment maintenance', 'Adventure planning room', 'Maps collection'],
              isPremium: true
            },
            {
              id: 8003,
              name: 'Frontier Settler Cabin',
              planet: 'Frontier Station Alpha',
              galaxy: 'Triangulum',
              price: 1000000,
              bedrooms: 3,
              bathrooms: 1,
              area: 1700,
              image: '🏠',
              description: 'Sturdy homestead for pioneering families.',
              features: ['Self-sufficient systems', 'Storage', 'Workshop', 'Defense perimeter'],
              isPremium: false
            },
            {
              id: 8004,
              name: 'Adventurer\'s Base Camp',
              planet: 'Frontier Station Alpha',
              galaxy: 'Triangulum',
              price: 650000,
              bedrooms: 2,
              bathrooms: 1,
              area: 1200,
              image: '⛺',
              description: 'Quick refuge for explorers passing through.',
              features: ['Fast setup', 'Minimal amenities', 'Repair service', 'Resupply available'],
              isPremium: false
            }
          ]
        },
        {
          id: 202,
          name: 'Ghost Planet X',
          description: 'Mysterious world with ancient ruins',
          properties: [
            {
              id: 8101,
              name: 'Ancient Ruin Restoration Estate',
              planet: 'Ghost Planet X',
              galaxy: 'Triangulum',
              price: 3400000,
              bedrooms: 6,
              bathrooms: 3,
              area: 4800,
              image: '🏛️',
              description: 'Restored ancient structure with intricate alien architecture.',
              features: ['Ancient technology', 'Historical significance', 'Archeological access', 'Artifact display'],
              isPremium: true
            },
            {
              id: 8102,
              name: 'Archaeologist\'s Research Station',
              planet: 'Ghost Planet X',
              galaxy: 'Triangulum',
              price: 2100000,
              bedrooms: 4,
              bathrooms: 2,
              area: 3200,
              image: '⚱️',
              description: 'State-of-the-art research facility among ruins.',
              features: ['Lab equipment', 'Excavation tools', 'Archive storage', 'Map room'],
              isPremium: true
            },
            {
              id: 8103,
              name: 'Mystery Seeker\'s Haven',
              planet: 'Ghost Planet X',
              galaxy: 'Triangulum',
              price: 1300000,
              bedrooms: 3,
              bathrooms: 1,
              area: 2100,
              image: '🏠',
              description: 'Comfortable home near mysterious sites.',
              features: ['Exploration ready', 'Storage', 'Community', 'Research support'],
              isPremium: false
            },
            {
              id: 8104,
              name: 'Humble Dweller\'s Shelter',
              planet: 'Ghost Planet X',
              galaxy: 'Triangulum',
              price: 700000,
              bedrooms: 2,
              bathrooms: 1,
              area: 1100,
              image: '🏠',
              description: 'Simple shelter among ancient wonders.',
              features: ['Protective walls', 'Archaeological proximity', 'Starter property', 'Community support'],
              isPremium: false
            }
          ]
        },
        {
          id: 203,
          name: 'Crystalline World',
          description: 'Geologically unique crystal formations',
          properties: [
            {
              id: 8201,
              name: 'Mega-Crystal Fortress',
              planet: 'Crystalline World',
              galaxy: 'Triangulum',
              price: 4100000,
              bedrooms: 7,
              bathrooms: 4,
              area: 5400,
              image: '💎',
              description: 'Carved from massive crystal formations. Spectacular property.',
              features: ['Crystal architecture', 'Natural resonance', 'Light refraction art', 'Mining rights'],
              isPremium: true
            },
            {
              id: 8202,
              name: 'Geologist\'s Paradise Manor',
              planet: 'Crystalline World',
              galaxy: 'Triangulum',
              price: 2400000,
              bedrooms: 5,
              bathrooms: 2,
              area: 3600,
              image: '💎',
              description: 'Research home for crystal scientists.',
              features: ['Lab space', 'Sample storage', 'Geological tools', 'Research funding'],
              isPremium: true
            },
            {
              id: 8203,
              name: 'Crystal Dweller\'s Residence',
              planet: 'Crystalline World',
              galaxy: 'Triangulum',
              price: 1500000,
              bedrooms: 3,
              bathrooms: 1,
              area: 2300,
              image: '💎',
              description: 'Home among beautiful crystalline formations.',
              features: ['Crystal surroundings', 'Natural beauty', 'Mining privileges', 'Harvesting tools'],
              isPremium: false
            },
            {
              id: 8204,
              name: 'Miner\'s Cottage',
              planet: 'Crystalline World',
              galaxy: 'Triangulum',
              price: 800000,
              bedrooms: 2,
              bathrooms: 1,
              area: 1300,
              image: '⛏️',
              description: 'Working miner residence with extraction equipment.',
              features: ['Tool shed', 'Mining claim', 'Community', 'Resource market'],
              isPremium: false
            }
          ]
        }
      ]
    }
  ]
};

// Helper function to get all properties across all galaxies
export const getAllProperties = () => {
  const allProperties = [];
  propertyData.galaxies.forEach(galaxy => {
    galaxy.planets.forEach(planet => {
      planet.properties.forEach(property => {
        allProperties.push({
          ...property,
          planetName: planet.name,
          galaxyName: galaxy.name
        });
      });
    });
  });
  return allProperties;
};

// Helper function to get premium properties only
export const getPremiumProperties = () => {
  return getAllProperties().filter(property => property.isPremium);
};

// Helper function to get properties by galaxy
export const getPropertiesByGalaxy = (galaxyName) => {
  const allProps = getAllProperties();
  return allProps.filter(property => property.galaxyName === galaxyName);
};

// Helper function to get properties by planet
export const getPropertiesByPlanet = (planetName) => {
  const allProps = getAllProperties();
  return allProps.filter(property => property.planetName === planetName);
};
