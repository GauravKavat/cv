import React, { ReactNode } from 'react';

const HoverCard = ({ children }: { children: ReactNode }) => (
    <div className="group relative mb-12">
        {children}
    </div>
);

export default HoverCard;