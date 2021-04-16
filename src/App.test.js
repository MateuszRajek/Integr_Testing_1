import { render, screen } from '@testing-library/react';
import App from './App';

describe('Render list elements correctly, when valid list is provided', () => {
  const initialList = ['This is', 'sample', 'list element'];

  test('Render valid list', () => {
    render(<App />);
    const list = screen.getByTestId('list');
    expect(list).toBeInTheDocument(list);
    
  });
})


