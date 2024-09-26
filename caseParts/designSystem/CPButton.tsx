import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from '@chakra-ui/react';

interface CPButtonProps extends ButtonProps {
  variant?: 'primary' | 'default';
}

export function CPButton({
  variant = 'default',
  children,
  ...otherProps
}: CPButtonProps) {
  const variants = {
    default: {
      backgroundColor: 'white',
      color: 'brand.900',
      borderColor: 'gray.200',
    },
    primary: {
      backgroundColor: 'brand.900',
      color: 'brand.100',
      borderColor: undefined,
    },
    // demo: add another variant for "alternate"
  };

  const activeVariant = variants[variant];

  return (
    <Button
      backgroundColor={activeVariant.backgroundColor}
      _hover={{ backgroundColor: activeVariant.backgroundColor, shadow: 'md' }}
      color={activeVariant.color}
      fontSize="lg"
      py="5"
      px={10}
      my={5}
      borderRadius="sm"
      border={activeVariant.borderColor ? '1px' : ''}
      borderColor={activeVariant.borderColor}
      backgroundHover={activeVariant.backgroundColor}
      {...otherProps}
    >
      {children}
    </Button>
  );
}
