import Immutable from 'immutable';
import {expect} from 'chai';

import _ from '../src/index';

const plainObj = {a: 1, b: 2, c: 3};
const flatMap = Immutable.Map({a: 1, b: 2, c: 3});


describe('modash', () => {

  it('must work on a plain js object', () => {
      expect(plainObj::_.omit('a')).to.equal({b: 2, c: 3});
  });
});
