import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MacroRow from './MacroRow';

describe('MacroRow', () => {
  test('renders label correctly', () => {
    render(<MacroRow label="Protein" percent="75%" value="150 / 200 g" />);
    expect(screen.getByText('Protein')).toBeInTheDocument();
  });

  test('renders value correctly', () => {
    render(<MacroRow label="Protein" percent="75%" value="150 / 200 g" />);
    expect(screen.getByText('150 / 200 g')).toBeInTheDocument();
  });
});
