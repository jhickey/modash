import Immutable from 'immutable';
import {expect} from 'chai';

import _ from '../src/index';

const plainObj = {a: 1, b: 2, c: 3};
const flatMap = Immutable.Map({a: 1, b: 2, c: 3});


describe('modash', () => {

  it('should work on a plain js object', () => {
      expect(plainObj::_.omit('a')).to.deep.equal({b: 2, c: 3});
  });
  it('should work on an immutable object', () => {
    const ret = flatMap::_.omit('a');
    expect(ret.toJS()).to.deep.equal({b: 2, c: 3});
  });
});
