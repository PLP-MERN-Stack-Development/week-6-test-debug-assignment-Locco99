import React from 'react';
import { render } from '@testing-library/react';
import { ErrorBoundary } from '../../components/ErrorBoundary';

function ProblemChild() {
  throw new Error('Error thrown from problem child');
}

describe('ErrorBoundary', () => {
  it('catches errors and displays fallback UI', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>
    );
    expect(getByText('Something went wrong.')).toBeInTheDocument();
  });
}); 