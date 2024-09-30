import React from 'react';

import { Flex, Stack, Text } from '@chakra-ui/react';
import { CPTitle } from '../designSystem/CPTitle';
import { CPButton } from '../designSystem/CPButton';
import { CPProduct, ProductProps } from '../designSystem/CPProduct';

type SearchResultsProps = {
  items: Array<ProductProps>;
};

export function SearchResults({ items }: SearchResultsProps) {
  return (
    <>
      <CPTitle message="Search Results" />
      {items.length === 0 ? <NoResults /> : <Results items={items} />}
    </>
  );
}

function Results({ items }: SearchResultsProps) {
  return (
    <>
      {/* <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignContent="flex-end"
        mb={5}
      >
        <Text>{items.length} parts</Text>
        <CPButton variant="primary">Proceed to Checkout</CPButton>
      </Flex>
      <Stack spacing={4} mb={5}>
        {items.map((item) => {
          return <CPProduct {...item} />;
        })}
      </Stack> */}
    </>
  );
}

function NoResults() {
  return (
    <>
      <Text mb={5}>No results found.</Text>
    </>
  );
}
