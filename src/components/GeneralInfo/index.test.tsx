import React from 'react';
import { useSelector } from 'react-redux';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Component from '.';
import { CardanoStats } from '../../app/types';

export const cardanoData: CardanoStats = {
  blocks: 5995095,
  transactions: 9787836,
  assets: 43751,
  epoch: 278,
  slot: 300948,
}; 

describe('CardanoStats', () => {
  beforeAll(() => {
    // Use mock store data in react-redux hook
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (useSelector as any).mockImplementation(() => cardanoData);
  });
  it('should match snapshot', () => {
    expect(toJson(shallow(<Component />))).toMatchSnapshot();
  });
});