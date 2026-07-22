import { useEffect, useRef, useState } from 'react'
import {
  profile, terminal, about, experience, workCategories, work, certGroups, contact,
} from './content.js'

/* ----------------------------------------------------------------- icons -- */
const Icon = {
  github: (p) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...p}>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.3-1.69-1.3-1.69-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.69.42.36.8 1.08.8 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  ),
  linkedin: (p) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...p}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.2.8 24 1.77 24h20.45c.98 0 1.78-.8 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
    </svg>
  ),
  tableau: (p) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...p}>
      <path d="M11.4 6.6h1.2v2.2h2.1v1.1h-2.1v2.2h-1.2v-2.2H9.3V8.8h2.1V6.6Zm0 8.9h1.2v1.7h1.6v1h-1.6v1.7h-1.2v-1.7H9.8v-1h1.6v-1.7Zm-6.8-4.4h1v1.7h1.6v.9H5.6v1.7h-1v-1.7H3v-.9h1.6v-1.7Zm13.6 0h1v1.7H21v.9h-1.8v1.7h-1v-1.7h-1.6v-.9h1.6v-1.7ZM11.7 0h.6v1.6h1.4v.7h-1.4v1.6h-.6V2.3h-1.4v-.7h1.4V0ZM5 4.2h.8v1.3H7v.7H5.8V7.5H5V6.2H3.8v-.7H5V4.2Zm13.4 0h.8v1.3h1.2v.7h-1.2V7.5h-.8V6.2h-1.2v-.7h1.2V4.2ZM11.9 20.2h.3v3.8h-.3v-3.8Z" />
    </svg>
  ),
  mail: (p) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" /><path d="m3 6 9 6 9-6" />
    </svg>
  ),
  arrow: (p) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  download: (p) => (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16" />
    </svg>
  ),
  menu: (p) => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
}

