import type { Meta, StoryObj } from '@storybook/react';

import { CPProduct } from './CPProduct';

const meta: Meta<typeof CPProduct> = {
  title: 'CaseParts.DesignSystem/CPProduct',
  component: CPProduct,
};
export default meta;

type Story = StoryObj<typeof CPProduct>;

export const WithImage: Story = {
  args: {
    imageUrl: 'https://www.caseparts.com/graphics/drawings/000830_Drw1.png',
    name: '20-3/4 x 55-1/2 Door Gasket For Norlake',
    partNumber: '000801',
    price: 61.6,
    action: 'remove',
    status: 'In-Stock at our Los Angeles warehouse',
  },
};

export const WithoutImage: Story = {
  args: {
    name: '20-3/4 x 55-1/2 Door Gasket For Norlake',
    partNumber: '000801',
    price: 61.6,
    action: 'add',
    status: 'In-Stock at our Los Angeles warehouse',
  },
};
