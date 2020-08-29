/* global FB */

import { defaultCallback } from './common';

const parse = (dom, callback = defaultCallback) => {
  FB.XFBML.parse(dom, callback);
};

export { parse };
