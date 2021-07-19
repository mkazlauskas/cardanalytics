import React from 'react';
import { useSelector } from 'react-redux';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Component from '.';
import { mockCardanoData } from '../../app/store.mockdata';

describe('CardanoStats', () => {
  beforeAll(() => {
    // Use mock store data in react-redux hook
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (useSelector as any).mockImplementation(() => mockCardanoData);
  });
  it('should match snapshot', () => {
    expect(toJson(shallow(<Component />))).toMatchSnapshot();
  });
});