import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Code2,
  ExternalLink,
  Laptop,
  Layers3,
  Mail,
  Menu,
  Moon,
  PenTool,
  ServerCog,
  Sparkles,
  Sun,
  Terminal,
  WandSparkles,
} from 'lucide-react';
import profileImage from './assets/zayaad-profile.jpg';

const profile = {
  name: 'Zayaad Wajid',
  title: 'AI Developer and Full Stack Builder',
  location: 'Based in Pakistan',
  email: 'zayaadw@gmail.com',
  github: 'https://github.com/Zayaad-Wajid',
  linkedin: 'https://www.linkedin.com/in/zayaadwajid10/',
};

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
];

const themeOptions = [
  { value: 'system', label: 'System theme', icon: Laptop },
  { value: 'light', label: 'Light theme', icon: Sun },
  { value: 'dark', label: 'Dark theme', icon: Moon },
];

const services = [
  {
    title: 'AI and ML Applications',
    text: 'Classification systems, NLP apps, model evaluation flows, and practical AI features built with Python and modern ML tools.',
    icon: BrainCircuit,
  },
  {
    title: 'Full Stack Web Apps',
    text: 'React interfaces connected to FastAPI backends, JWT authentication, REST APIs, dashboards, and deployment-ready structure.',
    icon: Layers3,
  },
  {
    title: 'Agentic AI Systems',
    text: 'Multi-agent workflows with OpenAI Agents SDK, CrewAI-style orchestration, Gemini integrations, and automated research flows.',
    icon: Bot,
  },
  {
    title: 'NLP Solutions',
    text: 'Sentiment analysis, NER, question answering, resume screening, embeddings, and transformer-based language systems.',
    icon: ServerCog,
  },
  {
    title: 'Security Automation',
    text: 'AI-assisted threat detection, SOAR workflow concepts, SOC monitoring dashboards, and security-aware backend systems.',
    icon: PenTool,
  },
];

const projects = [
  {
    title: 'Autonomous Cyber Defense System',
    summary:
      'AI-powered cybersecurity platform for automated threat detection, incident response, SOAR workflows, SOC monitoring, and real-time mitigation.',
    tech: ['Python', 'FastAPI', 'scikit-learn', 'GitHub Actions'],
    status: 'Ready for Vercel link',
  },
  {
    title: 'AI Research Orchestrator',
    summary:
      'Multi-agent research system for complex query decomposition, automated web search, research generation, and code execution.',
    tech: ['OpenAI Agents SDK', 'Gemini', 'Python'],
    status: 'Ready for Vercel link',
  },
  {
    title: 'Quizify',
    summary:
      'Full-stack quiz platform with AI quiz generation, JWT authentication, RESTful APIs, and a responsive React experience.',
    tech: ['React', 'FastAPI', 'Gemini API', 'JWT'],
    status: 'Ready for Vercel link',
  },
  {
    title: 'NLP Resume Screening System',
    summary:
      'Resume matching tool using sentence-transformer embeddings, cosine similarity, entity extraction, and a Streamlit interface.',
    tech: ['Sentence-Transformers', 'spaCy', 'Streamlit'],
    status: 'Ready for Vercel link',
  },
  {
    title: 'Transformer QA Evaluation App',
    summary:
      'Question-answering system comparing BERT, DistilBERT, and ALBERT with EM/F1 evaluation and interactive deployment.',
    tech: ['BERT', 'DistilBERT', 'ALBERT', 'Streamlit'],
    status: 'Ready for Vercel link',
  },
];

const brandLogo = (slug, color) => `https://cdn.simpleicons.org/${slug}/${color}`;

