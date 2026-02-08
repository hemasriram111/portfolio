export default function ResumeFAB() {
    return (
        <a
            href="/resume.pdf"
            download
            className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold shadow-2xl shadow-cyan-500/40 hover:scale-110 hover:-translate-y-2 transition-all duration-300 animate-bounce-slow"
        >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
        </a>
    );
}
