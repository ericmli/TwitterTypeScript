import React from 'react';
import { Active, Icone, Text } from './styles';

interface ButtonGoogleProps {
  name?: string;
}

export function ButtonGoogle({ name }: ButtonGoogleProps) {
  return (
    <Active>
      <Icone />
      <Text>{name}</Text>
    </Active>
  );
}
