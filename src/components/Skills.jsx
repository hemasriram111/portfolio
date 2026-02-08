import { useRef, useEffect, useState } from "react";
import { skills } from "../data";

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

export default function Skills() {
    const categories = [
        { label: "Languages", items: skills.languages, icon: "⌨️" },
        { label: "Frameworks", items: skills.frameworks, icon: "⚡" },
        { label: "Tools", items: skills.tools, icon: "🛠️" },
        { label: "Domains", items: skills.domains, icon: "🧠" },
    ];

    return (
        <section id="skills" className="section-padding relative">
            <div className="max-w-6xl mx-auto">
                <FadeIn>
                    <div className="text-center mb-16">
                        <p className="font-display text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-2">
                            Tech Landscape
                        </p>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white relative inline-block">
                            Skills & Expertise
                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full" />
                        </h2>
                    </div>
                </FadeIn>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, i) => (
                        <FadeIn key={cat.label} delay={i * 100}>
                            <div className="glass-card group h-full hover:border-cyan-400/30">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-3xl filter drop-shadow-lg">{cat.icon}</span>
                                    <h3 className="font-display font-semibold text-white group-hover:text-cyan-300 transition-colors">
                                        {cat.label}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {cat.items.map((item) => (
                                        <span
                                            key={item}
                                            className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 bg-white/5 border border-white/10 text-slate-300 hover:bg-cyan-500/20 hover:border-cyan-500/40 hover:text-cyan-200"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
