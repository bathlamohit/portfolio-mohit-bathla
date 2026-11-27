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

const initials = profile.shortName
  .split(" ")
  .map((w) => w[0])
  .join("");

/* ---------- Small building blocks ---------- */

const icons = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUpRight: <path d="M7 17 17 7M8 7h9v9" />,
  download: <path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
    </>
  ),
  github: (
    <path d="M9 19c-4 1.3-4-2-6-2.5m12 5v-3.4a3 3 0 0 0-.8-2.3c2.7-.3 5.6-1.3 5.6-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.6 2.1 5.6 2.4 5.6 2.4a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.2 8.8c0 4.6 2.8 5.6 5.5 6a3 3 0 0 0-.8 2.2V21" />
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  building: <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16M15 9h4a1 1 0 0 1 1 1v11M3 21h18M8 8h3M8 12h3M8 16h3" />,
  spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  award: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m8.5 13.5-1.5 7 5-2.5 5 2.5-1.5-7" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
};

function Icon({ name, className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {icons[name]}
    </svg>
  );
}

function Eyebrow({ index, children, dark }) {
  return (
    <p
      className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] ${
        dark ? "text-slate-400" : "text-subtle"
      }`}
    >
      <span className={dark ? "text-indigo-300" : "text-brand"}>{index}</span>
      <span className={`h-px w-8 ${dark ? "bg-slate-600" : "bg-line"}`} />
      {children}
    </p>
  );
}

function Section({ id, index, eyebrow, title, intro, children, tinted }) {
  return (
    <section id={id} className={tinted ? "border-y border-line bg-surface" : ""}>
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="max-w-2xl">
          <Eyebrow index={index}>{eyebrow}</Eyebrow>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-balance md:text-4xl">{title}</h2>
          {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
        </div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}

function Chip({ children }) {
  return (
    <span className="rounded-md border border-line bg-canvas px-2.5 py-1 text-[13px] text-ink-soft">
      {children}
    </span>
  );
}

const btnPrimary =
  "inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-brand";
const btnSecondary =
  "inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-sm font-medium text-ink transition hover:border-ink/30";

/* ---------- Page ---------- */

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-line/70 bg-canvas/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink font-mono text-xs text-white">
              {initials}
            </span>
            {profile.shortName}
          </a>

          <nav className="hidden items-center gap-1 text-sm text-muted md:flex">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="rounded-full px-3.5 py-2 transition hover:bg-ink/5 hover:text-ink">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={profile.resume}
              download
              className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition hover:bg-brand sm:inline-flex"
            >
              <Icon name="download" className="h-3.5 w-3.5" />
              Resume
            </a>

            {/* Mobile menu (no JS) */}
            <details className="group relative md:hidden">
              <summary
                aria-label="Open menu"
                className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-full border border-line bg-surface"
              >
                <Icon name="menu" />
              </summary>
              <div className="absolute right-0 mt-2 w-52 rounded-2xl border border-line bg-surface p-2 shadow-xl shadow-ink/5">
                {nav.map(([label, href]) => (
                  <a key={href} href={href} className="block rounded-lg px-3 py-2 text-sm hover:bg-canvas">
                    {label}
                  </a>
                ))}
                <a
                  href={profile.resume}
                  download
                  className="mt-1 flex items-center gap-2 rounded-lg bg-ink px-3 py-2 text-sm font-medium text-white"
                >
                  <Icon name="download" className="h-3.5 w-3.5" /> Resume
                </a>
              </div>
            </details>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="bg-grid pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[880px] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-6xl gap-14 px-6 pb-20 pt-20 md:pt-28 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-8">
              <span className="animate-rise inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1.5 text-xs font-medium text-ink-soft shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                {profile.tagline}
              </span>

              <p
                className="animate-rise mt-8 font-mono text-sm text-muted"
                style={{ animationDelay: "60ms" }}
              >
                {profile.name} — {profile.title}
              </p>

              <h1
                className="animate-rise mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl md:text-6xl"
                style={{ animationDelay: "120ms" }}
              >
                {profile.headline}
              </h1>

              <p
                className="animate-rise mt-7 max-w-2xl text-lg leading-relaxed text-muted"
                style={{ animationDelay: "180ms" }}
              >
                {profile.summary}
              </p>

              <div className="animate-rise mt-10 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
                <a href="#projects" className={btnPrimary}>
                  View my work <Icon name="arrow" />
                </a>
                <a href="#contact" className={btnSecondary}>
                  Get in touch
                </a>
              </div>
            </div>

            {/* Profile card */}
            <aside
              className="animate-rise self-end lg:col-span-4"
              style={{ animationDelay: "300ms" }}
            >
              <div className="rounded-3xl border border-line bg-surface p-6 shadow-xl shadow-ink/[0.04]">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-indigo-900 font-mono text-lg font-medium text-white">
                    {initials}
                  </div>
                  <div>
                    <p className="font-semibold">{profile.shortName}</p>
                    <p className="text-sm text-muted">{profile.title}</p>
                  </div>
                </div>
                <dl className="mt-6 space-y-3.5 border-t border-line pt-5 text-sm">
                  <div className="flex items-start gap-3">
                    <Icon name="building" className="mt-0.5 h-4 w-4 shrink-0 text-subtle" />
                    <dd>{profile.company}</dd>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-subtle" />
                    <dd>{profile.location}</dd>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="spark" className="mt-0.5 h-4 w-4 shrink-0 text-subtle" />
                    <dd>LLM evaluation · RAG · Agentic AI</dd>
                  </div>
                </dl>
                <div className="mt-6 flex gap-2">
                  {[
                    ["mail", `mailto:${profile.email}`, "Email"],
                    ["linkedin", profile.linkedin, "LinkedIn"],
                    ["github", profile.github, "GitHub"],
                  ].map(([icon, href, label]) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target={icon === "mail" ? undefined : "_blank"}
                      rel="noreferrer"
                      className="flex h-10 flex-1 items-center justify-center rounded-xl border border-line text-muted transition hover:border-ink/30 hover:text-ink"
                    >
                      <Icon name={icon} />
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {/* Stats */}
          <div className="relative mx-auto max-w-6xl px-6 pb-24">
            <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-surface md:grid-cols-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`p-6 md:p-8 ${i % 2 === 1 ? "border-l border-line" : ""} ${
                    i > 1 ? "border-t border-line md:border-t-0" : ""
                  } ${i === 2 ? "md:border-l" : ""}`}
                >
                  <dt className="text-3xl font-semibold tracking-tight md:text-4xl">{s.value}</dt>
                  <dd className="mt-1.5 text-sm text-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* About + FDE journey */}
        <Section
          id="about"
          index="01"
          eyebrow="About"
          title="Engineer, leader, and soon a Forward Deployed Engineer"
          intro={fdeJourney.intro}
          tinted
        >
          <ol className="grid gap-5 md:grid-cols-3">
            {fdeJourney.points.map((p, i) => (
              <li
                key={p.title}
                className="group relative rounded-2xl border border-line bg-canvas p-7 transition hover:-translate-y-0.5 hover:border-ink/20 hover:bg-surface hover:shadow-lg hover:shadow-ink/[0.04]"
              >
                <span className="font-mono text-xs text-brand">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2.5 leading-relaxed text-muted">{p.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Experience */}
        <Section id="experience" index="02" eyebrow="Experience" title="Where I've worked">
          <ol className="border-t border-line">
            {experience.map((job, i) => (
              <li
                key={job.company + job.period}
                className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-8"
              >
                <div className="md:col-span-3">
                  <p className="font-mono text-xs uppercase tracking-wider text-subtle">{job.period}</p>
                  {i === 0 && (
                    <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Current
                    </span>
                  )}
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-lg font-semibold tracking-tight">{job.role}</h3>
                  <p className="text-muted">{job.company}</p>
                  {job.points.length > 0 && (
                    <ul className="mt-4 space-y-2.5">
                      {job.points.map((pt) => (
                        <li key={pt} className="flex gap-3 leading-relaxed text-ink-soft">
                          <span className="mt-[11px] h-px w-3 shrink-0 bg-subtle" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* Projects */}
        <Section id="projects" index="03" eyebrow="Projects" title="Selected work" tinted>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => {
              const featured = i === 0;
              return (
                <article
                  key={p.name}
                  className={`group flex flex-col rounded-3xl border border-line p-7 transition hover:border-ink/20 hover:shadow-xl hover:shadow-ink/[0.05] md:p-9 ${
                    featured
                      ? "relative overflow-hidden bg-gradient-to-br from-brand-soft via-surface to-surface md:col-span-2"
                      : "bg-canvas hover:bg-surface"
                  }`}
                >
                  <div className={featured ? "grid gap-10 md:grid-cols-2" : "flex flex-1 flex-col"}>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-3">
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand">{p.tag}</p>
                        {featured && (
                          <span className="rounded-full bg-ink px-2 py-0.5 text-[11px] font-medium text-white">
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className={`mt-4 font-semibold tracking-tight ${featured ? "text-3xl" : "text-2xl"}`}>
                        {p.name}
                      </h3>
                      <p className="mt-4 leading-relaxed text-muted">{p.description}</p>
                      {featured && (
                        <div className="mt-6 flex flex-wrap gap-2">
                          {p.stack.map((t) => (
                            <Chip key={t}>{t}</Chip>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className={featured ? "" : "flex flex-1 flex-col"}>
                      <ul
                        className={`space-y-3 text-[15px] ${
                          featured ? "rounded-2xl border border-line bg-surface/80 p-6" : "mt-6"
                        }`}
                      >
                        {featured && (
                          <li className="pb-1 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
                            Highlights
                          </li>
                        )}
                        {p.highlights.map((h) => (
                          <li key={h} className="flex gap-3">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                              <Icon name="check" className="h-3 w-3" />
                            </span>
                            <span className="text-ink-soft">{h}</span>
                          </li>
                        ))}
                      </ul>
                      {!featured && (
                        <div className="mt-auto flex flex-wrap gap-2 pt-7">
                          {p.stack.map((t) => (
                            <Chip key={t}>{t}</Chip>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-strong"
                    >
                      View project <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
                    </a>
                  )}
                </article>
              );
            })}
          </div>
        </Section>

        {/* Skills + credentials */}
        <Section id="skills" index="04" eyebrow="Skills" title="What I bring">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <div key={s.group} className="bg-surface p-7">
                <h3 className="font-semibold tracking-tight">{s.group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h3 className="text-xl font-semibold tracking-tight">Education & certifications</h3>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {credentials.map((c) => (
                <li key={c.title} className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <Icon name="award" className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium">{c.title}</p>
                    <p className="mt-0.5 text-sm text-muted">{c.org}</p>
                  </div>
                  {c.year && (
                    <span className="shrink-0 rounded-full border border-line px-2.5 py-0.5 font-mono text-xs text-muted">
                      {c.year}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Contact */}
        <section id="contact" className="relative overflow-hidden bg-ink text-white">
          <div className="bg-grid-dark pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute -bottom-48 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand/40 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex justify-center">
                <Eyebrow index="05" dark>
                  Contact
                </Eyebrow>
              </div>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-balance md:text-6xl">
                Let's build something that ships.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">
                Open to Forward Deployed Engineering and applied-AI roles. The fastest way to reach me is email or
                LinkedIn.
              </p>
              <div className="mt-11 flex flex-wrap justify-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-ink transition hover:bg-indigo-100"
                >
                  <Icon name="mail" /> {profile.email}
                </a>
                {[
                  ["linkedin", profile.linkedin, "LinkedIn"],
                  ["github", profile.github, "GitHub"],
                ].map(([icon, href, label]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium backdrop-blur transition hover:border-white/40 hover:bg-white/10"
                  >
                    <Icon name={icon} /> {label}
                  </a>
                ))}
                <a
                  href={profile.resume}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium backdrop-blur transition hover:border-white/40 hover:bg-white/10"
                >
                  <Icon name="download" /> Resume
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/10 px-6 py-8 text-sm sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="font-mono text-xs">Built with Next.js · Deployed on Vercel</p>
        </div>
      </footer>
    </>
  );
}
