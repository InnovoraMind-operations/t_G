import React, { useState } from 'react';
import { 
  Sparkles, Target, CalendarClock, Award, Users, Star, ArrowRight, 
  BrainCircuit, Globe, CheckCircle, UserCheck, FileText, BarChart, 
  Calendar, Handshake, Mail, MapPin, Laptop, Rocket, Medal, Trophy,
  GraduationCap, Lightbulb, ShieldCheck, HeartPulse, Building, 
  BookOpen, Mic, Network, HelpCircle, ChevronDown, ChevronUp, Briefcase,
  X, Cpu, Zap, Layers, Factory, Check, ExternalLink,
  Clock, Scale, ShieldAlert, Phone, Info, Shield, CheckSquare, FileCheck
} from 'lucide-react';

import emeraldPhoto from '../../assets/emerald.png';
import lmPhoto from '../../assets/LM.jpeg';
import cfPhoto from '../../assets/cf.jpeg';
import engrFortunePhoto from '../../assets/engr-fortune-onyia.jpg';
import drElalimPhoto from '../../assets/dr-elalim-mohamed.jpg';
import sulaimanPhoto from '../../assets/sulaiman-kafeero.png';
import richardPhoto from '../../assets/richard-afoakwah-nti.jpg';
import billyTraorePhoto from '../../assets/mahamadou-billy-traore.jpg';
import emmanuelPhoto from '../../assets/emmanuel-etaderhi.jpg';
import maigariPhoto from '../../assets/dr-maigari-haruna-bello.jpg';
import drSaleemPhoto from '../../assets/dr-saleem-abu-jaber.png';
import talebPhoto from '../../assets/taleb-hammad.jpg';
import tamarPhoto from '../../assets/prof-tamar-makharoblidze.jpg';
import ekaPhoto from '../../assets/prof-eka-devidze.jpg';
import carolinaPhoto from '../../assets/carolina-barandiaran.png';
import roksolanaPhoto from '../../assets/roksolana-trach.png';
import osmanPhoto from '../../assets/osman-arayici.jpg';
import bullPhoto from '../../assets/prof-alexander-bull.jpg';
import mehwishPhoto from '../../assets/dr-mehwish-rashid.png';
import nadiaPhoto from '../../assets/dr-nadia-adnan.jpg';
import mouhssinPhoto from '../../assets/mouhssin-ait-el-mouden.jpg';
import ayoubPhoto from '../../assets/dr-ayoub-regragui.jpg';
import fatimahPhoto from '../../assets/fatimah-alneel.jpg';
import girmaPhoto from '../../assets/girma-birhanu-nurie.jpg';
import piyushPhoto from '../../assets/piyush-shukla.jpg';
import sriHarshaPhoto from '../../assets/sri-harsha-pushkala.jpg';
import wiktoriaPhoto from '../../assets/wiktoria-gromowa-cieslik.jpg';
import ninoPhoto from '../../assets/nino-devidze.jpg';
import laliPhoto from '../../assets/lali-mikeladze.jpg';
import nandanSharmaPhoto from '../../assets/nandan-sharma.png';
import jacoPhoto from '../../assets/jaco-visagie.jpg';
import rehabPhoto from '../../assets/prof-rehab-hegazy.jpg';
import nachiketPhoto from '../../assets/nachiket-joshi.jpg';
import nileshPhoto from '../../assets/nilesh-charankar.jpg';
import parikshitPhoto from '../../assets/parikshit-sahagal.jpg';
import ponsankarPhoto from '../../assets/ponsankar-shanmugam.jpg';
import veeramaniPhoto from '../../assets/veeramani-sampathkumar.jpg';
import shubhPhoto from '../../assets/shubh-chandra-roy.jpg';
import mayankPhoto from '../../assets/mayank-atreya.jpg';
import muliatiPhoto from '../../assets/dr-muliati-sedek.jpg';
import dinaPhoto from '../../assets/dr-dina-alkhodary.jpg';
import amberPhoto from '../../assets/amber-rastogi.jpg';
import prathapPhoto from '../../assets/prathap-raghavan.jpg';
import rasmiPhoto from '../../assets/rasmi-ranjan-choudhury.jpg';
import arjunPhoto from '../../assets/arjun-kulshreshtha.jpg';
import suhanaPhoto from '../../assets/dr-noor-suhana.jpg';
import ganeshPhoto from '../../assets/ganesh-harke.jpeg';
import josephinePhoto from '../../assets/josephine-uwineza.png';

// Official Google Form Registration URL
const GOOGLE_FORM_URL = "https://forms.gle/eYiK9RcDKcwm5Fvt5";

