import React from 'react'
import { Title } from './styles'

export interface TitleProps {
  text: string;
  size?:
  | 'nano'
  | 'xnano'
  | 'xxnano'
  | 'small'
  | 'xsmall'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
  | 'huge';
  marginTop?:
  | 'nano'
  | 'xnano'
  | 'xxnano'
  | 'small'
  | 'xsmall'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
  | 'huge';
  marginLeft?:
  | 'nano'
  | 'xnano'
  | 'xxnano'
  | 'small'
  | 'xsmall'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
  | 'huge';
  marginRight?:
  | 'nano'
  | 'xnano'
  | 'xxnano'
  | 'small'
  | 'xsmall'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
  | 'huge';
  marginBottom?:
  | 'nano'
  | 'xnano'
  | 'xxnano'
  | 'small'
  | 'xsmall'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
  | 'huge';
  family?: 'light' | 'regular' | 'bold';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'dark' | 'white' | 'grayDark' | 'title';
}

export function Text({ text }: TitleProps) {
  return (
    <Title>{text}</Title>
  )
}
