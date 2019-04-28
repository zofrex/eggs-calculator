import React from 'react';
import App from './App';

import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each';
import { fireEvent, render } from 'react-testing-library'

it('passes a smoke test', () => {
  const { container, getByLabelText } = render(<App />); // wtf, why
  const currentChickens = getByLabelText('Current chickens:');
  const hatcheryRate = getByLabelText(/Hatchery rate:.*/);
  const calm = getByLabelText('Internal Hatchery Calm:%');
  const warpTime = getByLabelText('Long warp time:hours');

  fireEvent.change(currentChickens, { target: { value: '5M' } });
  fireEvent.change(hatcheryRate, { target: { value: '3000' } });
  fireEvent.change(calm, { target: { value: '100' } });
  fireEvent.change(warpTime, { target: { value: '12 '} });

  // hand calculated
  expect(container).toHaveTextContent('10 million: 0d 3h 29m');
  expect(container).toHaveTextContent('50 million: 1d 7h 15m');
  expect(container).toHaveTextContent('250 million: 7d 2h 9m');
  expect(container).toHaveTextContent('1 billion: 28d 18h 59m');

  expect(container).toHaveTextContent('10 million: 1 warp');
  expect(container).toHaveTextContent('50 million: 6 warps');
  expect(container).toHaveTextContent('250 million: 29 warps');
  expect(container).toHaveTextContent('1 billion: 116 warps');
});
