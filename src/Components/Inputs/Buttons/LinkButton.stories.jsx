import React from 'react';
import { LinkButton } from './LinkButton';

export default{
    title: 'practice/Inputs/LinkButton',
    component: LinkButton,
    argTypes: {
        disabled: { control: 'boolean' }
    },
    onClick: { action: 'clicked' },
};

const LinkButtonTemplate = (args) => <LinkButton {...args} />;

export const LinkButtonDefault = LinkButtonTemplate.bind({});
LinkButtonDefault.args = {
    text: 'Link button'
};

export const LinkButtonDisabled = LinkButtonTemplate.bind({});
LinkButtonDisabled.args = {
    disabled: true,
    text: 'Link button'
};
