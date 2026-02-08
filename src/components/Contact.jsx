import { useRef, useEffect, useState } from "react";
import { profile } from "../data";

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

export default function Contact() {
    const links = [
        {
            label: "GitHub",
            href: profile.github,
            svg: (
                <path fill="currentColor" fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.415 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
            ),
        },
        {
            label: "LinkedIn",
            href: profile.linkedin,
            svg: (
                <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            ),
        },
        {
            label: "Email",
            href: `mailto:${profile.email}`,
            svg: (
                <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            ),
        },
    ];

    return (
        <footer id="contact" className="relative py-24 px-6 overflow-hidden">
            {/* Decorative Gradients */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent -z-10" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <FadeIn>
                    <h2 className="font-display text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 mb-4">
                        Let's build together.
                    </h2>
                    <p className="text-slate-400 mb-10 text-lg">
                        {profile.email} · {profile.phone}
                    </p>

                    <div className="flex justify-center gap-6">
                        {links.map(({ label, href, svg }) => (
                            <a
                                key={label}
                                href={href}
                                target={label === "Email" ? "_self" : "_blank"}
                                rel="noopener noreferrer"
                                className="p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:text-cyan-300 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/20"
                                aria-label={label}
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden>
                                    {svg}
                                </svg>
                            </a>
                        ))}
                    </div>

                    <div className="mt-16 pt-8 border-t border-white/5 text-slate-600 text-sm">
                        <p>© {new Date().getFullYear()} {profile.name}. Designed & Built with 💙</p>
                    </div>
                </FadeIn>
            </div>
        </footer>
    );
}