const tools = [
  {
    name: 'Python',
    fallback: 'PY',
    logos: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      brandLogo('python', '3776AB'),
    ],
    text: 'Primary language for AI, automation, APIs, model evaluation, and backend workflows.',
  },
  {
    name: 'React',
    fallback: 'RX',
    logos: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      brandLogo('react', '61DAFB'),
    ],
    text: 'Frontend library for building responsive product interfaces and portfolio-grade apps.',
  },
  {
    name: 'Tailwind CSS',
    fallback: 'TW',
    logos: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      brandLogo('tailwindcss', '06B6D4'),
    ],
    text: 'Utility-first styling system for clean layouts, responsive spacing, and polished UI.',
  },
  {
    name: 'FastAPI',
    fallback: 'FA',
    logos: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
      brandLogo('fastapi', '009688'),
    ],
    text: 'Python API framework used for AI backends, REST endpoints, and production services.',
  },
  {
    name: 'JavaScript',
    fallback: 'JS',
    logos: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      brandLogo('javascript', 'F7DF1E'),
    ],
    text: 'Core browser language for interactive frontend behavior and modern web application logic.',
  },
  {
    name: 'CrewAI',
    fallback: 'CR',
    logos: [
      'https://avatars.githubusercontent.com/u/170677839?s=160&v=4',
      brandLogo('crewai', 'FF5A1F'),
    ],
    text: 'Agent orchestration framework for coordinating task-focused autonomous workflows.',
  },
  {
    name: 'LangChain',
    fallback: 'LC',
    logos: [
      brandLogo('langchain', '1C3C3C'),
      'https://avatars.githubusercontent.com/u/126733545?s=160&v=4',
    ],
    text: 'Framework for LLM workflows, retrieval pipelines, tools, and AI application logic.',
  },
  {
    name: 'Gemini',
    fallback: 'GM',
    logos: [
      brandLogo('googlegemini', '8E75B2'),
      'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_advanced_1740f1c41a82964df1d15e7b7e79bb15.svg',
    ],
    text: 'Google LLM platform used for AI quiz generation and intelligent app features.',
  },
  {
    name: 'scikit-learn',
    fallback: 'SK',
    logos: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
      brandLogo('scikitlearn', 'F7931E'),
    ],
    text: 'Machine learning toolkit for classification, regression, model training, and evaluation.',
  },
  {
    name: 'spaCy',
    fallback: 'SP',
    logos: [brandLogo('spacy', '09A3D5')],
    text: 'NLP library for named entity recognition, text pipelines, and language processing.',
  },
  {
    name: 'Streamlit',
    fallback: 'ST',
    logos: [brandLogo('streamlit', 'FF4B4B')],
    text: 'Fast Python UI framework for ML demos, dashboards, QA apps, and screening tools.',
  },
  {
    name: 'MySQL',
    fallback: 'MY',
    logos: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      brandLogo('mysql', '4479A1'),
    ],
    text: 'Relational database for structured app data, queries, and backend persistence.',
  },
  {
    name: 'MongoDB',
    fallback: 'MG',
    logos: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      brandLogo('mongodb', '47A248'),
    ],
    text: 'Document database for flexible application data and modern full stack projects.',
  },
  {
    name: 'Firebase',
    fallback: 'FB',
    logos: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg',
      brandLogo('firebase', 'FFCA28'),
    ],
    text: 'Backend platform for authentication, realtime data, hosting, and fast product development.',
  },
  {
    name: 'Docker',
    fallback: 'DK',
    logos: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      brandLogo('docker', '2496ED'),
    ],
    text: 'Container tooling for reproducible environments, deployments, and service packaging.',
  },
  {
    name: 'Kubernetes',
    fallback: 'K8',
    logos: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg',
      brandLogo('kubernetes', '326CE5'),
    ],
    text: 'Container orchestration platform for scalable services, deployments, and infrastructure workflows.',
  },
  {
    name: 'Vercel',
    fallback: 'VC',
    logos: [brandLogo('vercel', '000000')],
    text: 'Frontend deployment platform for fast React sites, previews, production hosting, and CI workflows.',
  },
  {
    name: 'Linux',
    fallback: 'LX',
    logos: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      brandLogo('linux', 'FCC624'),
    ],
    text: 'Operating environment for development, scripting, deployment, and server workflows.',
  },
  {
    name: 'GitHub',
    fallback: 'GH',
    logos: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      brandLogo('github', '181717'),
    ],
    text: 'Version control, project collaboration, source hosting, and GitHub Actions CI/CD.',
  },
];

const deliveryApproach = [
  {
    step: 'Discover',
    title: 'Understand the problem before choosing the stack.',
    text: 'I clarify the goal, users, constraints, data flow, and success criteria so the build starts with a practical direction.',
  },
  {
    step: 'Build',
    title: 'Turn ideas into usable full stack and AI features.',
    text: 'I connect polished React interfaces with FastAPI backends, clean APIs, model integrations, and focused automation.',
  },
  {
    step: 'Validate',
    title: 'Check behavior, reliability, and deployment readiness.',
    text: 'I review outputs, edge cases, authentication flows, environment setup, and deployment details before calling a project complete.',
  },
];

function getInitialTheme() {
  if (typeof window === 'undefined') return 'system';
  return localStorage.getItem('zayad-theme') || 'system';
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = () => {
      const shouldUseDark = theme === 'dark' || (theme === 'system' && media.matches);
      root.classList.toggle('dark', shouldUseDark);
      root.setAttribute('data-theme', shouldUseDark ? 'dark' : 'light');
      localStorage.setItem('zayad-theme', theme);
    };

    applyTheme();
    media.addEventListener('change', applyTheme);
    return () => media.removeEventListener('change', applyTheme);
  }, [theme]);

  return (
    <main className="min-h-screen overflow-hidden bg-stone-50 text-neutral-950 transition-colors duration-300 dark:bg-neutral-950 dark:text-white">
      <div className="site-grain" />
      <Header theme={theme} onThemeChange={setTheme} />
      <Hero />
      <Services />
      <Projects />
      <Tools />
      <NotesAndContact />
      <Footer />
    </main>
  );
}

