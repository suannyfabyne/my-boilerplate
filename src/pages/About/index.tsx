import React from 'react';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';

function About() {
  const nagivate = useNavigate();

  return (
    <Button text='About' theme='secundary' onClick={() => nagivate('/')} />
  );
}

export default About;
