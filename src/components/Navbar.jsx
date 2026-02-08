import { useState, useEffect } from 'react';
import { profile } from '../data';

const navLinks = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "nav-glass py-3 shadow-lg shadow-black/5"
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                <div />

                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                    aria-label="Menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                <ul
                    className={`flex gap-8 max-md:absolute max-md:top-full max-md:left-0 max-md:right-0 max-md:flex-col max-md:p-6 max-md:bg-slate-900/95 max-md:backdrop-blur-xl max-md:border-b max-md:border-white/10 ${mobileOpen ? "flex" : "hidden md:flex"
                        }`}
                >
                    {navLinks.map(({ id, label }) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                onClick={() => setMobileOpen(false)}
                                className="font-medium text-sm text-slate-300 hover:text-cyan-400 transition-colors uppercase tracking-wider relative group"
                            >
                                {label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
