import React from 'react';
import classnames from 'classnames';

/**
 * Refer to:
 * - https://developers.facebook.com/docs/plugins/like-button
 */
const Like = (props) => {
  const {className, ...propsLike} = props;
  return (
    <div className={classnames('module-fb-like', 'fb-like', className)} {...propsLike} />
  );
};

export default Like;
