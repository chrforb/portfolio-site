export const projects = [
  {
    slug: "hotel-booking-api",

    title: "Hotel Booking System API",

    stack: ["PHP", "Slim Framework", "MySQL", "REST API", "JWT"],

    description:
      "A RESTful backend API for managing hotels, rooms, guests, bookings, amenities, and authentication workflows.",

    highlights: [
      "Designed a normalized relational database structure",
      "Built REST API endpoints for reservation management",
      "Implemented JWT and token-based authentication",
      "Tested routes and authorization flows with Postman",
    ],

    image: "/projects/erd.png",

    secondaryImages: [],

    sections: [
      {
        title: "What I Built",
        text: "A backend hotel booking system that supports hotels, rooms, guests, bookings, amenities, users, roles, and authentication.",
      },
      {
        title: "Technical Work",
        text: "The project focused on relational database design, CRUD operations, REST API development, authentication, and API testing.",
      },
    ],

    github: "https://github.com/chrforb/I425-Hotel-Booking-API",
  },

  {
    slug: "soccer-analytics",

    title: "European Soccer Analytics Research",

    stack: [
      "R",
      "RStudio",
      "Statistical Modeling",
      "Clustering",
      "PCA",
      "Data Visualization",
    ],

    description:
      "Analyzed 25,000+ European soccer matches to identify tactical patterns, league similarities, and broader tactical identities.",

    highlights: [
      "Cleaned and analyzed a large European soccer dataset",
      "Applied clustering techniques to identify tactical groups",
      "Used PCA to visualize league similarities",
      "Created visualizations to communicate tactical differences",
    ],

    image: "/projects/pca.png",

    secondaryImages: [
      {
        src: "/projects/heatmap.png",
        alt: "League tactical DNA heatmap",
      },
    ],

    sections: [
      {
        title: "Approach",
        text: "The analysis explored tactical characteristics across European leagues using statistical modeling, clustering, and dimensionality reduction.",
      },
      {
        title: "Key Insight",
        text: "The visualizations helped show how leagues could be grouped by tactical similarity while also revealing differences in individual tactical attributes.",
      },
    ],

    github: "https://github.com/chrforb/European-Soccer-Analytics",
  },

  {
    slug: "mentaltrack",

    title: "MentalTrack — Mental Wellness App",

    stack: [
      "Figma",
      "UX Research",
      "HCI",
      "Interactive Prototyping",
      "Accessibility",
    ],

    description:
      "Designed an interactive mobile mental wellness prototype informed by user-centered research and accessibility principles.",

    highlights: [
      "Created personas and user workflows",
      "Designed an interactive Figma prototype",
      "Developed stress check-ins and self-care tools",
      "Added routine and progress tracking features",
      "Applied human-centered design and accessibility principles",
    ],

    image: "/projects/hciHome.png",

    secondaryImages: [
      {
        src: "/projects/hciProgress.png",
        alt: "MentalTrack progress tracking screen",
      },
      {
        src: "/projects/hciSelfcare.png",
        alt: "MentalTrack self-care tools screen",
      },
    ],

    sections: [
      {
        title: "Research & Design Process",
        text: "The project used user-centered research to identify needs around stress management, emotional reflection, accessibility, and low-friction wellness support.",
      },
      {
        title: "Prototype Features",
        text: "The interactive prototype includes emotional check-ins, quick support tools, self-care activities, daily routines, and progress tracking.",
      },
    ],

    github:
      "https://www.figma.com/make/DqnVPa4MRxp0JJoh8856XZ/MentalTrack-Mobile-App-Prototype?p=f&fullscreen=1",
  },
];
