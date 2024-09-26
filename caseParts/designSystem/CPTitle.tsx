import React from 'react';
import { Text } from '@chakra-ui/react';

interface TitleProps {
  message: string;
}
export function CPTitle({ message }: TitleProps) {
  return (
    <Text fontSize="lg" fontWeight="700" my="10" as="h2">
      {message}
    </Text>
  );
}
