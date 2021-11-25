import React from 'react';
import Navbar from 'components/Navbar/Navbar';

interface NavigationTemplate {
    children: JSX.Element;
}

const NavigationTemplate = ({ children }: NavigationTemplate) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default NavigationTemplate;
