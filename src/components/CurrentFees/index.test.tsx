import React from 'react';
import { useSelector } from 'react-redux';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Component from '.';
import { cardanoData } from '../test-helpers';

describe('CardanoFees', () => {
  beforeAll(() => {
    // Use mock store data in react-redux hook
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (useSelector as any).mockImplementation(() => cardanoData);
  });
  it('should match snapshot', () => {
    expect(toJson(shallow(<Component />))).toMatchSnapshot();
  });
});