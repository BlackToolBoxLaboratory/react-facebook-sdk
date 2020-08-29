/* global FB */

import { defaultCallback } from './common';

/**
 * Refer to:
 * - https://developers.facebook.com/docs/reference/javascript/FB.AppEvents.LogEvent
 */

const eventNames = (key) => {
  const eventObj = FB.AppEvents.EventNames;
  return eventObj[key] || eventObj;
};

const parameterNames = (key) => {
  const parameterObj = FB.AppEvents.ParameterNames;
  return parameterObj[key] || parameterObj;
};

const logEvent = (props) => {
  const { eventName, valueToSum, parameters } = props;
  FB.AppEvents.logEvent(eventName, valueToSum, parameters);
};

/**
 * For currency, refer to:
 * - http://en.wikipedia.org/wiki/ISO_4217
 */
const logPurchase = (props) => {
  const { purchaseAmount, currency, parameters } = props;
  FB.AppEvents.logPurchase(purchaseAmount, currency, parameters);
};

const activateApp = () => {
  FB.AppEvents.activateApp();
};

const logPageView = () => {
  FB.AppEvents.logPageView();
};

const setUserID = (userID) => {
  FB.AppEvents.setUserID(userID);
};

const getUserID = () => {
  FB.AppEvents.getUserID();
};

const clearUserID = () => {
  FB.AppEvents.clearUserID();
};

const updateUserProperties = (props, callback = defaultCallback) => {
  FB.AppEvents.updateUserProperties(props, callback);
};

const setAppVersion = (appVersion) => {
  FB.AppEvents.setAppVersion(appVersion);
};

const getAppVersion = () => {
  FB.AppEvents.getAppVersion();
};

const clearAppVersion = () => {
  FB.AppEvents.clearAppVersion();
};

export {
  eventNames,
  parameterNames,
  logEvent,
  logPurchase,
  activateApp,
  logPageView,
  setUserID,
  getUserID,
  clearUserID,
  updateUserProperties,
  setAppVersion,
  getAppVersion,
  clearAppVersion,
};
