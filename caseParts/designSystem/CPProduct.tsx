import React from 'react';
import {
  Box,
  Button,
  Image,
  Input,
  Link,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import { CPButton } from './CPButton';

interface ProductProps {
  imageUrl?: string;
  name: string;
  partNumber: string;
  status: string;
  price: number;
  action: 'add' | 'remove';
}

export function CPProduct({
  imageUrl,
  name,
  partNumber,
  status,
  price,
  action,
}: ProductProps) {
  const image = imageUrl ? (
    <Image src={imageUrl} alt={name} w="100px" h="100px" />
  ) : null;

  return (
    <Box
      shadow="md"
      borderWidth="1px"
      borderRadius="sm"
      p="4"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <Stack direction="row" spacing={3}>
        {image}
        <Text fontSize="md" fontWeight="700" as="h2">
          <Box>
            <Link href="https://caseparts.com" color="brand.900">
              {name}
            </Link>

            <Box lineHeight={1}>
              <Text fontSize="sm" fontWeight="100" as="span">
                Part #:&nbsp;
              </Text>
              <Text fontSize="sm" as="span">
                {partNumber}
              </Text>
            </Box>

            <Text
              fontSize="xs"
              fontWeight="100"
              color="green.600"
              fontStyle="italic"
              mt={2}
            >
              {status}
            </Text>
          </Box>
        </Text>
      </Stack>
      <Box>
        <Stack
          direction="row"
          spacing={3}
          alignItems="center"
          justifyContent="flex-end"
        >
          <Text fontSize="xs" color="brand.900">
            List Price:
          </Text>
          <Text fontWeight="bold">${price.toFixed(2)}</Text>
          <Input type="number" defaultValue={1} w="15%" />
          <CPButton variant="primary">
            {action === 'add' ? 'Add' : 'Remove'}
          </CPButton>
        </Stack>
      </Box>
    </Box>
  );
}
