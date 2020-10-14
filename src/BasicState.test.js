import React from 'react';
import { render, fireEvent, screen, waitForElement } from '@testing-library/react'
import BasicState from './BasicState';

describe('BasicState', () => {
  beforeEach(() => {
    render(<BasicState />)
  });

  test('renders', () => {
    expect(screen.getByRole('heading')).toHaveTextContent('My app');
  });

  test('counter', async () => {
    expect(screen.getByRole('main')).toHaveTextContent('You clicked 3 times');
    fireEvent.click(screen.getByRole('button'));
    await waitForElement(() => screen.getByRole('main'))
    expect(screen.getByRole('main')).toHaveTextContent('You clicked 4 times');
  });
})