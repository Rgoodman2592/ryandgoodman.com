import { useState } from 'react';

interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  github: string;
  tech: string[];
  icon: string;
  color: string;
}

const publicProjects: Project[] = [
  {
    id: 'mesker',
    name: 'Mesker Digital Builder',
    description: 'Full-stack door and frame configurator with live pricing, SVG elevation drawings, and quote management for Mesker hollow metal products.',
    url: 'https://mbo.ryandgoodman.com',
    github: 'https://github.com/Rgoodman2592/mesker-builder',
    tech: ['React', 'TypeScript', 'Tailwind', 'Zustand', 'AWS S3'],
    icon: '🚪',
    color: 'from-red-500 to-red-700',
  },
];

const privateProjects: Project[] = [
  {
    id: 'survey',
    name: 'Fire Door & Hardware Survey',
    description: 'NFPA 80 compliant inspection app with 13-point fire door checklist, hardware condition evaluation, offline PWA support, and PDF reports.',
    url: 'https://dd2xbe6lkcvg6.cloudfront.net',
    github: 'https://github.com/Rgoodman2592/fire-door-survey',
    tech: ['React', 'TypeScript', 'PWA', 'DynamoDB', 'Lambda'],
    icon: '🔥',
    color: 'from-orange-500 to-red-600',
  },
  {
    id: 'estimate',
    name: 'DHS Estimate Builder',
    description: 'AI-powered estimate builder with real-time multi-vendor pricing (IML, SecLock, CRL, Alarmax), fire code compliance, and Service Fusion integration.',
    url: 'http://3.147.205.68',
    github: 'https://github.com/Rgoodman2592/dhs-estimate-builder',
    tech: ['Python', 'Playwright', 'OpenAI', 'Service Fusion API'],
    icon: '🤖',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'field',
    name: 'DHS Field App',
    description: 'Mobile-first PWA for field survey and estimate generation. Photo-required issue capture, NFPA 80 fire code compliance, multi-vendor pricing, AI classification, and Service Fusion integration.',
    url: 'https://djzddv813v650.cloudfront.net',
    github: 'https://github.com/Rgoodman2592/dhs-field-app',
    tech: ['React', 'TypeScript', 'PWA', 'AWS S3', 'Claude AI', 'IndexedDB'],
    icon: '📋',
    color: 'from-violet-500 to-purple-700',
  },
  {
    id: 'takeoff',
    name: 'CES Takeoff',
    description: 'AI-powered construction document takeoff with automatic door/frame extraction from PDFs, hardware set management, and shop drawing generation.',
    url: 'https://d3usrr5x5o1mxc.cloudfront.net',
    github: 'https://github.com/Rgoodman2592/ces-takeoff',
    tech: ['React', 'TypeScript', 'AWS Lambda', 'Cognito', 'DynamoDB'],
    icon: '📐',
    color: 'from-emerald-500 to-teal-600',
  },
];

const PRIVATE_PASSWORD = 'ryandgoodman25';

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      <div className={`h-2 bg-gradient-to-r ${project.color}`} />
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl">{project.icon}</div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-gray-700 transition-colors"
            title="View on GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white font-semibold rounded-lg hover:opacity-90 transition-opacity`}
        >
          View Live Demo
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}

function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [pw, setPw] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pw === PRIVATE_PASSWORD) {
      sessionStorage.setItem('private_unlocked', '1');
      onUnlock();
    } else {
      setError(true);
      setPw('');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 px-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="text-4xl mb-4">🔒</div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Private Projects</h2>
        <p className="text-sm text-gray-500 mb-6">Enter the password to view.</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="password"
            value={pw}
            onChange={(e) => { setPw(e.target.value); setError(false); }}
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-center text-sm focus:border-blue-500 focus:outline-none"
            autoFocus
          />
          {error && <p className="text-red-500 text-xs">Incorrect password</p>}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<'public' | 'private'>('public');
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem('private_unlocked') === '1');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <a href="/" className="text-xl font-bold text-gray-900">
              Ryan Goodman
            </a>
            <a href="tel:2409386518" className="ml-4 text-sm text-gray-500 hover:text-gray-700">
              240.938.6518
            </a>
          </div>
          <nav className="flex gap-4">
            <button
              onClick={() => setPage('public')}
              className={`font-medium transition-colors ${
                page === 'public' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setPage('private')}
              className={`font-medium transition-colors ${
                page === 'private' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Private
            </button>
          </nav>
        </div>
      </header>

      {/* Public Projects */}
      {page === 'public' && (
        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Projects</h1>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {publicProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Private Projects */}
      {page === 'private' && !unlocked && (
        <PasswordGate onUnlock={() => setUnlocked(true)} />
      )}
      {page === 'private' && unlocked && (
        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Private Projects</h1>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {privateProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-500 text-sm">
              &copy; 2026 Ryan Goodman
            </div>
            <a href="tel:2409386518" className="text-gray-400 hover:text-gray-600 text-sm">
              240.938.6518
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
