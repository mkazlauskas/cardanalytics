import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Component from '.';

describe('Root component', () => {
  it('should match snapshot', () => {
    expect(toJson(shallow(<Component />))).toMatchSnapshot();
  });
});