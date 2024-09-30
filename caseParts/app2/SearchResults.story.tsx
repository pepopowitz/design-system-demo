import type { Meta, StoryObj } from '@storybook/react';

import { SearchResults } from './SearchResults';

const meta: Meta<typeof SearchResults> = {
  title: 'CaseParts.App2/SearchResults',
  component: SearchResults,
};
export default meta;

type Story = StoryObj<typeof SearchResults>;

export const NoResults: Story = {
  args: {
    items: [],
  },
};

export const Results: Story = {
  args: {
    items: [
      {
        name: '20-3/4 x 55-1/2 Door Gasket For Norlake',
        partNumber: '000801',
        price: 61.6,
        action: 'add',
        status: 'In-Stock at our Los Angeles warehouse',
      },
      {
        name: '31-1/2 x 73-1/2 Door Gasket For Norlake',
        partNumber: '000813',
        price: 95,
        action: 'add',
        status: '2 remaining at our Las Vegas warehouse',
      },
      {
        name: '29-15/16" x 72" Etech Gasket For Anthony',
        partNumber: '*02-14579-0008',
        price: 324.26,
        action: 'add',
        status: 'Restocking soon',
      },
    ],
  },
};
