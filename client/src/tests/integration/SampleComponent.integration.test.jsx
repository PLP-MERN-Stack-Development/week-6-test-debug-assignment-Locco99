import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SampleComponent from '../../components/SampleComponent';

function Wrapper() {
  const [text, setText] = useState('Initial');
  return (
    <div>
      <button onClick={() => setText('Changed')}>Change</button>
      <SampleComponent text={text} />
    </div>
  );
}

describe('SampleComponent Integration', () => {
  it('updates text when button is clicked', () => {
    render(<Wrapper />);
    expect(screen.getByTestId('sample-component')).toHaveTextContent('Initial');
    fireEvent.click(screen.getByText('Change'));
    expect(screen.getByTestId('sample-component')).toHaveTextContent('Changed');
  });
}); 