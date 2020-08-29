/* global FB */

import { defaultCallback } from './common';

/**
 * Refer to:
 * - https://developers.facebook.com/docs/javascript/reference/FB.init/v8.0
 */
const init = (options={}, lang = 'en_US') => {
  const {
    appId = null,
    version = 'v8.0',
    quote = false,
    ...propsInit
  } = options;

  window.fbAsyncInit = () => {
    FB.init({
      appId,
      version,
      ...propsInit
    });
    FB.AppEvents.logPageView();
  };
  
  ((d, s, id) => {
    const root = d.createElement(s);
    root.id = id;
    d.body.prepend(root);
  })(document, 'div', 'fb-root');

  if (quote) {
    ((d, s, id) => {
      const root = d.createElement(s);
      root.id = id;
      d.body.prepend(root);
    })(document, 'div', 'fb-quote');
  }

  ((d, s, id) => {
    const fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    const js = d.createElement(s);
    js.id = id;
    js.src = `https://connect.facebook.net/${lang}/sdk.js`;
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');
};

/**
 * Refer to:
 * - https://developers.facebook.com/docs/graph-api/reference/
 */
const api = (options = {}, callback = defaultCallback) => {
  const { path = '/me', method = 'get', params } = options;
  FB.api(path, method, params, callback);
};

/**
 * Refer to:
 * - https://developers.facebook.com/docs/javascript/reference/FB.ui/
 *
 * Example:
 * - https://developers.facebook.com/docs/pages/page-tab-dialog
 */
const ui = (options = {}, callback = defaultCallback) => {
  FB.ui(options, callback);
};

export { init, api, ui };
