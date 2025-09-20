export const About = () => {

    const frontendSkills = [
        "NodeJS",
        "React",
        "Vue",
        "Typescript",
        "TailwindCSS"
    ]

    const backendSkills = [
        "C#",
        ".NET",
        "Java",
        "PostgreSQL",
        "Microsoft SQL Server",
    ]

    return <section id="about"
        className="min-h-screen flex items-center justify-center py-20"
    >
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                About Me
            </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    Hi, I’m Willian—a newcomer to back-end development who’s quickly falling in love with building the logic and data layers of applications. I’m learning every day: designing simple APIs, working with SQL, and writing clean C# code. When I’m not coding, I’m studying docs, watching tutorials, or sharing what I’ve just discovered over a cup of coffee. I aim to keep growing my skills while delivering code that’s clear, reliable, and genuinely useful.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hober:-trasnlate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition
                            "
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hober:-trasnlate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition
                            "
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> Education </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong> B.S. in Computer Science </strong> - FURB University [2024-2028]
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> Work Experience </h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold"> Administrative Assistant At Liz Comércio de Móveis e Decorações LTDA [2022-2024] </h4>
                            <p> Managed invoices, accounts payable/receivable and bank reconciliation</p>
                        </div>
                        <div>
                            <h4 className="font-semibold"> Trainee At Mouts-TI [2024-2025] </h4>
                            <p> Specialized in TrakSYS (MES - Manufacturing Execution System) and Assisted in module configuration, data integration and user support</p>
                        </div>
                        <div>
                            <h4 className="font-semibold"> Monitoring Intern At Inventti[2025- Current] </h4>
                            <p> Member of the monitoring team, handling fiscal-document messaging (e-invoices/NF-e and related XML flows), Troubleshooting transmission errors and ensuring SLA compliance and Developed QGs in C# for the monitoring team, speeding up incident resolution</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section >
}
