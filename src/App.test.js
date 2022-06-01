import React from 'react';
import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App';
import Navbar from './components/navbar/Navbar';
import { act } from 'react-dom/test-utils';

test('dummy test', () => {
  expect(true).toBe(true);
})