export type NavLink = {
  name: string;
  href: string;
};

export type Publication = {
  title: string;
  authors: string;
  journal: string;
  year: string;
  citation?: string;
  link: string;
};

export type Registry = {
  name: string;
  purpose: string;
  status: string;
  collaborators: string;
};

export type ConferencePresentation = {
  title: string;
  authors: string;
};

export type ConferenceEvent = {
  slug: string;
  name: string;
  year: string;
  location: string;
  image: string;
  galleryImages: {
    src: string;
    alt: string;
  }[];
  presentations: ConferencePresentation[];
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
  photoType?: "headshot" | "placeholder";
  interests?: string;
};

export type TeamGroup = {
  name: string;
  members: TeamMember[];
};

export const navLinks: NavLink[] = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Team", href: "#team" },
  { name: "Connect", href: "#connect" }
];

export const publicationPreviewCount = 3;
export const conferencePreviewCount = 3;

export const conferenceAwards = [
  {
    conference:
      "Society For Neuro-Oncology Sub-Saharan Africa Annual Scientific Meeting",
    year: "2025",
    amount: "$2,000",
    awardees: ["Bernice Limann", "Emmanuel Osei Adjei"]
  },
  {
    conference:
      "Internal Society of Pediatric Neurosurgeons Annual Scientific Meeting",
    year: "2025",
    amount: "$7,000",
    awardees: [
      "Bernice Limann",
      "Emmanuel Osei Adjei",
      "Mildred Marfo",
      "Maame Duodua",
      "Kwadwo Darko"
    ]
  }
] as const;

export const aboutContent = {
  heading: "About GNNet Research",
  heroText:
    "Advancing research, collaboration, and discovery in neurosurgery and related fields.",
  bodyCopy:
    "GNNet Research is a collaborative research group focused on improving patient care through clinical research, data-driven investigation, and multidisciplinary teamwork. Our group develops projects that span publications, patient registries, and academic conference presentations. We aim to generate meaningful evidence, support innovation, and build a strong network of investigators, trainees, and clinical collaborators.",
  mission: {
    title: "Our Mission",
    copy:
      "Our mission is to build high-quality research programs that improve outcomes, support scientific discovery, and create opportunities for collaboration and capacity building."
  },
  impact: {
    title: "Why It Matters",
    copy:
      "Our work integrates clinical experience with evidence, seeks to advances patient-centered care and advocacy, and extends the impact of research through publication, presentation, and collaboration. We are equally committed to mentorship and early capacity building."
  }
};

export const publications: Publication[] = [
  {
    title:
      "Mixed cerebral epidural abscess and epidural hematoma in an adolescent male: an illustrative case report",
    authors:
      "Adatare DN, Kraemer F, Agyeman MA, Agbemavi-Kudiafia LA, Tenkorang PO, Patel K, Adjei Osei EK, Awindaogo JK, Darko K, Ametefe M.",
    journal: "Annals of Medicine and Surgery (London)",
    year: "2025",
    citation:
      "2025 May 30;87(7):4597-4601. doi: 10.1097/MS9.0000000000003374.",
    link: "https://doi.org/10.1097/MS9.0000000000003374"
  },
  {
    title:
      "A retrospective outpatient department-based study of the pattern of first-visit pediatric neurosurgical disorders: a 6-year single-center experience in Ghana",
    authors:
      "Darko K, Limann B, Haizel-Cobbina J, Banson M, Bankah P.",
    journal: "Child's Nervous System",
    year: "2025",
    citation:
      "2025 Apr 15;41(1):158. doi: 10.1007/s00381-025-06800-w.",
    link: "https://doi.org/10.1007/s00381-025-06800-w"
  },
  {
    title:
      "Epilepsy Surgery for Drug-Resistant Epilepsy in Africa: A Systematic Review",
    authors:
      "Darko K, Tenkorang PO, Asiedu O, Yevudza WE Jr, Issah S, Dzantor E, Tahiru M, Wireko AA, O'Leary S, Barrie U, Weiss H, Totimeh T, Banson M.",
    journal: "Neurosurgery",
    year: "2025",
    citation:
      "2025 Apr 1;96(4):704-712. doi: 10.1227/neu.0000000000003307.",
    link: "https://doi.org/10.1227/neu.0000000000003307"
  },
  {
    title:
      "Management of pediatric quadrigeminal arachnoid cysts: a systematic review and illustrative case report",
    authors:
      "Osei EKA, Darko K, Tenkorang P, Boateng MAD, Sekyere NABO, Limann B, Ogunfolaji O, O'Leary S, Barrie U, Totimeh T.",
    journal: "Child's Nervous System",
    year: "2025",
    citation:
      "2025 Mar 22;41(1):137. doi: 10.1007/s00381-025-06796-3.",
    link: "https://doi.org/10.1007/s00381-025-06796-3"
  },
  {
    title:
      "Readmission patterns and 6-month outcomes in patients with spontaneous intracerebral hematoma: a single centre retrospective analysis in Ghana",
    authors:
      "Tenkorang PO, Asiedu O, Annan AS, Darko K, Osei EKA, Totimeh T.",
    journal: "Neurosurgical Review",
    year: "2025",
    citation:
      "2025 Mar 7;48(1):287. doi: 10.1007/s10143-025-03438-9.",
    link: "https://doi.org/10.1007/s10143-025-03438-9"
  },
  {
    title:
      "Primary intraventricular brain abscess: a systematic review of risk factors, etiology, and management",
    authors:
      "Darko K, Aydin S, O'Leary S, Achempim-Ansong P, Darko N, Ju R, Barrie U.",
    journal: "Egyptian Journal of Neurosurgery",
    year: "2025",
    citation:
      "Egypt J Neurosurg 40, 101 (2025). doi: 10.1186/s41984-025-00446-1.",
    link: "https://doi.org/10.1186/s41984-025-00446-1"
  }
];

