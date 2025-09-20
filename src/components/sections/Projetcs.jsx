export const Projects = () => {

    return <section id="projects" className="min-h-screen flex items-center justify-center py-20"
    >
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3> CIIDCMIL </h3>
                    <p> Development of a web application for an institutional questionnaire project aimed at academic research (PhD), focused on large Brazilian metropolitan areas. Responsible for creating a full-stack solution using NestJS, PostgresSQL and React + Tailwindcss. Project in partnership with a FURB professor affiliated with USP, aiming to collect and analyze population data in highly complex urban environments.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["React, NestJS, PostgresSQL, React, Tailwindcss"].map((tech, key) => (
                            <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                            "

                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="http://ciidcmil-frontend-gdakdx-f65442-72-60-4-47.traefik.me/" className="text-blue-400 hover:text-blue-300 transition-colors"> View Project</a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3> XML Rejection Cleaner </h3>
                    <p> micro-utility in C# that parses XML invoices, detects rejection nodes, and outputs a clean, compliant file.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["C#, .NET"].map((tech, key) => (
                            <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                            "

                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors"> View Project</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
}