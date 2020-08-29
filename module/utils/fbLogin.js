/* global FB */

import { defaultCallback } from './common';

/**
 * Refer to:
 * - https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus/
 */
const getLoginStatus = (callback = defaultCallback, force = false) => {
  FB.getLoginStatus(callback, force);
};

/**
 * Refer to:
 * - https://developers.facebook.com/docs/reference/javascript/FB.login/v8.0
 * - https://developers.facebook.com/docs/permissions/reference
 */
const login = (callback = defaultCallback, options) => {
  FB.login(callback, options);
};

/**
 * Refer to:
 * - https://developers.facebook.com/docs/reference/javascript/FB.logout/
 */
const logout = (callback = defaultCallback) => {
  FB.logout(callback);
};

/**
 * The getLoginStatus is suggested to use.
 *
 * Refer to:
 * - https://developers.facebook.com/docs/reference/javascript/FB.getAuthResponse/
 */
const getAuthResponse = () => {
  FB.getLoginStatus();
};

export { getLoginStatus, login, logout, getAuthResponse };
