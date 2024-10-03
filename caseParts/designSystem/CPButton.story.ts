import type { Meta, StoryObj } from '@storybook/react';

import { CPButton } from './CPButton';

const meta: Meta<typeof CPButton> = {
  title: 'CaseParts.DesignSystem/CPButton',
  component: CPButton,
};

export default meta;
type Story = StoryObj<typeof CPButton>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Click on me!',
  },
};

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Click on me!',
  },
};

export const Alternate: Story = {
  args: {
    variant: 'alternate',
    children: 'Click on me!',
  },
};
