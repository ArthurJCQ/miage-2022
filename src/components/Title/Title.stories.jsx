import React from 'react';
import Title from './Title';

export default {
    component: Title,
    title: 'component/Title'
};

const Template = (args) => <Title {...args} />

export  const Small = Template.bind({});

Small.args = {
    children: 'Titre du composant',
    size: 'sm',
    underlined: false,
}

export  const Medium = Template.bind({});

Medium.args = {
    children: 'Titre du composant',
    size: 'md',
    underlined: false,
}

export  const Large = Template.bind({});

Large.args = {
    children: 'Titre du composant',
    size: 'lg',
    underlined: false,
}

export  const MediumUnderlined = Template.bind({});

MediumUnderlined.args = {
    children: 'Titre du composant',
    size: 'md',
    underlined: true,
}



