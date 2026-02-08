import { profile } from "../data";
import resume from "../assets/resume.pdf";

export default function Hero() {
    return (
        <section
            id="about"
            className="relative min-h-screen flex items-center pt-24 pb-20 px-6 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10 transition-transform duration-500 ease-out">
                <div>
                    <p className="font-display text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-4 fade-in-up delay-100">
                        AI & Machine Learning Engineer
                    </p>
                    <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 fade-in-up delay-200">
                        Hi, I'm{" "}
                        <span className="text-gradient hover:scale-105 inline-block transition-transform duration-300">
                            {profile.name}
                        </span>
                    </h1>
                    <p className="text-slate-300 mt-6 text-lg leading-relaxed max-w-xl fade-in-up delay-300 glass-card bg-transparent border-0 pl-4 border-l-2 border-cyan-500">
                        {profile.about}
                    </p>
                    <div className="mt-10 flex flex-wrap gap-4 fade-in-up delay-400">
                        <a
                            href="#contact"
                            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white overflow-hidden transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-600 group-hover:scale-105 transition-transform duration-500" />
                            <span className="relative z-10">Get in Touch</span>
                            <svg
                                className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a
                            href={resume}
                            download="Hema_Sriram_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 bg-white/5 text-white font-medium hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>

                <div className="flex justify-center lg:justify-end fade-in-up delay-500">
                    <div className="relative group">
                        {/* Glowing ring */}
                        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-500 via-indigo-500 to-fuchsia-500 opacity-75 blur-xl group-hover:opacity-100 group-hover:blur-2xl transition-all duration-500" />

                        <div className="relative w-64 h-96 sm:w-80 sm:h-[30rem] rounded-3xl overflow-hidden border-4 border-slate-900 shadow-2xl">
                            <img
                                src={`${import.meta.env.BASE_URL}your-photo.jpg`}
                                alt="Hema Sriram"
                                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-in-out"
                            />

                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-indigo-900/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>

                        {/* Floating decorative elements */}
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-cyan-500/20 rounded-full blur-md animate-pulse delay-75" />
                        <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-fuchsia-500/20 rounded-full blur-lg animate-pulse delay-150" />
                    </div>
                </div>
            </div>
        </section>
    );
}
