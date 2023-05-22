import styled from 'styled-components/native';
import { LayoutProps } from '.';

export const SafeAreaViewTop = styled.SafeAreaView<Pick<LayoutProps, 'topColor'>>`
  flex: 0;
  background-color: ${({ topColor, theme }) => theme.colors[topColor || 'white']};
`

export const SafeAreaViewBottom = styled.SafeAreaView<Pick<LayoutProps, 'bottomColor'>>`
  flex: 1;
  background-color: ${({ bottomColor, theme }) => theme.colors[bottomColor || 'white']};
`
