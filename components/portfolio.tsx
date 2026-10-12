import { ArrowDown, ArrowRight, ArrowUpRight, Check, Code2, Layers3, Mail, Menu, ShieldCheck, Sparkles } from 'lucide-react'

const technologies = ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'AI agents']

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span className="section-number">{number}</span>
      <span>{children}</span>
    </div>
  )
}

function Navigation() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Vincent Macquet Maurel, home">
        <span className="brand-mark">VM</span>
        <span className="brand-name">Vincent Macquet Maurel</span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#work">Selected work</a>
        <a href="#about">Approach</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="header-actions">
        <a className="availability" href="mailto:vmaurel30@yahoo.com">
          <span className="availability-dot" />
          <span>Available for select projects</span>
          <ArrowUpRight aria-hidden="true" size={14} />
        </a>
        <div className="social-links" aria-label="Social profiles">
          <a className="social-link" href="https://www.linkedin.com/in/vincentmacquetmaurel" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" /></svg>
          </a>
          <a className="social-link" href="https://github.com/vinnymaurel1978fullstack" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297a12 12 0 0 0-3.793 23.385c.6.111.82-.261.82-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.306.762-1.606-2.665-.304-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.323 3.301 1.23a11.5 11.5 0 0 1 6.007 0c2.292-1.553 3.298-1.23 3.298-1.23.655 1.652.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.216.694.825.576A12.001 12.001 0 0 0 12 .297Z" /></svg>
          </a>
        </div>
      </div>
      <a className="mobile-menu" href="#work" aria-label="Skip to selected work"><Menu size={20} /></a>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-topline"><span>INDEPENDENT ENGINEER · WORLDWIDE REMOTE</span><span>PORT EDWARD, ZA</span></div>
      <div className="hero-content">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> A little about what I do</p>
          <h1 id="hero-title">Vincent<br /><span>Macquet Maurel</span></h1>
          <p className="hero-role">Senior Full-Stack Engineer <span>·</span> AI &amp; Product Engineering <span>·</span> 13+ years</p>
          <div className="hero-bottom">
            <p className="hero-intro">I turn complex problems into thoughtful, dependable software — from the first product question to the last line in production.</p>
            <div className="hero-ctas">
              <a className="text-link" href="#work">Explore selected work <ArrowDown size={15} aria-hidden="true" /></a>
              <a className="cv-button" href="/cv.pdf" download="Vincent-Macquet-Maurel-CV.pdf">Download CV <ArrowDown size={14} aria-hidden="true" /></a>
            </div>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <div className="orbit-core"><Code2 size={30} strokeWidth={1.2} /></div>
          <span className="orbit-point point-one" /><span className="orbit-point point-two" /><span className="orbit-point point-three" />
          <span className="art-caption">BUILDING AT THE<br />INTERSECTION OF<br /><strong>PRODUCT × SYSTEMS</strong></span>
        </div>
      </div>
      <div className="hero-footer"><span>SCROLL TO EXPLORE</span><span className="hero-footer-line" /><span>01 / 03</span></div>
    </section>
  )
}

function ProductPreview() {
  return (
    <div className="product-preview" aria-label="Illustrative insurance platform interface">
      <div className="preview-topbar">
        <div className="preview-brand"><span className="preview-brand-icon"><ShieldCheck size={13} /></span> northstar <span className="preview-divider">/</span> Claims</div>
        <div className="preview-actions"><span className="preview-search">⌕&nbsp;&nbsp; Search claims</span><span className="preview-avatar">JM</span></div>
      </div>
      <div className="preview-body">
        <aside className="preview-sidebar">
          <div className="sidebar-label">WORKSPACE</div>
          <div className="sidebar-item active"><Layers3 size={14} /> Overview</div>
          <div className="sidebar-item"><ShieldCheck size={14} /> Claims <span className="sidebar-count">24</span></div>
          <div className="sidebar-item"><Code2 size={14} /> Policies</div>
          <div className="sidebar-bottom"><span className="preview-avatar small">JM</span><span>Jordan Miller<small>Claims manager</small></span></div>
        </aside>
        <div className="preview-main">
          <div className="preview-heading"><div><div className="preview-kicker">TUESDAY, OCTOBER 08</div><h3>Good morning, Jordan</h3><p>Here&apos;s what&apos;s happening across your claims.</p></div><span className="preview-filter">Last 30 days&nbsp;⌄</span></div>
          <div className="metric-row">
            <div className="metric-card"><span>Open claims</span><strong>1,284</strong><small className="metric-positive">↗ 12.8% <span>vs last month</span></small></div>
            <div className="metric-card"><span>Claims in review</span><strong>284</strong><small className="metric-positive">↗ 18 <span>this week</span></small></div>
            <div className="metric-card"><span>AI agents</span><strong>Active</strong><small className="metric-neutral"><Sparkles size={11} /> supporting claim teams</small></div>
          </div>
          <div className="claims-panel">
            <div className="claims-head"><strong>Recent claims</strong><span>View all <ArrowRight size={12} /></span></div>
            <div className="claim-row claim-header"><span>CLAIMANT</span><span>TYPE</span><span>STATUS</span><span>OWNER</span></div>
            <div className="claim-row"><span><i className="claim-avatar avatar-a">SL</i> Sophie Laurent</span><span>Auto</span><span><i className="status-dot" /> In review</span><span>Alex M.</span></div>
            <div className="claim-row"><span><i className="claim-avatar avatar-b">TM</i> Thomas Moreau</span><span>Property</span><span><i className="status-dot status-green" /> Approved</span><span>Camille R.</span></div>
            <div className="claim-row"><span><i className="claim-avatar avatar-c">EB</i> Emma Bernard</span><span>Health</span><span><i className="status-dot status-amber" /> Needs info</span><span>Alex M.</span></div>
          </div>
        </div>
      </div>
      <div className="preview-annotation"><span className="annotation-icon"><Sparkles size={14} /></span><span><strong>AI copilot</strong><small>Summarized 18 documents</small></span><span className="annotation-check"><Check size={13} /></span></div>
    </div>
  )
}

