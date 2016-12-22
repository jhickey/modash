import {fromJS, Iterable} from 'immutable';
import _ from 'lodash';

const handler = {
    get (target, key) {
        if (!_[key]) {
            throw ReferenceError(`${key} is not a lodash method`);
        }
        return function(...args) {
            const plainArgs = args.map(arg => Iterable.isIterable(arg) ? arg.toJS() : arg);
            let iter = this;
            let isImm = false;
            if (Iterable.isIterable(this)) {
                isImm = true;
                iter = this.toJS();
            }
            const ret = _[key](iter, ...plainArgs);
            return isImm ? fromJS(ret) : ret;
        }
    }
};

export default new Proxy({}, handler);
