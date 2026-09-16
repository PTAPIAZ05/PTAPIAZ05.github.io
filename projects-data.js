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
    overview: "EDIT ME — the problem this project addressed and why it mattered.",
    approach: "EDIT ME — the method, tools, or standards used (e.g. modeling software, control algorithm, test setup).",
    results: "EDIT ME — the headline result, ideally quantified (efficiency gain, error reduction, cost impact).",
    reflection: "EDIT ME — what you'd improve or do differently next time."
  },

  "research-02": {
    section: "Formal Research",
    sectionLink: "projects.html#research",
    title: "Hybrid Battery-Supercapacitor HVAC Emulator",
    image: "images/research-02.jpg",
    tags: ["Energy Storage", "HVAC Systems"],
    summary: "Development and testing of a hybrid energy storage system emulator for HVAC applications. Combines battery and supercapacitor technologies for improved efficiency and performance.",
    overview: "EDIT ME — the problem this project addressed and why it mattered.",
    approach: "EDIT ME — the method, tools, or standards used.",
    results: "EDIT ME — the headline result, ideally quantified.",
    reflection: "EDIT ME — what you'd improve or do differently next time."
  },

  "ndot-01": {
    section: "Nevada Department of Transportation",
    sectionLink: "projects.html#ndot",
    title: "Barrier & Guard Rail Replacement",
    image: "images/ndot-01.jpg",
    tags: ["QA/QC", "Materials Testing", "Infrastructure"],
    summary: "NDOT project supporting barrier and guard rail replacement on state highways — field inspection, materials testing, and structural verification. QA/QC oversight on installation and compliance.",
    overview: "EDIT ME — scope of the replacement, location, and why it was needed.",
    approach: "EDIT ME — inspection methods, standards followed (AASHTO/ASTM), and your specific role.",
    results: "EDIT ME — outcome of the QA/QC process, compliance results, any quantified findings.",
    reflection: "EDIT ME — a lesson learned or improvement you'd suggest."
  },

  "ndot-02": {
    section: "Nevada Department of Transportation",
    sectionLink: "projects.html#ndot",
    title: "Culvert Headwall",
    image: "images/ndot-02.jpg",
    tags: ["Drainage Systems", "Structural Design", "Field Work"],
    summary: "Infrastructure project involving culvert headwall construction and rehabilitation — field documentation, material validation, and structural systems assessment for drainage systems.",
    overview: "EDIT ME — the drainage problem the headwall addressed.",
    approach: "EDIT ME — documentation and validation methods used on site.",
    results: "EDIT ME — the outcome of the assessment or rehabilitation.",
    reflection: "EDIT ME — a lesson learned or improvement you'd suggest."
  },

  "ndot-03": {
    section: "Nevada Department of Transportation",
    sectionLink: "projects.html#ndot",
    title: "Turtle Protective Fencing",
    image: "images/ndot-03.jpg",
    tags: ["Environmental Design", "Infrastructure", "Field Testing"],
    summary: "Environmental mitigation project designing and implementing protective fencing systems for wildlife crossing. Included structural analysis and field installation oversight.",
    overview: "EDIT ME — the environmental concern driving this project.",
    approach: "EDIT ME — the structural analysis and installation process.",
    results: "EDIT ME — installation outcome and any monitoring results.",
    reflection: "EDIT ME — a lesson learned or improvement you'd suggest."
  },

  "ndot-04": {
    section: "Nevada Department of Transportation",
    sectionLink: "projects.html#ndot",
    title: "Drainage & Pavement Systems",
    image: "images/ndot-04.jpg",
    tags: ["Pavement Design", "Drainage", "QA/QC Testing"],
    summary: "Comprehensive project on highway drainage and pavement systems — material properties evaluation, quality control testing, and installation verification for resilient infrastructure.",
    overview: "EDIT ME — scope of the drainage/pavement work.",
    approach: "EDIT ME — testing methods and standards used.",
    results: "EDIT ME — QA/QC outcomes, quantified where possible.",
    reflection: "EDIT ME — a lesson learned or improvement you'd suggest."
  },

  "ndot-05": {
    section: "Nevada Department of Transportation",
    sectionLink: "projects.html#ndot",
    title: "Surveying Land",
    image: "images/ndot-05.jpg",
    tags: ["Surveying", "Site Assessment", "Geomatics"],
    summary: "Land surveying and site assessment work for NDOT projects — topographical analysis, boundary verification, and baseline documentation for infrastructure design and planning.",
    overview: "EDIT ME — purpose of the survey and site context.",
    approach: "EDIT ME — surveying equipment/methods used.",
    results: "EDIT ME — deliverables produced and how they were used downstream.",
    reflection: "EDIT ME — a lesson learned or improvement you'd suggest."
  },

  "bu-01": {
    section: "Boston University",
    sectionLink: "projects.html#bu",
    title: "Autonomous Desk Cleaning Robot",
    image: "images/bu-01.jpg",
    tags: ["Robotics", "Automation", "Mechanical Design"],
    summary: "Design and construction of an autonomous robotic system for desk surface cleaning — includes mechanical design, control systems, and obstacle avoidance algorithms.",
    overview: "EDIT ME — the course/context and design brief.",
    approach: "EDIT ME — mechanical design choices, sensors, control logic.",
    results: "EDIT ME — how well it performed, any test data.",
    reflection: "EDIT ME — what you'd redesign next time."
  },

  "bu-02": {
    section: "Boston University",
    sectionLink: "projects.html#bu",
    title: "Room Temperature Sensor",
    image: "images/bu-02.jpg",
    tags: ["Sensors", "Data Acquisition", "Control Systems"],
    summary: "Development of an integrated temperature sensing and monitoring system — includes sensor selection, calibration, data acquisition, and analysis for HVAC applications.",
    overview: "EDIT ME — the course/context and design brief.",
    approach: "EDIT ME — sensor choice, calibration method, data pipeline.",
    results: "EDIT ME — accuracy achieved, any comparison to spec.",
    reflection: "EDIT ME — what you'd redesign next time."
  },

  "bu-03": {
    section: "Boston University",
    sectionLink: "projects.html#bu",
    title: "Acrylic Truss",
    image: "images/bu-03.jpg",
    tags: ["Structural Design", "FEA", "Materials Testing"],
    summary: "Structural analysis and construction of an acrylic truss system — finite element analysis, load testing, material property evaluation, and failure mode analysis.",
    overview: "EDIT ME — the course/context and design brief.",
    approach: "EDIT ME — FEA software used, load testing setup.",
    results: "EDIT ME — load capacity achieved vs. predicted, failure mode observed.",
    reflection: "EDIT ME — what you'd redesign next time."
  },

  "bu-04": {
    section: "Boston University",
    sectionLink: "projects.html#bu",
    title: "Hybrid Introduction Project",
    image: "images/bu-04.jpg",
    tags: ["Energy Systems", "Hybrid Power", "Integration"],
    summary: "Interdisciplinary capstone project exploring hybrid energy systems integration — combines mechanical, electrical, and thermal engineering principles for sustainable energy solutions.",
    overview: "EDIT ME — the course/context and design brief.",
    approach: "EDIT ME — how the mechanical/electrical/thermal pieces were integrated.",
    results: "EDIT ME — system performance achieved.",
    reflection: "EDIT ME — what you'd redesign next time."
  },

  "bu-05": {
    section: "Boston University",
    sectionLink: "projects.html#bu",
    title: "Argo Rocket Fluids & Structures",
    image: "images/bu-05.jpg",
    tags: ["Aerospace", "Fluids", "Propulsion"],
    summary: "Advanced project for rocket propulsion systems — analysis of fluid dynamics in rocket engines, structural integrity under extreme conditions, and thermal management solutions.",
    overview: "EDIT ME — the course/context and design brief.",
    approach: "EDIT ME — the fluid/structural analysis tools and methods used.",
    results: "EDIT ME — key findings from the analysis.",
    reflection: "EDIT ME — what you'd redesign next time."
  },

  "bu-06": {
    section: "Boston University",
    sectionLink: "projects.html#bu",
    title: "Salazar Water Improvement",
    image: "images/bu-06.jpg",
    tags: ["Water Systems", "Environmental", "Sustainability"],
    summary: "Water systems improvement project focused on municipal water treatment and distribution — engineering design for enhanced efficiency, sustainability, and water quality assurance.",
    overview: "EDIT ME — the community/context and problem addressed.",
    approach: "EDIT ME — design methodology and standards followed.",
    results: "EDIT ME — projected or measured improvement.",
    reflection: "EDIT ME — what you'd redesign next time."
  },

  "bu-07": {
    section: "Boston University",
    sectionLink: "projects.html#bu",
    title: "Mancheren Grande Water Improvement",
    image: "images/bu-07.jpg",
    tags: ["Infrastructure", "Water Resources", "Civil Engineering"],
    summary: "Large-scale water infrastructure improvement initiative — comprehensive engineering analysis and design for water resource management, treatment systems, and community impact assessment.",
    overview: "EDIT ME — the community/context and problem addressed.",
    approach: "EDIT ME — design methodology and standards followed.",
    results: "EDIT ME — projected or measured improvement.",
    reflection: "EDIT ME — what you'd redesign next time."
  }

};