function ProjectSection() {
  return (
    <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <SectionLabel number="01">Selected work</SectionLabel>
        <span className="section-aside">A closer look at a recent build&nbsp; ↘</span>
      </div>
      <article className="project-card">
        <div className="project-visual"><ProductPreview /><span className="visual-index">CASE STUDY&nbsp; / &nbsp;IN PRODUCTION</span></div>
        <div className="project-info">
          <div className="project-overline"><span>INSURTECH</span><span>01 — 01</span></div>
          <h2 id="work-title">Insurance,<br />made more human.</h2>
          <p className="project-description">A production claims platform that gives teams the clarity to move faster — and customers a better experience when it matters most.</p>
          <div className="project-impact"><div className="impact-stat"><strong>2,500<span>+</span></strong><span>users served</span></div><div className="impact-stat"><strong>AI</strong><span>agent workflows</span></div><div className="impact-stat"><strong>Live</strong><span>in production</span></div></div>
          <div className="project-stack-label">BUILT WITH</div>
          <ul className="tech-list" aria-label="Technologies used">{technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>
          <a className="project-link" href="mailto:vmaurel30@yahoo.com?subject=Insurance%20platform%20case%20study">Discuss this project <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </article>
    </section>
  )
}

function ApproachSection() {
  return (
    <section className="approach-section section-wrap" id="about" aria-labelledby="approach-title">
      <div className="section-heading"><SectionLabel number="02">How I work</SectionLabel><span className="section-aside">Thoughtful by design. Reliable by default.</span></div>
      <div className="approach-grid">
        <h2 id="approach-title">Great software<br />starts with <em>good questions.</em></h2>
        <p>I partner closely with product and engineering teams to find the real problem, shape a clear path forward, and deliver software that holds up in the real world. Pragmatic about the tools; uncompromising about the outcome.</p>
        <div className="approach-note"><span>01</span><strong>Make the complex clear.</strong><small>Architecture that makes room for change.</small></div>
        <div className="approach-note"><span>02</span><strong>Ship with intention.</strong><small>Useful increments, measured by impact.</small></div>
        <div className="approach-note"><span>03</span><strong>Keep people in the loop.</strong><small>AI that amplifies expertise, not replaces it.</small></div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
      <div className="contact-top"><SectionLabel number="03">Get in touch</SectionLabel><span className="contact-open"><span className="availability-dot" /> OPEN TO THE RIGHT CHALLENGE</span></div>
      <div className="contact-main"><div><p className="eyebrow">Have something worth building?</p><h2 id="contact-title">Let&apos;s make<br /><span>it matter.</span></h2></div><div className="contact-action"><p>Looking for a senior engineer to help your team build a thoughtful product? I&apos;d love to hear what you&apos;re working on.</p><a className="contact-button" href="mailto:vmaurel30@yahoo.com"><Mail size={16} aria-hidden="true" /> vmaurel30@yahoo.com <ArrowUpRight size={16} aria-hidden="true" /></a></div></div>
      <footer className="site-footer"><a className="brand footer-brand" href="#top"><span className="brand-mark">VM</span><span className="brand-name">Vincent Macquet Maurel</span></a><span>DESIGNED &amp; BUILT WITH CARE</span><a href="#top">BACK TO TOP ↑</a><span>© {new Date().getFullYear()} VM</span></footer>
    </section>
  )
}

export function Portfolio() {
  return <div className="portfolio-shell"><Navigation /><main><Hero /><ProjectSection /><ApproachSection /><ContactSection /></main></div>
}
