import React from 'react';

import { Text } from '@chakra-ui/react';
import { CPTitle } from '../designSystem/CPTitle';
import { CPButton } from '../designSystem/CPButton';

type ShoppingCartProps = {
  items: Array<string>;
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
      {items.map((item) => {
        return (
          <Text mb={5} border="md">
            {item}
          </Text>
        );
      })}
      <CPButton variant="primary">Sign in</CPButton>
    </>
  );
}

function EmptyCart() {
  return (
    <>
      <Text>Your cart is empty.</Text>
      <CPButton variant="primary">Go shopping</CPButton>
    </>
  );
}
