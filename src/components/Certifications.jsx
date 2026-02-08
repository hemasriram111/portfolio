import { useRef, useEffect, useState } from "react";
import { certifications, achievements } from "../data";

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
            className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } ${className}`}
        >
            {children}
        </div>
    );
}

export default function Certifications() {
    return (
        <section className="section-padding relative">
            <div className="max-w-6xl mx-auto">
                <FadeIn>
                    <p className="font-display text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-2">
                        Credentials
                    </p>
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-10">
                        Certifications & Awards
                    </h2>
                </FadeIn>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {certifications.map((c, i) => (
                        <FadeIn key={c.name} delay={i * 50}>
                            <a
                                href={c.link}
                                className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 flex items-center justify-center text-cyan-400 font-bold text-lg group-hover:scale-110 transition-transform">
                                    {c.name.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="text-slate-200 font-medium text-sm group-hover:text-cyan-300 line-clamp-2 transition-colors">
                                        {c.name}
                                    </h3>
                                    <span className="text-xs text-slate-500 mt-1 block group-hover:text-cyan-400/80">
                                        View Credential →
                                    </span>
                                </div>
                            </a>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={200}>
                    <div className="mt-16 p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm">
                        <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-2xl">🏆</span> Digital Achievements
                        </h3>
                        <div className="space-y-4">
                            {achievements.map((a, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                                >
                                    <span className="text-cyan-400 mt-1">✓</span>
                                    <p className="text-slate-300 text-sm leading-relaxed flex-grow">
                                        {a.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
