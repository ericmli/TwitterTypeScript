import styled from 'styled-components/native'

interface SizeImage {
  size: boolean
}

export const Image = styled.Image<SizeImage>`
  width: 100%;
  height: ${(props) => props.size ? '400px' : '200px'};
  border-radius: 10px;
`
