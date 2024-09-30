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
    items: [
      {
        imageUrl: 'https://www.caseparts.com/graphics/drawings/000830_Drw1.png',
        name: '20-3/4 x 55-1/2 Door Gasket For Norlake',
        partNumber: '000801',
        price: 61.6,
        action: 'remove',
        status: 'In-Stock at our Los Angeles warehouse',
      },
      {
        imageUrl: 'https://www.caseparts.com/graphics/drawings/000830_Drw1.png',
        name: '31-1/2 x 73-1/2 Door Gasket For Norlake',
        partNumber: '000813',
        price: 95,
        action: 'remove',
        status: '2 remaining at our Las Vegas warehouse',
      },
      {
        imageUrl: 'https://www.caseparts.com/graphics/drawings/000830_Drw1.png',
        name: '29-15/16" x 72" Etech Gasket For Anthony',
        partNumber: '*02-14579-0008',
        price: 324.26,
        action: 'remove',
        status: 'Restocking soon',
      },
    ],
  },
};