export const registries: Registry[] = [
  {
    name: "GNNet Brain Tumor Outcomes Registry",
    purpose:
      "A multi-center registry tracking surgical outcomes and long-term functional recovery in patients undergoing brain tumor resection.",
    status: "Active",
    collaborators: "5 institutions across the United States"
  },
  {
    name: "Spine Outcomes Collaborative Database",
    purpose:
      "A registry designed to evaluate clinical and radiographic outcomes following complex spine surgery.",
    status: "Enrollment Ongoing",
    collaborators: "3 academic centers"
  },
  {
    name: "Neurotrauma Recovery Registry",
    purpose:
      "A longitudinal database assessing recovery trajectories in patients with traumatic brain injury.",
    status: "In Development",
    collaborators: "Pending IRB approval"
  }
];

export const conferenceEvents: ConferenceEvent[] = [
  {
    slug: "gans-accra-2025",
    name: "Ghana Association of Neurological Surgeons Annual Scientific Meeting",
    year: "2025",
    location: "Accra, Ghana",
    image: "/images/locations/accra-Ghana.jpg",
    galleryImages: [
      {
        src: "/images/GANS_2025.jpg",
        alt: "GNNet presentation session at the 2025 GANS meeting in Accra"
      },
      {
        src: "/images/GANS_2025_1.jpg",
        alt: "GNNet team members attending the 2025 GANS meeting in Accra"
      },
      {
        src: "/images/GANS_2025_2.jpg",
        alt: "Conference moment from the 2025 GANS meeting in Accra"
      }
    ],
    presentations: [
      {
        title:
          "Epilepsy Surgery for Drug-Resistant Epilepsy in Africa: A Systematic Review and Meta-Analysis",
        authors:
          "Olivia Asiedu, Kwadwo Darko, Pearl Tenkorang, W. Elorm Yevudza, Salim Issah, Eyako Dzantor, Marjidah Tahiru, Wireko Andrew Awuah, Sean O'Leary, Umaru Barrie, Mabel Banson"
      },
      {
        title:
          "Presentation, Management and Outcome of Traumatic Spine Injuries in Africa: A Systematic Review and Meta-Analysis",
        authors:
          "Jonathan Nuamah, Kwadwo Darko, Ishav Shukla, Taimur Hassan, Mohammad Mirahmadi Eraghi, Muhammad Ammar Haider, Mina Guirguis, Michael Farid, Peace Odiase, Umaru Barrie, Salah G. Aoun, Mabel Banson, Teddy Totimeh"
      },
      {
        title:
          "Radiotherapy and Radiosurgery for Intracranial Lesions in Africa: Insights from Three Country Case Studies - A Systematic Review",
        authors:
          "Mildred Marfo, Ishav Shukla, Jason Wang, Mina Guirguis, Kwadwo Darko, Salah G. Aoun, Umaru Barrie, Mabel Banson, Teddy Totimeh"
      },
      {
        title:
          "Comparative Outcomes of Surgical and Conservative Management of Pediatric Intracranial Cavernous Malformations: A Systematic Review and Meta-Analysis",
        authors:
          "Kwadwo Darko, Akua Anti, Takara Newsome-Cuby, Leticia Simo, Momodou G. Bah, Abigail Jenkins, Umaru Barrie, David Dadey"
      },
      {
        title:
          "Location-Specific Hematoma Volume Cutoffs as Predictors of In-Hospital Mortality in Spontaneous Intracerebral Hemorrhage in a Tertiary Hospital in Accra, Ghana: A Retrospective Analysis",
        authors:
          "Kwadwo Darko, Simon Sackitey, Prince Agyapong, Bernice Limann, Pearl Ohenewaa Tenkorang, Sean O'Leary, Emmanuel Kwadwo Adjei Osei, Umaru Barrie, Adams Fuseini, Teddy Totimeh"
      },
      {
        title:
          "Management of Pediatric Quadrigeminal Arachnoid Cysts: A Systematic Review and Illustrative Case Report",
        authors:
          "Emmanuel K. Adjei Osei, Kwadwo Darko, Pearl Tenkorang, Maame A.D. Boateng, Nana A.B.O. Sekyere, Bernice Limann, Oluruntoba Ogunfolaji, Sean O'Leary, Umaru Barrie, Teddy Totimeh"
      },
      {
        title:
          "Ghana's Initial Cerebral Aneurysm Clipping Experience: Advancing Global Neurosurgery Through the Global Brain Surgery Initiative",
        authors:
          "Teddy Totimeh, Emmanuel K. Adjei Osei, Irene Kweidjartey, Kwadwo Darko, Vincent Buckman, Ulrick Sidney Kanmounye, W. Elorm Yevudza Jr, Frederick Dogbe, Nirali Patel, Kwadwo Sarpong, Hasan R. Syed, Amjad Anaizi, Daniel R. Felbaum, Jean C. Walter"
      },
      {
        title:
          "Comparative Efficacy of Perioperative Blood Conservation Agents in Pediatric Cranial Vault Remodeling and Craniofacial Reconstruction: A Systematic Review and Network Meta-Analysis",
        authors:
          "Pearl Ohenewaa Tenkorang, Christopher C. Padilla, Michael Farid, Parker Smith, Kwadwo Darko, Sean O'Leary, Bennett Levy, Umaru Barrie, Hammad Khan, Salah G. Aoun, David H. Harter"
      },
      {
        title:
          "Predictors of In-Hospital Mortality in Spontaneous Intracerebral Hemorrhage in a Tertiary Hospital in Ghana: A Retrospective Analysis",
        authors:
          "Bernice Limann, Kwadwo Darko, Emmanuel Kwadwo Adjei Osei, Nina Dwumfour-Poku, Michael Farid, Samuel Benjamin Nkansah, Abdallah Tikuma Faisal, Kwesi Kyei Ofei, Joseph Danwura Tanlongo, Mina Guirguis, Pearl Ohenewaa Tenkorang, Umaru Barrie, Adams Fuseini, Teddy Totimeh"
      },
      {
        title:
          "Epidemiology, Clinical Features, Management and In-Hospital Outcomes of Spontaneous Intracerebral Hemorrhage in a Tertiary Hospital in Ghana: A Retrospective Analysis",
        authors:
          "Emmanuel Kwadwo Adjei Osei, Kwadwo Darko, Wendy Priyah Miranda, Mina Guirguis, Joseph Tanlongo, Pearl Tenkorang, Bernice Limann, Samuel Benjamin Nkansah, Nana K. Darko, Afua Timah Agyei, Umaru Barrie, Teddy Totimeh"
      },
      {
        title:
          "A Retrospective Outpatient Department Based Study of Pattern of First-Visit Pediatric Neurosurgical Disorders: A 6-Year Single Center Experience in Ghana",
        authors:
          "Percy Ansong, Kwadwo Darko, Bernice Limann, Joseline Haizel-Cobbina, Mabel Banson, Patrick Bankah"
      },
      {
        title:
          "Primary Intraventricular Brain Abscess in a Child with Congenital Cyanotic Heart Disease: A Systematic Review and Illustrative Case Report",
        authors:
          "Irene W. Kweidjartey, Gabriel Apusiyene, Emmanuel K. Adjei, Kwadwo Darko, Joseph K. Awindago, Omane A. Okrah"
      },
      {
        title:
          "Tension Pneumosella following Transsphenoidal Surgery: A Systematic Review",
        authors:
          "Lois Afia Agbemavi-Kudufia, Nicolai Blasdel, Kwadwo Darko, Michael Farid, Sean O'Leary, Rylie Ju, Mahmoud Elguindy, Umaru Barrie"
      }
    ]
  },
  {
    slug: "ispn-lyon-2025",
    name: "International Society of Pediatric Neurosurgery Annual Scientific Meeting",
    year: "2025",
    location: "Lyon, France",
    image: "/images/locations/lyon-france.jpg.webp",
    galleryImages: [
      {
        src: "/images/ISPN_France_1.jpg",
        alt: "Presentation podium at the 2025 ISPN annual meeting in Lyon"
      },
      {
        src: "/images/ISPN_France_2.png",
        alt: "Conference moment from the 2025 ISPN annual meeting in Lyon"
      },
      {
        src: "/images/ISPN_France_3.jpg",
        alt: "GNNet attendees at the 2025 ISPN annual meeting in Lyon"
      },
      {
        src: "/images/ISPN_France_4.jpg",
        alt: "Additional conference photo from the 2025 ISPN annual meeting in Lyon"
      },
      {
        src: "/images/ISPN_France_5.jpg",
        alt: "Team photo from the 2025 ISPN annual meeting in Lyon"
      }
    ],
    presentations: [
      {
        title:
          "Comparative Efficacy of Vagus Nerve Stimulation, Intracranial Neurostimulation, and Surgery for Drug-Resistant Focal Epilepsy in Pediatric Patients: A Propensity Score-Matched Multi-Institutional Cohort Study",
        authors:
          "Kwadwo Darko, Sean O'Leary, Christopher C. Padilla, Blake Perdikis, Vaughn A. Rogers, Allen Y. Fu, Michael Farid, Akua Anti, Umaru Barrie, Alon Mogilner"
      },
      {
        title:
          "Impact of Blood Product Removal versus Temporary Cerebrospinal Fluid Diversion on Permanent Shunting Rates in Intraventricular Hemorrhage of Prematurity: A Comparative Meta-Analysis",
        authors:
          "Bernice Limann, Kwadwo Darko, Anthony Ayamdooh, Olivia Asiedu, Manasseh Sampana, Clement Jubin, Joseline Haizel-Cobbina, Mabel Banson"
      },
      {
        title:
          "Factors Affecting Mortality Risk in Pediatric Head Injuries in Africa: A Meta-Analysis",
        authors:
          "Kwadwo Darko, Bernice Limann, Pearl Tenkorang, Sonia Pulido, Nina Dwumfour-Poku, Joshua O. Bonsu, Umaru Barrie, Mabel Banson, Teddy Totimeh"
      },
      {
        title:
          "Epidemiology, Clinical Characteristics and Surgical Outcomes of Myelomeningocele in Korle-Bu Teaching Hospital: A Single Centre Retrospective Study",
        authors:
          "Emmanuel Osei Adjei, Jonathan Ayeyi Nuamah, Anthony Nsobilah Ayamdooh, Ewuradjoa Dabanka, Krishi Hemant Patel, Daniel Boahene, Benjamin Amankwah, Mildred Gifty Obeyaa Marfo, Bernice Limann, Kwadwo Darko, Mabel Banson, Hadi Abdullah, Patrick Bankah"
      },
      {
        title:
          "Time Intervals in Neurosurgical Care and Their Impact on Postoperative In-Hospital Outcomes in Myelomeningocele Patients",
        authors:
          "Emmanuel Osei Adjei, Bernice Limann, Maame Duodua, Ewuradzoa Dabanka, Daniel Boahene, Jonathan Nuamah, Kwadwo Darko, Dennis Adatare, Mabel Banson, Patrick Bankah, Dodi Abdullah"
      },
      {
        title:
          "Pediatric Patients with Myelomeningocele Treated in a Low- and Middle-Income Country: What Happens After Discharge?",
        authors:
          "Kwadwo Darko, Emmanuel Osei Adjei, Anthony Ayamdoh, Denise Frantik, Maame Duodua, Amna Hussein, Mabel Banson, Hadi Abdullah, Patrick Bankah"
      }
    ]
  },
  {
    slug: "snossa-yamoussoukro-2025",
    name: "Society for Neuro-Oncology Sub-Saharan Africa Annual Scientific Meeting",
    year: "2025",
    location: "Yamoussoukro, Ivory Coast",
    image: "/images/locations/yamoussoukro-ivory-coast.jpg.webp",
    galleryImages: [
      {
        src: "/images/snossa-yamoussoukro-2025.png",
        alt: "GNNet delegates at the 2025 SNO SSA meeting in Yamoussoukro"
      },
      {
        src: "/images/SNOSSA Ivory Coast_2.jpg",
        alt: "Conference moment from the 2025 SNO SSA meeting in Yamoussoukro"
      },
      {
        src: "/images/SNOSSA Ivory Coast_3.jpg",
        alt: "GNNet attendees at the 2025 SNO SSA meeting in Yamoussoukro"
      },
      {
        src: "/images/SNOSSA Ivory Coast_4.jpg",
        alt: "Additional conference photo from the 2025 SNO SSA meeting in Yamoussoukro"
      }
    ],
    presentations: [
      {
        title:
          "Machine Learning-Driven Radiomics for Non-Invasive Primary Tumor Localization in Brain Metastases: A Proof-of-Concept Study",
        authors: "Darko K, Limann B, Farid M, Barrie U"
      },
      {
        title:
          "Pediatric Spinal Cord Tumors In Africa: A Systematic Review and Meta-Analysis",
        authors: "Darko K, Limann B, Banson M, Totimeh T"
      },
      {
        title:
          "Time to Diagnosis of Pediatric Brain Tumors: An Institutional Experience",
        authors:
          "Okrah OA, Schandorf NBE, Asiedu O, Kwofie O, Boadu KA, Akaba N, Darko Maxwell, Bankah P"
      },
      {
        title:
          "Transsphenoidal Surgery for Pituitary Lesions: A Single Center Ghanaian Case Series and Meta-Analysis of African Literature",
        authors:
          "Darko K, Narh B, Okyere Adu K, Amini N, Patel K, Sampana M, Richter RA, Tenkorang P, Adjei EKO, Banson B, Totimeh T"
      }
    ]
  },
  {
    slug: "cns-chicago-2024",
    name: "Congress of Neurological Surgeons (CNS)",
    year: "2024",
    location: "Chicago, USA",
    image: "/images/locations/chicago-usa.jpg.webp",
    galleryImages: [],
    presentations: [
      {
        title:
          "Epidemiology, Clinical Features, Management and In-Hospital Outcomes of Spontaneous Intracerebral Hemorrhage in a Tertiary Hospital in Ghana: A Retrospective Analysis",
        authors:
          "Adjei-Osei EK, Darko K, Farid M, Miranda WP, Guirguis M, Tanlongo J, Tenkorang P, Limann B, Nkansah SB, Darko NK, Agyei AT, Barrie U, Totimeh T"
      },
      {
        title:
          "Management and Outcome of Ruptured Intracranial Aneurysms in Africa: A Systematic Review and Meta-Analysis",
        authors:
          "Darko K, Simmons G, Yevudza E, Tenkorang P, Liman B, Agwu C, Sackitey S, Agyekum R, Odiase P, Guirguis M, Barrie U, Banson M, Duodo F, Totimeh T"
      },
      {
        title:
          "Presentation, Management and Outcome of Traumatic Spine Injuries in Africa",
        authors:
          "Darko K, Shukla I, Hassan T, Eraghi MM, Haider MA, Guirguis M, Farid M, Odiase P, Barrie U, Aoun SG, Banson M, Totimeh T"
      }
    ]
  },
  {
    slug: "ispn-toronto-2024",
    name: "International Society of Pediatric Neurosurgery (ISPN) Annual Meeting",
    year: "2024",
    location: "Toronto, ON, Canada",
    image: "/images/locations/toronto-canada.png",
    galleryImages: [],
    presentations: [
      {
        title:
          "Craniosynostosis in Africa: A Systematic Review and Meta-Analysis",
        authors:
          "Darko K, Pulido S, Haider MA, Sivakumar M, Limann B, Tenkorang P, Odesanya O, Odiase P, Barrie U, Braga BP, Banson M, Totimeh T"
      }
    ]
  },
  {
    slug: "snossa-nairobi-2023",
    name: "Society for Neuro-Oncology Sub-Saharan Africa Annual Scientific Meeting",
    year: "2023",
    location: "Nairobi, Kenya",
    image: "/images/locations/nairobi-kenya.jpg.webp",
    galleryImages: [],
    presentations: [
      {
        title:
          "Epidemiology of Brain and Spine Tumors - A Single Centre Descriptive Retrospective Study",
        authors: "Banson M, Siaw-Debrah F, Darko K, Ametefe M, Bankah P"
      }
    ]
  }
];

