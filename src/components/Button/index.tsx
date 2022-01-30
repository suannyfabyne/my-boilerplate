import React from 'react';

import * as S from './style';

interface ButtonProps {
  text: string;
  theme?: 'primary' | 'secundary' | 'default';
  onClick?: () => void;
}

function Button({ text, theme, onClick }: ButtonProps) {
  return (
    <S.Button theme={theme} onClick={onClick}>
      {text}
    </S.Button>
  );
}

Button.defaultProps = {
  theme: 'default',
  onClick: () => {},
};

export default Button;