function Header({ theme, onThemeChange }) {
  return (
    <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <nav className="flex h-12 max-w-[92vw] items-center gap-1 rounded-full border border-neutral-200/80 bg-white/78 px-2 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-neutral-900/72">
        <a href="#about" className="px-3 font-display text-2xl font-black leading-none tracking-normal">
          Zayaad
        </a>
        <div className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="ml-1 flex rounded-full bg-neutral-100 p-1 dark:bg-white/10">
          {themeOptions.map(({ value, label, icon: Icon }) => (
            <button
              key={value}
              type="button"
              aria-label={label}
              title={label}
              onClick={() => onThemeChange(value)}
              className={`flex h-8 w-8 items-center justify-center rounded-full transition ${
                theme === value
                  ? 'bg-white text-neutral-950 shadow-sm dark:bg-neutral-950 dark:text-white'
                  : 'text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white'
              }`}
            >
              <Icon size={15} />
            </button>
          ))}
        </div>
        <button
          type="button"
          aria-label="Open menu"
          title="Open menu"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 sm:hidden dark:bg-white/10 dark:text-neutral-200"
        >
          <Menu size={16} />
        </button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="about" className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-5 pb-20 pt-28 text-center">
      <div className="avatar-orbit mb-8">
        <img className="avatar" src={profileImage} alt="Zayaad Wajid" />
      </div>
      <h1 className="max-w-5xl font-display text-5xl font-semibold leading-[0.95] tracking-normal sm:text-6xl md:text-7xl lg:text-8xl">
        Hi I&apos;m {profile.name},{' '}
        <span className="text-neutral-500 dark:text-neutral-400">{profile.title}</span>
      </h1>
      <p className="mt-8 max-w-3xl text-base font-medium leading-8 text-neutral-600 sm:text-lg dark:text-neutral-300">
        I build AI-driven applications across machine learning, NLP, agentic workflows, FastAPI
        backends, and React frontends. I like practical systems that turn models into useful products.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <a className="button-pill" href={`mailto:${profile.email}`}>
          Get in touch
          <Mail size={15} />
        </a>
        <a className="button-pill ghost" href="#projects">
          View projects
          <ArrowUpRight size={15} />
        </a>
        <a className="button-pill ghost" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
          <Terminal size={15} />
        </a>
        <a className="button-pill ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
          <ExternalLink size={15} />
        </a>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section-shell">
      <SectionHeading
        title="What I can offer for Your Organization"
        text="AI, NLP, agentic systems, full stack development, and security-aware automation shaped by hands-on project work."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, text, icon: Icon }) => (
          <article key={title} className="service-card">
            <Icon className="text-neutral-900 dark:text-white" size={46} strokeWidth={1.35} />
            <h3 className="mt-10 text-lg font800">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-neutral-600 dark:text-neutral-300">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto grid max-w-6xl gap-10 px-5 py-24 lg:grid-cols-[1fr_0.55fr]">
      <div>
        <h2 className="font-display text-4xl font-semibold tracking-normal sm:text-5xl">
          Recent <span className="text-neutral-500 dark:text-neutral-400">Projects</span>
        </h2>
        <div className="mt-8 divide-y divide-neutral-200 dark:divide-white/10">
          {projects.map((project) => (
            <article key={project.title} className="project-row">
              <div className="flex flex-wrap items-center gap-2 text-xs font700 text-neutral-500 dark:text-neutral-400">
                <span>{project.status}</span>
                <span className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                <span>{project.tech.length} Tech</span>
              </div>
              <div className="mt-4 flex items-start justify-between gap-5">
                <div>
                  <h3 className="text-xl font800 leading-tight">{project.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600 dark:text-neutral-300">
                    {project.summary}
                  </p>
                </div>
                <span
                  className="icon-link shrink-0 opacity-60"
                  title="Live link pending"
                  aria-label={`Live link pending for ${project.title}`}
                >
                  <ExternalLink size={17} />
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
      <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
        <div className="side-card text-center">
          <WandSparkles className="mx-auto text-yellow-500" size={52} strokeWidth={1.4} />
          <h3 className="mt-8 font-display text-3xl font-semibold leading-tight">
            Have Something Cool in <span className="text-neutral-500 dark:text-neutral-400">Mind?</span>
          </h3>
          <p className="mt-5 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            This can be the start of something great.
          </p>
          <a className="button-pill mt-8" href={`mailto:${profile.email}`}>
            Let&apos;s Talk
            <Mail size={15} />
          </a>
        </div>
        <div className="side-card">
          <div className="flex items-center gap-2 font800">
            <Mail size={17} />
            Contact details
          </div>
          <p className="mt-4 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            Your resume links are connected now. Project live links can be added once the Vercel apps are ready.
          </p>
          <div className="mt-5 space-y-3">
            <ContactLink href={`mailto:${profile.email}`} icon={Mail} label={profile.email} />
            <ContactLink href={profile.github} icon={Terminal} label="GitHub" />
            <ContactLink href={profile.linkedin} icon={ExternalLink} label="LinkedIn" />
          </div>
        </div>
      </aside>
    </section>
  );
}

function Tools() {
  const doubledTools = [...tools, ...tools];

  return (
    <section id="stack" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          title="Tools And Tech"
          text="Explore My Latest Ventures and Innovations"
        />
      </div>
      <div className="tech-stage mt-12">
        <div className="tech-track">
          {doubledTools.map((tool, index) => (
            <TechBox key={`${tool.name}-${index}`} tool={tool} />
          ))}
        </div>
        <div className="tech-track reverse mt-5">
          {doubledTools.map((tool, index) => (
            <TechBox key={`${tool.name}-reverse-${index}`} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TechBox({ tool }) {
  const [logoIndex, setLogoIndex] = useState(0);
  const logos = tool.logos || [];
  const logo = logos[logoIndex];

  return (
    <article className="tech-box">
      <div className="tech-logo-wrap">
        {logo ? (
          <img
            key={logo}
            className="tech-logo"
            src={logo}
            alt={`${tool.name} logo`}
            loading="lazy"
            decoding="async"
            draggable="false"
            onError={() => {
              setLogoIndex((currentIndex) => Math.min(currentIndex + 1, logos.length));
            }}
          />
        ) : null}
        <span className={`tech-logo-fallback${logo ? '' : ' is-visible'}`} aria-hidden="true">
          {tool.fallback}
        </span>
      </div>
      <h3>{tool.name}</h3>
      <blockquote>{tool.text}</blockquote>
    </article>
  );
}


function NotesAndContact() {
  return (
    <section id="contact" className="mx-auto grid max-w-6xl gap-10 px-5 pb-24 pt-8 lg:grid-cols-[1fr_0.62fr]">
      <div>
        <h2 className="font-display text-4xl font-semibold tracking-normal sm:text-5xl">
          Delivery <span className="text-neutral-500 dark:text-neutral-400">Approach</span>
        </h2>
        <div className="mt-8 divide-y divide-neutral-200 dark:divide-white/10">
          {deliveryApproach.map((item) => (
            <article key={item.title} className="py-8">
              <div className="flex items-center gap-2 text-xs font700 text-neutral-500 dark:text-neutral-400">
                <span>{item.step}</span>
                <span className="tag py-1">Process</span>
              </div>
              <h3 className="mt-4 max-w-2xl text-xl font800 leading-tight">{item.title}</h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600 dark:text-neutral-300">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
      <div className="side-card self-start">
        <div className="flex items-center gap-2 font800">
          <Sparkles size={17} />
          Ready for new work
        </div>
        <h3 className="mt-5 font-display text-3xl font-semibold leading-tight">
          Let&apos;s build something intelligent and production-ready.
        </h3>
        <p className="mt-5 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
          I can help with AI apps, NLP systems, agent workflows, FastAPI backends, React frontends,
          and polished portfolio-grade websites.
        </p>
        <a className="button-pill mt-8" href={`mailto:${profile.email}`}>
          Email me
          <ArrowUpRight size={15} />
        </a>
      </div>
    </section>
  );
}

function ContactLink({ href, icon: Icon, label }) {
  const isExternal = href.startsWith('http');

  return (
    <a
      className="flex items-center justify-between gap-3 rounded-full border border-neutral-200 px-4 py-3 text-sm font700 transition hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-white/10"
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
    >
      <span className="flex min-w-0 items-center gap-2">
        <Icon className="shrink-0" size={16} />
        <span className="truncate">{label}</span>
      </span>
      <ArrowUpRight className="shrink-0 text-neutral-400" size={16} />
    </a>
  );
}

function SectionHeading({ title, text }) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="font-display text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-sm font-medium leading-7 text-neutral-600 sm:text-base dark:text-neutral-300">
        {text}
      </p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-8 text-sm text-neutral-500 dark:border-white/10 dark:text-neutral-400">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-5 sm:flex-row">
        <span>(c) 2026 {profile.name}. Built with React and Tailwind CSS.</span>
        <span className="flex items-center gap-2">
          <Code2 size={15} />
          Ready for Vercel deployment
        </span>
      </div>
    </footer>
  );
}

export default App;
