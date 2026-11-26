import {
  profile,
  stats,
  fdeJourney,
  experience,
  projects,
  skills,
  credentials,
} from "@/data/profile";

const nav = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

function Section({ id, eyebrow, title, children, tinted }) {
  return (
    <section id={id} className={tinted ? "bg-slate-50 border-y border-line" : ""}>
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Pill({ children }) {
  return (
    <span className="rounded-full border border-line bg-white px-3 py-1 text-sm text-muted">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-bold tracking-tight">
            {profile.shortName}
          </a>
          <nav className="hidden gap-6 text-sm text-muted md:flex">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="hover:text-brand">
                {label}
              </a>
            ))}
          </nav>
          <a
            href={profile.resume}
            download
            className="rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-blue-800"
          >
            Resume
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 pb-16 pt-20 md:pt-28">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1 text-sm font-medium text-brand">
            <span className="h-2 w-2 rounded-full bg-brand" />
            {profile.tagline}
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">{profile.name}</h1>
          <p className="mt-3 text-lg text-muted md:text-xl">
            {profile.title} · {profile.company} · {profile.location}
          </p>
          <p className="mt-8 max-w-3xl text-2xl font-medium leading-snug md:text-3xl">
            {profile.headline}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-lg bg-brand px-5 py-3 font-medium text-white hover:bg-blue-800">
              View my work
            </a>
            <a href="#contact" className="rounded-lg border border-line px-5 py-3 font-medium hover:border-brand hover:text-brand">
              Get in touch
            </a>
          </div>
          <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-line pt-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-3xl font-bold text-brand">{s.value}</dt>
                <dd className="mt-1 text-sm text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* About + FDE journey */}
        <Section id="about" eyebrow="About" title="Engineer, leader, and soon a Forward Deployed Engineer" tinted>
          <div className="grid gap-10 md:grid-cols-5">
            <div className="space-y-4 text-lg leading-relaxed text-muted md:col-span-2">
              <p>{profile.summary}</p>
              <p>{fdeJourney.intro}</p>
            </div>
            <ol className="space-y-4 md:col-span-3">
              {fdeJourney.points.map((p, i) => (
                <li key={p.title} className="flex gap-4 rounded-xl border border-line bg-white p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-soft font-semibold text-brand">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="mt-1 text-muted">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" eyebrow="Experience" title="Where I've worked">
          <ol className="relative border-l-2 border-line">
            {experience.map((job) => (
              <li key={job.company + job.period} className="mb-10 ml-6 last:mb-0">
                <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-white bg-brand" />
                <div className="flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
                  <h3 className="text-lg font-semibold">
                    {job.role} <span className="font-normal text-muted">· {job.company}</span>
                  </h3>
                  <span className="text-sm text-muted">{job.period}</span>
                </div>
                {job.points.length > 0 && (
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted">
                    {job.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </Section>

        {/* Projects */}
        <Section id="projects" eyebrow="Projects" title="Selected work" tinted>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <article key={p.name} className="flex flex-col rounded-xl border border-line bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">{p.tag}</p>
                <h3 className="mt-2 text-xl font-bold">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="text-brand">✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded bg-slate-100 px-2 py-0.5 text-xs text-muted">
                      {t}
                    </span>
                  ))}
                </div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="mt-4 text-sm font-medium text-brand hover:underline">
                    View project →
                  </a>
                )}
              </article>
            ))}
          </div>
        </Section>

        {/* Skills + credentials */}
        <Section id="skills" eyebrow="Skills" title="What I bring">
          <div className="grid gap-8 md:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group}>
                <h3 className="font-semibold">{s.group}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <Pill key={i}>{i}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <h3 className="mt-16 text-xl font-bold">Education & certifications</h3>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {credentials.map((c) => (
              <li key={c.title} className="rounded-xl border border-line p-5">
                <p className="font-semibold">{c.title}</p>
                <p className="mt-1 text-sm text-muted">
                  {c.org}
                  {c.year && ` · ${c.year}`}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Contact */}
        <section id="contact" className="bg-ink text-white">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Let's build something that ships.</h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Open to Forward Deployed Engineering and applied-AI roles. The fastest way to reach me is email or LinkedIn.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${profile.email}`} className="rounded-lg bg-white px-5 py-3 font-medium text-ink hover:bg-slate-200">
                {profile.email}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-600 px-5 py-3 font-medium hover:border-white">
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-600 px-5 py-3 font-medium hover:border-white">
                GitHub
              </a>
              <a href={profile.resume} download className="rounded-lg border border-slate-600 px-5 py-3 font-medium hover:border-white">
                Download resume
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} {profile.name} · Built with Next.js, deployed on Vercel
      </footer>
    </>
  );
}
