/**
 * content.js — CV Template Data
 *
 * This is the only file you need to edit to personalise your CV.
 * Replace all placeholder values below with your own information.
 *
 * Sections:
 *   profile        — Name, job title, postnominals, contact links
 *   summary        — 1–4 paragraphs introducing yourself
 *   experience     — Employers, roles, and project-level bullets
 *   earlierCareer  — Brief one-line entries for older roles
 *   skills         — Grouped skill categories with tags
 *   certifications — Credential cards with badge images
 *   publications   — Articles or papers with links
 *   volunteer      — Contributions, volunteering, community roles
 *   education      — Degrees with institution logos
 */

const RESUME_DATA = {
  profile: {
    name: "Jane Smith",
    jobTitle: "Senior Product Manager",
    // Optional — leave as empty string "" to hide
    postnominals: "PMP, MBA",
    contacts: [
      // Use "mailto:" for email, "https://" for web links, "tel:" for phone
      { label: "jane@example.com", link: "mailto:jane@example.com" },
      { label: "linkedin.com/in/janesmith", link: "https://linkedin.com/in/janesmith" }
    ]
  },

  summary: [
    "Jane is a results-driven product manager with over ten years of experience leading cross-functional teams to deliver digital products at scale.",
    "She specialises in agile delivery, stakeholder alignment, and building sustainable product practices for organisations navigating complex change.",
    "Her approach centres on clear thinking, strong communication, and a genuine commitment to outcomes that matter to users and the business alike."
  ],

  experience: [
    {
      employer: "Acme Corporation",
      role: "Senior Product Manager",
      projects: [
        {
          title: "Customer Portal Redesign",
          period: "Jan 2023 – Present<br>San Francisco, CA",
          bullets: [
            "Led end-to-end discovery, design, and delivery of a redesigned self-service portal serving 200,000+ customers.",
            "Facilitated cross-functional workshops with engineering, design, and customer success to align on product vision.",
            "Reduced customer support ticket volume by 35% within six months of launch."
          ]
        },
        {
          title: "Mobile App — v2.0 Launch",
          period: "Mar 2022 – Dec 2022<br>San Francisco, CA",
          bullets: [
            "Defined and prioritised the v2.0 feature roadmap based on user research and business goals.",
            "Coordinated release planning across iOS, Android, and backend teams.",
            "Achieved a 4.7-star average rating on launch week across both app stores."
          ]
        }
      ]
    },
    {
      employer: "Beta Technologies",
      role: "Product Manager",
      projects: [
        {
          title: "Internal Operations Platform",
          period: "Jun 2019 – Feb 2022<br>New York, NY",
          bullets: [
            "Owned the roadmap for an internal platform used daily by 500+ operations staff.",
            "Introduced story mapping and regular sprint reviews to improve team alignment.",
            "Delivered three major releases on schedule, reducing manual processing time by 40%."
          ]
        }
      ]
    }
  ],

  earlierCareer: [
    { employer: "Gamma Solutions", desc: "Business Analyst — Enterprise CRM Implementation (2016 – 2019)" },
    { employer: "Delta Consulting", desc: "Junior Analyst — Digital Transformation Projects (2014 – 2016)" }
  ],

  skills: [
    {
      category: "Product Management",
      tags: ["Roadmap Planning", "User Story Mapping", "Agile & Scrum", "OKRs", "Stakeholder Management", "Product Discovery"]
    },
    {
      category: "Business Analysis",
      tags: ["Requirements Elicitation", "Process Modelling", "Data Analysis", "Backlog Refinement"]
    },
    {
      category: "Tools",
      tags: ["Jira", "Confluence", "Figma", "Miro", "Notion"]
    },
    {
      category: "Technical",
      tags: ["SQL", "Python (basic)", "REST APIs", "Analytics Dashboards"]
    }
  ],

  certifications: [
    {
      name: "PMP — Project Management Professional",
      issuer: "Project Management Institute",
      id: "0000000",
      // Place badge images in the img/ folder and reference them here
      badge: "img/badge-pmp.png"
    },
    {
      name: "Certified Scrum Master",
      issuer: "Scrum Alliance",
      id: "0000001",
      badge: "img/badge-csm.png"
    }
  ],

  publications: [
    {
      title: "Why Product Discovery Is Worth the Time",
      date: "Mar 2024",
      link: "https://example.com/article-link",
      bullets: [
        "An exploration of how dedicated discovery sprints reduce downstream rework and improve team confidence.",
        "Drawing on real project examples to show how early assumptions — tested cheaply — change the shape of a product."
      ]
    }
  ],

  volunteer: [
    {
      employer: "Product Management Community",
      role: "Volunteer Contributor",
      projects: [
        {
          title: "Mentorship Program",
          period: "2023 – Present<br>Remote",
          bullets: [
            "Mentor early-career product managers through monthly one-on-one sessions.",
            "Facilitated a workshop on prioritisation frameworks for a cohort of 20 participants."
          ]
        }
      ]
    }
  ],

  education: [
    {
      period: "2010 – 2012",
      degree: "Master of Business Administration",
      school: "Example University",
      // Place logo images in the img/ folder and reference them here
      logo: "img/logo-university.png"
    },
    {
      period: "2006 – 2010",
      degree: "Bachelor of Science in Computer Science",
      school: "Another University",
      logo: "img/logo-another-university.png"
    }
  ]
};
