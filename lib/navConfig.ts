// lib/navConfig.ts

export type SubCategory = {
  label: string;
  slug: string;
  image: string;
  description: string;
  specs: string[];
};

export type NavSection = {
  id: string;
  tagline: string;
  subCategories: SubCategory[];
};

export const NAV_DATA: Record<string, NavSection> = {
  SHOP: {
    id: "nav_shop",
    tagline: "TACTICAL EXPORT INVENTORY // READY FOR DEPLOYMENT",
    subCategories: [
      {
        label: "Performance Tees",
        slug: "/shop/performance-tees",
        image: "/g4.png",
        description: "PRO-KNIT SERIES v2.0",
        specs: ["Weight: 140gsm", "Fabric: Interlock Tech", "Export Grade"]
      },
      {
        label: "Compression Gear",
        slug: "/shop/compression",
        image: "/g4.png", 
        description: "V-COMPRESSION RECOVERY",
        specs: ["Stretch: 4-Way", "Seams: Flatlock", "Anti-Bacterial"]
      },
      {
        label: "Utility Trousers",
        slug: "/shop/trousers",
        image: "/g4.png",
        description: "CARGO-SPEC TACTICAL",
        specs: ["Ripstop Weave", "Reinforced Knee", "Multi-Pocket"]
      },
      {
        label: "Elite Outerwear",
        slug: "/shop/outerwear",
        image: "/g4.png",
        description: "ARCTIC-SHIELD THERMAL",
        specs: ["Rating: IP-65", "Thermal: Level 3", "Windproof"]
      },
      {
        label: "Training Shorts",
        slug: "/shop/shorts",
        image: "/g4.png",
        description: "KINETIC FREEDOM SERIES",
        specs: ["Lightweight", "Quick-Dry", "Laser-Cut Vents"]
      }
    ]
  },
  COLLECTIONS: {
    id: "nav_collections",
    tagline: "GLOBAL BATCH RELEASES // SEASONAL ARCHIVE",
    subCategories: [
      {
        label: "Winter Export",
        slug: "/collections/winter-26",
        image: "/g4.png",
        description: "HEAVY-DUTY THERMAL BATCH",
        specs: ["Batch: #09-W", "Stock: Global", "Limited Release"]
      },
      {
        label: "Summer export",
        slug: "/collections/desert-ops",
        image: "/g4.png",
        description: "HIGH-HEAT RESISTANT",
        specs: ["UV-60 Rated", "Sand-Proof", "Breathable Mesh"]
      },
      {
        label: "Urban Drop",
        slug: "/collections/urban-elite",
        image: "/g4.png",
        description: "CITY-SPEC MINIMALISM",
        specs: ["Reflective Trim", "Sleek Fit", "Hybrid Fabric"]
      },
      {
        label: "Legacy Archieve",
        slug: "/collections/legacy",
        image: "/g4.png",
        description: "THE FOUNDATION DESIGNS",
        specs: ["Classic Cut", "Hand-Finished", "Core Series"]
      }
    ]
  },
  ARCHIVE: {
    id: "nav_archive",
    tagline: "HISTORICAL SPECIFICATIONS // 2018 - 2025",
    subCategories: [
      {
        label: "Women and Men",
        slug: "/archive/2025",
        image: "/g4.png",
        description: "PREVIOUS SEASON LOGISTICS",
        specs: ["Legacy Build", "Retired Patterns", "Historical Data"]
      },
      {
        label: "Sports and Gym",
        slug: "/archive/prototypes",
        image: "/g4.png",
        description: "UNRELEASED EXPERIMENTS",
        specs: ["Alpha Build", "Carbon-Fiber Infused", "Lab Only"]
      }
    ]
  },
  BLUEPRINT: {
    id: "nav_blueprint",
    tagline: "FACTORY SPECIFICATION ACCESS // ISO CERTIFIED",
    subCategories: [
      {
        label: "Material Science",
        slug: "/blueprint/materials",
        image: "/g4.png",
        description: "PROPRIETARY YARN STRUCTURE",
        specs: ["Lab Tested", "ISO-9001", "Synthetic Blend"]
      },
      {
        label: "Supply Chain",
        slug: "/blueprint/supply",
        image: "/g4.png",
        description: "GLOBAL LOGISTICS MAP",
        specs: ["Tier-1 Sourcing", "Sustainable", "Secure Transit"]
      },
      {
        label: "Tech Sheets",
        slug: "/blueprint/tech",
        image: "/g4.png",
        description: "MANUFACTURING SCHEMATICS",
        specs: ["PDF Access", "Vector Specs", "QC Protocol"]
      }
    ]
  },
  ABOUT: {
    id: "nav_about",
    tagline: "THE APEX ELITE MANIFESTO",
    subCategories: [
      {
        label: "Our Legacy",
        slug: "/about/legacy",
        image: "/g4.png",
        description: "AGENCY ORIGIN STORY",
        specs: ["Est. 2015", "Global Reach", "Elite Standard"]
      },
      {
        label: "Contact",
        slug: "/about/contact",
        image: "/g4.png",
        description: "ESTABLISH DIRECT LINK",
        specs: ["24/7 Support", "Secure Comms", "Global HQ"]
      }
    ]
  }
};