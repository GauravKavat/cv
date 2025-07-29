import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import HoverCard from './ui/HoverCard';

const Experience = () => {
    const experiences = [
        {
            date: '2022 — Present',
            title: 'Senior Frontend Developer',
            company: 'Creative Tech Inc.',
            description: 'Deliver high-quality, robust production code for a diverse array of projects for clients including a major streaming service, a fintech startup, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.',
            technologies: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'Tailwind CSS']
        },
        {
            date: '2020 — 2022',
            title: 'Software Engineer',
            company: 'Digital Solutions Co.',
            description: 'Developed and maintained critical components for client-facing web applications using modern frontend technologies. Collaborated with cross-functional teams to define and implement new features.',
            technologies: ['JavaScript', 'React', 'Redux', 'Node.js', 'SCSS']
        }
    ];

    return (
        <AnimatedSection id="experience">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
            </div>
            {experiences.map((exp, index) => (
                <HoverCard key={index}>
                    <div className="absolute -inset-x-4 -inset-y-2.5 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <div className="relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={exp.date}>{exp.date}</header>
                        <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-snug text-slate-200">
                                <a className="group/link inline-flex items-baseline text-base font-medium" href="#" target="_blank" rel="noreferrer noopener">
                                    <span className="inline-block">{exp.title} · {exp.company}</span>
                                    <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                                </a>
                            </h3>
                            <p className="mt-2 text-sm leading-normal">{exp.description}</p>
                            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                {exp.technologies.map((tech, i) => (
                                    <li key={i} className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{tech}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </HoverCard>
            ))}
        </AnimatedSection>
    );
};

export default Experience;