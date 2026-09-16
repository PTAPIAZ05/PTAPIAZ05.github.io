/* =======================================================
   Pedro — Engineering Portfolio
   Project data — single source of truth for the projects
   listing and the project detail template.

   To add a new project:
   1. Add an entry below with a unique id.
   2. Add a card in projects.html that links to
      project.html?id=YOUR-ID
   That's it — the detail page builds itself from this file.
   ======================================================= */

const PROJECTS = {

  "research-01": {
    section: "Formal Research",
    sectionLink: "projects.html#research",
    title: "Heliostat Optimization",
    image: "images/research-01.jpg",
    tags: ["Solar Energy", "Optimization"],
    summary: "Research on optimizing heliostat positioning and control systems for concentrated solar power applications. Includes modeling, simulation, and performance analysis.",
    overview: "EDIT ME —",
    approach: "EDIT ME — ",
    results: "EDIT ME — ",
    reflection: "EDIT ME — "
  },

  "research-02": {
    section: "Formal Research",
    sectionLink: "projects.html#research",
    title: "Hybrid Battery-Supercapacitor HVAC Emulator",
    image: "images/research-02.jpg",
    tags: ["Energy Storage", "HVAC Systems"],
    summary: "Development and testing of a hybrid energy storage system emulator for HVAC applications. Combines battery and supercapacitor technologies for improved efficiency and performance.",
    overview: "EDIT ME — ",
    approach: "EDIT ME — ",
    results: "EDIT ME — ",
    reflection: "EDIT ME — "
  },

  "ndot-01": {
    section: "Nevada Department of Transportation",
    sectionLink: "projects.html#ndot",
    title: "Barrier & Guard Rail Replacement",
    image: "images/ndot-01.jpg",
    tags: ["QA/QC", "Materials Testing", "Infrastructure"],
    summary: "NDOT project supporting barrier and guard rail replacement on state highways — field inspection, materials testing, and structural verification. QA/QC oversight on installation and compliance.",
    overview: "EDIT ME — ",
    approach: "EDIT ME — ",
    results: "EDIT ME — ",
    reflection: "EDIT ME — "
  },

  "ndot-02": {
    section: "Nevada Department of Transportation",
    sectionLink: "projects.html#ndot",
    title: "Culvert Headwall",
    image: "images/ndot-02.jpg",
    tags: ["Drainage Systems", "Structural Design", "Field Work"],
    summary: "Infrastructure project involving culvert headwall construction and rehabilitation — field documentation, material validation, and structural systems assessment for drainage systems.",
    overview: "EDIT ME —",
    approach: "EDIT ME —",
    results: "EDIT ME — ",
    reflection: "EDIT ME — "
  },

  "ndot-03": {
    section: "Nevada Department of Transportation",
    sectionLink: "projects.html#ndot",
    title: "Turtle Protective Fencing",
    image: "images/ndot-03.jpg",
    tags: ["Environmental Design", "Infrastructure", "Field Testing"],
    summary: "Environmental mitigation project designing and implementing protective fencing systems for wildlife crossing. Included structural analysis and field installation oversight.",
    overview: "EDIT ME — ",
    approach: "EDIT ME — ",
    results: "EDIT ME — ",
    reflection: "EDIT ME — "
  },

  "ndot-04": {
    section: "Nevada Department of Transportation",
    sectionLink: "projects.html#ndot",
    title: "Drainage & Pavement Systems",
    image: "images/ndot-04.jpg",
    tags: ["Pavement Design", "Drainage", "QA/QC Testing"],
    summary: "Comprehensive project on highway drainage and pavement systems — material properties evaluation, quality control testing, and installation verification for resilient infrastructure.",
    overview: "EDIT ME — ",
    approach: "EDIT ME — ",
    results: "EDIT ME — ",
    reflection: "EDIT ME — "
  },

  "ndot-05": {
    section: "Nevada Department of Transportation",
    sectionLink: "projects.html#ndot",
    title: "Surveying Land",
    image: "images/ndot-05.jpg",
    tags: ["Surveying", "Site Assessment", "Geomatics"],
    summary: "Land surveying and site assessment work for NDOT projects — topographical analysis, boundary verification, and baseline documentation for infrastructure design and planning.",
    overview: "EDIT ME — ",
    approach: "EDIT ME — ",
    results: "EDIT ME — ",
    reflection: "EDIT ME — "
  },

  "bu-01": {
    section: "Boston University",
    sectionLink: "projects.html#bu",
    title: "Autonomous Desk Cleaning Robot",
    image: "images/bu-01.jpg",
    tags: ["Robotics", "Automation", "Mechanical Design"],
    summary: "Design and construction of an autonomous robotic system for desk surface cleaning — includes mechanical design, control systems, and obstacle avoidance algorithms.",
    overview: "EDIT ME — ",
    approach: "EDIT ME — ",
    results: "EDIT ME — ",
    reflection: "EDIT ME — "
  },

  "bu-02": {
    section: "Boston University",
    sectionLink: "projects.html#bu",
    title: "Room Temperature Sensor",
    image: "images/bu-02.jpg",
    tags: ["Sensors", "Data Acquisition", "Control Systems"],
    summary: "Development of an integrated temperature sensing and monitoring system — includes sensor selection, calibration, data acquisition, and analysis for HVAC applications.",
    overview: "EDIT ME —",
    approach: "EDIT ME — ",
    results: "EDIT ME — ",
    reflection: "EDIT ME — "
  },

  "bu-03": {
    section: "Boston University",
    sectionLink: "projects.html#bu",
    title: "Acrylic Truss",
    image: "images/bu-03.jpg",
    tags: ["Structural Design", "FEA", "Materials Testing"],
    summary: "Structural analysis and construction of an acrylic truss system — finite element analysis, load testing, material property evaluation, and failure mode analysis.",
    overview: "EDIT ME — ",
    approach: "EDIT ME — ",
    results: "EDIT ME — ",
    reflection: "EDIT ME — "
  },

  "bu-04": {
    section: "Boston University",
    sectionLink: "projects.html#bu",
    title: "Hybrid Introduction Project",
    image: "images/bu-04.jpg",
    tags: ["Energy Systems", "Hybrid Power", "Integration"],
    summary: "Interdisciplinary capstone project exploring hybrid energy systems integration — combines mechanical, electrical, and thermal engineering principles for sustainable energy solutions.",
    overview: "EDIT ME — ",
    approach: "EDIT ME — ",
    results: "EDIT ME —",
    reflection: "EDIT ME —"
  },

  "bu-05": {
    section: "Boston University",
    sectionLink: "projects.html#bu",
    title: "Argo Rocket Fluids & Structures",
    image: "images/bu-05.jpg",
    tags: ["Aerospace", "Fluids", "Propulsion"],
    summary: "Advanced project for rocket propulsion systems — analysis of fluid dynamics in rocket engines, structural integrity under extreme conditions, and thermal management solutions.",
    overview: "EDIT ME —",
    approach: "EDIT ME —",
    results: "EDIT ME — ",
    reflection: "EDIT ME — "
  },

  "bu-06": {
    section: "Boston University",
    sectionLink: "projects.html#bu",
    title: "Salazar Water Improvement",
    image: "images/bu-06.jpg",
    tags: ["Water Systems", "Environmental", "Sustainability"],
    summary: "Water systems improvement project focused on municipal water treatment and distribution — engineering design for enhanced efficiency, sustainability, and water quality assurance.",
    overview: "EDIT ME —",
    approach: "EDIT ME —",
    results: "EDIT ME — ",
    reflection: "EDIT ME — "
  },

  "bu-07": {
    section: "Boston University",
    sectionLink: "projects.html#bu",
    title: "Mancheren Grande Water Improvement",
    image: "images/bu-07.jpg",
    tags: ["Infrastructure", "Water Resources", "Civil Engineering"],
    summary: "Large-scale water infrastructure improvement initiative — comprehensive engineering analysis and design for water resource management, treatment systems, and community impact assessment.",
    overview: "EDIT ME — ",
    approach: "EDIT ME — ",
    results: "EDIT ME -",
    reflection: "EDIT ME — "
  }

};
