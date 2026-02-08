import { useRef, useEffect, useState } from "react";
import { experience, education } from "../data";

function FadeIn({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="font-display text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-2">
            Journey
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-12">
            Experience & Education
          </h2>
        </FadeIn>

        <div className="space-y-12 relative border-l border-slate-700 ml-3 pl-8 md:pl-12">
           {/* Education */}
           <FadeIn delay={100}>
            <div className="relative">
              <span className="absolute -left-[3.25rem] md:-left-[4.25rem] top-2 w-6 h-6 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50 border-4 border-slate-900" />
              <div className="glass-card">
                <p className="font-display font-bold text-xl text-white">{education.school}</p>
                <p className="text-cyan-300 font-medium">{education.degree}</p>
                <p className="text-slate-400 text-sm mt-1">{education.period} · CGPA: {education.cgpa}</p>
              </div>
            </div>
          </FadeIn>

          {/* Experience */}
          {experience.map((exp, i) => (
            <FadeIn key={exp.company + exp.period} delay={150 + i * 100}>
              <div className="relative">
                <span className="absolute -left-[3.25rem] md:-left-[4.25rem] top-2 w-6 h-6 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 border-4 border-slate-900" />
                <div className="glass-card hover:bg-white/5">
                  <div className="flex flex-wrap items-baseline justify-between mb-2">
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">
                        {exp.role} <span className="text-indigo-400">@ {exp.company}</span>
                      </h3>
                      <p className="text-slate-500 text-sm">{exp.period}</p>
                    </div>
                    {exp.link && (
                      <a href={exp.link} className="text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                        Link →
                      </a>
                    )}
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                        <span className="text-cyan-500 mt-1.5">▹</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
