import React from 'react';
import { shallow, mount } from 'enzyme';
import App, { TrophyCalculator, ChickenBoxCalculator } from './App';

it('renders without crashing', () => {
  mount(<App />);
});

it('starts on the trophy page', () => {
  const nav = shallow(<App />);
  expect(nav).toContainReact(<TrophyCalculator/>);
});

it('has a button to go to the chicken box page', () => {
  const nav = shallow(<App />);
  expect(nav).toContainMatchingElement('#nav_chickenBoxes');
});

it('goes to the chicken box page', () => {
  const nav = shallow(<App />);
  nav.find('#nav_chickenBoxes').simulate('click');
  expect(nav).toContainReact(<ChickenBoxCalculator/>);
});
