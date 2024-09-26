import type { Meta, StoryObj } from '@storybook/react';

import { CPTitle } from './CPTitle';

const meta: Meta<typeof CPTitle> = {
  title: 'CaseParts.DesignSystem/CPTitle',
  component: CPTitle,
};
export default meta;

type Story = StoryObj<typeof CPTitle>;

export const Default: Story = {
  args: {
    message: 'This is a page title.',
  },
};
