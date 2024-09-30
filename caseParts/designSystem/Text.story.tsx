import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Text, useTheme } from '@chakra-ui/react';

const meta: Meta<typeof Text> = {
  title: 'CaseParts.DesignSystem/Text',
  component: Text,
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Variants: Story = {
  render: (args) => {
    return (
      <>
        <VariantsComponent />
      </>
    );
  },
};

function VariantsComponent() {
  const sizes = [
    '3xs',
    '2xs',
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
    '5xl',
    '6xl',
    '7xl',
    '8xl',
    '9xl',
  ];
  const theme = useTheme();
  return (
    <>
      {sizes.map((size) => (
        <Text fontSize={size}>
          {size}={theme.fontSizes[size]}.
        </Text>
      ))}
    </>
  );
}
