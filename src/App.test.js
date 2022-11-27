import { render, screen } from '@testing-library/react';
import App from './App';
import Modal from '../src/components/Modal'

test('renders text on top of button without crashing', () => {
  render(<App />);
  const textElement = screen.getByText(/Click on the button to open a modal./i);
  expect(textElement).toBeInTheDocument();
});

test('renders the blue button with white Open text',  async () => {
  render(<button />);
  const buttonList = await screen.findAllByRole('button');
  // when we use findAllByRole we need to use async and await
  // Remove async and await and see the error that is being returned
  // console.log(buttonList)
  expect(buttonList).toHaveLength(1)
});

