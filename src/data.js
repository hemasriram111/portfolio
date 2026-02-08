export const profile = {
  name: "Hema Sriram",
  title: "AI & Machine Learning Engineer",
  phone: "+91 8142592369",
  email: "hemasriram111@gmail.com",
  linkedin: "https://linkedin.com/in/hemasriram",
  github: "https://github.com/hemasriram111",
  about:
    "I am an AI and Machine Learning enthusiast in my final year of B.Tech. I have a passion for creating intelligent systems that make an impact. I have hands-on experience in Generative AI, NLP, and Computer Vision. I specialize in developing complete applications, from fine-tuning LLaMA-2 models to deploying medical AI agents using the Gemini API. During my internship at IDC India, I learned how to connect complex algorithms with user-friendly interfaces. I am now eager to apply my skills in Python, AWS, and RAG-based automation to a progressive team.",
};

export const skills = {
  languages: ["Python", "SQL"],
  frameworks: ["PyTorch", "TensorFlow", "LangChain", "Streamlit", "FastAPI"],
  tools: ["AWS", "Docker", "Git", "Chroma DB", "Hugging Face", "n8n", "OpenCV"],
  domains: ["LLMs & RAG", "Computer Vision", "NLP", "Fine-tuning", "MLOps"],
};

export const education = {
  school: "Aditya College of Engineering and Technology, Surampalem",
  degree: "B. Tech in Artificial Intelligence & Machine Learning",
  period: "2022 - 2026",
  cgpa: "7.0/10",
};

export const experience = [
  {
    company: "IDC INDIA",
    role: "AI Intern",
    link: "https://www.linkedin.com/posts/hemasriram_ai-machinelearning-internshipexperience-activity-7340957131103215617-gjRJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEr8h_oB1F2nDNCsqbGDO-rIkRj-4cHzt1s",
    period: "Jan 2025 – Mar 2025",
    bullets: [
      "Developed ML models: AI vs human text analyser, disease prediction system.",
      "Built AI virtual teaching assistant with NLP for enhanced user interaction.",
      "Designed medical chatbot with Streamlit and Google Gemini API for prescription analysis.",
      "Working on My Court AI model to answer legal queries with data processing.",
    ],
  },
  {
    company: "TECHNICAL HUB",
    role: "Gen AI Intern",
    link: "https://drive.google.com/file/d/1uPQxN8PVgJLxwhQ1JlrC8RYUPsQNS2fd/view",
    period: "May 2024 – July 2024",
    bullets: [
      "Contributed to ML and deep learning projects using OpenCV and NLP.",
      "Designed algorithms using statistical modelling to improve accuracy and performance.",
      "Trained and deployed models including CNN on AWS.",
      "Collaborated with peers to develop innovative AI solutions for real-world applications.",
    ],
  },
];

export const projects = [
  {
    title: "Medical AI Agent",
    description:
      "AI Medical Agent with Streamlit, Tesseract OCR, and Gemini API for prescription and symptom analysis. PDF reports with Report Lab and email delivery via SMTP.",
    tech: ["Streamlit", "Gemini API", "Tesseract OCR", "PyPDF2", "Report Lab"],
    github: "https://github.com/hemasriram111/medical-ai-agent",
    live: "https://medical-ai-agent.streamlit.app/",
  },
  {
    title: "Cold Email Generator",
    description:
      "AI-driven tool to automate personalized cold emails. Extracts skills from job postings, uses Chroma DB for semantic search and Llama 3.1 for tailored emails.",
    tech: ["Lang Chain", "Chroma DB", "Llama 3.1", "Web Scraping"],
    github: "https://github.com/hemasriram111/cold-email-generator",
    live: null,
  },
  {
    title: "Text to Image Generator",
    description:
      "GUI app with Tkinter and FastAPI. Generate AI images via Hugging Face API from user prompts and display them in-app.",
    tech: ["Tkinter", "FastAPI", "Hugging Face API"],
    github: "https://github.com/hemasriram111/Text-to-image-generator",
    live: null,
  },
  {
    title: "Fine-tuning LLaMA-2 7B with LoRA",
    description:
      "Fine-tuning Meta's LLaMA-2 7B Chat using LoRA and 4-bit quantization for domain-specific datasets with low computational cost.",
    tech: ["PyTorch", "LoRA", "LLaMA-2", "Quantization"],
    github: "https://github.com/hemasriram111/Finetuning-Llama2-7B-on-Personal-Dataset",
    live: null,
  },
  {
    title: "AI Resume Analyzer",
    description:
      "Resume analyser with Gemini AI for job-description match %, missing keywords, and ATS optimization. Streamlit app with PDF extraction and keyword gap analysis.",
    tech: ["Gemini AI", "Streamlit", "PDF Processing"],
    github: "https://github.com/hemasriram111/ats-resume-analyser",
    live: null,
  },
];

export const certifications = [
  { name: "Google Career Readiness - Associate Cloud Engineer Path", link: "https://drive.google.com/file/d/17tz_VpCz46WatwLETEOGp_Ww3r7Pm9SB/view", view: "View" },
  { name: "Generative AI Certified Professional by Oracle Cloud Infrastructure", link: "https://www.linkedin.com/posts/hemasriram_hey-connections-i-am-thrilled-to-share-activity-7226450183033671683-0FGG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEr8h_oB1F2nDNCsqbGDO-rIkRj-4cHzt1s", view: "View" },
  { name: "Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate", link: "https://drive.google.com/file/d/1H5uC57Zp1Pew_FtkJq-FuVNfRCo57N60/view", view: "View" },
  { name: "Gen AI Foundations by Dell Pearson", link: "https://www.credly.com/badges/6b2c2f6b-4a62-460c-8393-a1f5bd381660", view: "View" },
  { name: "Artificial Intelligence Fundamentals by IBM Skills Build", link: "https://www.credly.com/badges/2c9f0596-fdcf-4d32-b31a-da911316f227", view: "View" },
];

export const achievements = [
  { text: "AWS Deep Racer session on autonomous vehicles and reinforcement learning", link: "#" },
  { text: "AI and deep learning applications using NVIDIA Jetson Nano (generative AI, edge)", link: "#" },
  { text: "Digital badges from Google Cloud and other platforms", link: "#" },
];
