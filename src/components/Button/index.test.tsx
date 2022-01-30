import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './index';

test('test text displayed on screen', () => {
  render(<Button text='ButtonTest' theme='primary' />);
  const button = screen.getByText(/ButtonTest/i);
  expect(button).toBeInTheDocument();
});

test('test button theme', () => {
  render(<Button text='ButtonTest' theme='secundary' />);
  const button = screen.getByText(/ButtonTest/i);
  expect(button).toHaveStyle(`color: palevioletred`);
});
