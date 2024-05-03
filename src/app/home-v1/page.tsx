
export default function Home() {
    return (
        <div className="container mx-auto p-4">
            <header className="text-center my-8">
                <h1 className="text-3xl font-bold">Muhammad Hamdy</h1>
                <p className="text-lg">Software Engineer</p>
                <p className="mt-2"><a href="mailto:muhammadhamdyrawash@gmail.com" className="text-blue-500">muhammadhamdyrawash@gmail.com</a> | <a href="tel:+201019240800" className="text-blue-500">+20-101-924-0800</a></p>
                <p className="mt-2"><a href="https://www.linkedin.com/in/modsyan/" target="_blank" rel="noopener noreferrer" className="text-blue-500">LinkedIn</a> | <a href="https://github.com/modsyan" target="_blank" rel="noopener noreferrer" className="text-blue-500">GitHub</a></p>
                <p className="mt-2">Egypt, Giza - 12961</p>
            </header>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2">Career Summary</h2>
                <p>
                    A full of enthusiasm, and an innovative backend engineer with a passion to tackle knotted problems. During my five-month tenure as a full-stack developer (.NET) at the Middle East Automobile & Tourism Club (M.A.C), I spearheaded the development of various applications, enhancing the existing codebase, and building systems that expanded their service offerings as well as customer satisfaction. Having a robust grounding in core software engineering principles and guidelines, including SOLID Principles, architectural patterns, design patterns, object-oriented design, data structures, algorithms, and various architectures, with a fully understanding of various models of software production like SDLC and incremental and iterative incremental-based models, it facilitates rapid adaptation to new technologies no matter the syntax. Eager to join and contribute to projects that will create a positive and sustainable impact on the community.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2">Education</h2>
                <p>Canadian International College, New Cairo</p>
                <p>Bachelor of Computer Science, Major in Cloud and Mobile Computing (06/20 - 06/24)</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2">Work History</h2>
                <p>
                    MIDDLE EAST AUTOMOBILE & TOURISM CLUB, Saudi Arabia, KSA Remote<br />
                    Full-Stack Developer (11/23-04/24)<br />
                    Empowered operations team(~25%): Successfully built a new car hub system through defining and designing a solution using .Net, C#, and RESTful APIs, and a monolithic architecture which are expected to speed up and improve Op’s teamwork quality. Data analytics and business matrices were involved and considered in this project.
                </p>
                <p>Services Expansions(6): In a one-man team, I’ve developed up to six website-based applications and fully implemented two full-stack applications through .NET, C#, and Angular.</p>
                <p>Increased efficiency & User Satisfaction (~30%): Neatly refactored roughly 50% of the existing codebase counting on Git, improving efficiency and user satisfaction around 30%. It saved time with reducing 25% of redundancy probability.</p>
                <p>Feature Implementation (35+): Along the previous 5 months, successfully implemented over 35 features across various projects, excelling in the understanding of user needs and importance of functionality.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2">Projects</h2>
                <p>Here are some of the projects I have worked on:</p>
                <ul>
                    <li>Car Hub Api: Car Hub Management System [ASP.NET Core 8 Web API, SQL Server, Nswag, ef-core]</li>
                    <li>Managify - Maintenance and Resource Management System [ASP.NET Core MVC, SQL Server]</li>
                    <li>Revive - PhysicalTherapy Ecosystem [ASP.NET Core MVC, SQL Server]</li>
                    <li>Bazar - E-Commerce Social Networking Platform [ASP.NET Core, SQL Server, RESTful API]</li>
                    <li>DevAsk - Simple StackOverflow clone [Spring Boot, PostgreSQL, ReactJs]</li>
                    <li>Evify - Event Manager Platform [ExpressJs, Typescript, MongoDB, React.js]</li>
                    <li>Bug Zone - Social Media Application [TsEd (Typescript ExpressJS Based), Sqlite 3, TypeOrm, DI]</li>
                    <li>Daftar- E-Learning Website [ASP.NET Core MVC, SQL Server]</li>
                    <li>LarQ - Simple Podcast Web App [ASP.NET Core MVC, SQL Server, Bootstrap]</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2">Skills</h2>
                <h3 className="font-bold mb-1">Technical Skills</h3>
                <p>
                    Programming Languages: C/C++, C#, HTML/CSS, Java, TypeScript, JavaScript, Rust, GoLang, Python.<br />
                    Frameworks & Libraries: ASP .NET Core, NodeJS, React JS, Angular, Spring Boot, Expressjs, TsEd, TypeOrm, EFCore, Prisma, SignalR, WebRTC.<br />
                    Databases: SQL Server, MySQL, PostgreSQL, MongoDB, Redis.<br />
                    CI\CD: Azure, AWS, Docker, Github Actions, GCP, Kubernetes<br />
                    Other: Design Patterns, Architectural Patterns, Microservices, Domain Driven Design(DDD), SOLID Principles, Linux, RESTful APIs, Test-Driven Development (TDD).
                </p>
                <h3 className="font-bold mb-1 mt-4">Soft Skills</h3>
                <p>
                    Strong Communication Skills<br />
                    Process Documentation<br />
                    Proven Problem Solving Skills<br />
                    Data-Driven Decision Making<br />
                    Complexity analysis<br />
                    Quality Assurance Focus<br />
                    Agile and Flexible
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2">Extracurriculars</h2>
                <p>
                    Google Developer Student Club Co-lead (08/22 - 07/23)<br />
                    Orchestrated impactful events including hackathons, demodays, and networking events, attracting over 7,896 participants.
                </p>
                <p>Driving community growth through tech. Initiatives oriented with computer engineering, planned and executed by the collaboration and leading by example between the lead, me, and the team.</p>
            </section>

            <footer className="text-center">
                <p>For inquiries, feel free to contact me via <a href="mailto:muhammadhamdyrawash@gmail.com" className="text-blue-500">muhammadhamdyrawash@gmail.com</a></p>
            </footer>
        </div>
    );
}
