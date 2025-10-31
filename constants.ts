
import { ProfileData } from './types';

export const PROFILE_DATA: ProfileData = {
  name: "Dr. Evelyn Reed",
  title: "Research Fellow",
  organization: "National Institute of Advanced Science",
  bio: [
    "I am a dedicated Research Fellow specializing in computational linguistics and artificial intelligence at the National Institute of Advanced Science. My work focuses on developing novel machine learning models to understand and generate human language with greater nuance and accuracy.",
    "With a Ph.D. in Computer Science from Stanford University, I have a strong background in natural language processing, deep learning, and data ethics. I am passionate about leveraging technology to solve complex problems and contribute to the public good through transparent and responsible research.",
    "My current projects involve exploring large language model alignment and ensuring AI systems are fair, accountable, and safe for societal deployment. I am always open to collaborating on innovative research that pushes the boundaries of AI.",
  ],
  contact: {
    email: "evelyn.reed@niass.gov.example",
  },
  socials: {
    github: "https://github.com/evelynreed-example",
    linkedin: "https://linkedin.com/in/evelynreed-example",
    googleScholar: "https://scholar.google.com/citations?user=example",
  },
  researchInterests: [
    "Natural Language Processing (NLP)",
    "Large Language Model (LLM) Alignment",
    "AI Ethics and Safety",
    "Computational Social Science",
    "Machine Learning Interpretability",
    "Human-AI Collaboration",
  ],
  publications: [
    {
      title: "On the Robustness of Aligned Language Models to Adversarial Inputs",
      authors: ["Evelyn Reed", "John Doe", "Jane Smith"],
      venue: "Proceedings of the International Conference on Machine Learning (ICML)",
      year: 2023,
      link: "#",
      doi: "10.1109/ICML.2023.12345",
    },
    {
      title: "A Framework for Quantifying Fairness in Text-to-Image Generation",
      authors: ["Evelyn Reed", "Alex Chen"],
      venue: "Journal of Artificial Intelligence Research (JAIR)",
      year: 2022,
      link: "#",
      doi: "10.1613/JAIR.1.12346",
    },
    {
      title: "Self-Correction Mechanisms in Large Language Models",
      authors: ["Sam Lee", "Evelyn Reed", "Maria Garcia"],
      venue: "Advances in Neural Information Processing Systems (NeurIPS)",
      year: 2021,
      link: "#",
      doi: "10.5555/1234567.8901234",
    },
  ],
  projects: [
    {
      title: "Project Minerva: AI Safety Audit Framework",
      description: "An open-source toolkit for auditing and red-teaming large language models. Project Minerva provides a suite of tests to identify potential biases, safety vulnerabilities, and alignment failures in AI systems.",
      technologies: ["Python", "PyTorch", "Hugging Face Transformers", "Streamlit"],
      link: "https://github.com/evelynreed-example/minerva",
    },
    {
      title: "Computational Policy Analysis",
      description: "Utilizing NLP techniques to analyze large corpora of government documents and public policy proposals. This project aims to extract key themes, track policy evolution, and model potential societal impacts.",
      technologies: ["spaCy", "scikit-learn", "Pandas", "D3.js"],
      link: "https://github.com/evelynreed-example/policy-analysis",
    },
  ],
};
