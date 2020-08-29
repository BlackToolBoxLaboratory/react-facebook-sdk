/* global FB */

import { defaultCallback } from './common';

const prefatcherModes = (key) => {
  const modeObj = FB.Canvas.Prefetcher;
  return modeObj[key] || modeObj;
};

/**
 * For prefetcher, refer to:
 * - https://developers.facebook.com/docs/reference/javascript/FB.Canvas.Prefetcher.setCollectionMode/
 * - https://developers.facebook.com/docs/reference/javascript/FB.Canvas.Prefetcher.addStaticResource/
 */
const prefetcher = {
  addStaticResource : (src) => {
    FB.Canvas.Prefetcher.addStaticResource(src);
  },
  setCollectionMode : (mode) => {
    FB.Canvas.Prefetcher.setCollectionMode(mode);
  },
};

const scrollTo = (x, y) => {
  FB.Canvas.scrollTo(x, y);
};

/**
 * conf could be Boolean or Numberic (millisecond, ms)
 *
 * Refer to:
 * - https://developers.facebook.com/docs/reference/javascript/FB.Canvas.setAutoGrow/
 */
const setAutoGrow = (conf = true) => {
  FB.Canvas.setAutoGrow(conf);
};

const setSize = (size = {}) => {
  const { width, height } = size;
  FB.Canvas.setSize({ width, height });
};

/**
 * It is required a callback function which return String for path.
 *
 * Refer to:
 * - https://developers.facebook.com/docs/reference/javascript/FB.Canvas.setUrlHandler/
 */
const setUrlHandler = (callback = defaultCallback) => {
  FB.Canvas.setUrlHandler(callback);
};

/**
 * It is required a callback function which return Numberic in millisecond.
 *
 * Refer to:
 * - https://developers.facebook.com/docs/reference/javascript/FB.Canvas.setDoneLoading/
 */
const setDoneLoading = (callback = defaultCallback) => {
  FB.Canvas.setDoneLoading(callback);
};

const startTimer = () => {
  FB.Canvas.startTimer();
};

const stopTimer = (callback = defaultCallback) => {
  FB.Canvas.stopTimer(callback);
};

export {
  prefatcherModes,
  prefetcher,
  scrollTo,
  setAutoGrow,
  setSize,
  setUrlHandler,
  setDoneLoading,
  startTimer,
  stopTimer,
};
