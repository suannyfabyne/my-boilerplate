import styled from 'styled-components';

type ButtonStyle = {
  theme?: 'primary' | 'secundary' | 'default';
};

export const Button = styled.button<ButtonStyle>`
  background: ${(props) =>
    props.theme === 'primary' ? 'palevioletred' : 'white'};
  color: ${(props) => (props.theme === 'primary' ? 'white' : 'palevioletred')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;
