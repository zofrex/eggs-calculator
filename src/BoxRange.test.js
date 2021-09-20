import React from 'react';
import {render, screen} from '@testing-library/react'
import { BoxRange } from './App';

it('renders without crashing', () => {
  render(<BoxRange />);
});

it('renders 1 3% box', () => {
  render(<p><BoxRange size="3" minimum="1" maximum="1"/></p>);
  screen.fin
  expect(screen.getByText(/chicken/)).toHaveTextContent("1 3% chicken box");
});

it('renders 1 12% box', () => {
  render(<p><BoxRange size="12" minimum="1" maximum="1"/></p>);
  expect(screen.getByText(/chicken/)).toHaveTextContent("1 12% chicken box");
});

it('renders 2 boxes', () => {
  render(<p><BoxRange size="3" minimum="2" maximum="2"/></p>);
  expect(screen.getByText(/chicken/)).toHaveTextContent("2 3% chicken boxes");
});

it('renders a range of boxes', () => {
  render(<p><BoxRange size="3" minimum="2" maximum="4"/></p>)
  expect(screen.getByText(/chicken/)).toHaveTextContent("2–4 3% chicken boxes");
});
