// src/AppRouter.test.tsx
import React from 'react';
import { shallow } from 'enzyme';
import App from './components';

describe('<AppRouter />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  test('renders without crashing', () => {
    expect(component.length).toBe(1);
  });
});
