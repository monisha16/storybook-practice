import { BasicInput } from './TextField'
import React from 'react';

export default {
    title: 'practice/Inputs/TextField',
    component: BasicInput,
    argTypes: {
        label: {
            description: 'Label property of the textfield element.',
            control: 'text'
        },
        disabled: {
            description: 'Set to true to disable the text field.',
            control: 'boolean'
        },
    },
    type: {
        description: 'Type of textfield',
        control: 'text'
    }
}

const Template = (args) => <BasicInput {...args}/> ;

export const DefaultInput = Template.bind({});
DefaultInput.args ={
    label: 'Basic Input',
    width: '400px',
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
    label: 'Basic Input',
    width: '400px',
    disabled: true,
};