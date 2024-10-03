import React from 'react';

import { Stack, Text } from '@chakra-ui/react';
import { CPTitle } from '../designSystem/CPTitle';
import { CPButton } from '../designSystem/CPButton';
import { CPProduct, ProductProps } from '../designSystem/CPProduct';

type ShoppingCartProps = {
  items: Array<ProductProps>;
};

export function ShoppingCart({ items }: ShoppingCartProps) {
  return (
    <>
      <CPTitle message="Shopping Cart" />
      {items.length === 0 ? <EmptyCart /> : <FullCart items={items} />}
    </>
  );
}

function FullCart({ items }: ShoppingCartProps) {
  return (
    <>
      <Stack spacing={4} mb={5}>
        {items.map((item) => {
          return <CPProduct {...item} />;
        })}
      </Stack>
      <CPButton variant="alternate">Sign in</CPButton>
    </>
  );
}

function EmptyCart() {
  return (
    <>
      <Text mb={5}>Your cart is empty.</Text>
      <CPButton variant="primary">Go shopping</CPButton>
    </>
  );
}
