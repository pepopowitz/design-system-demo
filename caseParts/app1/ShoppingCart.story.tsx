import type { Meta, StoryObj } from '@storybook/react';

import { ShoppingCart } from './ShoppingCart';

const meta: Meta<typeof ShoppingCart> = {
  title: 'CaseParts.App1/ShoppingCart',
  component: ShoppingCart,
};
export default meta;

type Story = StoryObj<typeof ShoppingCart>;

export const Empty: Story = {
  args: {
    items: [],
  },
};

export const Full: Story = {
  args: {
    items: ['one item', 'two item', 'three item'],
  },
};
