import React from 'react';
import { shallow, mount } from 'enzyme';
import { BoxRange } from './App';

it('renders without crashing', () => {
  mount(<BoxRange />);
});

it('renders 1 3% box', () => {
  const result = mount(<p><BoxRange size="3" minimum="1" maximum="1"/></p>);
  expect(result).toHaveText("1 3% chicken box");
});

it('renders 1 12% box', () => {
  const result = mount(<p><BoxRange size="12" minimum="1" maximum="1"/></p>);
  expect(result).toHaveText("1 12% chicken box");
});

it('renders 2 boxes', () => {
  const result = mount(<p><BoxRange size="3" minimum="2" maximum="2"/></p>);
  expect(result).toHaveText("2 3% chicken boxes");
});

it('renders a range of boxes', () => {
  const result = mount(<p><BoxRange size="3" minimum="2" maximum="4"/></p>)
  expect(result).toHaveText("2–4 3% chicken boxes");
});
