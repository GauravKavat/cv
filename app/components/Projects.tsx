import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import HoverCard from './ui/HoverCard';

const Projects = () => {
    const projects = [
        {
            title: 'Portfolio Website V1',
            description: 'My first personal website built with vanilla HTML, CSS, and JavaScript. It was a great learning experience into the fundamentals of web development and design.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            image: 'https://placehold.co/200x112/1e293b/94a3b8?text=Project+1',
        },
        {
            title: 'E-commerce Platform',
            description: 'A full-stack e-commerce site for a local business, featuring product listings, a shopping cart, and a Stripe-integrated checkout process.',
            technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
            image: 'https://placehold.co/200x112/1e293b/94a3b8?text=Project+2',
        },
    ];

    return (
        <AnimatedSection id="projects">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
            </div>
            {projects.map((proj, index) => (
                <HoverCard key={index}>
                    <div className="absolute -inset-x-4 -inset-y-2.5 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <div className="relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                        <div className="z-10 sm:col-span-2">
                            <img src={proj.image} alt={proj.title} className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" width="200" height="112" />
                        </div>
                        <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-snug text-slate-200">
                                <a className="group/link inline-flex items-baseline text-base font-medium" href="#" target="_blank" rel="noreferrer noopener">
                                    <span className="inline-block">{proj.title}</span>
                                    <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                                </a>
                            </h3>
                            <p className="mt-2 text-sm leading-normal">{proj.description}</p>
                            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                {proj.technologies.map((tech, i) => (
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

export default Projects;