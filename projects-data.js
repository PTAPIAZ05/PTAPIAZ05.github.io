/* =======================================================
   Pedro — Engineering Portfolio
   Project data — single source of truth for the projects
   listing and the project detail template.

   Photos & videos: each project has a thumbnail (image) and an
   optional gallery (media). See README.txt for how to name uploads.

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
    imageCaption: "Sun Monitor Placement on Solar Panel",
    tags: ["Renewable Energy", "Sensors & Embedded Systems", "MATLAB", "Optimization"],
    summary: "A low-cost sensor that measures heliostat mirror angles for utility-scale solar fields.",
    overview: "Designed and fabricated a low-cost, effective surface-angle measurement sensor for heliostat mirror optimization, targeting accuracy and field deployment at utility-scale solar installations.",
    approach: "Developed a Sun Monitor that integrated a microprocessor, dual linear array cameras, ZigBee communication, and an SD card for data storage. Units were deployed at Ivanpah Solar Facility, and the collected data was processed in MATLAB with an offset-correction algorithm to compensate for gravitational and wind-induced drift.",
    results: "Delivered a sensor that was 18% lighter than commercial equivalents at a fraction of the market cost. Achieved 96% data accuracy post-correction, enabling reliable heliostat alignment feedback.",
    media: [
      { type: "image", src: "images/gallery/research-01-1.jpg", thumb: "images/gallery/research-01-1-sm.jpg", caption: "In-Hand Image of Sun Monitor" }
    ]
  },

  "research-02": {
    section: "Formal Research",
    sectionLink: "projects.html#research",
    title: "Hybrid Battery-Supercapacitor HVAC Emulator",
    image: "images/research-02.jpg",
    tags: ["Renewable Energy", "Simulation & Modeling", "Testing & Validation"],
    summary: "A lab-scale battery-supercapacitor platform for testing building energy strategies at lower cost.",
    overview: "Developed a low-cost emulation platform for testing commercial building energy management strategies with a battery-supercapacitor system to reduce energy cost.",
    approach: "Assisted in the design and set-up of a PV-Battery-Load emulator using a dual-battery looping configuration and supercapacitors to replicate HVAC transient power demands. This enabled repeatable lab-scale testing without physical HVAC infrastructure.",
    results: "Achieved a 37% reduction in platform cost versus commercial measurement systems by eliminating active energy consumption, with continued development targeting measurement accuracy improvements.",
    media: []
  },

  "ndot-01": {
    section: "Nevada Department of Transportation",
    sectionLink: "projects.html#ndot",
    title: "Barrier & Guard Rail Replacement",
    image: "images/ndot-01.jpg",
    tags: ["QA/QC Inspection", "Materials Testing", "Structures", "Infrastructure"],
    summary: "QA inspections of guard and barrier rail replacement along U.S. 95 in Clark County.",
    overview: "Performed quality assurance inspections on guard and barrier rail replacement along U.S. Highway 95, a federal corridor serving commuter and freight traffic in Clark County, Nevada.",
    approach: "Conducted field inspections verifying guard rail flare rate, deflection distance, post spacing, and structural alignment against NDoT’s specifications. Performed material compliance checks by confirming the correct galvanized steel beams were used, concrete mix design, soil compaction, and Buy America compliance on federally funded infrastructure.",
    results: "Verified full installation and compliance across barrier and guard rail systems on an active 20-mile federal highway. Contributed to public safety on one of Southern Nevada’s primary transportation corridors.",
    media: []
  },

  "ndot-02": {
    section: "Nevada Department of Transportation",
    sectionLink: "projects.html#ndot",
    title: "Culvert Headwall Replacement",
    image: "images/ndot-02.jpg",
    tags: ["QA/QC Inspection", "Materials Testing", "Structures", "Water & Drainage"],
    summary: "QA inspections of a culvert headwall rebuilt to control stormwater and stabilize terrain.",
    overview: "Performed quality assurance inspections on a culvert headwall replacement designed to manage stormwater drainage and stabilize adjacent terrain along an active highway corridor.",
    approach: "Executed field inspections across demolition, excavation, and subgrade compaction phases. Verified geotextile and geogrid bedding placement, rebar yield strength, and formwork alignment against contract plans. Conducted concrete QA testing including slump, air content, and temperature checks, along with casting compressive strength cylinders for lab analysis.",
    results: "Validated structural and material compliance across all construction phases to ensure the replacement headwall met load-bearing and drainage performance requirements for long-term infrastructure integrity.",
    media: [
      { type: "image", src: "images/gallery/ndot-02-1.jpg", thumb: "images/gallery/ndot-02-1-sm.jpg", caption: "Bedding Material Being Placed" },
      { type: "image", src: "images/gallery/ndot-02-2.jpg", thumb: "images/gallery/ndot-02-2-sm.jpg", caption: "Footing Being Placed" },
      { type: "image", src: "images/gallery/ndot-02-3.jpg", thumb: "images/gallery/ndot-02-3-sm.jpg", caption: "Rebar Being Tested for Culvert" },
      { type: "image", src: "images/gallery/ndot-02-4.jpg", thumb: "images/gallery/ndot-02-4-sm.jpg", caption: "Humid Room to Test Cured Concrete from Culvert" }
    ]
  },

  "ndot-03": {
    section: "Nevada Department of Transportation",
    sectionLink: "projects.html#ndot",
    title: "Protective Tortoise Fencing & Drainage Systems",
    image: "images/ndot-03.jpg",
    imageCaption: "Roadway Asphalt Being Tested",
    tags: ["QA/QC Inspection", "Infrastructure", "Water & Drainage", "Sustainability"],
    summary: "Tortoise fencing QA and 13 culverts converted into wildlife crossings across 36 miles of U.S. 95.",
    overview: "Performed quality assurance inspections on tortoise fencing replacement and oversaw the conversion of 13 culverts into wildlife crossings across 36 miles of U.S. Highway 95, alongside hydraulic and drainage system improvements.",
    approach: "Inspected tortoise fencing replacement by verifying mesh size, post depth, and post spacing against NDoT’s specifications across the full 36-mile corridor. Conducted culvert inspections to identify structural cracks and repaired them with NDoT-approved epoxy. Oversaw geotextile bedding placement, soil compaction, and rip-rap installation for erosion control and stormwater diversion.",
    results: "Verified fencing and drainage compliance across a federal highway corridor, ensuring the structural integrity of 13 wildlife crossings and long-term roadway performance through material-compliant repairs and erosion control measures.",
    media: [
      { type: "image", src: "images/gallery/ndot-03-1.jpg", thumb: "images/gallery/ndot-03-1-sm.jpg", caption: "Tortoise On-Site" },
      { type: "video", src: "images/gallery/ndot-03-2.mp4", thumb: "images/gallery/ndot-03-2-sm.jpg", caption: "Soil Being Tested for Plasticity and Compaction", poster: "images/gallery/ndot-03-2-poster.jpg", duration: 10 }
    ]
  },

  "bu-01": {
    section: "Boston University",
    sectionLink: "projects.html#bu",
    title: "Autonomous Desk Cleaning Robot",
    image: "images/bu-01.jpg",
    tags: ["Sensors & Embedded Systems", "CAD", "Prototyping & Fabrication", "Testing & Validation"],
    summary: "A hands-free robot that clears debris from a 4×4 ft desk in under two minutes.",
    overview: "Planned and constructed an autonomous desk cleaning robot capable of clearing a 4×4 ft surface of debris, rice grains, and paper scraps, without user contact, in under two minutes.",
    approach: "Integrated ultrasonic sensors programmed for 1-inch edge detection and gesture-based activation. Built a centrifugal blower system with a funnel-to-hose attachment that sucks up debris and leads it into a disposal chamber. Designed a three-wheel drivetrain using dual TT DC motors and a ball caster for stable omnidirectional movement. The housing was modeled in SOLIDWORKS and fabricated through 3D printing and waterjet-cut aluminum.",
    results: "Completed full desk cleaning operations in less than the required 2-minute target while successfully collecting rice grains and fine debris, with consistent pickup performance across multiple tests.",
    media: [
      { type: "image", src: "images/gallery/bu-01-1.jpg", thumb: "images/gallery/bu-01-1-sm.jpg", caption: "CAD Model of Funnel for Hose" },
      { type: "image", src: "images/gallery/bu-01-2.jpg", thumb: "images/gallery/bu-01-2-sm.jpg", caption: "CAD Model of Trash Disposal" },
      { type: "video", src: "images/gallery/bu-01-3.mp4", thumb: "images/gallery/bu-01-3-sm.jpg", caption: "Our Deskinator", poster: "images/gallery/bu-01-3-poster.jpg", duration: 8 },
      { type: "image", src: "images/gallery/bu-01-4.jpg", thumb: "images/gallery/bu-01-4-sm.jpg", caption: "Water-Jet Cut Housing" },
      { type: "video", src: "images/gallery/bu-01-5.mp4", thumb: "images/gallery/bu-01-5-sm.jpg", caption: "Water-Jet Performing", poster: "images/gallery/bu-01-5-poster.jpg", duration: 8 },
      { type: "image", src: "images/gallery/bu-01-6.jpg", thumb: "images/gallery/bu-01-6-sm.jpg", caption: "Electronic Schematic" }
    ]
  },

  "bu-02": {
    section: "Boston University",
    sectionLink: "projects.html#bu",
    title: "Room Temperature Sensor",
    image: "images/bu-02.jpg",
    tags: ["Sensors & Embedded Systems", "CAD", "Prototyping & Fabrication"],
    summary: "A handheld, low-power temperature monitor with a display and adjustable alarm.",
    overview: "Designed and fabricated a handheld room temperature sensor with an integrated display and configurable alarm system as a low-power alternative to traditional thermostat-based monitoring.",
    approach: "Modeled enclosure components in Onshape and produced them via 3D printing. Programmed an Arduino Uno to handle sensor output, display input, and threshold-based alarm triggering. Designed a custom battery holder to optimize internal component layout and reduce overall inner housing volume.",
    results: "Achieved 98% temperature accuracy within ±0.01°F, operating at 9V compared to the traditional 24V demand of thermostats. Delivered a fully functional handheld prototype with configurable alarm thresholds and an optimized layout.",
    media: [
      { type: "image", src: "images/gallery/bu-02-1.jpg", thumb: "images/gallery/bu-02-1-sm.jpg", caption: "Inside of the Room Temperature Sensor" }
    ]
  },

  "bu-03": {
    section: "Boston University",
    sectionLink: "projects.html#bu",
    title: "Acrylic Truss",
    image: "images/bu-03.jpg",
    tags: ["MATLAB", "Structures", "Optimization", "Testing & Validation"],
    summary: "An acrylic truss designed for maximum load within tight size and material limits.",
    overview: "Conceived and built a constrained acrylic truss optimized for maximum load-bearing capacity within strict geometric and material specifications.",
    approach: "Developed a MATLAB analysis tool to evaluate multiple truss configurations, computing member forces, tension/compression states, critical member identification, and buckling risk. Iteratively refined the truss geometry using the code output to maximize structural efficiency before fabrication.",
    results: "Exceeded the 2 lb load requirement by 35%, sustaining 2.7 lb for 120 seconds before buckling, which demonstrated effective structural optimization through computational analysis prior to physical testing.",
    media: []
  },

  "bu-04": {
    section: "Boston University",
    sectionLink: "projects.html#bu",
    title: "Rocket Nozzle",
    image: "images/bu-04.jpg",
    tags: ["CAD", "Simulation & Modeling", "Structures", "Testing & Validation"],
    summary: "A bell nozzle designed and stress-tested for operation at 10,000 ft.",
    overview: "Analyzed and designed a bell nozzle optimized for theoretical operation at 10,000 ft altitude, applying rocket propulsion principles to geometry selection, structural validation, and performance optimization.",
    approach: "Selected a bell nozzle configuration based on comparative propulsion research and optimized the contour to 60% for thrust efficiency. Developed a full CAD model in SOLIDWORKS and ran a Finite Element Analysis to identify stress concentrations and structural deformations under high-altitude pressure conditions.",
    results: "The nozzle sustained over 45 Newtons of gas pressure without significant deformation, validated through FEA simulation and a physical static fire test. This confirmed structural integrity and performance viability at target conditions.",
    media: [
      { type: "video", src: "images/gallery/bu-04-1.mp4", thumb: "images/gallery/bu-04-1-sm.jpg", caption: "Static Fire", poster: "images/gallery/bu-04-1-poster.jpg", duration: 8 },
      { type: "image", src: "images/gallery/bu-04-2.jpg", thumb: "images/gallery/bu-04-2-sm.jpg", caption: "CAD Model of Nozzle" },
      { type: "image", src: "images/gallery/bu-04-3.jpg", thumb: "images/gallery/bu-04-3-sm.jpg", caption: "Preparing for Static Fire" }
    ]
  },

  "bu-05": {
    section: "Boston University",
    sectionLink: "projects.html#bu",
    title: "Central American Rural Community Water System Improvement Project",
    image: "images/bu-05.jpg",
    tags: ["Infrastructure", "Water & Drainage", "Simulation & Modeling", "Sustainability"],
    summary: "Clean water systems bringing in-home water to 400+ residents in Honduras and Guatemala.",
    overview: "Designed and delivered clean water distribution systems for rural communities in Honduras (2025) and Guatemala (2026), providing over 400 residents with reliable in-home water access for the first time.",
    approach: "Conducted GPS-based geological and household surveys to map the community layout and resident density. Modeled the full water distribution network in EPANET, running pressure and flow rate simulations to determine optimal tank placement and pipe sizing. Performed sanitary and technical surveys to assess broader community water needs and inform system design constraints.",
    results: "Delivered a design that accounted for elevation-driven pressure variation through strategic pipe diameter and material selection across terrain types. Optimized the system’s efficiency while minimizing project cost for the community.",
    media: [
      { type: "image", src: "images/gallery/bu-05-1.jpg", thumb: "images/gallery/bu-05-1-sm.jpg", caption: "Presentation of the Proposed Water System" },
      { type: "image", src: "images/gallery/bu-05-2.jpg", thumb: "images/gallery/bu-05-2-sm.jpg", caption: "On-Foot Geological Surveying" },
      { type: "image", src: "images/gallery/bu-05-3.jpg", thumb: "images/gallery/bu-05-3-sm.jpg", caption: "BU Students Presenting Project" },
      { type: "image", src: "images/gallery/bu-05-4.jpg", thumb: "images/gallery/bu-05-4-sm.jpg", caption: "Proposed Piping System" },
      { type: "image", src: "images/gallery/bu-05-5.jpg", thumb: "images/gallery/bu-05-5-sm.jpg", caption: "Presentation Rehearsal" }
    ]
  }

};
