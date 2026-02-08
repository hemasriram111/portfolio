import { useRef, useEffect, useState } from "react";
import { projects } from "../data";

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

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedProject]);

    return (
        <section id="projects" className="section-padding relative">
            <div className="max-w-6xl mx-auto">
                <FadeIn>
                    <div className="text-center mb-16">
                        <p className="font-display text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-2">
                            Portfolio
                        </p>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
                            Featured Work
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            A selection of projects demonstrating my expertise in AI, Machine Learning, and Full Stack Development.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((proj, i) => (
                        <FadeIn key={proj.title} delay={i * 100}>
                            <article
                                onClick={() => setSelectedProject(proj)}
                                className="glass-card group h-full flex flex-col relative overflow-hidden cursor-pointer hover:border-cyan-500/30 transition-all duration-300"
                            >
                                {/* Gradient Border Overlay */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/50 rounded-2xl transition-colors duration-500 pointer-events-none" />

                                <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                                <h3 className="font-display text-xl font-bold text-white mt-4 group-hover:text-cyan-300 transition-colors">
                                    {proj.title}
                                </h3>

                                <p className="text-slate-400 text-sm mt-3 leading-relaxed flex-grow line-clamp-3">
                                    {proj.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-5">
                                    {proj.tech.slice(0, 3).map((t) => (
                                        <span
                                            key={t}
                                            className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 text-xs font-medium"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                    {proj.tech.length > 3 && (
                                        <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
                                            +{proj.tech.length - 3}
                                        </span>
                                    )}
                                </div>

                                <div className="mt-6 flex gap-4 pt-4 border-t border-white/10">
                                    <span className="text-sm font-semibold text-cyan-400 group-hover:underline decoration-cyan-400/30 underline-offset-4 transition-all">
                                        View Details →
                                    </span>
                                </div>
                            </article>
                        </FadeIn>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm transition-opacity duration-300"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="glass-card max-w-3xl w-full max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95 duration-300 border-cyan-500/20 shadow-2xl shadow-cyan-500/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="p-2">
                            <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 pr-12">
                                {selectedProject.title}
                            </h3>

                            <div className="flex flex-wrap gap-3 mb-8">
                                {selectedProject.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="prose prose-invert max-w-none text-slate-300 mb-10 leading-relaxed text-lg">
                                {selectedProject.description}
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/10"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    View Source Code
                                </a>
                                {selectedProject.live && (
                                    <a
                                        href={selectedProject.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
