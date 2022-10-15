import React from 'react';
import Card from './Card';

export default {
    component: Card,
    title: 'component/Card'
};

const Template = (args) => <Card {...args} />

export  const Default = Template.bind({});

Default.args = {
    title: 'Titre de la Card',
    content: 'lorem ipsum dolor  amet',
    textButton: 'GO here',
    backgroundColor: 'bisque',
}



