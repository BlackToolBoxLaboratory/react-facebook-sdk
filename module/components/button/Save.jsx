import React from 'react';
import classnames from 'classnames';

/**
 * Refer to:
 * - https://developers.facebook.com/docs/plugins/save
 */
const Save = (props) => {
  const { className, ...propsSave} = props;
  return (
    <div className={classnames('module-fb-save', 'fb-save', className)} {...propsSave} />
  );
};

export default Save;
