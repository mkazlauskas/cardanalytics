import React from 'react';
import { useSelector } from 'react-redux';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Component from '.';
import { testCardanoData } from '../../app/test-store';

describe('CardanoStats', () => {
  beforeAll(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (useSelector as any).mockImplementation(() => testCardanoData);
  });
  it('should match snapshot', () => {
    expect(toJson(shallow(<Component />))).toMatchSnapshot();
  });
});