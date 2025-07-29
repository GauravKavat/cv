import React, { ReactElement } from 'react';

interface Props {
    href: string;
    icon: ReactElement;
}

const SocialLink = ({ href, icon }: Props) => (
    <a href={href} target="_blank" rel="noreferrer noopener" className="mr-5 text-slate-400 hover:text-teal-300 transition-colors">
        {icon}
    </a>
);

export default SocialLink;