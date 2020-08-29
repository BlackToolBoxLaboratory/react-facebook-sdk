/* global FB */

import { defaultCallback } from './common';

/**
 * Refer to:
 * - https://developers.facebook.com/docs/reference/javascript/FB.Event.subscribe/v8.0
 */
const subscribe = (eventName, callback = defaultCallback) => {
  FB.Event.subscribe(eventName, callback);
};

/**
 * Refer to:
 * - https://developers.facebook.com/docs/reference/javascript/FB.Event.unsubscribe/
 */
const unsubscribe = (eventName, callback = defaultCallback) => {
  FB.Event.unsubscribe(eventName, callback);
};

export { subscribe, unsubscribe };
