import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Eye,
  Fingerprint,
  Gauge,
  Layers,
  Lock,
  Minus,
  Plus,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Cube } from "./cube";

/* ------------------------------- Hero -------------------------------- */

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="grid-backdrop pointer-events-none absolute inset-0" />
      <div
        className="animate-halo pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-halo)" }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span
            className="reveal inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card/70 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-primary uppercase"
            style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Responsible AI, shipped
          </span>

          <h1
            className="reveal mt-6 text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl lg:text-6xl"
            style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
          >
            Geometry of <span className="text-gradient">Infinite Intelligence.</span>
          </h1>

          <p
            className="reveal mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
          >
            Building AI products that empower people, automate work, and transform modern
            businesses — from strategy to scale, turning complexity into measurable progress.
          </p>

          <div
            className="reveal mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ "--reveal-delay": "270ms" } as React.CSSProperties}
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1"
              style={{ background: "var(--gradient-primary)" }}
            >
              Talk to our team
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#product"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-card/70 px-6 py-3.5 text-sm font-semibold text-foreground transition-colors duration-300 hover:border-primary/40 hover:text-primary"
            >
              Explore product
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <dl
            className="reveal mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-8"
            style={{ "--reveal-delay": "360ms" } as React.CSSProperties}
          >
            {[
              { k: "2–6 wks", v: "Pilot to release" },
              { k: "100%", v: "Privacy-first design" },
              { k: "24/7", v: "Traceable activity" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                  {s.k}
                </dt>
                <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative grid place-items-center">
            <div
              className="animate-halo absolute h-64 w-64 rounded-full blur-3xl sm:h-80 sm:w-80"
              style={{ background: "var(--gradient-primary)", opacity: 0.06 }}
            />
            <Cube size={260} />
            {[
              { r: 150, d: "24s" },
              { r: 190, d: "34s" },
            ].map((o, i) => (
              <span
                key={i}
                className="animate-orbit absolute h-2.5 w-2.5 rounded-full bg-primary"
                style={
                  {
                    "--orbit-r": `${o.r}px`,
                    "--orbit-d": o.d,
                    animationDirection: i % 2 ? "reverse" : "normal",
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Marquee ------------------------------ */

const FOCUS = [
  "eRTHM",
  "Emotional Awareness",
  "Self-Regulation",
  "Mindful Reflection",
  "Responsible AI",
  "Human-Centered Automation",
];

export function FocusMarquee() {
  return (
    <section id="focus" className="border-y border-border bg-card/40 py-6">
      <div className="marquee-mask overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-10 pr-10">
          {[...FOCUS, ...FOCUS, ...FOCUS, ...FOCUS].map((item, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap">
              <span className="animate-shimmer font-display text-sm font-semibold tracking-[0.22em] uppercase">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary/40" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Product ------------------------------ */

export function Product() {
  return (
    <section id="product" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionLabel>What we build</SectionLabel>
        <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <h2 className="reveal text-3xl font-semibold text-balance sm:text-4xl lg:text-[2.75rem]">
            AI product built for <span className="text-gradient">mindful growth.</span>
          </h2>
          <p
            className="reveal text-base leading-relaxed text-muted-foreground"
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            eRTHM supports emotional awareness through private check-ins, guided reflection, and
            privacy-conscious pattern insight.
          </p>
        </div>

        <article
          className="reveal beam lift surface-card group relative mt-12 overflow-hidden rounded-3xl p-7 sm:p-10"
          style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
        >
          <div className="grid gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">
            <div
              className="grid h-16 w-16 place-items-center rounded-2xl text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Boxes className="h-7 w-7" />
            </div>
            <div>
              <span className="font-display text-xs font-semibold tracking-[0.3em] text-muted-foreground">
                01
              </span>
              <h3 className="mt-2 text-2xl font-semibold">eRTHM</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Private emotional check-ins, guided reflection, and pattern insight that help
                people regulate, reset, and thrive mindfully.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["eRTHM", "Regulation", "Privacy-first"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <a
              href="#contact"
              aria-label="See current product"
              className="grid h-12 w-12 place-items-center rounded-2xl border border-border text-primary transition-all duration-500 group-hover:rotate-45 group-hover:border-primary/50"
            >
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

/* -------------------------------- Why -------------------------------- */

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Responsible AI",
    body: "Privacy-first AI designed for real businesses.",
  },
  {
    icon: Layers,
    title: "Research to Production",
    body: "We turn AI ideas into dependable products.",
  },
  {
    icon: Users,
    title: "Human-Centered Automation",
    body: "Technology that supports people instead of replacing them.",
  },
  { icon: Gauge, title: "Built to Scale", body: "Flexible platforms designed for long-term growth." },
];

export function Why() {
  return (
    <section id="why" className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="animate-gradient-flow pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <SectionLabel>Why 2Cube AI</SectionLabel>
            <h2 className="reveal mt-4 text-3xl font-semibold text-balance sm:text-4xl lg:text-[2.75rem]">
              Engineering AI <span className="text-gradient">that businesses can trust.</span>
            </h2>
          </div>
          <p
            className="reveal text-base leading-relaxed text-muted-foreground"
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            We combine AI research, engineering excellence, and responsible development to create
            intelligent systems that are practical, secure, and built to last.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r, i) => (
            <article
              key={r.title}
              className="reveal beam lift surface-card relative overflow-hidden rounded-3xl p-6"
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <r.icon className="h-5 w-5" />
                </span>
                <span className="font-display text-xs font-semibold tracking-[0.28em] text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Security ----------------------------- */

const SECURITY = [
  {
    icon: Lock,
    title: "Secure data handling",
    body: "Sensitive information is protected during storage and transfer.",
  },
  {
    icon: Fingerprint,
    title: "Role-based access",
    body: "People only access the information required for their role.",
  },
  {
    icon: ScanLine,
    title: "Clear data boundaries",
    body: "Employee and organizational data remain within defined access boundaries.",
  },
  {
    icon: Eye,
    title: "Traceable activity",
    body: "Important actions can be monitored and reviewed when required.",
  },
];

export function Security() {
  return (
    <section id="security" className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionLabel>Security &amp; privacy</SectionLabel>
        <h2 className="reveal mt-4 max-w-3xl text-3xl font-semibold text-balance sm:text-4xl lg:text-[2.75rem]">
          Built to protect the data{" "}
          <span className="text-gradient">people trust you with.</span>
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <ul className="grid gap-4 sm:grid-cols-2">
            {SECURITY.map((s, i) => (
              <li
                key={s.title}
                className="reveal lift surface-card rounded-2xl p-5"
                style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              >
                <s.icon className="h-5 w-5 text-primary" />
                <h3 className="mt-4 text-sm font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ul>

          <div
            className="reveal relative overflow-hidden rounded-3xl border border-border p-8 sm:p-10"
            style={
              {
                "--reveal-delay": "160ms",
                background: "var(--gradient-primary)",
              } as React.CSSProperties
            }
          >
            <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-40" />
            <div className="relative flex h-full flex-col justify-between gap-10">
              <span className="text-[11px] font-semibold tracking-[0.28em] text-primary-foreground/80 uppercase">
                Responsible by design
              </span>
              <p className="font-display text-2xl leading-snug font-semibold text-primary-foreground sm:text-3xl">
                Technology built around people, clear roles, and accountable decisions.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Encryption in transit", "Scoped access", "Auditability"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-primary-foreground/25 px-3 py-1 text-xs font-medium text-primary-foreground/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- FAQ -------------------------------- */

const FAQS = [
  {
    q: "What does 2Cube AI actually build?",
    a: "We design and implement practical AI products: intelligent workflow automation, decision dashboards, secure knowledge assistants, and the data foundations that make them dependable.",
  },
  {
    q: "How quickly can we launch a first solution?",
    a: "Most focused pilots move from discovery to a working release in two to six weeks. We start small, prove value against a clear metric, then scale deliberately.",
  },
  {
    q: "Can 2Cube AI work with our existing tools?",
    a: "Yes. Our systems are designed to integrate with the stack you already use—from cloud platforms and databases to collaboration and product tools.",
  },
  {
    q: "How do you protect company data?",
    a: "Security is built into architecture and delivery: scoped access, encryption in transit and at rest, clear data boundaries, auditability, and deployment options aligned to your requirements.",
  },
  {
    q: "Do we need an in-house AI team?",
    a: "No. We can act as your embedded AI product team or collaborate closely with your engineers. Either way, documentation and knowledge transfer are part of the delivery.",
  },
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="reveal mt-4 text-3xl font-semibold text-balance sm:text-4xl">
            Curious about <span className="text-gradient">working with us?</span>
          </h2>
          <p className="reveal mt-4 text-sm leading-relaxed text-muted-foreground">
            Here are the answers to the questions we hear most often.
          </p>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="reveal" style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span
                    className={`text-sm font-semibold transition-colors duration-300 sm:text-base ${
                      isOpen ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {f.q}
                  </span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-primary">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className="grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- CTA -------------------------------- */

export function Cta() {
  return (
    <section id="contact" className="pb-24 sm:pb-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="reveal relative overflow-hidden rounded-[2rem] border border-border bg-card/60 px-6 py-16 text-center sm:px-12 sm:py-20">
          <div
            className="animate-halo pointer-events-none absolute inset-0"
            style={{ background: "var(--gradient-halo)" }}
          />
          <div className="grid-backdrop pointer-events-none absolute inset-0" />
          <div className="relative">
            <SectionLabel center>Your next move</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold text-balance sm:text-4xl lg:text-5xl">
              Ready to put AI <span className="text-gradient">to work?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Tell us where the friction is. We'll help you find the smartest path forward.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="mailto:hello@2cubeai.com"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1"
                style={{ background: "var(--gradient-primary)" }}
              >
                Start a conversation
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#product"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-card/70 px-6 py-3.5 text-sm font-semibold transition-colors duration-300 hover:border-primary/40 hover:text-primary"
              >
                Explore product
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Footer ------------------------------ */

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2.5">
          <span
            className="grid h-7 w-7 place-items-center rounded-lg text-xs font-bold text-primary-foreground"
            style={{ background: "var(--gradient-primary)" }}
          >
            2
          </span>
          <span className="font-display text-xs font-semibold tracking-[0.24em]">2CUBE AI</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} 2Cube AI. Geometry of infinite intelligence.
        </p>
      </div>
    </footer>
  );
}

/* ------------------------------ Helpers ------------------------------ */

function SectionLabel({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={`reveal flex items-center gap-3 ${center ? "justify-center" : ""}`}>
      <span className="h-px w-8" style={{ background: "var(--gradient-primary)" }} />
      <span className="text-[11px] font-semibold tracking-[0.28em] text-muted-foreground uppercase">
        {children}
      </span>
    </div>
  );
}