export const teamGroups: TeamGroup[] = [
  {
    name: "Leadership",
    members: [
      {
        name: "Bernice Limann",
        role: "President",
        image: "/images/Headshots/optimized/Bernice.jpg",
        photoType: "headshot",
        bio:
          "Bernice earned her medical degree at the University of Ghana Medical School. She is currently a house officer at Korle-Bu Teaching Hospital and seeks to pursue a career in neurosurgery."
      },
      {
        name: "Lois Agbemavi-Kudufia",
        role: "Vice Chair",
        image: "/images/Headshots/optimized/Lois.jpg",
        photoType: "headshot",
        bio:
          "Lois is a fifth-year medical student at the University of Ghana Medical School and Co-Chair of the Ghana Neuroscience Network. She coordinates neuroscience research initiatives and collaborates with multidisciplinary teams. She has a strong interest in neurosurgery and is actively involved in research and academic activities within the field."
      },
      {
        name: "Kwadwo Darko",
        role: "Founder and Education Co-Lead",
        image: "/images/Headshots/optimized/Kwadwo.jpg",
        photoType: "headshot",
        bio:
          "Kwadwo earned his medical degree at the University of Ghana Medical School."
      },
      {
        name: "Michael Yankey",
        role: "Statistics Lead",
        image: "/images/Headshots/optimized/Yankey.jpg",
        photoType: "headshot",
        bio:
          "Michael obtained his medical degree from the University of Ghana Medical School after previously completing his undergraduate studies. He is a master's student in biostatistics and has interests in neurosurgery and neuropathology."
      },
      {
        name: "Princess Afia Nkrumah-Boateng",
        role: "Statistics Co-Lead",
        image: "/images/Headshots/optimized/Princess.jpg",
        photoType: "headshot",
        bio:
          "Princess Afia Nkrumah-Boateng is a fifth-year medical student at the University of Ghana Medical School. She has a profound passion for neuroscience and leadership."
      },
      {
        name: "Mildred Obeyaa Marfo",
        role: "Education Lead",
        image: "/images/Headshots/optimized/Mildred.jpg",
        photoType: "headshot",
        bio:
          "Mildred earned her medical degree at the University of Development Studies. She is currently a senior house officer at Achimota Hospital in Accra, Ghana. She has a growing interest in pediatric neurosurgery and hopes to pursue formal training in the field. Her clinical and research interests are broadly centered on neurosurgery, with a focus on improving care for children. She has been involved in research exploring neurosurgical care and outcomes in Ghana. Mildred is a member of the International Society for Pediatric Neurosurgery. She is also interested in global neurosurgery and advancing access to safe and timely neurosurgical care in Ghana. Through her work, she aims to contribute to strengthening neurosurgical systems and expanding care for children in underserved communities."
      },
      {
        name: "Maame Doudua",
        role: "Research Lead",
        image: "/images/Headshots/optimized/Maame.jpg",
        photoType: "headshot",
        bio:
          "Maame earned her medical degree at the Accra College of Medicine. She is an aspiring neurosurgeon with an interest in neuroscience research, specifically functional neurosurgery. She aims to contribute to research that improves current practice and treatment outcomes."
      },
      {
        name: "Krishi Patel",
        role: "Research Co-Lead",
        image: "/images/Headshots/optimized/Krishi.jpg",
        photoType: "headshot",
        bio:
          "Krishi is a fourth-year medical student at the University of Ghana Medical School. She is curious about how the brain shapes who we are and how disease can alter that. She is also drawn to the intersection of neurology, psychology, and neuropsychology."
      },
      {
        name: "Kwaku Marfo",
        role: "Research Co-Lead",
        image: "/images/Headshots/optimized/Marfo.jpg",
        photoType: "headshot",
        bio:
          "Kwaku is a fourth-year medical student at the University of Ghana Medical School. He has a keen interest in neuroscience and its many disciplines. His goals are to one day advance neurosurgical and neurological techniques and to simplify complex concepts, making them more accessible and less abstruse."
      }
    ]
  },
  {
    name: "Faculty",
    members: [
      {
        name: "Mabel Banson",
        role: "Consultant Neurosurgeon",
        image: "/images/Headshots/Mabel.jpg",
        photoType: "headshot",
        bio:
          "Dr. Banson is Ghana's first female neurosurgeon and a consultant at Korle-Bu Teaching Hospital, where she also lectures part-time at the University of Ghana Medical School. Her practice focuses on minimally invasive and keyhole neurosurgery, as well as interventional pain management, with additional interests in neuro-oncology, pediatric neurosurgery, and neuroendoscopy. Her work emphasizes advancing neurosurgical care and training in Ghana, alongside research and mentorship in areas including neurotrauma, implant infections, and congenital conditions."
      },
      {
        name: "Patrick Bankah",
        role: "Consultant Neurosurgeon",
        image: "/images/Headshots/Bankah.jpg",
        photoType: "headshot",
        bio:
          "Dr. Bankah earned his medical degree from the University of Ghana and completed neurosurgical residency at Korle-Bu Teaching Hospital in Accra. He subsequently undertook fellowship training in pediatric neurosurgery at Johns Hopkins Hospital and now practices as a consultant neurosurgeon at Korle-Bu. He contributes to both undergraduate medical education and postgraduate neurosurgical training through the University of Ghana School of Medicine and Dentistry and the West African College of Surgeons."
      },
      {
        name: "Dodi Hadi Abdullah",
        role: "Consultant Neurosurgeon",
        image: "/images/Headshots/Dr.-Hadi-Abdullah.jpg",
        photoType: "headshot",
        bio: "Dr. Abdullah is part of the faculty team contributing to clinical care, mentorship, and neurosurgical training."
      }
    ]
  },
  {
    name: "Residents",
    members: [
      {
        name: "Emmanuel Kwadwo Osei Adjei",
        role: "Junior Neurosurgery Resident",
        image: "/images/Headshots/Emmanuel.jpg",
        photoType: "headshot",
        bio:
          "Dr. Adjei is a junior neurosurgery resident at the Neurosurgery Department of Korle-Bu Teaching Hospital. He is driven by a strong belief that quality healthcare is essential for individuals to achieve their full potential, which underpins his commitment to patient care. He is particularly interested in advocacy and preventive health strategies, and has a growing focus on the application of artificial intelligence in neuroscience, as well as efforts to study and improve healthcare systems."
      },
      {
        name: "Simon Sackitey",
        role: "Junior Neurosurgery Resident",
        image: "/images/Headshots/Simon.png",
        photoType: "headshot",
        bio: "Dr. Sackitey is a junior neurosurgery resident at the Neurosurgery Department of Korle-Bu Teaching Hospital."
      },
      {
        name: "Irene Kweidjartey",
        role: "Junior Neurosurgery Resident",
        image: "/images/placeholders/irene-kweidjartey.svg",
        photoType: "placeholder",
        bio: "Dr. Kweidjartey is a junior neurosurgery resident at the Neurosurgery Department of Korle-Bu Teaching Hospital."
      },
      {
        name: "Omane Okrah Acheampong",
        role: "Senior Neurosurgery Resident",
        image: "/images/Headshots/Omane Okrah.jpg",
        photoType: "headshot",
        bio: "Dr. Okrah is a senior neurosurgery resident at the Neurosurgery Department of Korle-Bu Teaching Hospital."
      }
    ]
  }
];

export const contactDetails = {
  institution: "",
  email: "gnnetresearch@gmail.com"
};

export const socialLinks = [
  { label: "LinkedIn placeholder", href: "#" },
  { label: "ResearchGate placeholder", href: "#" },
  { label: "Google Scholar placeholder", href: "#" }
];

export function getConferenceBySlug(slug: string) {
  return conferenceEvents.find((conference) => conference.slug === slug);
}
