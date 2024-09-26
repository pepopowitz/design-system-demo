import React from 'react';
import type { Preview, StoryFn as StoryType } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../theme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story: StoryType) => (
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    ),
  ],
};

export default preview;
