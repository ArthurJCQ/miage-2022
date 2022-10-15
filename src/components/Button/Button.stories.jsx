import React from 'react';
import  Button from './Button';

export default {
    component: Button,
    title: 'component/Button'
};

const Template = (args) => <Button {...args} />

export  const Default = Template.bind({});

Default.args = {
    children: 'Button',
    loading: false,
    disabled: false,
}

export const Loading = Template.bind({});

Loading.args = {
    children: 'Button',
    loading: true,
    disabled: false,

}

export const Disabled = Template.bind({});

Disabled.args = {
    children: 'Button',
    disabled: true,
    loading: false,
}
