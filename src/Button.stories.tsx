
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button } from './Button';

// Определяем Meta
const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryFn<typeof Button> = (args) => <Button {...args} />;
Default.args = {
    name: 'Click Me',
    disabled: false,
};