/* --------------------------------------------------------------- helpers -- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function useTypewriter(words, { type = 90, pause = 1600, del = 45 } = {}) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)
  useEffect(() => {
    const full = words[i % words.length]
    let t
    if (!deleting && text === full) {
      t = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setI((v) => v + 1)
    } else {
      t = setTimeout(() => {
        setText(full.slice(0, text.length + (deleting ? -1 : 1)))
      }, deleting ? del : type)
    }
    return () => clearTimeout(t)
  }, [text, deleting, i, words, type, pause, del])
  return text
}

/* ------------------------------------------------------------------- nav -- */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const links = [
    ['About', '#about'], ['Experience', '#experience'], ['Work', '#work'], ['Certifications', '#certs'], ['Contact', '#contact'],
  ]
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <span className="brand-badge">{profile.initials}</span>
          {profile.name}
        </a>
        <div className={`nav-links ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          <a className="nav-cta" href={contact.resume} target="_blank" rel="noreferrer">Résumé</a>
        </div>
        <button className="nav-toggle" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          <Icon.menu />
        </button>
      </div>
    </nav>
  )
}

/* ------------------------------------------------------------------ hero -- */
function Hero() {
  const role = useTypewriter(profile.roles)
  const social = Object.fromEntries(contact.socials.map((s) => [s.icon, s.href]))
  return (
    <header className="hero" id="top">
      <div className="hero-grid" />
      <div className="container hero-inner">
        <div>
          <span className="eyebrow"><span className="dot" /> {profile.availability}</span>
          <h1>{profile.name}</h1>
          <div className="role-line">
            <span className="grad-text">{role}</span><span className="caret" />
          </div>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">View my work <Icon.arrow /></a>
            <a className="btn btn-ghost" href={contact.resume} target="_blank" rel="noreferrer">
              <Icon.download /> Résumé
            </a>
          </div>
          <div className="hero-socials">
            <a href={`mailto:${contact.email}`} aria-label="Email"><Icon.mail /></a>
            {social.github && <a href={social.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon.github /></a>}
            {social.linkedin && social.linkedin !== '#' && <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon.linkedin /></a>}
            {social.tableau && <a href={social.tableau} target="_blank" rel="noreferrer" aria-label="Tableau"><Icon.tableau /></a>}
          </div>
        </div>

        <div className="terminal">
          <div className="terminal-bar">
            <span className="tdot r" /><span className="tdot y" /><span className="tdot g" />
            <span className="tname">{terminal.prompt.replace(/:.*/, '')} — zsh</span>
          </div>
          <div className="terminal-body">
            <div className="cmd">
              <span className="p">{terminal.prompt}</span> <span className="c">{terminal.command}</span>
            </div>
            {terminal.lines.map((l) => (
              <div className="term-line" key={l.k}>
                <span className="k">{l.k}:</span><span className="v">{l.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

/* ----------------------------------------------------------------- about -- */
function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">// about</span>
          <h2 className="section-title">{profile.headline}</h2>
        </div>
        <div className="about-grid">
          <div className="about-text reveal">
            {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="reveal">
            {about.skillGroups.map((g) => (
              <div className={`skill-group ${g.accent}`} key={g.label}>
                <h4>{g.label}</h4>
                <div className="chips">
                  {g.skills.map((s) => <span className="chip" key={s}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------ experience -- */
function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">// experience</span>
          <h2 className="section-title">Where I&apos;ve done the work</h2>
        </div>
        <div className="timeline">
          {experience.map((job) => (
            <div className="job reveal" key={job.company}>
              <div className="job-head">
                <div>
                  <h3>{job.company}</h3>
                  <span className="job-loc">{job.location}</span>
                </div>
                <span className="job-period mono">{job.period}</span>
              </div>
              {job.roles.map((r) => (
                <div className="role" key={r.title}>
                  <div className="role-head">
                    <h4>{r.title}</h4>
                    <span className="mono">{r.period}</span>
                  </div>
                  <ul>
                    {r.points.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ work -- */
function Work() {
  const [filter, setFilter] = useState('all')
  const catLabel = Object.fromEntries(workCategories.map((c) => [c.id, c.label]))
  const items = filter === 'all' ? work : work.filter((w) => w.category === filter)
  return (
    <section id="work">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">// selected work</span>
          <h2 className="section-title">Things I&apos;ve built &amp; analyzed</h2>
          <p className="section-sub">
            Security &amp; infrastructure up top, then the software, quant research, and data work.
            Private projects are shown without code links.
          </p>
        </div>

        <div className="work-filters reveal">
          {workCategories.map((c) => (
            <button
              key={c.id}
              className={`filter-btn ${filter === c.id ? 'active' : ''}`}
              onClick={() => setFilter(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="work-grid">
          {items.map((w, i) => (
            <article className="card reveal" key={w.title} style={{ transitionDelay: `${(i % 3) * 60}ms` }}>
              <span className="card-cat">{catLabel[w.category]}</span>
              <div className="card-top">
                <h3>{w.title}</h3>
                {w.status === 'work' && <span className="card-status status-progress">Production</span>}
                {w.status === 'private' && <span className="card-status status-private">Personal</span>}
                {w.status === 'placeholder' && <span className="card-status status-placeholder">Placeholder</span>}
              </div>
              <p>{w.blurb}</p>
              <div className="card-tags">{w.tags.map((t) => <span key={t}>{t}</span>)}</div>
              {w.status === 'live' && w.link && (
                <a className="card-link" href={w.link} target="_blank" rel="noreferrer">
                  {w.linkLabel || 'View project'} <Icon.arrow />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ certs -- */
function Certifications() {
  return (
    <section id="certs">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">// credentials</span>
          <h2 className="section-title">Certifications</h2>
        </div>
        <div className="cert-grid">
          {certGroups.map((g) => (
            <div className="cert-col reveal" key={g.label}>
              <h4>{g.label}</h4>
              {g.note && <div className="cert-note">{g.note}</div>}
              <ul>
                {g.items.map((c) => (
                  <li key={c.name}>
                    {c.href
                      ? <a href={c.href} target="_blank" rel="noreferrer">{c.name}</a>
                      : <span>{c.name}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- contact -- */
function Contact() {
  const social = Object.fromEntries(contact.socials.map((s) => [s.icon, s.href]))
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-card reveal">
          <h2>Let&apos;s connect</h2>
          <p>{contact.blurb}</p>
          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${contact.email}`}>
              <Icon.mail /> Email me
            </a>
            {(contact.resumes || []).map((r) => (
              <a className="btn btn-ghost" key={r.href} href={r.href} target="_blank" rel="noreferrer">
                <Icon.download /> {r.label}
              </a>
            ))}
          </div>
          <div className="contact-meta">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            {contact.phone && <span>{contact.phone}</span>}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------- footer -- */
function Footer() {
  const social = Object.fromEntries(contact.socials.map((s) => [s.icon, s.href]))
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="muted">© {new Date().getFullYear()} {profile.name} — built with React &amp; Vite</span>
        <div className="footer-socials">
          <a href={`mailto:${contact.email}`} aria-label="Email"><Icon.mail /></a>
          {social.github && <a href={social.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon.github /></a>}
          {social.linkedin && social.linkedin !== '#' && <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon.linkedin /></a>}
          {social.tableau && <a href={social.tableau} target="_blank" rel="noreferrer" aria-label="Tableau"><Icon.tableau /></a>}
        </div>
      </div>
    </footer>
  )
}

/* -------------------------------------------------------------------- app -- */
export default function App() {
  useReveal()
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <About />
        <Experience />
        <Work />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
