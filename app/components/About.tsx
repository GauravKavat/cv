import React from 'react';
import AnimatedSection from './ui/AnimatedSection';

const About = () => (
    <AnimatedSection id="about">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
        </div>
        <p className="mb-4">
            Back in 2015, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for a <a href="#" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">major corporation</a>, a <a href="#" className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">start-up</a>, and a student-led design studio.
        </p>
        <p>
            My main focus these days is building products and leading projects for our clients at Upstatement. In my free time, I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.
        </p>
    </AnimatedSection>
);

export default About;