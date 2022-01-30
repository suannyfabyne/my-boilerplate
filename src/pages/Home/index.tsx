import React from 'react';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';

function Home() {
  const nagivate = useNavigate();

  return (
    <Button text='Home' theme='primary' onClick={() => nagivate('/about')} />
  );
}

export default Home;
