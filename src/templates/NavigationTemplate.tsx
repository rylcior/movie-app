import React from 'react';
import Navbar from 'components/Navbar/Navbar';
import { ChildrenWrapper } from './NavigationTemplate.styles';

interface NavigationTemplate {
    children: JSX.Element;
}

const NavigationTemplate = ({ children }: NavigationTemplate) => {
    return (
        <>
            <Navbar />
            <ChildrenWrapper>{children}</ChildrenWrapper>
        </>
    );
};

export default NavigationTemplate;
