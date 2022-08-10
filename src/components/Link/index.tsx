import React from "react";
import { Link as GatsbyLink } from "gatsby";

type Props = {
    to: string;
    children: React.ReactNode;
}

const Link = ({ to, children }: Props): JSX.Element => (
    <GatsbyLink to={to}>
        {children}
    </GatsbyLink>
);

export default Link;
