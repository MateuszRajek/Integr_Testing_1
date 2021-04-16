import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Renders list elements correctly, when valid list is provided', () => {
  const validList = ['This is', 'sample', 'list element'];

  beforeEach(() => render(<App initialList={validList} />));

  test('Render valid list', () => {
    const list = screen.getByTestId('list');
    expect(list).toBeInTheDocument(list);
  });

  test('Render valid list element', () => {
    const listElements = screen.getAllByTestId(/list-element-/);
    expect(listElements.length).toEqual(validList.length);
  });

  test('Render valid list element buttons', () => {
    const listElementsButtons = screen.getAllByTestId(/remove-/);
    expect(listElementsButtons.length).toEqual(validList.length);
  });
})

describe('Render component and list element "ul" even if a list has not been passed', () => {

  beforeEach(() => {
    render(<App />);
  })
  test('Render valid list', () => {
    const listElements = screen.getByTestId('list');
    expect(listElements).toBeInTheDocument(listElements);
  });
})

describe('Removes list element from list after "Remove" button was clicked', () => {
    test('Removes element from an array of nonunique elements', () => {
      const listOfNonUniqueElements = ['This is', 'sample', 'list element', 'This is'];
      render(<App initialList={listOfNonUniqueElements} />);

      const buttonElement = screen.getByTestId('remove-3');
      fireEvent.click(buttonElement);

      const listElements = screen.getAllByTestId(/list-element-/);
      const listElementsContent = listElements.map(listElem => listElem.textContent.replace('Remove', ''))

    expect(listElementsContent).toEqual(['This is', 'sample', 'list element']);
    });

    test('Removes element from an array of nunique elements', () => {
      const listOfUniqueElements = ['This is', 'sample', 'list element'];
      render(<App initialList={listOfUniqueElements} />);

      const buttonElement = screen.getByTestId('remove-2');
      fireEvent.click(buttonElement);

      const listElements = screen.getAllByTestId(/list-element-/);
      const listElementsContent = listElements.map(listElem => listElem.textContent.replace('Remove', ''))

    expect(listElementsContent).toEqual(['This is', 'sample']);
    });
})


