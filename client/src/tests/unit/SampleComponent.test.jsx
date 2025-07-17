import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SampleComponent from '../../components/SampleComponent';

describe('SampleComponent', () => {
  it('renders the provided text', () => {
    render(<SampleComponent text="Hello, World!" />);
    expect(screen.getByTestId('sample-component')).toHaveTextContent('Hello, World!');
  });
}); 