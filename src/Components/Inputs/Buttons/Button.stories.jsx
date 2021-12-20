import React from 'react';
import { Button } from './Button';

export default {
  title: 'practice/Inputs/Button',
  component: Button,
  argTypes: {
    disabled: { control: 'boolean' },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary']
      }
    },
    onClick: { action: 'clicked' },
    // backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary Button',
  variant:'primary'
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  text: 'Primary Disabled Button',
  disabled: true,
  variant: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary Button',
  variant: 'secondary'
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  text: 'Secondary Disabled Button',
  disabled: true,
  variant: 'secondary'
};

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