const HackathonSections = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // ── Keynote & Expert Speakers ───────────────────────────────
  const speakersList = [
    {
      name: 'Engr. Fortune Chibuike Onyia (MNSE)',
      role: 'Lecturer, Civil Engineering Department & Entrepreneur',
      org: 'Federal Polytechnic Oko',
      location: 'Anambra State, Nigeria',
      displayTitle: 'Engr. Fortune Chibuike Onyia (MNSE)',
      topic: 'Sustainable Technology',
      bio: 'Engr. Fortune Chibuike Onyia (MNSE) is a Civil Engineer, lecturer, researcher, and entrepreneur with extensive experience in engineering education and practice. He has lectured in the Civil Engineering Department of Federal Polytechnic Oko, Anambra State, since 2016. His professional interests include urban hydrology, flood management, nature-based solutions, GIS applications, and sustainable infrastructure development. He is committed to advancing engineering knowledge through teaching, research, innovation, and professional practice, while contributing meaningfully to community development and the growth of the engineering profession in Nigeria.',
      photo: engrFortunePhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      confirmed: true,
      color: '#64b4d2',
      glow: 'rgba(100,180,210,0.2)',
      tags: ['Sustainable Technology', 'Infrastructure', 'GIS Applications', 'Urban Hydrology'],
      initials: 'FO'
    },
    {
      name: 'Dr. Elalim Eltayeb Abdurrahman Mohamed',
      role: 'Medical Doctor, Researcher & Medical Educator',
      org: 'Red Sea University Faculty of Medicine & ACMER',
      location: 'Port Sudan / International',
      displayTitle: 'Medical Doctor, Researcher & Medical Educator',
      topic: 'AI in Healthcare: Transforming Medical Research, Education, and Evidence-Based Practice',
      bio: 'Dr. Elalim Eltayeb Abdurrahman Mohamed is a Medical Doctor, Researcher, and Medical Educator with interests spanning clinical medicine, medical research, neuroscience, public health, and medical education. He is the Chair of the Board of the Abou-Aloum Centre for Medical Education and Research (ACMER), where he contributes to initiatives focused on strengthening research capacity, evidence-based practice, and medical education. His current interests focus on the responsible integration of Artificial Intelligence and emerging technologies into medical research, evidence synthesis, healthcare education, and clinical practice, with particular interest in their potential to improve healthcare and research capacity in resource-limited and conflict-affected settings.',
      photo: drElalimPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      confirmed: true,
      color: '#00dcb4',
      glow: 'rgba(0,220,180,0.2)',
      tags: ['AI in Healthcare', 'Medical Research', 'Evidence-Based Practice', 'Neuroscience'],
      initials: 'EM'
    },
    {
      name: 'Sulaiman Kafeero',
      role: 'President & CEO, Muslim Centre for Justice and Law',
      org: 'Muslim Centre for Justice and Law (MCJL)',
      location: 'Kampala, Uganda',
      displayTitle: 'Development Consultant in Monitoring, Evaluation and Learning',
      topic: 'Future of Work',
      bio: 'Sulaiman Kafeero is a seasoned Monitoring, Evaluation, and Learning Specialist and CEO at Muslim Centre for Justice and Law (MCJL), with over 20 years of experience in social development, project management, and research. His work focuses on social justice, violence prevention, and marginalized populations, with expertise in strategic planning, data analysis, participatory knowledge systems, and stakeholder engagement. Sulaiman has collaborated with organizations such as NUDIPU, Uganda AIDS Commission, ActionAid Uganda, and Wasafiri Consulting System Craft, contributing to national and international initiatives funded by CAFOD-UK, EU, UKAID, and others. Recognized for his mentorship and innovative approaches, Sulaiman’s work emphasizes outcome harvesting and problem-driven iterative processes to foster real-time social change.',
      photo: sulaimanPhoto,
      photoPosition: 'center 12%',
      photoScale: 1.12,
      confirmed: true,
      color: '#d2aa64',
      glow: 'rgba(210,170,100,0.2)',
      tags: ['Future of Work', 'Monitoring & Evaluation', 'Social Development', 'Strategic Planning'],
      initials: 'SK'
    },
    {
      name: 'Richard Afoakwah-Nti',
      role: 'Founder & CEO, Rich Dream Consult | IT Expert & Entrepreneur',
      org: 'Rich Dream Consult (RDC)',
      location: 'Accra, Ghana',
      displayTitle: 'Founder & CEO, Rich Dream Consult',
      topic: 'AI-Powered Entrepreneurship: Transforming Businesses for a Smarter and More Inclusive Future',
      bio: 'Richard Afoakwah-Nti is a Ghanaian entrepreneur, IT expert, and business consultant, and the Founder & CEO of Rich Dream Consult (RDC), a multi-award-winning professional consultancy firm operating across IT, Business Management, and Travel Consultancy. With a strong interest in technology and innovation, he focuses on helping businesses and entrepreneurs identify opportunities, embrace digital transformation, and build sustainable, competitive ventures. Richard is also passionate about empowering young entrepreneurs to leverage emerging technologies for growth and impact, advocating for the responsible and inclusive use of AI to create opportunities in emerging markets.',
      photo: richardPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      confirmed: true,
      color: '#00dcb4',
      glow: 'rgba(0,220,180,0.2)',
      tags: ['AI-Powered Entrepreneurship', 'Digital Transformation', 'Emerging Tech', 'Business Innovation'],
      initials: 'RA'
    },
    {
      name: 'Assoc. Prof. Ts. Dr. Noor Suhana Binti Sulaiman',
      role: 'Dean, Research & Postgraduate Management (JPPS)',
      org: 'University College TATI (UC TATI)',
      location: 'Malaysia',
      displayTitle: 'Dean, Research & Postgraduate Management (JPPS), UC TATI',
      topic: 'Inside the Threat: Detecting Cyber Attacks Through Machine Learning Classification',
      bio: 'Associate Professor Ts. Dr. Noor Suhana Sulaiman is the Dean of the Department of Research and Graduate Management and a Senior Lecturer at University College TATI (UC TATI), Malaysia. She holds a PhD in Computer Science and has over 15 years of experience in teaching, research, innovation, and academic leadership. Her expertise spans cybersecurity, artificial intelligence, computer networks, IoT security, and information security. She holds several academic and professional appointments, including Head of the CyNet Special Interest Group, Associate Editor-in-Chief of the International Journal of Computer & Communication Technology (IJCCT), and Professional Assessment Panel Member of the Malaysia Board of Technologists (MBOT). An accomplished researcher, she has led funded research projects under FRGS, STG, and Matching Grant schemes, contributed to innovative research in cybersecurity and AI, and received multiple national and international innovation awards. She is also actively involved in postgraduate supervision, academic development, and technological innovation.',
      photo: suhanaPhoto,
      photoPosition: 'center 15%',
      photoScale: 1.0,
      confirmed: true,
      color: '#b46ed2',
      glow: 'rgba(180,110,210,0.2)',
      tags: ['Cybersecurity', 'Machine Learning', 'UC TATI', 'IoT Security', 'Threat Detection'],
      initials: 'NS'
    },
    {
      name: 'Emmanuel Etaderhi',
      role: 'Executive Secretary, Financial Centre for Sustainability (FC4S Lagos) & SVP, FMDQ Group PLC',
      org: 'Financial Centre for Sustainability / FMDQ Group',
      location: 'Lagos, Nigeria',
      displayTitle: 'Sustainable Finance Expert & Executive Secretary, FC4S Lagos',
      topic: 'AI in Smart Grids: Accelerating Sustainable Energy & Clean Tech Infrastructure',
      bio: 'Emmanuel Etaderhi is an accomplished Sustainable Finance Expert and the Executive Secretary of the Financial Centre for Sustainability (FC4S) Lagos, part of the United Nations-convened International Network of Financial Centres for Sustainability. Concurrently serving as Senior Vice President at FMDQ Group PLC, he has over 27 years of extensive leadership experience spanning financial services, capital markets, and the energy/power sectors. Mr. Etaderhi coordinated the Nigerian Green Bond Market Development Programme and has been a driving force in financing sustainable infrastructure and green transition initiatives. His expertise focuses on leveraging emerging technologies, artificial intelligence, and smart grids to optimize clean energy distribution, accelerate climate finance, and build resilient, sustainable power ecosystems.',
      photo: emmanuelPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      confirmed: true,
      color: '#00dcb4',
      glow: 'rgba(0,220,180,0.2)',
      tags: ['AI in Smart Grids', 'Sustainable Technology', 'Green Finance', 'Clean Energy'],
      initials: 'EE'
    },
    {
      name: 'Dr. Maigari Haruna Bello, PhD',
      role: 'Chief Lecturer, Dept. of Primary Education & Deputy Director, DUS',
      org: 'Federal College of Education, Yola',
      location: 'Adamawa State, Nigeria',
      displayTitle: 'Dr. Maigari Haruna Bello, PhD | Chief Lecturer, Federal College of Education, Yola',
      topic: 'Digital Transformation in Higher Education: The Role of Emerging Technologies',
      bio: 'Dr. Maigari Haruna Bello is a Chief Lecturer in the Department of Primary Education (Nomadic Education Unit), Federal College of Education, Yola, Nigeria, with nearly two decades of experience in teacher education, curriculum development, and educational administration. He holds a PhD in Curriculum and Instruction from the University of Maroua, Cameroon, and has contributed extensively to research on nomadic education, inclusive education, educational technology, and 21st-century skills development. Dr. Bello currently serves as Deputy Director, Directorate of Undergraduate Studies (DUS), and has previously held several academic and administrative positions, including Head of Open and Distance Learning (ODL). He has facilitated professional development programmes for educators and actively participates in educational consultancy, policy development, and community-based educational initiatives aimed at improving access, quality, and equity in education.',
      photo: maigariPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      confirmed: true,
      color: '#b46ed2',
      glow: 'rgba(180,110,210,0.2)',
      tags: ['Digital Transformation', 'Higher Education', 'Educational Technology', 'Curriculum & AI'],
      initials: 'MB'
    },
    {
      name: 'Girma Birhanu Nurie',
      role: 'Field Epidemiologist',
      org: 'Addis Ababa City Administration Health Office',
      location: 'Ethiopia',
      displayTitle: 'Field Epidemiologist, Addis Ababa City Administration Health Office',
      topic: 'Reimagining Global Health Through Innovation: From Data to Impact',
      bio: 'Mr. Girma Birhanu Nurie is a public-health specialist and epidemiology researcher working with Addis Ababa City Administration in Ethiopia, dedicated to advancing global health security through innovation. With extensive experience in disease surveillance, outbreak response, and health-systems strengthening, he has contributed to major public-health initiatives across government, clinical, and international sectors. His work focuses on integrating data, technology, and community-level intelligence to improve early detection of epidemics and strengthen health-system resilience. He is the founder of the GBN Field Epidemiology Collective and patent-pending GBN EpiNova, developing digital tools that empower frontline health workers and policymakers with real-time insights. Girma holds a Master of Public Health (MPH) from Addis Ababa University.',
      photo: girmaPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      confirmed: true,
      color: '#00dcb4',
      glow: 'rgba(0,220,180,0.2)',
      tags: ['Field Epidemiology', 'Global Health Security', 'Disease Surveillance', 'Digital Health', 'Epidemic Intelligence'],
      initials: 'GN'
    },
    {
      name: 'Wiktoria Gromowa-Cieślik',
      role: 'CEO, Technology Executive, Chief Metrics Officer',
      org: 'Human-Tech Fusion (HTFusion)',
      location: 'Poland',
      displayTitle: 'CEO, Technology Executive & Chief Metrics Officer, Human-Tech Fusion (HTFusion)',
      topic: 'Human-Tech Fusion: Harmonizing Advanced Systems, Metrics & Organizational Dynamics',
      bio: 'Wiktoria Gromowa-Cieślik is a CEO, Technology Executive, and Chief Metrics Officer at Human-Tech Fusion (HTFusion) in Poland. Her work focuses on aligning advanced technology ecosystems with human-centered operations, strategic metrics, and enterprise innovation.',
      photo: wiktoriaPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      confirmed: true,
      color: '#64b4d2',
      glow: 'rgba(100,180,210,0.2)',
      tags: ['Human-Tech Fusion', 'Chief Metrics Officer', 'Technology Executive', 'Enterprise Innovation'],
      initials: 'WG'
    },
    {
      name: 'Jaco Visagie',
      role: 'Professor of Statistics',
      org: 'North-West University',
      location: 'South Africa',
      displayTitle: 'Professor of Statistics, North-West University',
      topic: 'Testing Intelligence: A Statistical Framework for Evaluating AI Agents',
      bio: 'Prof. Jaco Visagie is a Professor of Statistics at North-West University in South Africa. He specializes in statistical modeling, computational data methods, empirical distributions, and applied predictive analytics across complex scientific and industrial systems.',
      photo: jacoPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      confirmed: true,
      color: '#00dcb4',
      glow: 'rgba(0,220,180,0.2)',
      tags: ['Statistics', 'Statistical Modeling', 'Predictive Analytics', 'North-West University'],
      initials: 'JV'
    },
    {
      name: 'Prof. Rehab Hegazy, PhD',
      role: 'Professor of Pharmacology & Secretary-General',
      org: 'Medical Research and Clinical Studies Institute, National Research Centre (NRC)',
      location: 'Egypt',
      displayTitle: 'Professor of Pharmacology & Secretary-General, NRC Egypt',
      topic: 'Pharmacological Innovation, Clinical Methodologies & Biomedical Research',
      bio: 'Prof. Rehab Hegazy, PhD, is a Professor of Pharmacology and Secretary-General at the Medical Research and Clinical Studies Institute, National Research Centre (NRC) in Egypt. She specializes in pharmacological research, clinical trial methodologies, translational medicine, and advancing healthcare sciences.',
      photo: rehabPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      confirmed: true,
      color: '#d2aa64',
      glow: 'rgba(210,170,100,0.2)',
      tags: ['Pharmacology', 'National Research Centre', 'Clinical Studies', 'Medical Research'],
      initials: 'RH'
    },
    {
      name: 'Nachiket Joshi',
      role: 'AI Researcher, Published Author & Senior Software Engineer',
      org: 'Snapsheet Inc | IEEE Senior Member',
      location: 'USA',
      displayTitle: 'AI Researcher, Author & Senior Software Engineer',
      topic: 'From APIs to Autonomous Systems: Engineering Agentic AI in Production',
      bio: 'Nachiket Joshi is an AI researcher, published author, international keynote speaker, and Senior Software Engineer with over 13 years of experience designing and building enterprise-scale software systems, distributed platforms, and intelligent cloud solutions. His work bridges industry and applied research, with a focus on Agentic AI, Large Language Models (LLMs), distributed systems, cloud-native architectures, and enterprise software engineering.',
      photo: nachiketPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      confirmed: true,
      color: '#00dcb4',
      glow: 'rgba(0,220,180,0.2)',
      tags: ['Agentic AI', 'Autonomous Systems', 'LLMs', 'Distributed Systems', 'Cloud-Native'],
      initials: 'NJ'
    },
    {
      name: 'Prof. Eka Devidze',
      role: 'Professor & Head of Programs | National Accreditation Expert',
      org: 'International Black Sea University & NCEQE',
      location: 'Tbilisi, Georgia',
      displayTitle: 'Professor & Head of Programs, International Black Sea University',
      topic: 'Project Governance, Academic Standards & Sustainable Development',
      bio: 'Prof. Eka Devidze is a Professor and Head of Programs at International Black Sea University, Accreditation Expert at the National Center for Education Quality Enhancement (NCEQE), and director of EU & UNDP sustainable development projects.',
      photo: ekaPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      confirmed: true,
      color: '#00dcb4',
      glow: 'rgba(0,220,180,0.2)',
      tags: ['Project Governance', 'Quality Accreditation', 'Sustainable Development', 'Higher Education'],
      initials: 'ED'
    },
    {
      name: 'Arjun Kulshreshtha',
      role: 'Senior Manager B2B Product Strategy & Operations',
      org: 'ShipMonk',
      location: 'USA',
      displayTitle: 'Senior Manager B2B Product Strategy & Operations, ShipMonk',
      topic: 'AI-Driven Supply Chains and Intelligent Logistics: Transforming Operations Through Data, Automation, and Digital Strategy',
      bio: "Arjun Kulshreshtha is Senior Manager of B2B Product Strategy and Operations at ShipMonk, where he drives strategic initiatives across the company's logistics and fulfillment operations. His work sits at the intersection of technology, operations, and business strategy, focusing on how intelligent systems and data-driven decision-making can transform enterprise operations at scale. Prior to ShipMonk, Arjun held operations and strategy roles at Amazon, where he designed a delivery station model that was later adopted as a global standard across the company's network. His career also spans consulting engagements with Nestlé Purina and operational leadership at Hindustan Petroleum Corporation Limited (HPCL), giving him cross-industry experience spanning e-commerce, consumer goods, and energy sectors. Across these roles, his initiatives have delivered documented multi-million dollar savings through process redesign, analytics-driven optimization, and organizational transformation. Arjun holds an MBA from the Olin Business School at Washington University in St. Louis and a B.S. from Allahabad University, both on merit scholarship.",
      photo: arjunPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      confirmed: true,
      color: '#d2aa64',
      glow: 'rgba(210,170,100,0.2)',
      tags: ['Supply Chain AI', 'Intelligent Logistics', 'Operations Strategy', 'Enterprise Architecture', 'Automation'],
      initials: 'AK'
    },
    {
      name: 'Dr. Mehwish Rashid',
      role: 'Doctor of Health Science (DHSc)',
      org: 'Keiser University',
      location: 'United States',
      displayTitle: 'Doctor of Health Science (DHSc), Keiser University',
      topic: 'Healthcare Systems, Health Science Technology & Clinical Innovation',
      bio: 'Dr. Mehwish (Mishy) Rashid holds a Doctor of Health Science (DHSc) from Keiser University, USA. She specializes in health sciences leadership, healthcare innovation, clinical technology evaluation, and health systems optimization.',
      photo: mehwishPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      confirmed: true,
      color: '#64b4d2',
      glow: 'rgba(100,180,210,0.2)',
      tags: ['Health Science', 'Healthcare Innovation', 'Clinical Technologies', 'Medical Systems', 'Public Health'],
      initials: 'MR'
    },
    {
      name: 'Dr. Nadia Adnan',
      role: "Assistant Professor & Research Scientist | Stanford World's Top 2% Scientist",
      org: 'Prince Mohammad Bin Fahd University',
      location: 'Saudi Arabia',
      displayTitle: "Assistant Professor & Research Scientist | Stanford World's Top 2% Scientist",
      topic: 'Sustainable Technology Adoption, Quantitative Modeling & Enterprise Strategy',
      bio: "Ranked among Stanford University's World's Top 2% Scientists, Dr. Nadia Adnan is an Assistant Professor and Research Scientist in the Department of Management and Marketing at Prince Mohammad Bin Fahd University (PMU), specializing in sustainable technology adoption, quantitative empirical modeling, and enterprise innovation.",
      photo: nadiaPhoto,
      photoPosition: '68% 25%',
      photoScale: 1.0,
      confirmed: true,
      color: '#00dcb4',
      glow: 'rgba(0,220,180,0.2)',
      tags: ["Stanford Top 2% Scientist", 'Management & Marketing', 'Sustainable Business', 'Empirical Modeling', 'Technology Adoption'],
      initials: 'NA'
    },
    {
      name: 'Dr. Dina Alkhodary',
      role: 'Associate Professor of Business Administration',
      org: 'Middle East University',
      location: 'Jordan',
      displayTitle: 'Associate Professor of Business Administration, Middle East University',
      topic: 'Leadership in the Age of AI',
      bio: 'Dr. Dina Alkhodary is an Associate Professor of Business Administration at Middle East University, Jordan. Her expertise includes strategic management, leadership, human resource management, organizational development, and business etiquette. She is an experienced trainer, consultant, researcher, and keynote speaker with extensive academic and professional engagement.',
      photo: dinaPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      confirmed: true,
      color: '#d2aa64',
      glow: 'rgba(210,170,100,0.2)',
      tags: ['Leadership in AI', 'Business Administration', 'Strategic Management', 'Middle East University'],
      initials: 'DA'
    },
    {
      name: 'Mahamadou Billy TRAORÉ',
      role: 'Business Development & Innovation Expert | Business Strategy Consultant',
      org: 'MBT Global Services – Mali',
      location: 'Bamako, Mali • West Africa',
      displayTitle: 'Expert in Business Development, Innovation & Digital Transformation in Africa',
      topic: 'AI, Innovation and Entrepreneurship in Africa: Transforming Emerging Technologies into Inclusive Economic Opportunities',
      bio: 'Mahamadou Billy TRAORÉ is a Malian professional specializing in business development and innovation, with experience in business strategy, market development, sales management and partnership development. He has worked in demanding business environments involving international and multinational companies, with a particular interest in expanding markets, developing distribution networks, acquiring customers and improving business performance. Based in Mali, he is actively engaged in initiatives related to entrepreneurship, youth empowerment, innovation and international partnerships. His professional approach combines corporate strategy, emerging technologies and working knowledge of African markets. He is particularly interested in how artificial intelligence and digital transformation can help African entrepreneurs, startups and organizations improve productivity, access new markets and create sustainable opportunities. As an expert speaker, he brings an African perspective to international exchanges on artificial intelligence, innovation, entrepreneurship and the future of work.',
      photo: billyTraorePhoto,
      photoPosition: 'center 6%',
      photoScale: 1.0,
      confirmed: true,
      color: '#64b4d2',
      glow: 'rgba(100,180,210,0.2)',
      tags: ['AI & Innovation', 'Entrepreneurship in Africa', 'Digital Transformation', 'Economic Opportunities'],
      initials: 'MT'
    },
    {
      name: 'Ganesh Harke',
      role: 'VP of Technology',
      org: '',
      location: 'USA',
      displayTitle: 'VP of Technology',
      topic: 'AI Governance, Financial Engineering & Scalable Systems',
      bio: 'Ganesh Harke is a technology executive with over 18 years of experience driving transformation across financial services and technology through AI, scalable systems, and innovation. He is an IEEE Senior Member and holds a Master of Science degree in Financial Engineering.\n\nHis professional expertise spans AI governance, financial engineering, scalable technology systems, financial services technology, and innovation. Through his extensive experience in technology and financial services, he brings a strong perspective on applying advanced technologies to complex, large-scale systems while considering governance, scalability, and responsible innovation.',
      photo: ganeshPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      confirmed: true,
      color: '#d2aa64',
      glow: 'rgba(210,170,100,0.2)',
      tags: ['AI Governance', 'Financial Engineering', 'Scalable Systems', 'Financial Technology', 'Innovation'],
      initials: 'GH'
    },
    {
      name: 'Mouhssin Ait El Mouden',
      role: 'Academic Researcher',
      org: 'Faculty of Letters, Ibn Tofail University, Kenitra',
      location: 'Morocco',
      displayTitle: 'Academic Researcher',
      topic: 'Human-Centric Technology, Socio-Technical Systems & Interdisciplinary Evaluation',
      bio: 'Academic researcher at the Faculty of Letters, Ibn Tofail University, Kenitra, Morocco. His work focuses on scholarly research methodologies, socio-technological transformation, and interdisciplinary evaluations linking human-centered perspectives with emerging innovation.',
      photo: mouhssinPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      confirmed: true,
      color: '#d2aa64',
      glow: 'rgba(210,170,100,0.2)',
      tags: ['Academic Research', 'Digital Humanities', 'Socio-Technical Systems', 'Research Methodology'],
      initials: 'MM'
    }
  ];

  // ── International Judges Panel ─────────────────────────────
  const judgesList = [
    {
      name: 'MA Carolina Beatriz Barandiaran',
      role: 'Professor, UNICEN | Senior IEEE Member & Award-Winning AI Researcher',
      org: 'Universidad Nacional del Centro de la Provincia de Buenos Aires',
      location: 'Argentina',
      evaluationTrack: 'Enterprise AI Architecture, Cloud Scalability & Automated Systems',
      focus: 'AI Automation Architecture, Microservices, Cloud Modernization & Evaluation',
      bio: 'Award-winning AI researcher, Senior IEEE Member, author of "AI and Microservices", and former enterprise transformation leader for Bank of America, Infosys, and TCS evaluating scalable automated systems.',
      photo: carolinaPhoto,
      photoPosition: 'center 20%',
      photoScale: 1.0,
      color: '#64b4d2',
      glow: 'rgba(100,180,210,0.18)',
      tags: ['AI Architecture', 'Microservices', 'Cloud Modernization', 'IEEE Standards'],
      initials: 'CB'
    },
    {
      name: 'Osman ARAYICI',
      role: 'Professor, Department of Interior Architecture | Head of Scientific Committee, Modoko Academy',
      org: 'Mimar Sinan Fine Arts University & Modoko Academy',
      location: 'Turkey',
      evaluationTrack: 'Spatial Design Paradigms, Zero-Waste Architecture & Autonomous Systems',
      focus: 'Spatial Design, Design Philosophy, Zero-Waste Architecture & Autonomous Systems',
      bio: 'Prof. Osman Arayici is a Professor in the Department of Interior Architecture at Mimar Sinan Fine Arts University and Head of the Scientific Committee at Modoko Academy in Turkey, exploring architecture, AI, and sustainable spaces.',
      photo: osmanPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      color: '#00dcb4',
      glow: 'rgba(0,220,180,0.18)',
      tags: ['Spatial Design', 'Design Philosophy', 'Zero-Waste Architecture', 'Autonomous Systems'],
      initials: 'OA'
    },
    {
      name: 'Prof. Dr. Alexander Bull',
      role: 'Professor & Researcher in Business Strategy & Applied Management',
      org: 'DGUV University of Applied Sciences',
      location: 'Germany',
      evaluationTrack: 'Business Strategy, Applied Management Research & Enterprise Innovation',
      focus: 'Business Strategy, Organizational Management, Applied Research & Enterprise Innovation',
      bio: 'Prof. Dr. Alexander Bull is an esteemed professor and researcher at DGUV University of Applied Sciences in Germany, specializing in business strategy, organizational management, and technology-enabled development.',
      photo: bullPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      color: '#d2aa64',
      glow: 'rgba(210,170,100,0.18)',
      tags: ['Business Strategy', 'Organizational Management', 'Applied Research', 'Enterprise Innovation'],
      initials: 'AB'
    },
    {
      name: 'Piyush Shukla',
      role: 'Technology & Engineering Leader',
      org: 'Enterprise Engineering & Cloud Leadership',
      location: 'USA',
      evaluationTrack: 'Enterprise Engineering, Cloud Infrastructure & Scalable Systems',
      focus: 'Enterprise Cloud Architecture, Distributed Systems Engineering, Scalable Infrastructure & Technical Leadership',
      bio: 'Technology and engineering leader based in the United States with extensive background in enterprise engineering, high-performance cloud architectures, scalable systems, and technical program leadership.',
      photo: piyushPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      color: '#64b4d2',
      glow: 'rgba(100,180,210,0.18)',
      tags: ['Enterprise Engineering', 'Cloud Leadership', 'Scalable Systems', 'Cloud Architecture'],
      initials: 'PS'
    },
    {
      name: 'Prof. Tamar Makharoblidze',
      role: 'Professor, School of Arts and Sciences',
      org: 'Ilia State University',
      location: 'Tbilisi, Georgia',
      evaluationTrack: 'Cognitive Technologies, Linguistics & AI in Cross-Disciplinary Research',
      focus: 'Academic Research, Higher Education, Cognitive Sciences, Linguistics & AI',
      bio: 'Prof. Tamar Makharoblidze is an internationally esteemed scholar and Professor in the School of Arts and Sciences at Ilia State University, Georgia, specializing in linguistics, cognitive humanities, and computational linguistics.',
      photo: tamarPhoto,
      photoPosition: 'center 6%',
      photoScale: 1.0,
      color: '#b46ed2',
      glow: 'rgba(180,110,210,0.18)',
      tags: ['Academic Research', 'Higher Education', 'Cognitive Sciences', 'Linguistics & AI'],
      initials: 'TM'
    },
    {
      name: 'Sri Harsha Anand Pushkala',
      role: 'BCS Fellow, Senior IEEE Member & Advisory Board Member – TheIAForum',
      org: 'Atlanticus',
      location: 'Atlanta, Georgia, USA',
      evaluationTrack: 'AI Anomaly Detection, Financial Systems & Machine Learning Governance',
      focus: 'Fraud Strategy, Graph Neural Networks, Financial AI, Cybersecurity & System Integrity',
      bio: 'BCS Fellow, Senior IEEE Member, and Advisory Board Member at TheIAForum. Based at Atlanticus in Atlanta, Georgia, he specializes in large-scale AI anomaly detection, machine learning governance, cybersecurity, and resilient financial technology systems.',
      photo: sriHarshaPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      color: '#00dcb4',
      glow: 'rgba(0,220,180,0.18)',
      tags: ['Atlanticus', 'BCS Fellow', 'Senior IEEE', 'AI Anomaly Detection', 'TheIAForum'],
      initials: 'SP'
    },
    {
      name: 'Roksolana Trach',
      role: 'Independent Crypto & Financial Market Analyst',
      org: 'Financial Markets Intelligence',
      location: 'USA',
      evaluationTrack: 'Digital Asset Integrity, Decentralized Systems & Commercial Risk Assessment',
      focus: 'Blockchain Systems, Cryptocurrency Economics, DeFi Security & Market Risk',
      bio: 'Independent financial market and cryptocurrency analyst focused on evaluating blockchain architectures, digital asset security, Web3 risk mitigation, and commercial financial viability.',
      photo: roksolanaPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      color: '#d2aa64',
      glow: 'rgba(210,170,100,0.18)',
      tags: ['Blockchain Defense', 'Crypto Economics', 'Web3', 'Risk Assessment'],
      initials: 'RT'
    },
    {
      name: 'Nilesh Charankar',
      role: 'AI Technology Leader & Independent Researcher',
      org: 'AI Technology & Independent Research',
      location: 'USA',
      evaluationTrack: 'Artificial Intelligence, Deep Learning & Applied AI Architecture',
      focus: 'Applied AI Research, Machine Learning Models, Neural Systems & Strategic AI Architecture',
      bio: 'AI technology leader and independent researcher in the United States, specializing in machine learning algorithms, applied artificial intelligence, neural systems engineering, and advanced AI architectures.',
      photo: nileshPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      color: '#b46ed2',
      glow: 'rgba(180,110,210,0.18)',
      tags: ['AI Technology Leader', 'Independent Researcher', 'Machine Learning', 'AI Architecture'],
      initials: 'NC'
    },
    {
      name: 'Assoc. Prof. Dr. Muliati Hj. Sedek',
      role: 'Deputy Director (Scholarship Excellence), CAES',
      org: 'Universiti Teknikal Malaysia Melaka (UTeM)',
      location: 'Malaysia',
      evaluationTrack: 'Educational Technology, Academic Quality & Digital Scholarship Governance',
      focus: 'Higher Education Research, Scholarship Excellence, Educational Technology & Academic Quality Evaluation',
      bio: 'Associate Professor and Deputy Director of Scholarship Excellence at the Centre for Academic Excellence and Scholarship (CAES), Universiti Teknikal Malaysia Melaka (UTeM). She specializes in educational innovation, academic quality frameworks, and higher education technology integration.',
      photo: muliatiPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      color: '#00dcb4',
      glow: 'rgba(0,220,180,0.18)',
      tags: ['UTeM Malaysia', 'Scholarship Excellence', 'Educational Technology', 'Academic Quality'],
      initials: 'MS'
    },
    {
      name: 'Parikshit Sahagal',
      role: 'Technical Project Manager',
      org: 'CoStar Group Inc',
      location: 'USA',
      evaluationTrack: 'Technical Project Management, Agile Delivery & Enterprise Platforms',
      focus: 'Technical Project Leadership, Large-Scale Software Delivery, Cloud Systems & Operational Agility',
      bio: 'Technical Project Manager at CoStar Group Inc in the United States, with deep expertise in managing complex technical programs, scalable cloud platforms, agile engineering delivery, and cross-functional technology initiatives.',
      photo: parikshitPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      color: '#64b4d2',
      glow: 'rgba(100,180,210,0.18)',
      tags: ['CoStar Group', 'Technical Project Management', 'Agile Delivery', 'Enterprise Platforms'],
      initials: 'PS'
    },
    {
      name: 'Dr. Saleem Abu Jaber',
      role: 'Academic Advisor Head & Senior Lecturer',
      org: 'Achva Academic College',
      location: 'Israel',
      evaluationTrack: 'Academic Methodologies, Higher Education Pedagogies & Mentorship Frameworks',
      focus: 'Academic Methodologies, Higher Education, Educational Leadership & Mentorship',
      bio: 'Dr. Saleem Abu Jaber is an accomplished academic leader, Senior Lecturer, and Head of Academic Advisory at Achva Academic College, specializing in advancing contemporary academic methodologies and student-centered mentorship.',
      photo: drSaleemPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      color: '#d2aa64',
      glow: 'rgba(210,170,100,0.18)',
      tags: ['Academic Methodologies', 'Higher Education', 'Educational Leadership', 'Mentorship'],
      initials: 'SJ'
    },
    {
      name: 'Veeramani Sampathkumar',
      role: 'Fintech Technology Leader',
      org: 'Financial Technology & Enterprise Systems',
      location: 'USA',
      evaluationTrack: 'Fintech Engineering, Transaction Systems & Financial Security Architecture',
      focus: 'Financial Technology, High-Reliability Payment Architectures, Scalable Banking Systems & Regulatory Security',
      bio: 'Fintech technology leader based in the United States with extensive background in building resilient, secure financial engineering platforms, high-volume transactional architectures, and modern cloud fintech solutions.',
      photo: veeramaniPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      color: '#b46ed2',
      glow: 'rgba(180,110,210,0.18)',
      tags: ['Fintech Leader', 'Payment Architectures', 'Financial Security', 'Enterprise Systems'],
      initials: 'VS'
    },
    {
      name: 'Fatimah Alneel',
      role: 'PhD Higher Education | Educational Development Specialist',
      org: 'The University of Arizona',
      location: 'Saudi Arabia',
      evaluationTrack: 'Educational Development, Higher Education Innovation & Academic Leadership',
      focus: 'Higher Education, Educational Development, Academic Leadership & Curriculum Innovation',
      bio: 'Fatimah Alneel is a higher education professional and PhD scholar in Higher Education at The University of Arizona, committed to educational development, institutional transformation, and curriculum innovation.',
      photo: fatimahPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      color: '#00dcb4',
      glow: 'rgba(0,220,180,0.18)',
      tags: ['Higher Education', 'Educational Development', 'Academic Leadership', 'University of Arizona'],
      initials: 'FA'
    },
    {
      name: 'Shubh Chandra Roy',
      role: 'Technology & Engineering Leader',
      org: 'Enterprise Engineering & Cloud Systems',
      location: 'USA',
      evaluationTrack: 'Enterprise Cloud Engineering, Scalable Infrastructure & Systems Architecture',
      focus: 'Technical Program Leadership, Cloud-Native Architecture, Scalable Engineering & Modern DevOps',
      bio: 'Technology and engineering leader in the United States, bringing proven leadership in architecting mission-critical enterprise systems, cloud transformations, scalable engineering frameworks, and organizational technology governance.',
      photo: shubhPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      color: '#64b4d2',
      glow: 'rgba(100,180,210,0.18)',
      tags: ['Technology Leader', 'Engineering Leadership', 'Enterprise Cloud', 'Systems Architecture'],
      initials: 'SR'
    },
    {
      name: 'Taleb Hammad',
      role: 'DBA & Executive Director',
      org: 'EyesNY',
      location: 'USA',
      evaluationTrack: 'Enterprise Database Administration, Scalable Infrastructure & Healthcare Systems',
      focus: 'Database Administration, Executive Leadership, Enterprise Systems & Data Reliability',
      bio: 'Taleb Hammad is an experienced executive director and senior database administrator with a proven track record of architecting mission-critical data systems and leading technological operations at EyesNY in the United States.',
      photo: talebPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      color: '#d2aa64',
      glow: 'rgba(210,170,100,0.18)',
      tags: ['Database Administration', 'Executive Leadership', 'Enterprise Systems', 'Data Reliability'],
      initials: 'TH'
    },
    {
      name: 'Mayank Atreya',
      role: 'Technology & Engineering Leader',
      org: 'Enterprise Architecture & Multi-Cloud Systems',
      location: 'USA',
      evaluationTrack: 'Enterprise Architecture, AI/ML-Driven Modernization & Multi-Cloud Architecture',
      focus: 'Enterprise Architecture, AI/ML Modernization, Multi-Cloud Strategy & Scalable Platforms',
      bio: 'Technology and engineering leader in the United States specializing in enterprise architecture, AI/ML-driven legacy modernization, and high-resilience multi-cloud infrastructure architectures.',
      photo: mayankPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      color: '#b46ed2',
      glow: 'rgba(180,110,210,0.18)',
      tags: ['Enterprise Architecture', 'AI/ML Modernization', 'Multi-Cloud', 'Cloud Strategy'],
      initials: 'MA'
    },
    {
      name: 'Rasmi Ranjan Choudhury',
      role: 'Independent Researcher, Project Management & E-Mobility Expert | IEEE Member',
      org: 'Project Management & E-Mobility Research',
      location: 'USA',
      evaluationTrack: 'E-Mobility Systems, Technical Project Management & Smart Transportation',
      focus: 'Electric Mobility Infrastructure, Technical Project Governance, Sustainable Transport & Applied Research',
      bio: 'Independent researcher, project management professional, and e-mobility expert in the United States. An active IEEE Member, he brings specialized expertise in electric mobility infrastructure, technical project governance, sustainable transportation ecosystems, and innovative engineering delivery.',
      photo: rasmiPhoto,
      photoPosition: 'center 20%',
      photoScale: 1.05,
      color: '#00dcb4',
      glow: 'rgba(0,220,180,0.18)',
      tags: ['E-Mobility', 'Project Management', 'IEEE Member', 'Smart Transportation'],
      initials: 'RC'
    },
    {
      name: 'Dr. Ayoub Regragui',
      role: 'Doctor & Academic Researcher',
      org: 'Mohammed V University, Rabat',
      location: 'Morocco',
      evaluationTrack: 'Academic Research Methodologies, Applied Systems & Quality Validation',
      focus: 'Higher Education Research, Applied Science & Innovation Systems',
      bio: 'Doctor and academic researcher at Mohammed V University in Rabat, Morocco. He brings extensive expertise in rigorous academic methodology, research quality evaluation, higher education frameworks, and emerging technological applications.',
      photo: ayoubPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      color: '#b46ed2',
      glow: 'rgba(180,110,210,0.18)',
      tags: ['Mohammed V University', 'Higher Education', 'Research Innovation', 'Academic Quality'],
      initials: 'AR'
    },
    {
      name: 'Ponsankar Shanmugam S',
      role: 'Distributed & AI Systems Specialist',
      org: 'Distributed & AI Systems Engineering',
      location: 'USA',
      evaluationTrack: 'Distributed Systems Architecture, High-Throughput Computing & AI Infrastructure',
      focus: 'Distributed Computing, Cloud-Native Systems, AI Infrastructure & High-Concurrency Systems',
      bio: 'Specialist in distributed and AI systems based in the United States, focusing on high-throughput data processing, resilient distributed architectures, scalable AI backends, and fault-tolerant cloud platforms.',
      photo: ponsankarPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      color: '#64b4d2',
      glow: 'rgba(100,180,210,0.18)',
      tags: ['Distributed Systems', 'AI Infrastructure', 'High-Throughput Computing', 'Cloud Systems'],
      initials: 'PS'
    },
    {
      name: 'Nino Devidze',
      role: 'Tourism Educator & Program Manager',
      org: 'The University of Georgia',
      location: 'Georgia',
      evaluationTrack: 'Hospitality Tech, Quality Assurance & Educational Programs',
      focus: 'Tourism Business Development, Hospitality Management, Quality Assurance & Educational Technology',
      bio: 'Tourism educator and program manager at The University of Georgia, specializing in quality assurance, tourism business development, and the integration of modern educational and technological frameworks.',
      photo: ninoPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      color: '#00dcb4',
      glow: 'rgba(0,220,180,0.18)',
      tags: ['The University of Georgia', 'Tourism Education', 'Program Management', 'Quality Assurance'],
      initials: 'ND'
    },
    {
      name: 'Mr. Prathap Raghavan',
      role: 'Director – Product Management (GenAI & Automation)',
      org: 'Santander',
      location: 'USA',
      evaluationTrack: 'GenAI Product Architecture, Intelligent Automation & Enterprise Financial Systems',
      focus: 'GenAI Strategy, Enterprise Intelligent Automation, Product Governance & Scalable Financial Technology',
      bio: 'Director of Product Management in GenAI & Automation at Santander in the United States, bringing accomplished leadership in designing and deploying enterprise-scale generative AI products, intelligent workflow automation, and resilient financial technology solutions.',
      photo: prathapPhoto,
      photoPosition: 'center 38%',
      photoScale: 1.18,
      color: '#d2aa64',
      glow: 'rgba(210,170,100,0.18)',
      tags: ['Santander', 'Product Management', 'GenAI', 'Intelligent Automation'],
      initials: 'PR'
    },
    {
      name: 'Lali Mikeladze',
      role: 'Head of the BA Program in Tourism',
      org: 'Caucasus International University',
      location: 'Georgia',
      evaluationTrack: 'Sustainable Tourism Management, Business Administration & Project Governance',
      focus: 'Sustainable Tourism, Business Administration, MICE Management & Applied Education',
      bio: 'Head of the Bachelor Educational Program in Tourism and Associate Professor at Caucasus International University (CIU), Georgia. Specializing in sustainable tourism management, business administration, and academic project leadership.',
      photo: laliPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      color: '#b46ed2',
      glow: 'rgba(180,110,210,0.18)',
      tags: ['Caucasus International University', 'Tourism Program', 'Business Administration', 'Sustainable MICE'],
      initials: 'LM'
    },
    {
      name: 'Mr. Amber Rastogi',
      role: 'Distributed Systems & Cloud Computing Expert',
      org: 'Distributed Systems & Cloud Architecture',
      location: 'USA',
      evaluationTrack: 'Distributed Systems Architecture, Cloud Computing & Scalable Infrastructure',
      focus: 'Distributed Systems Design, Cloud-Native Infrastructure, High-Throughput Computing & Scalable Systems',
      bio: 'Distributed systems and cloud computing expert based in the United States, bringing proven technical leadership in architecting resilient distributed architectures, scalable cloud-native platforms, high-throughput infrastructure, and modern enterprise backend systems.',
      photo: amberPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      color: '#00dcb4',
      glow: 'rgba(0,220,180,0.18)',
      tags: ['Distributed Systems', 'Cloud Computing', 'Cloud Architecture', 'Scalable Systems'],
      initials: 'AR'
    },
    {
      name: 'Josephine Uwineza',
      role: 'Civil Engineer | Infrastructure Project Management Professional',
      org: 'Multinational Transport Infrastructure & Sustainable Development',
      location: 'Rwanda',
      evaluationTrack: 'Smart Infrastructure, Sustainable Transportation & Digital Interoperability',
      focus: 'Infrastructure Project Management, Regulatory Harmonization, Technical Interoperability, Sustainable Transportation & Multinational Infrastructure Systems',
      bio: 'Josephine Uwineza is a Civil Engineer and Infrastructure Project Management Professional with experience in multinational transport infrastructure and project coordination. Her professional interests include regulatory harmonization, institutional coordination, technical interoperability and sustainable infrastructure development. Her ongoing MSc research examines regulatory harmonization in multinational projects, using the Dar es Salaam–Isaka–Kigali/Keza–Musongati Railway Project as a case study. Her expertise provides a practical perspective on the development of smarter, digitally connected and sustainable cross-border infrastructure systems.',
      photo: josephinePhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      color: '#64b4d2',
      glow: 'rgba(100,180,210,0.18)',
      tags: ['Civil Engineering', 'Project Management', 'Sustainable Infrastructure', 'Regulatory Harmonization'],
      initials: 'JU'
    },
    {
      name: 'Nandan Sharma',
      role: 'Information Security Leader',
      org: 'BC Public Service',
      location: 'Canada',
      evaluationTrack: 'Cybersecurity, Information Security & Risk Management',
      focus: 'Information Security, Threat Analysis & Systems Integrity',
      bio: 'Information Security Leader at BC Public Service, Canada, specializing in cybersecurity, risk management, and systems integrity for large-scale enterprise environments.',
      photo: nandanSharmaPhoto,
      photoPosition: 'center top',
      photoScale: 1.0,
      color: '#00dcb4',
      glow: 'rgba(0,220,180,0.2)',
      tags: ['Cybersecurity', 'Information Security', 'Risk Management'],
      initials: 'NS'
    }
  ];

  // ── Organizing Committee ───────────────────────────────────
  const committeeList = [
    {
      name: 'Lawrence Mazaki Mashati',
      role: 'General Director',
      org: 'Techryon Global',
      photo: lmPhoto,
      photoPosition: 'center 10%',
      photoScale: 1.0
    },
    {
      name: 'Emerald Abena Amponsah Baffour',
      role: 'Global Partnership & Strategy Director',
      org: 'Techryon Global',
      photo: emeraldPhoto,
      photoPosition: 'center 12%',
      photoScale: 1.0
    },
    {
      name: 'Marghescu Cristina-Florentina',
      role: 'Independent Director',
      org: 'Techryon Global',
      photo: cfPhoto,
      photoPosition: 'center 35%',
      photoScale: 1.35
    }
  ];

  const faqs = [
    { q: "How can I participate in the hackathon?", a: "The TechryonGlobal Industrial Hackathon 2026 is open to participants worldwide. Simply register through the online portal and choose whether you are competing as an individual or in a team." },
    { q: "What is the format of the event?", a: "The event is 100% online and virtual, allowing participants from all over the world to build, collaborate, and pitch seamlessly." },
    { q: "Can I participate individually or do I need a team?", a: "You can participate as an individual or form a team of up to 5 members." },
    { q: "Who are the judges for the hackathon?", a: "Our international technical jury comprises esteemed researchers, engineering leaders, and professors from CoStar Group, Atlanticus, Santander, ShipMonk, UTeM Malaysia, The University of Georgia, Caucasus International University, Mohammed V University, Ibn Tofail University, and UNICEN, each assigned to specific evaluation tracks." },
    { q: "What is the main theme of the hackathon?", a: "The theme is 'Industry 5.0, Smart Manufacturing & Industrial AI', covering robotics, digital twins, IoT, and OT cybersecurity." },
    { q: "How do I submit my hackathon project?", a: "You must submit a GitHub repository, installation guide, README, architecture diagrams, and a 5-minute video demonstration." },
    { q: "Who owns the intellectual property (IP) of our hackathon project?", a: "Participants retain 100% ownership of all original intellectual property, source code, models, and architectures created during the event. TechryonGlobal does not claim any ownership of your project." },
    { q: "How is judging fairness ensured?", a: "Our jury adheres to a strict conflict-of-interest policy. Judges must disclose affiliations and are recused from scoring any team from their home institutions or past collaborations." },
    { q: "Will I get a verified certificate?", a: "Yes, all verified participants with compliant submissions, category finalists, keynote speakers, and jury members will receive an Official Verified Certificate issued by TechryonGlobal featuring a unique Certificate ID and verification portal link." },
    { q: "How are the winners evaluated?", a: "Evaluation is conducted according to a published 100-point rubric assessing Technical Depth & Architecture (20%), Industrial Applicability (20%), Scalability (15%), Feasibility (15%), AI/Technology Implementation (15%), Safety/Security/Reliability (10%), and Prototype Demo (5%)." },
    { q: "Will sessions be recorded?", a: "Yes, all keynotes and panel discussions will be recorded and made accessible to registered participants." }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>

      {/* ── GLOBAL PARTICIPATION CALLOUT BANNER ── */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(0,220,180,0.12), rgba(0,180,220,0.04))',
        border: '1px solid rgba(0,220,180,0.3)',
        borderRadius: '1.5rem',
        padding: 'clamp(1.25rem, 3vw, 1.75rem) clamp(1rem, 3vw, 2rem)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1.5rem',
        boxShadow: '0 0 30px rgba(0,220,180,0.12)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', maxWidth: '680px' }}>
          <div style={{
            width: '54px', height: '54px', borderRadius: '1rem',
            background: 'rgba(0,220,180,0.15)', border: '1px solid rgba(0,220,180,0.35)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
          }}>
            <Award size={28} style={{ color: '#00dcb4' }} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
              <span style={{
                fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase',
                padding: '0.2rem 0.65rem', borderRadius: '2rem',
                background: '#00dcb4', color: '#0b1015', letterSpacing: '0.08em'
              }}>
                Technical Innovation Initiative
              </span>
              <span style={{ fontSize: '0.8rem', color: '#64b4d2', fontWeight: 600 }}>
                Worldwide Online Hackathon • 27 September 2026
              </span>
            </div>
            <h3 style={{ fontSize: 'clamp(1.05rem, 3vw, 1.25rem)', fontWeight: 700, color: '#e8e8ee', margin: 0, lineHeight: 1.35 }}>
              Global Industrial Hackathon 2026: AI, Industry 5.0 & Smart Manufacturing
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#9090a0', margin: '0.4rem 0 0', lineHeight: 1.5 }}>
              A structured virtual engineering challenge with published evaluation criteria, mentor guidance, and independent technical jury review.
            </p>
          </div>
        </div>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#00dcb4', color: '#0b1015', border: 'none',
            padding: '0.85rem 1.8rem', borderRadius: '0.85rem',
            fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer',
            boxShadow: '0 0 20px rgba(0,220,180,0.35)',
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            textDecoration: 'none',
            transition: 'all 0.25s ease'
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
        >
          Register Now <ExternalLink size={16} />
        </a>
      </div>
      
      {/* ── ABOUT EVENT ── */}
      <section id="about-event">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Sparkles size={18} style={{ color: '#00dcb4' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>About the Industrial Hackathon</h3>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: 'clamp(1.25rem, 3.5vw, 2rem)', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#a0a0b0', marginBottom: '1.25rem' }}>
            The <strong>TechryonGlobal Industrial Hackathon 2026</strong> is an international technical innovation programme focused on practical applications of <strong>Artificial Intelligence, Industry 5.0, Smart Manufacturing, Digital Twins, Robotics, and OT Cybersecurity</strong>. The competition brings together developers, engineers, researchers, faculty scholars, and technology startups worldwide to develop defensible, production-relevant industrial solutions.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#a0a0b0', marginBottom: '1.5rem' }}>
            The event combines an Innovation Forum featuring technical keynote addresses delivered by confirmed international academicians and researchers with an intensive virtual hackathon where participants receive expert technical mentorship and evaluation from an international jury against published evaluation rubrics.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 140px), 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { label: 'Event Format', val: '100% Online / Virtual' },
              { label: 'Registration', val: 'Online Open' },
              { label: 'Participation', val: 'Worldwide Open' },
              { label: 'Team Size', val: '1 to 5 Members' },
            ].map((stat, i) => (
              <div key={i} style={{ background: 'rgba(0,220,180,0.05)', padding: '1rem', borderRadius: '0.85rem', border: '1px solid rgba(0,220,180,0.15)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#8a8a9a', textTransform: 'uppercase' }}>{stat.label}</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#00dcb4', marginTop: '0.2rem' }}>{stat.val}</div>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.75rem' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#e8e8ee', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Core Institutional Objectives
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '0.85rem' }}>
              {[
                { title: 'Applied Industrial Innovation', desc: 'Promoting functional software and hardware architectures that solve real operational hurdles in modern production lines.' },
                { title: 'Industry–Academia Collaboration', desc: 'Bridging university research breakthroughs with practical industrial requirements through structured mentorship.' },
                { title: 'Emerging Technology Validation', desc: 'Testing real-world feasibility of Edge AI, OT cybersecurity defenses, cobot workflows, and digital twins.' },
                { title: 'Prototype Development', desc: 'Guiding teams from conceptual design to working open-source code repositories with reproducible setup guides.' },
                { title: 'Interdisciplinary Knowledge Exchange', desc: 'Connecting engineers, clinical health scientists, sustainability researchers, and economists.' },
                { title: 'Objective Rubric-Based Evaluation', desc: 'Eliminating subjective scoring through transparent, pre-published criteria and independent track jury review.' }
              ].map((obj, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem 1.15rem', borderRadius: '0.85rem', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#00dcb4', marginBottom: '0.3rem' }}>{obj.title}</div>
                  <div style={{ fontSize: '0.84rem', color: '#9090a0', lineHeight: 1.5 }}>{obj.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT TECHRYONGLOBAL ── */}
      <section id="about-techryonglobal">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Globe size={18} style={{ color: '#64b4d2' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Organized by TechryonGlobal</h3>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: 'clamp(1.25rem, 3.5vw, 2rem)', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#a0a0b0', marginBottom: '1.25rem' }}>
            <strong>TechryonGlobal</strong> is an enterprise technology consulting and technical events platform dedicated to fostering cross-border research, applied learning, and technology commercialization through international conferences, hackathons, and technical symposia.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#a0a0b0', marginBottom: '1.5rem' }}>
            We connect developers, research scientists, university professors, and industry specialists to solve complex technical challenges using modern computing, artificial intelligence, and robust software engineering.
          </p>
          
          <div style={{ background: 'rgba(100,180,210,0.04)', padding: '1.25rem', borderRadius: '1rem', border: '1px solid rgba(100,180,210,0.18)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: '#64b4d2', fontWeight: 800, letterSpacing: '0.06em' }}>Registered Office</div>
              <div style={{ fontSize: '0.88rem', color: '#ffffff', fontWeight: 600, marginTop: '0.25rem', lineHeight: 1.5 }}>
                B1-501, Nandan Acura, Laxman Nagar,<br />
                Baner, Pune – 411045, Maharashtra, India
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: '#64b4d2', fontWeight: 800, letterSpacing: '0.06em' }}>Official Correspondence</div>
              <div style={{ fontSize: '0.88rem', color: '#ffffff', fontWeight: 600, marginTop: '0.25rem', lineHeight: 1.5 }}>
                <a href="mailto:inquiries@techryonglobal.com" style={{ color: '#00dcb4', textDecoration: 'none' }}>inquiries@techryonglobal.com</a><br />
                Phone: <a href="tel:+919322407176" style={{ color: '#ffffff', textDecoration: 'none' }}>+91 9322407176</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PREVIOUS INITIATIVES & TRACK RECORD ── */}
      <section id="track-record">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Building size={18} style={{ color: '#00dcb4' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>
            Documented Technical Initiatives & Track Record
          </h3>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: 'clamp(1.25rem, 3.5vw, 2rem)', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ fontSize: '0.96rem', lineHeight: 1.7, color: '#a0a0b0', marginBottom: '1.5rem' }}>
            TechryonGlobal convenes academic researchers, engineering leaders, and innovators through structured international technical conferences and collaborative hackathons. Our established track record includes:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.25rem' }}>
            <div style={{ background: 'rgba(0,220,180,0.04)', padding: '1.35rem', borderRadius: '1rem', border: '1px solid rgba(0,220,180,0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#00dcb4', textTransform: 'uppercase', letterSpacing: '0.08em', background: 'rgba(0,220,180,0.12)', padding: '0.2rem 0.6rem', borderRadius: '1rem' }}>
                  Completed Initiative
                </span>
                <span style={{ fontSize: '0.82rem', color: '#9090a0', fontWeight: 600 }}>9 August 2026</span>
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', margin: '0 0 0.5rem' }}>
                ICCINT 2026
              </h4>
              <div style={{ fontSize: '0.85rem', color: '#00dcb4', fontWeight: 600, marginBottom: '0.65rem' }}>
                International Conference on Connected Intelligence and Next-Generation Technologies
              </div>
              <p style={{ fontSize: '0.84rem', color: '#9090a0', lineHeight: 1.6, margin: 0 }}>
                Successfully convened international researchers, faculty scholars, and industry professionals. Explored distributed intelligence, edge architectures, cloud systems, and applied artificial intelligence with peer-reviewed presentations.
              </p>
            </div>

            <div style={{ background: 'rgba(100,180,210,0.04)', padding: '1.35rem', borderRadius: '1rem', border: '1px solid rgba(100,180,210,0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64b4d2', textTransform: 'uppercase', letterSpacing: '0.08em', background: 'rgba(100,180,210,0.12)', padding: '0.2rem 0.6rem', borderRadius: '1rem' }}>
                  Technical Summit
                </span>
                <span style={{ fontSize: '0.82rem', color: '#9090a0', fontWeight: 600 }}>2026 Programme</span>
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', margin: '0 0 0.5rem' }}>
                INFRATECH WORLD 2026
              </h4>
              <div style={{ fontSize: '0.85rem', color: '#64b4d2', fontWeight: 600, marginBottom: '0.65rem' }}>
                Global Forum on Smart Infrastructure, Resilient Cities & Scalable Cloud
              </div>
              <p style={{ fontSize: '0.84rem', color: '#9090a0', lineHeight: 1.6, margin: 0 }}>
                Dedicated technical sessions examining smart infrastructure resilience, high-throughput cloud networks, sensor networks, and sustainable civil computing systems.
              </p>
            </div>

            <div style={{ background: 'rgba(210,170,100,0.04)', padding: '1.35rem', borderRadius: '1rem', border: '1px solid rgba(210,170,100,0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#d2aa64', textTransform: 'uppercase', letterSpacing: '0.08em', background: 'rgba(210,170,100,0.12)', padding: '0.2rem 0.6rem', borderRadius: '1rem' }}>
                  Engineering Summit
                </span>
                <span style={{ fontSize: '0.82rem', color: '#9090a0', fontWeight: 600 }}>2026 Programme</span>
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', margin: '0 0 0.5rem' }}>
                CORETECH SUMMIT 2026
              </h4>
              <div style={{ fontSize: '0.85rem', color: '#d2aa64', fontWeight: 600, marginBottom: '0.65rem' }}>
                Advanced Summit on Core Systems Architecture & Cyber-Physical Engineering
              </div>
              <p style={{ fontSize: '0.84rem', color: '#9090a0', lineHeight: 1.6, margin: 0 }}>
                Convening system architects and software engineers addressing low-latency microservices, high-availability database architectures, and hardware-software integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INNOVATION FORUM ── */}
      <section id="innovation-forum">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Lightbulb size={18} style={{ color: '#b46ed2' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Innovation Forum</h3>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: 'clamp(1.25rem, 3.5vw, 2rem)', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#a0a0b0', marginBottom: '1.5rem' }}>
            The Innovation Forum serves as an international platform where participants engage with global experts, researchers, entrepreneurs, and industry leaders through insightful discussions on emerging technologies, innovation ecosystems, digital transformation, entrepreneurship, artificial intelligence, sustainability, and future technologies.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))', gap: '1rem' }}>
            {[
              'Keynote Sessions',
              'Expert Talks',
              'Industry Panel Discussions',
              'Startup Innovation Showcase',
              'Research Presentations',
              'Networking Sessions',
              'Future Technology Discussions'
            ].map((item, i) => (
              <div key={i} style={{
                background: 'rgba(180,110,210,0.05)', padding: '1rem', borderRadius: '0.75rem',
                border: '1px solid rgba(180,110,210,0.15)', display: 'flex', alignItems: 'center', gap: '0.75rem'
              }}>
                <CheckCircle size={16} style={{ color: '#b46ed2', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e8e8ee' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GLOBAL HACKATHON ── */}
      <section id="global-hackathon">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Laptop size={18} style={{ color: '#00dcb4' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Global Hackathon</h3>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: 'clamp(1.25rem, 3.5vw, 2rem)', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#a0a0b0' }}>
            The Global Hackathon challenges participants to transform innovative ideas into practical solutions by leveraging Artificial Intelligence and emerging technologies. Participants will collaborate individually or in teams to solve real-world problems while receiving guidance from mentors and evaluation from an international panel of judges.
          </p>
        </div>
      </section>

      {/* ── THEME & TRACKS ── */}
      <section id="tracks">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Target size={18} style={{ color: '#d2aa64' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Industrial Challenge Tracks</h3>
        </div>
        <div style={{
          background: 'linear-gradient(135deg, rgba(210,170,100,0.1), transparent)',
          padding: 'clamp(1.25rem, 3.5vw, 1.5rem) clamp(1rem, 3.5vw, 2rem)', borderRadius: '1rem', border: '1px solid rgba(210,170,100,0.2)',
          marginBottom: '2rem'
        }}>
          <h4 style={{ fontSize: '1.15rem', color: '#d2aa64', fontWeight: 700, marginBottom: '0.4rem' }}>
            Theme: Industry 5.0, Smart Manufacturing & Industrial AI
          </h4>
          <p style={{ fontSize: '0.92rem', color: '#9090a0', lineHeight: 1.6, margin: 0 }}>
            Participants can select from 7 specialized industrial tracks. All solutions should emphasize scalability, reliability, safety compliance, and direct applicability to modern industrial environments.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '1.25rem' }}>
          {[
            { 
              title: 'Industry 5.0 & Human-Centric Automation', 
              desc: 'Develop adaptive collaborative robotic systems (Cobots), operator-augmented wearable systems, and ergonomic robotic workcells combining human dexterity with machine precision.',
              icon: Factory,
              color: '#00dcb4'
            },
            { 
              title: 'Industrial IoT, Sensor Telemetry & Edge AI', 
              desc: 'Design low-latency edge sensor nodes, multi-protocol industrial gateways (OPC-UA/MQTT), and on-device neural inferencing for real-time factory floor anomaly detection.',
              icon: Cpu,
              color: '#64b4d2'
            },
            { 
              title: 'Digital Twins & Predictive Maintenance (PdM)', 
              desc: 'Build real-time virtual factory replicas, RUL (Remaining Useful Life) prognostic models, vibration spectrum analysis, and autonomous maintenance work-order generators.',
              icon: Layers,
              color: '#d2aa64'
            },
            { 
              title: 'Autonomous Mobile Robots (AMR) & Intralogistics', 
              desc: 'Create intelligent path-planning algorithms, multi-robot swarm fleet coordination, automated docking, and SLAM navigation for high-density industrial warehouse logistics.',
              icon: Rocket,
              color: '#b46ed2'
            },
            { 
              title: 'Industrial Cybersecurity & OT/SCADA Defense', 
              desc: 'Architect zero-trust security frameworks for operational technology, PLC firmware attestation, Modbus protocol fuzzing defense, and air-gapped forensic monitoring.',
              icon: ShieldCheck,
              color: '#d26e6e'
            },
            { 
              title: 'Sustainable Manufacturing & Energy Optimization', 
              desc: 'Build intelligent energy auditing pipelines, carbon footprint calculators for assembly lines, scrap reduction algorithms, and industrial heat recovery automation.',
              icon: Zap,
              color: '#00dcb4'
            },
            { 
              title: 'Generative AI & LLMs for Industrial Engineering', 
              desc: 'Harness LLMs and generative design to auto-synthesize PLC ladder logic, parse industrial schematics, accelerate CAD drafting, and assist maintenance field technicians.',
              icon: BrainCircuit,
              color: '#64b4d2'
            }
          ].map((track, i) => {
            const Icon = track.icon;
            return (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '1.25rem',
                border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', gap: '0.75rem',
                transition: 'all 0.25s ease'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ padding: '0.6rem', borderRadius: '0.75rem', background: `${track.color}15`, border: `1px solid ${track.color}30` }}>
                    <Icon size={20} style={{ color: track.color }} />
                  </div>
                  <h4 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#e8e8ee', margin: 0 }}>{track.title}</h4>
                </div>
                <p style={{ fontSize: '0.86rem', color: '#9090a0', lineHeight: 1.6, margin: 0 }}>{track.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── EVENT HIGHLIGHTS ── */}
      <section id="highlights">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <CheckCircle size={18} style={{ color: '#64b4d2' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Event Highlights</h3>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: '1.25rem' }}>
          {[
            { title: 'Global Innovation Forum', desc: 'Interact with global experts through keynote sessions, panel discussions, and networking opportunities.', icon: Lightbulb, glow: 'rgba(180,110,210,0.1)', color: '#b46ed2' },
            { title: 'Global Hackathon', desc: 'Develop innovative AI-powered solutions addressing real-world challenges.', icon: Laptop, glow: 'rgba(0,220,180,0.1)', color: '#00dcb4' },
            { title: 'International Speakers', desc: 'Hear from distinguished researchers, entrepreneurs, and technology leaders.', icon: Mic, glow: 'rgba(100,180,210,0.1)', color: '#64b4d2' },
            { title: 'Technical Jury', desc: 'Receive rubric-based evaluation from qualified international academicians.', icon: GraduationCap, glow: 'rgba(210,170,100,0.1)', color: '#d2aa64' },
            { title: 'Expert Mentorship', desc: 'Learn directly from experienced professionals and domain researchers.', icon: Users, glow: 'rgba(210,110,110,0.1)', color: '#d26e6e' },
            { title: 'Global Networking', desc: 'Connect with innovators and peer engineers from around the world.', icon: Network, glow: 'rgba(100,200,200,0.1)', color: '#64c8c8' },
            { title: 'Verified Certificates', desc: 'Receive official certificates with unique verification IDs and portal validation.', icon: Award, glow: 'rgba(250,204,21,0.1)', color: '#facc15' },
            { title: 'Worldwide Participation', desc: 'Open to participants across all countries.', icon: Globe, glow: 'rgba(100,180,210,0.1)', color: '#64b4d2' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '1rem',
                border: `1px solid rgba(255,255,255,0.1)`, display: 'flex', alignItems: 'flex-start', gap: '1rem',
                boxShadow: `inset 0 0 15px ${item.glow}`, transition: 'transform 0.2s', cursor: 'pointer'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ padding: '0.6rem', borderRadius: '0.5rem', background: item.glow, flexShrink: 0 }}>
                  <Icon size={24} style={{ color: item.color }} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#e8e8ee', marginBottom: '0.4rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#9090a0', lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── ELIGIBILITY ── */}
      <section id="eligibility">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <UserCheck size={18} style={{ color: '#00dcb4' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Eligibility & Team Size</h3>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: 'clamp(1.25rem, 3.5vw, 1.5rem)', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 style={{ fontSize: '1.05rem', color: '#e8e8ee', fontWeight: 700, marginBottom: '1rem' }}>Eligible Participants</h4>
            <p style={{ fontSize: '0.95rem', color: '#a0a0b0', marginBottom: '1rem' }}>The event is open to participants worldwide, including:</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '0.5rem' }}>
              {[
                'Developers', 'Engineers', 'Researchers', 'Professors',
                'Research Scholars', 'Faculty Members', 'Industry Professionals',
                'Entrepreneurs', 'Startups', 'AI Specialists', 'Product Designers',
                'Data Scientists', 'Innovation Communities', 'Technology Teams'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#9090a0' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00dcb4', flexShrink: 0 }} /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: 'linear-gradient(135deg, rgba(210,170,100,0.1), rgba(180,140,80,0.02))', padding: 'clamp(1.25rem, 3.5vw, 1.5rem)', borderRadius: '1.5rem', border: '1px solid rgba(210,170,100,0.2)' }}>
            <h4 style={{ fontSize: '1.05rem', color: '#d2aa64', fontWeight: 700, marginBottom: '1rem' }}>Team Size</h4>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#e8e8ee', marginBottom: '0.5rem' }}>1–5</div>
            <div style={{ fontSize: '1.1rem', color: '#a0a0b0', fontWeight: 600, marginBottom: '1rem' }}>Members per team</div>
            <p style={{ fontSize: '0.95rem', color: '#a0a0b0', lineHeight: 1.6 }}>
              You can participate as an individual or form a team of up to 5 members. Collaboration is highly encouraged!
            </p>
          </div>
        </div>
      </section>

      {/* ── INTERNATIONAL JUDGES PANEL ── */}
      <section id="judges" style={{ marginBottom: '4.5rem' }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem',
          paddingBottom: '1.25rem', borderBottom: '1px solid rgba(0, 220, 180, 0.25)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '52px', height: '52px', borderRadius: '14px',
              background: 'rgba(0, 220, 180, 0.15)', border: '1.5px solid rgba(0, 220, 180, 0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 25px rgba(0, 220, 180, 0.25)', flexShrink: 0
            }}>
              <Users size={26} style={{ color: '#00dcb4' }} />
            </div>
            <div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 800, letterSpacing: '0.02em', color: '#ffffff', margin: 0, lineHeight: 1.2 }}>
                Technical Jury & Evaluation Council
              </h2>
              <div style={{ fontSize: '0.85rem', color: '#00dcb4', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                Track-Wise Independent Technical Assessment
              </div>
            </div>
          </div>
          <span style={{
            fontSize: '0.82rem', color: '#00dcb4', fontWeight: 800,
            background: 'rgba(0,220,180,0.12)', padding: '0.45rem 1.1rem',
            borderRadius: '2rem', border: '1.5px solid rgba(0,220,180,0.4)',
            letterSpacing: '0.06em', textTransform: 'uppercase',
            boxShadow: '0 0 20px rgba(0,220,180,0.2)'
          }}>
            ★ Rubric-Based Technical Evaluation
          </span>
        </div>

        <p style={{ fontSize: '1.02rem', color: '#cbd5e1', marginBottom: '1.5rem', lineHeight: 1.7, fontWeight: 500 }}>
          Our international technical jury brings together experienced industrial advisors, lead research scientists, university professors, and engineering specialists who conduct objective evaluations against a pre-published technical rubric:
        </p>

        {/* Technical Jury Transparency Notice */}
        <div style={{
          background: 'rgba(0,220,180,0.06)',
          border: '1px solid rgba(0,220,180,0.25)',
          borderRadius: '1rem',
          padding: '1rem 1.25rem',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '0.75rem'
        }}>
          <Info size={18} style={{ color: '#00dcb4', flexShrink: 0, marginTop: '2px' }} />
          <div style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.6 }}>
            <strong style={{ color: '#00dcb4' }}>Technical Jury Transparency & Consent Notice:</strong> All confirmed evaluation council members are listed with their explicit prior consent. Each jury member assesses submissions strictly within their assigned technical and academic domain track to ensure rigorous, unbiased, and qualified evaluation.
          </div>
        </div>

        <div className="event-grid-3col">
          {judgesList.map((jdg, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.035)',
              borderRadius: '1.4rem',
              border: `1.5px solid ${jdg.photo ? `${jdg.color}55` : 'rgba(255,255,255,0.1)'}`,
              padding: 'clamp(1.1rem, 2.2vw, 1.45rem)',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: `0 10px 30px rgba(0,0,0,0.45), inset 0 0 24px ${jdg.glow}`,
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = jdg.color; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = jdg.photo ? `${jdg.color}55` : 'rgba(255,255,255,0.1)'; }}
            >
              {/* Standardized Portrait Photo Frame at TOP */}
              <div style={{
                width: '100%',
                maxWidth: '240px',
                aspectRatio: '3 / 4',
                margin: '0 auto 1.25rem',
                borderRadius: '1.1rem',
                border: `2.5px solid ${jdg.color}`,
                overflow: 'hidden',
                boxShadow: `0 12px 30px rgba(0,0,0,0.6), 0 0 22px ${jdg.glow}`,
                background: '#0d131d',
                position: 'relative',
                flexShrink: 0
              }}>
                {jdg.photo ? (
                  <img
                    src={jdg.photo}
                    alt={jdg.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: jdg.photoPosition || 'center top',
                      transform: jdg.photoScale ? `scale(${jdg.photoScale})` : 'none',
                      transition: 'transform 0.4s ease'
                    }}
                  />
                ) : (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    background: `linear-gradient(135deg, ${jdg.color}35, ${jdg.color}15)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 900, fontSize: '3rem', color: jdg.color
                  }}>
                    {jdg.initials}
                  </div>
                )}
              </div>

              {/* Badge */}
              <div style={{ marginBottom: '0.65rem' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  fontSize: '0.72rem', fontWeight: 800, color: jdg.color,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  background: `${jdg.color}15`, padding: '0.22rem 0.7rem',
                  borderRadius: '1rem', border: `1px solid ${jdg.color}35`
                }}>
                  ★ {jdg.badge || 'Technical Jury Member'}
                </div>
              </div>

              {/* Basic Info: Name, Role, Org & Location */}
              <div style={{ marginBottom: '0.9rem' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: 0, lineHeight: 1.3 }}>
                  {jdg.name}
                </h4>
                <div style={{ fontSize: '0.92rem', color: jdg.color, fontWeight: 800, marginTop: '0.35rem', lineHeight: 1.4 }}>
                  {jdg.role}
                </div>
                <div style={{ fontSize: '0.84rem', color: '#cbd5e1', fontWeight: 700, marginTop: '0.3rem' }}>
                  {[jdg.org, jdg.location].filter(Boolean).join(' • ')}
                </div>
              </div>

              {/* Assigned Jury Evaluation Track */}
              <div style={{
                background: `${jdg.color}14`,
                border: `1px solid ${jdg.color}45`,
                borderRadius: '0.75rem',
                padding: '0.65rem 0.85rem',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem'
              }}>
                <Scale size={16} style={{ color: jdg.color, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', color: jdg.color, fontWeight: 800, letterSpacing: '0.07em' }}>
                    {jdg.sessionLabel || 'Assigned Evaluation Track'}
                  </div>
                  <div style={{ fontSize: '0.84rem', color: '#ffffff', fontWeight: 700, marginTop: '0.15rem', lineHeight: 1.35 }}>
                    {jdg.evaluationTrack}
                  </div>
                </div>
              </div>

              {/* Domain Evaluation Focus & Bio */}
              <div style={{
                background: 'rgba(255,255,255,0.03)', padding: '1rem 1.15rem',
                borderRadius: '0.85rem', borderLeft: `3.5px solid ${jdg.color}`,
                marginBottom: '1.25rem', flexGrow: 1
              }}>
                <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: '#94a3b8', fontWeight: 800, letterSpacing: '0.06em' }}>
                  Domain Evaluation Focus
                </div>
                <div style={{ fontSize: '0.94rem', color: '#f8fafc', fontWeight: 700, marginTop: '0.3rem', lineHeight: 1.45 }}>
                  {jdg.focus}
                </div>
                {jdg.bio && (
                  <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: 1.6, marginTop: '0.65rem', marginBottom: 0, fontWeight: 500 }}>
                    {jdg.bio}
                  </p>
                )}
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: 'auto' }}>
                {jdg.tags.map((t, idx) => (
                  <span key={idx} style={{
                    fontSize: '0.74rem', padding: '0.25rem 0.65rem', borderRadius: '1rem',
                    background: 'rgba(255,255,255,0.06)', color: '#cbd5e1',
                    border: '1px solid rgba(255,255,255,0.1)', fontWeight: 700
                  }}>
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DETAILED JUDGING & EVALUATION FRAMEWORK ── */}
      <section id="judging-framework" style={{ marginBottom: '4.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Scale size={18} style={{ color: '#00dcb4' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>
            Judging & Evaluation Framework
          </h3>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: 'clamp(1.25rem, 3.5vw, 2rem)', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ fontSize: '0.96rem', lineHeight: 1.7, color: '#a0a0b0', marginBottom: '1.5rem' }}>
            To uphold academic integrity and defensible objectivity, all hackathon submissions are evaluated against a standardized 100-point rubric. Each submission is scored independently by designated jury members assigned to the relevant technical track:
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(0,220,180,0.3)', background: 'rgba(0,220,180,0.05)' }}>
                  <th style={{ padding: '0.9rem 1rem', color: '#00dcb4', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Evaluation Criterion</th>
                  <th style={{ padding: '0.9rem 1rem', color: '#00dcb4', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.06em', width: '100px', textAlign: 'center' }}>Weight</th>
                  <th style={{ padding: '0.9rem 1rem', color: '#00dcb4', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Evaluation Scope & Rubric Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { criterion: 'Technical Depth & Architecture', weight: '20%', desc: 'Soundness of system architecture, code clarity, schema design, modularity, and engineering maturity.' },
                  { criterion: 'Industrial Applicability & Impact', weight: '20%', desc: 'Direct relevance to shop-floor manufacturing, supply chain efficiency, defect reduction, or plant operations.' },
                  { criterion: 'Scalability & System Architecture', weight: '15%', desc: 'Capacity to scale across distributed IoT nodes, multi-facility environments, or high-throughput telemetry streams.' },
                  { criterion: 'Implementation Feasibility & Viability', weight: '15%', desc: 'Real-world deployment practicality, economic feasibility, hardware cost envelope, and integration ease.' },
                  { criterion: 'AI / Emerging Tech Engineering', weight: '15%', desc: 'Effective application of neural inferencing, prognostic models, computer vision, or LLM-driven automation.' },
                  { criterion: 'Safety, Security (OT/SCADA) & Reliability', weight: '10%', desc: 'OT network isolation, zero-trust hygiene, fail-safe mechanisms, data privacy, and operational resilience.' },
                  { criterion: 'Prototype Demonstration & Pitch', weight: '5%', desc: 'Completeness of the running demonstration, documentation clarity in README, and concise video walkthrough.' },
                ].map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: idx % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                    <td style={{ padding: '0.85rem 1rem', color: '#ffffff', fontWeight: 600, fontSize: '0.9rem' }}>{row.criterion}</td>
                    <td style={{ padding: '0.85rem 1rem', color: '#00dcb4', fontWeight: 800, fontSize: '0.95rem', textAlign: 'center' }}>{row.weight}</td>
                    <td style={{ padding: '0.85rem 1rem', color: '#9090a0', fontSize: '0.85rem', lineHeight: 1.5 }}>{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ background: 'rgba(0,220,180,0.04)', padding: '1rem 1.25rem', borderRadius: '0.85rem', border: '1px solid rgba(0,220,180,0.15)', fontSize: '0.86rem', color: '#cbd5e1', lineHeight: 1.6 }}>
            <strong>Evaluation Process:</strong> Preliminary scoring is conducted asynchronously through code and artifact inspection. The top finalists proceed to live virtual evaluation rounds where jury consensus determines track winners.
          </div>
        </div>
      </section>

      {/* ── FEATURED KEYNOTE & EXPERT SPEAKERS ── */}
      <section id="speakers" style={{ marginBottom: '4.5rem' }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem',
          paddingBottom: '1.25rem', borderBottom: '1px solid rgba(100, 180, 210, 0.25)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '52px', height: '52px', borderRadius: '14px',
              background: 'rgba(100, 180, 210, 0.15)', border: '1.5px solid rgba(100, 180, 210, 0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 25px rgba(100, 180, 210, 0.25)', flexShrink: 0
            }}>
              <Mic size={26} style={{ color: '#64b4d2' }} />
            </div>
            <div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 800, letterSpacing: '0.02em', color: '#ffffff', margin: 0, lineHeight: 1.2 }}>
                Featured Keynote & Expert Speakers
              </h2>
              <div style={{ fontSize: '0.85rem', color: '#64b4d2', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                Distinguished Academicians & Industry Leaders
              </div>
            </div>
          </div>
          <span style={{
            fontSize: '0.82rem', color: '#64b4d2', fontWeight: 800,
            background: 'rgba(100,180,210,0.12)', padding: '0.45rem 1.1rem',
            borderRadius: '2rem', border: '1.5px solid rgba(100,180,210,0.4)',
            letterSpacing: '0.06em', textTransform: 'uppercase',
            boxShadow: '0 0 20px rgba(100,180,210,0.2)'
          }}>
            ★ Confirmed Speakers & Academicians
          </span>
        </div>
        
        <p style={{ fontSize: '1.02rem', color: '#cbd5e1', marginBottom: '1.5rem', lineHeight: 1.7, fontWeight: 500 }}>
          International researchers, university faculty, and industry leaders confirmed to deliver technical keynote addresses and thematic sessions during the online hackathon and innovation forum:
        </p>

        {/* Confirmed Speakers Transparency Notice */}
        <div style={{
          background: 'rgba(100,180,210,0.06)',
          border: '1px solid rgba(100,180,210,0.25)',
          borderRadius: '1rem',
          padding: '1rem 1.25rem',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '0.75rem'
        }}>
          <Info size={18} style={{ color: '#64b4d2', flexShrink: 0, marginTop: '2px' }} />
          <div style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.6 }}>
            <strong style={{ color: '#64b4d2' }}>Confirmed Speakers Notice:</strong> Confirmed keynote speakers and subject-matter experts are listed with their direct confirmation. Additional speakers, mentors, and panelists are announced progressively as formal academic confirmations are finalized.
          </div>
        </div>

        <div className="event-grid-3col">
          {speakersList.map((spk, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.035)',
              borderRadius: '1.4rem',
              border: `1.5px solid ${spk.confirmed ? `${spk.color}55` : 'rgba(255,255,255,0.08)'}`,
              padding: 'clamp(1.1rem, 2.2vw, 1.45rem)',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: `0 10px 30px rgba(0,0,0,0.45), inset 0 0 24px ${spk.glow}`,
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = spk.color; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = spk.confirmed ? `${spk.color}55` : 'rgba(255,255,255,0.08)'; }}
            >
              {/* Standardized Portrait Photo Frame at TOP */}
              <div style={{
                width: '100%',
                maxWidth: '240px',
                aspectRatio: '3 / 4',
                margin: '0 auto 1.25rem',
                borderRadius: '1.1rem',
                border: `2.5px solid ${spk.color}`,
                overflow: 'hidden',
                boxShadow: `0 12px 30px rgba(0,0,0,0.6), 0 0 22px ${spk.glow}`,
                background: '#0d131d',
                position: 'relative',
                flexShrink: 0
              }}>
                {spk.photo ? (
                  <img
                    src={spk.photo}
                    alt={spk.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: spk.photoPosition || 'center top',
                      transform: spk.photoScale ? `scale(${spk.photoScale})` : 'none',
                      transition: 'transform 0.4s ease'
                    }}
                  />
                ) : (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    background: `linear-gradient(135deg, ${spk.color}35, ${spk.color}15)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 900, fontSize: '3.2rem', color: spk.color,
                    boxShadow: `inset 0 0 24px ${spk.glow}`
                  }}>
                    {spk.initials}
                  </div>
                )}
              </div>

              {/* Badge */}
              <div style={{ marginBottom: '0.65rem' }}>
                <span style={{
                  fontSize: '0.72rem', fontWeight: 800, color: spk.color,
                  background: `${spk.color}15`, border: `1.5px solid ${spk.color}35`,
                  padding: '0.22rem 0.7rem', borderRadius: '1rem',
                  display: 'inline-flex', alignItems: 'center', gap: '0.35rem'
                }}>
                  <CheckCircle size={11} /> {spk.confirmed ? 'Confirmed Keynote Speaker' : 'Keynote Speaker'}
                </span>
              </div>

              {/* Basic Info: Name, Role, Org & Location */}
              <div style={{ marginBottom: '0.9rem' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: 0, lineHeight: 1.3 }}>
                  {spk.name}
                </h4>
                <div style={{ fontSize: '0.92rem', color: spk.color, fontWeight: 800, marginTop: '0.35rem', lineHeight: 1.4 }}>
                  {spk.role}
                </div>
                <div style={{ fontSize: '0.84rem', color: '#cbd5e1', fontWeight: 700, marginTop: '0.3rem' }}>
                  {[spk.org, spk.location].filter(Boolean).join(' • ')}
                </div>
                {spk.orcid && (
                  <div style={{ marginTop: '0.45rem' }}>
                    <a
                      href={`https://orcid.org/${spk.orcid}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '0.74rem', color: '#00dcb4', textDecoration: 'none',
                        display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                        background: 'rgba(0,220,180,0.06)', padding: '0.18rem 0.55rem',
                        borderRadius: '0.4rem', border: '1px solid rgba(0,220,180,0.25)',
                        fontWeight: 700
                      }}
                    >
                      <span style={{ color: '#a6ce39', fontWeight: 900 }}>iD</span> ORCID: {spk.orcid} <ExternalLink size={10} />
                    </a>
                  </div>
                )}
              </div>

              {/* Keynote Session & Topic */}
              <div style={{
                background: `${spk.color}14`,
                border: `1px solid ${spk.color}45`,
                borderRadius: '0.75rem',
                padding: '0.65rem 0.85rem',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem'
              }}>
                <Mic size={16} style={{ color: spk.color, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', color: spk.color, fontWeight: 800, letterSpacing: '0.07em' }}>
                    {spk.confirmed ? 'Confirmed Keynote Session' : 'Keynote Address'}
                  </div>
                  <div style={{ fontSize: '0.86rem', color: '#ffffff', fontWeight: 700, marginTop: '0.15rem', lineHeight: 1.35, fontStyle: 'italic' }}>
                    "{spk.topic}"
                  </div>
                </div>
              </div>

              {/* Professional Biography & Expertise */}
              <div style={{
                background: 'rgba(255,255,255,0.03)', padding: '1rem 1.15rem',
                borderRadius: '0.85rem', borderLeft: `3.5px solid ${spk.color}`,
                marginBottom: '1.25rem', flexGrow: 1
              }}>
                <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: '#94a3b8', fontWeight: 800, letterSpacing: '0.06em' }}>
                  Professional Biography & Expertise
                </div>
                {spk.bio && (
                  <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: 1.6, marginTop: '0.45rem', marginBottom: 0, fontWeight: 500 }}>
                    {spk.bio}
                  </p>
                )}
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: 'auto' }}>
                {spk.tags.map((t, idx) => (
                  <span key={idx} style={{
                    fontSize: '0.74rem', padding: '0.25rem 0.65rem', borderRadius: '1rem',
                    background: 'rgba(255,255,255,0.06)', color: '#cbd5e1',
                    border: '1px solid rgba(255,255,255,0.1)', fontWeight: 700
                  }}>
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* ── INNOVATION FORUM TOPICS ── */}
      <section id="forum-topics">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <BookOpen size={18} style={{ color: '#b46ed2' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Innovation Forum Topics</h3>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {[
            'Artificial Intelligence', 'Generative AI', 'Digital Transformation', 'Cybersecurity', 
            'Healthcare Innovation', 'Smart Cities', 'Education Technology', 'Future of Work', 
            'Sustainable Technologies', 'FinTech Innovation', 'Research Commercialization', 
            'Entrepreneurship', 'Innovation Ecosystems'
          ].map((topic, i) => (
            <span key={i} style={{
              display: 'inline-flex', alignItems: 'center', padding: '0.5rem 1rem', 
              borderRadius: '2rem', background: 'rgba(180,110,210,0.07)', 
              border: '1px solid rgba(180,110,210,0.18)', color: '#b46ed2',
              fontSize: '0.85rem', fontWeight: 600
            }}>
              {topic}
            </span>
          ))}
        </div>
      </section>

      {/* ── EVENT GOVERNANCE & ETHICS ── */}
      <section id="governance" style={{ marginBottom: '4.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <ShieldCheck size={18} style={{ color: '#d2aa64' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>
            Event Governance, Independence & Ethics Policy
          </h3>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: 'clamp(1.25rem, 3.5vw, 2rem)', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.25rem' }}>
            <div style={{ background: 'rgba(210,170,100,0.04)', padding: '1.25rem', borderRadius: '1rem', border: '1px solid rgba(210,170,100,0.18)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                <Shield size={18} style={{ color: '#d2aa64' }} />
                <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>Jury Independence & Recusal</h4>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#9090a0', lineHeight: 1.6, margin: 0 }}>
                Jury members must disclose any institutional, commercial, or personal relationship with competing teams. Judges are strictly recused from scoring entries submitted by their own institutions or past collaborators.
              </p>
            </div>

            <div style={{ background: 'rgba(0,220,180,0.04)', padding: '1.25rem', borderRadius: '1rem', border: '1px solid rgba(0,220,180,0.18)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                <CheckSquare size={18} style={{ color: '#00dcb4' }} />
                <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>Submission Integrity & Originality</h4>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#9090a0', lineHeight: 1.6, margin: 0 }}>
                All code submissions must represent original work created during the hackathon sprint or clearly document pre-existing open-source libraries. Submissions containing plagiarized code will be disqualified immediately.
              </p>
            </div>

            <div style={{ background: 'rgba(100,180,210,0.04)', padding: '1.25rem', borderRadius: '1rem', border: '1px solid rgba(100,180,210,0.18)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                <FileText size={18} style={{ color: '#64b4d2' }} />
                <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>Evaluation Confidentiality</h4>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#9090a0', lineHeight: 1.6, margin: 0 }}>
                Individual rubric scores and confidential evaluation notes remain sealed within the secretariat. Public feedback is provided as aggregated constructive technical comments during the valedictory summary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTELLECTUAL PROPERTY & SUBMISSION POLICY ── */}
      <section id="ip-policy" style={{ marginBottom: '4.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <FileCheck size={18} style={{ color: '#00dcb4' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>
            Intellectual Property & Submission Policy
          </h3>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: 'clamp(1.25rem, 3.5vw, 2rem)', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(0,220,180,0.1), rgba(0,180,220,0.03))',
            border: '1.5px solid rgba(0,220,180,0.3)',
            borderRadius: '1rem',
            padding: '1.25rem 1.5rem',
            marginBottom: '1.5rem'
          }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#00dcb4', margin: '0 0 0.5rem' }}>
              ✓ 100% Participant IP Ownership
            </h4>
            <p style={{ fontSize: '0.92rem', color: '#e8e8ee', lineHeight: 1.65, margin: 0 }}>
              Participants retain 100% ownership of their original intellectual property, software code, models, and architectures. Submission to the TechryonGlobal Industrial Hackathon does not transfer any proprietary rights, patent rights, or copyright to the organizers, sponsors, or jury.
            </p>
          </div>

          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#e8e8ee', marginBottom: '0.75rem' }}>
            Submission Deliverables Requirement:
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1rem' }}>
            {[
              { title: 'Public or Private GitHub Repo', desc: 'Well-structured source code with clear commit history matching the hackathon sprint window.' },
              { title: 'README & Setup Guide', desc: 'Step-by-step instructions enabling judges to replicate the build, run tests, and verify dependencies.' },
              { title: 'System Architecture Diagram', desc: 'Visual diagram depicting data flow, protocol choices (MQTT, OPC-UA, REST), and model integration.' },
              { title: '5-Minute Video Demonstration', desc: 'Walkthrough demonstrating working software/hardware telemetry, edge inference, or simulation.' }
            ].map((item, idx) => (
              <div key={idx} style={{ background: 'rgba(255,255,255,0.025)', padding: '1rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.3rem' }}>{item.title}</div>
                <div style={{ fontSize: '0.82rem', color: '#9090a0', lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTITUTIONAL COLLABORATION & ECOSYSTEM REFERENCE ── */}
      <section id="ecosystem-reference" style={{ marginBottom: '4.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Network size={18} style={{ color: '#64b4d2' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>
            Academic Institutional Network & Industrial Problem Focus
          </h3>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: 'clamp(1.25rem, 3.5vw, 2rem)', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
            
            <div style={{ background: 'rgba(100,180,210,0.04)', padding: '1.35rem', borderRadius: '1.1rem', border: '1px solid rgba(100,180,210,0.18)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64b4d2', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                Academic Network Representation
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: '0 0 0.75rem' }}>
                Confirmed Academic & Research Affiliations
              </h4>
              <p style={{ fontSize: '0.86rem', color: '#9090a0', lineHeight: 1.6, marginBottom: '1rem' }}>
                Our speakers and jury members hold primary faculty and research appointments across respected international universities and scientific institutions:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {[
                  'Mimar Sinan Fine Arts University & Modoko Academy (Turkey)',
                  'DGUV University of Applied Sciences (Germany)',
                  'The University of Arizona (USA / Saudi Arabia)',
                  'Keiser University (USA)',
                  'Prince Mohammad Bin Fahd University (Saudi Arabia)',
                  'Mohammed V University, Rabat (Morocco)',
                  'Faculty of Letters, Ibn Tofail University, Kenitra (Morocco)',
                  'Universidad Nacional del Centro de la Prov. de Buenos Aires (UNICEN)',
                  'International Black Sea University & NCEQE (Georgia)',
                  'Ilia State University (Tbilisi, Georgia)',
                  'Red Sea University Faculty of Medicine & ACMER',
                  'Federal Polytechnic Oko & Federal College of Education Yola (Nigeria)'
                ].map((inst, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: '#cbd5e1' }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#64b4d2', flexShrink: 0 }} />
                    {inst}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: 'rgba(210,170,100,0.04)', padding: '1.35rem', borderRadius: '1.1rem', border: '1px solid rgba(210,170,100,0.18)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#d2aa64', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                Reference Architecture & Problem Scope
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: '0 0 0.75rem' }}>
                Industrial Problem Reference Domains
              </h4>
              <p style={{ fontSize: '0.86rem', color: '#9090a0', lineHeight: 1.6, marginBottom: '1rem' }}>
                Challenge tracks address industry-standard operational challenges and technical architectures without implying unverified corporate endorsements:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {[
                  'Open Industrial Telemetry Protocols: OPC-UA, MQTT, Modbus TCP',
                  'IEC 62443 Zero-Trust Security for Operational Technology (OT)',
                  'Collaborative Robotics (Cobots) & ROS2 Workcell Integration',
                  'Edge AI Micro-Inference on Microcontrollers & Single-Board Computers',
                  'Smart Grid Dispatch Optimization & High-Penetration Renewable Integration',
                  'Pharmaceutical & Healthcare Clinical Quality Systems (GxP / QMS)'
                ].map((domain, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: '#cbd5e1' }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#d2aa64', flexShrink: 0 }} />
                    {domain}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── ONLINE VIRTUAL HACKATHON SCHEDULE ── */}
      <section id="schedule" style={{ marginBottom: '4.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Clock size={18} style={{ color: '#00dcb4' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee', margin: 0 }}>
            Online Virtual Hackathon Schedule (27 September 2026)
          </h3>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.02)', padding: 'clamp(1.25rem, 3.5vw, 2rem)', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: '#9090a0', lineHeight: 1.6 }}>
            Designed for seamless worldwide virtual participation. Synchronized live milestones stream on the event portal, while development and evaluation run continuously online. Timings are displayed across <strong style={{ color: '#00dcb4' }}>IST (Indian Standard Time)</strong>, <strong style={{ color: '#64b4d2' }}>UTC (Coordinated Universal Time)</strong>, and <strong style={{ color: '#d2aa64' }}>Central (US Central Daylight Time)</strong>:
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {[
              { 
                timeIst: '04:00 PM – 04:15 PM IST', 
                timeUtc: '10:30 – 10:45 UTC', 
                timeCentral: '05:30 – 05:45 AM CDT', 
                dateLabel: '27 Sep',
                title: 'Phase 1: Opening & Welcome Address', 
                desc: 'Fast-track welcome address, event introduction, overview of objectives, and inaugural remarks by organizers.', 
                highlight: true 
              },
              { 
                timeIst: '04:15 PM – 10:00 PM IST', 
                timeUtc: '10:45 – 16:30 UTC', 
                timeCentral: '05:45 – 11:30 AM CDT', 
                dateLabel: '27 Sep',
                title: 'Phase 2: Expert Keynotes, Technical Discussions & Idea Presentations', 
                desc: 'Comprehensive technical sessions including domain keynotes by industry experts, technical talks, in-depth technical discussions, and core idea/conceptual framework presentations.', 
                highlight: true 
              },
              { 
                timeIst: '10:00 PM – 10:40 PM IST', 
                timeUtc: '16:30 – 17:10 UTC', 
                timeCentral: '11:30 AM – 12:10 PM CDT', 
                dateLabel: '27 Sep',
                title: 'Phase 3: Closing Remarks & Summary of Key Takeaways', 
                desc: 'Concluding remarks, synthesis of technical discussions, presentation of key outcomes, and closing insights from domain chairs.', 
                highlight: false 
              },
              { 
                timeIst: '10:40 PM – 11:00 PM IST', 
                timeUtc: '17:10 – 17:30 UTC', 
                timeCentral: '12:10 – 12:30 PM CDT', 
                dateLabel: '27 Sep',
                title: 'Phase 4: Vote of Thanks & Post-Event Announcements', 
                desc: 'Formal vote of thanks to all experts and organizers, distribution of session certificates info, and post-event roadmap briefing.', 
                highlight: false 
              }
            ].map((sched, idx) => (
              <div key={idx} style={{
                background: sched.highlight ? 'rgba(0,220,180,0.06)' : 'rgba(255,255,255,0.02)',
                border: `1px solid ${sched.highlight ? 'rgba(0,220,180,0.28)' : 'rgba(255,255,255,0.06)'}`,
                borderRadius: '1rem', padding: '1.1rem 1.35rem',
                display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.25rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', minWidth: '260px', flex: 1 }}>
                  {/* Triple-Timezone Badge */}
                  <div style={{
                    background: sched.highlight ? 'rgba(0,220,180,0.12)' : 'rgba(0,0,0,0.35)',
                    border: `1px solid ${sched.highlight ? 'rgba(0,220,180,0.35)' : 'rgba(255,255,255,0.08)'}`,
                    padding: '0.7rem 0.95rem', borderRadius: '0.85rem',
                    minWidth: '235px', display: 'flex', flexDirection: 'column', gap: '0.35rem',
                    flexShrink: 0, boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: '0.25rem', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.66rem', color: '#00dcb4', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>Time Zone (IST)</span>
                      <span style={{ fontSize: '0.82rem', color: '#ffffff', fontWeight: 800, whiteSpace: 'nowrap' }}>{sched.timeIst}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.64rem', color: '#64b4d2', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>Time Zone (UTC)</span>
                      <span style={{ fontSize: '0.76rem', color: '#cbd5e1', fontWeight: 600, whiteSpace: 'nowrap' }}>{sched.timeUtc}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.64rem', color: '#d2aa64', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>Time Zone (CDT)</span>
                      <span style={{ fontSize: '0.76rem', color: '#cbd5e1', fontWeight: 600, whiteSpace: 'nowrap' }}>{sched.timeCentral}</span>
                    </div>
                  </div>

                  {/* Milestone Details */}
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem', flexWrap: 'wrap' }}>
                      <span style={{
                        fontSize: '0.7rem', fontWeight: 800, padding: '0.15rem 0.55rem', borderRadius: '1rem',
                        background: sched.highlight ? 'rgba(0,220,180,0.2)' : 'rgba(255,255,255,0.06)',
                        color: sched.highlight ? '#00dcb4' : '#9090a0',
                        textTransform: 'uppercase', letterSpacing: '0.06em'
                      }}>
                        {sched.dateLabel}
                      </span>
                      <h4 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>{sched.title}</h4>
                    </div>
                    <p style={{ fontSize: '0.86rem', color: '#9090a0', margin: 0, lineHeight: 1.55 }}>{sched.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Post-Hackathon Evaluation & Awards Notice */}
          <div style={{
            marginTop: '1.25rem',
            background: 'rgba(0,220,180,0.05)',
            border: '1px solid rgba(0,220,180,0.25)',
            borderRadius: '1rem',
            padding: '1.2rem 1.4rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem'
          }}>
            <Award size={24} style={{ color: '#00dcb4', flexShrink: 0, marginTop: '0.15rem' }} />
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#00dcb4', margin: '0 0 0.35rem' }}>
                Post-Hackathon Jury Rubric Evaluation & Award Declaration
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#cbd5e1', margin: 0, lineHeight: 1.65 }}>
                To maintain academic rigor and ensure comprehensive evaluation, all submitted repositories, system architectures, and demonstration videos are independently assessed by the international technical jury council after the hackathon against published rubrics. Category award recipients and official Verified Certificates (CertID) will be officially declared on the TechryonGlobal portal following formal jury deliberation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── AWARDS & OFFICIAL VERIFIED CERTIFICATES ── */}
      <section id="awards" style={{ marginBottom: '4.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Award size={18} style={{ color: '#d2aa64' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>
            Awards & Official Verified Certificates
          </h3>
        </div>
        
        <p style={{ fontSize: '0.96rem', color: '#a0a0b0', marginBottom: '1.5rem', lineHeight: 1.7 }}>
          All verified participants, finalists, judges, and organizing team members will receive an Official Certificate issued by TechryonGlobal. Each digital certificate contains a unique cryptographic verification identifier (CertID) verifiable through our online credential portal.
        </p>

        <h4 style={{ fontSize: '1.05rem', color: '#e8e8ee', fontWeight: 700, marginBottom: '1rem' }}>
          Streamlined Award Categories
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 250px), 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
          {[
            { title: 'Grand Industrial Innovation Award', subtitle: 'Overall Winner across all tracks', icon: Trophy, color: '#facc15', glow: 'rgba(250,204,21,0.1)' },
            { title: 'First Runner-Up (Engineering Excellence)', subtitle: 'Second place overall standing', icon: Medal, color: '#c8c8c8', glow: 'rgba(200,200,200,0.1)' },
            { title: 'Best Industrial Applicability Award', subtitle: 'Direct production & shop-floor utility', icon: Factory, color: '#00dcb4', glow: 'rgba(0,220,180,0.1)' },
            { title: 'Best AI & Predictive Systems Award', subtitle: 'Excellence in machine learning / Edge AI', icon: BrainCircuit, color: '#64b4d2', glow: 'rgba(100,180,210,0.1)' },
            { title: 'Best Sustainable Manufacturing Solution', subtitle: 'Energy optimization & clean tech', icon: Zap, color: '#00dcb4', glow: 'rgba(0,220,180,0.1)' },
            { title: 'Special Jury Recognition Award', subtitle: 'Honorable mention for novel methodology', icon: Star, color: '#d2aa64', glow: 'rgba(210,170,100,0.1)' },
          ].map((award, i) => {
            const Icon = award.icon;
            return (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '1rem',
                border: `1px solid rgba(255,255,255,0.08)`, display: 'flex', alignItems: 'flex-start', gap: '1rem',
                boxShadow: `inset 0 0 20px ${award.glow}`
              }}>
                <div style={{ padding: '0.6rem', borderRadius: '0.65rem', background: award.glow, flexShrink: 0 }}>
                  <Icon size={22} style={{ color: award.color }} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.96rem', fontWeight: 700, color: '#ffffff', margin: '0 0 0.25rem' }}>{award.title}</h4>
                  <div style={{ fontSize: '0.8rem', color: '#9090a0' }}>{award.subtitle}</div>
                </div>
              </div>
            );
          })}
        </div>

        <h4 style={{ fontSize: '1.05rem', color: '#e8e8ee', fontWeight: 700, marginBottom: '1rem' }}>
          Official Verified Certificates Issued
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))', gap: '1rem' }}>
          {[
            { title: 'Official Certificate of Participation', desc: 'Awarded to verified teams with compliant code submissions.', icon: Award, color: '#00dcb4' },
            { title: 'Official Certificate of Achievement', desc: 'Issued to category winners and runners-up.', icon: Trophy, color: '#facc15' },
            { title: 'Technical Jury Certificate of Honor', desc: 'Conferred to appointed members of the international jury.', icon: GraduationCap, color: '#64b4d2' },
            { title: 'Keynote Speaker Certificate of Honor', desc: 'Issued to confirmed keynote speakers and panelists.', icon: Mic, color: '#b46ed2' },
            { title: 'Expert Mentor Recognition Certificate', desc: 'Presented to verified track mentors and advisors.', icon: Handshake, color: '#d2aa64' },
            { title: 'Organizing Committee Certificate', desc: 'Awarded to core steering and operations members.', icon: FileText, color: '#00dcb4' },
          ].map((cert, i) => {
            const Icon = cert.icon;
            return (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.025)', padding: '1rem 1.15rem', borderRadius: '0.85rem',
                border: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', gap: '0.4rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Icon size={18} style={{ color: cert.color }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>{cert.title}</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: '#9090a0', margin: 0, lineHeight: 1.45 }}>{cert.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── DISTINGUISHED GUEST & EXPERT INVITATION ── */}
      <section id="expert-invitation" style={{ marginBottom: '4.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <GraduationCap size={18} style={{ color: '#d2aa64' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>
            Distinguished Guest & Expert Invitation
          </h3>
        </div>
        <div style={{ background: 'linear-gradient(135deg, rgba(210,170,100,0.07), rgba(0,0,0,0.2))', padding: 'clamp(1.25rem, 3.5vw, 2rem)', borderRadius: '1.5rem', border: '1px solid rgba(210,170,100,0.2)' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
            Collaborate as a Keynote Speaker, Technical Jury Member, or Domain Mentor
          </h4>
          <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            We cordially invite distinguished university faculty, senior researchers, and technology directors whose work aligns with industrial cyber-physical systems, autonomous robotics, AI, or sustainability to join our scientific programme.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.9rem 1.1rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: '#d2aa64', fontWeight: 800 }}>Format & Modality</div>
              <div style={{ fontSize: '0.88rem', color: '#ffffff', fontWeight: 600, marginTop: '0.2rem' }}>100% Online Virtual Platform</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.9rem 1.1rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: '#d2aa64', fontWeight: 800 }}>Time Commitment</div>
              <div style={{ fontSize: '0.88rem', color: '#ffffff', fontWeight: 600, marginTop: '0.2rem' }}>~1 to 2 Hours (Keynote / Rubric Review)</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.9rem 1.1rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: '#d2aa64', fontWeight: 800 }}>Credentials Issued</div>
              <div style={{ fontSize: '0.88rem', color: '#ffffff', fontWeight: 600, marginTop: '0.2rem' }}>Verified Certificate of Honor (CertID)</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="mailto:events@techryonglobal.com?subject=Expert%20Participation%20Inquiry%20-%20Industrial%20Hackathon%202026"
              style={{
                background: '#d2aa64', color: '#0b1015', border: 'none',
                padding: '0.75rem 1.5rem', borderRadius: '0.75rem',
                fontSize: '0.9rem', fontWeight: 700, textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem'
              }}
            >
              <Mail size={16} /> Contact Academic & Jury Desk
            </a>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'rgba(210,170,100,0.1)', color: '#d2aa64',
                border: '1px solid #d2aa64', padding: '0.75rem 1.5rem',
                borderRadius: '0.75rem', fontSize: '0.9rem', fontWeight: 700,
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem'
              }}
            >
              Submit Formal Expression of Interest <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ── REGISTRATION SECTION ── */}
      <section id="registration" style={{ marginTop: '2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{
            display: 'inline-block', padding: '0.35rem 1.1rem', borderRadius: '2rem',
            background: 'rgba(0,220,180,0.12)', border: '1px solid rgba(0,220,180,0.3)',
            color: '#00dcb4', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase',
            marginBottom: '0.75rem'
          }}>
            Online Registration Open • Worldwide Access
          </div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.4rem)', fontWeight: 800, color: '#e8e8ee', marginBottom: '0.5rem', lineHeight: 1.25 }}>
            Register for the Industrial Hackathon
          </h2>
          <p style={{ fontSize: '1rem', color: '#a0a0b0', maxWidth: '620px', margin: '0 auto 1.5rem' }}>
            Join worldwide participants. Select your role below or submit your registration directly via our official Google Form.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'rgba(0,220,180,0.15)', color: '#00dcb4',
                border: '1px solid rgba(0,220,180,0.35)',
                padding: '0.65rem 1.4rem', borderRadius: '0.75rem',
                fontSize: '0.88rem', fontWeight: 700, textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#00dcb4'; e.currentTarget.style.color = '#0b1015'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,220,180,0.15)'; e.currentTarget.style.color = '#00dcb4'; }}
            >
              Official Google Form Registration <ExternalLink size={15} />
            </a>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1.5rem' }}>
          
          {/* Participant */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0,220,180,0.12), rgba(0,180,220,0.02))',
            borderRadius: '1.5rem', padding: 'clamp(1.25rem, 3.5vw, 2rem)', border: '1px solid rgba(0,220,180,0.3)',
            display: 'flex', flexDirection: 'column', position: 'relative'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#e8e8ee', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Rocket size={20} style={{ color: '#00dcb4' }} /> Participant / Team
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#9090a0', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
              Compete individually or in teams of up to 5 members. Receive mentor guidance, submit code on GitHub, and pitch to international judges.
            </p>
            <a 
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '100%', background: '#00dcb4', color: '#0b1015',
                border: 'none', padding: '0.85rem', borderRadius: '0.75rem',
                fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer',
                boxShadow: '0 0 15px rgba(0,220,180,0.3)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Register as Participant <ExternalLink size={15} />
            </a>
          </div>

          {/* Judge */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(210,170,100,0.1), rgba(180,140,80,0.02))',
            borderRadius: '1.5rem', padding: 'clamp(1.25rem, 3.5vw, 2rem)', border: '1px solid rgba(210,170,100,0.25)',
            display: 'flex', flexDirection: 'column'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#e8e8ee', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <GraduationCap size={20} style={{ color: '#d2aa64' }} /> Judge / Jury
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#9090a0', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
              Industrial experts, senior researchers, and professors invited to evaluate projects and mentor high-impact solutions.
            </p>
            <a 
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '100%', background: '#d2aa64', color: '#0b1015',
                border: 'none', padding: '0.85rem', borderRadius: '0.75rem',
                fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer',
                boxShadow: '0 0 15px rgba(210,170,100,0.3)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Apply as Judge <ExternalLink size={15} />
            </a>
          </div>

          {/* Speaker */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(180,110,210,0.1), rgba(150,80,180,0.02))',
            borderRadius: '1.5rem', padding: 'clamp(1.25rem, 3.5vw, 2rem)', border: '1px solid rgba(180,110,210,0.25)',
            display: 'flex', flexDirection: 'column'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#e8e8ee', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mic size={20} style={{ color: '#b46ed2' }} /> Keynote Speaker
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#9090a0', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
              Deliver keynote presentations and share industry expertise in our virtual Innovation Forum sessions.
            </p>
            <a 
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '100%', background: '#b46ed2', color: '#fff',
                border: 'none', padding: '0.85rem', borderRadius: '0.75rem',
                fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer',
                boxShadow: '0 0 15px rgba(180,110,210,0.3)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Apply as Speaker <ExternalLink size={15} />
            </a>
          </div>

          {/* Partner / Sponsor */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(100,180,210,0.1), rgba(70,150,180,0.02))',
            borderRadius: '1.5rem', padding: 'clamp(1.25rem, 3.5vw, 2rem)', border: '1px solid rgba(100,180,210,0.25)',
            display: 'flex', flexDirection: 'column'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#e8e8ee', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Handshake size={20} style={{ color: '#64b4d2' }} /> Partner / Sponsor
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#9090a0', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
              Support developer & startup innovators by providing cloud infrastructure, datasets, or specialized challenge bounties.
            </p>
            <a 
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '100%', background: '#64b4d2', color: '#0b1015',
                border: 'none', padding: '0.85rem', borderRadius: '0.75rem',
                fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer',
                boxShadow: '0 0 15px rgba(100,180,210,0.3)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Become a Partner <ExternalLink size={15} />
            </a>
          </div>

        </div>
      </section>



      {/* ── ORGANIZING COMMITTEE ── */}
      <section id="organizing-committee" style={{ marginBottom: '4.5rem' }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem',
          paddingBottom: '1.25rem', borderBottom: '1px solid rgba(210, 170, 100, 0.25)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '52px', height: '52px', borderRadius: '14px',
              background: 'rgba(210, 170, 100, 0.15)', border: '1.5px solid rgba(210, 170, 100, 0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 25px rgba(210, 170, 100, 0.25)', flexShrink: 0
            }}>
              <Briefcase size={26} style={{ color: '#d2aa64' }} />
            </div>
            <div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 800, letterSpacing: '0.02em', color: '#ffffff', margin: 0, lineHeight: 1.2 }}>
                Organizing Committee & Leadership
              </h2>
              <div style={{ fontSize: '0.85rem', color: '#d2aa64', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                Executive Steering & Global Coordination
              </div>
            </div>
          </div>
          <span style={{
            fontSize: '0.82rem', color: '#d2aa64', fontWeight: 800,
            background: 'rgba(210,170,100,0.12)', padding: '0.45rem 1.1rem',
            borderRadius: '2rem', border: '1.5px solid rgba(210,170,100,0.4)',
            letterSpacing: '0.06em', textTransform: 'uppercase',
            boxShadow: '0 0 20px rgba(210,170,100,0.15)'
          }}>
            Executive Leadership
          </span>
        </div>

        <p style={{ fontSize: '1.02rem', color: '#cbd5e1', marginBottom: '2rem', lineHeight: 1.7, fontWeight: 500 }}>
          The Techryon Global executive leadership team spearheading international partnerships, strategic growth, and cross-border innovation across all forum initiatives:
        </p>

        <div className="event-grid-3col">
          {committeeList.map((member, i) => (
            <div key={i} style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(210,170,100,0.03) 100%)',
              padding: 'clamp(1.75rem, 4vw, 2.5rem) clamp(1.25rem, 3vw, 1.75rem)', borderRadius: '1.5rem',
              border: '1.5px solid rgba(210,170,100,0.25)', textAlign: 'center',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              boxShadow: '0 12px 35px rgba(0,0,0,0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = 'rgba(210,170,100,0.5)';
              e.currentTarget.style.boxShadow = '0 18px 45px rgba(210,170,100,0.15)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(210,170,100,0.25)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.3)';
            }}
            >
              <div style={{
                width: 'clamp(110px, 30vw, 144px)', height: 'clamp(110px, 30vw, 144px)', borderRadius: '50%',
                overflow: 'hidden', marginBottom: '1.25rem', border: '3.5px solid rgba(210,170,100,0.55)',
                boxShadow: '0 0 28px rgba(210,170,100,0.28)', flexShrink: 0,
                background: 'rgba(0,0,0,0.4)'
              }}>
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    objectPosition: member.photoPosition || 'center top',
                    transform: member.photoScale ? `scale(${member.photoScale})` : 'none',
                    transition: 'transform 0.3s ease'
                  }} 
                />
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.5rem', lineHeight: 1.35 }}>
                {member.name}
              </h4>
              <div style={{ fontSize: '0.96rem', color: '#d2aa64', fontWeight: 700, lineHeight: 1.45, marginBottom: '0.85rem' }}>
                {member.role}
              </div>
              <div style={{ marginTop: 'auto' }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                  fontSize: '0.84rem', fontWeight: 700, color: '#e8e8ee',
                  background: 'rgba(210,170,100,0.1)', padding: '0.4rem 1rem',
                  borderRadius: '2rem', border: '1px solid rgba(210,170,100,0.25)',
                  letterSpacing: '0.02em'
                }}>
                  <Building size={14} style={{ color: '#d2aa64' }} /> {member.org}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ── */}
      <section id="faq">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <HelpCircle size={18} style={{ color: '#b46ed2' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>Frequently Asked Questions</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          {faqs.map((faq, index) => (
            <div key={index} style={{
              background: 'rgba(255,255,255,0.02)', borderRadius: '0.85rem',
              border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden'
            }}>
              <div 
                onClick={() => toggleFAQ(index)}
                style={{ 
                  padding: '1.25rem', display: 'flex', justifyContent: 'space-between', 
                  alignItems: 'center', cursor: 'pointer' 
                }}
              >
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e8e8ee' }}>{faq.q}</span>
                {openFAQ === index ? <ChevronUp size={18} color="#00dcb4" /> : <ChevronDown size={18} color="#a0a0b0" />}
              </div>
              {openFAQ === index && (
                <div style={{ padding: '0 1.25rem 1.25rem', fontSize: '0.9rem', color: '#a0a0b0', lineHeight: 1.7 }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── OFFICIAL EVENT SECRETARIAT & DIRECT CONTACTS ── */}
      <section id="contact">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
          <Building size={18} style={{ color: '#00dcb4' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>
            Official Event Secretariat & Contact Information
          </h3>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: 'clamp(1.25rem, 3.5vw, 2rem)', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 270px), 1fr))', gap: '1.25rem' }}>
            
            <div style={{ background: 'rgba(0,220,180,0.05)', padding: '1.25rem', borderRadius: '1rem', border: '1px solid rgba(0,220,180,0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0,220,180,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={20} style={{ color: '#00dcb4' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.76rem', color: '#8a8a9a', textTransform: 'uppercase', fontWeight: 700 }}>Secretariat Headquarters</div>
                  <div style={{ fontSize: '0.96rem', fontWeight: 700, color: '#ffffff' }}>TechryonGlobal Registered Office</div>
                </div>
              </div>
              <p style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: 1.6, margin: 0 }}>
                B1-501, Nandan Acura, Laxman Nagar,<br />
                Baner, Pune – 411045,<br />
                Maharashtra, India
              </p>
            </div>

            <div style={{ background: 'rgba(100,180,210,0.05)', padding: '1.25rem', borderRadius: '1rem', border: '1px solid rgba(100,180,210,0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(100,180,210,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={20} style={{ color: '#64b4d2' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.76rem', color: '#8a8a9a', textTransform: 'uppercase', fontWeight: 700 }}>Dedicated Email Routing</div>
                  <div style={{ fontSize: '0.96rem', fontWeight: 700, color: '#ffffff' }}>Official Inquiries</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.85rem' }}>
                <div>
                  <span style={{ color: '#8a8a9a', fontSize: '0.78rem', textTransform: 'uppercase', display: 'block' }}>General Secretariat:</span>
                  <a href="mailto:inquiries@techryonglobal.com" style={{ color: '#64b4d2', textDecoration: 'none', fontWeight: 600 }}>inquiries@techryonglobal.com</a>
                </div>
                <div>
                  <span style={{ color: '#8a8a9a', fontSize: '0.78rem', textTransform: 'uppercase', display: 'block' }}>Hackathon Coordination:</span>
                  <a href="mailto:hackathon@techryonglobal.com" style={{ color: '#00dcb4', textDecoration: 'none', fontWeight: 600 }}>hackathon@techryonglobal.com</a>
                </div>
                <div>
                  <span style={{ color: '#8a8a9a', fontSize: '0.78rem', textTransform: 'uppercase', display: 'block' }}>Keynote & Jury Desk:</span>
                  <a href="mailto:events@techryonglobal.com" style={{ color: '#d2aa64', textDecoration: 'none', fontWeight: 600 }}>events@techryonglobal.com</a>
                </div>
              </div>
            </div>

            <div style={{ background: 'rgba(210,170,100,0.05)', padding: '1.25rem', borderRadius: '1rem', border: '1px solid rgba(210,170,100,0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(210,170,100,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={20} style={{ color: '#d2aa64' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.76rem', color: '#8a8a9a', textTransform: 'uppercase', fontWeight: 700 }}>Direct Coordination</div>
                  <div style={{ fontSize: '0.96rem', fontWeight: 700, color: '#ffffff' }}>Telephone & Messaging</div>
                </div>
              </div>
              <p style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: 1.6, margin: '0 0 0.5rem' }}>
                Direct Secretariat Line:<br />
                <a href="tel:+919322407176" style={{ color: '#d2aa64', textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem' }}>+91 9322407176</a>
              </p>
              <div style={{ fontSize: '0.8rem', color: '#9090a0' }}>
                Available Monday – Friday, 09:30 – 18:30 IST for academic and participant inquiries.
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default HackathonSections;
