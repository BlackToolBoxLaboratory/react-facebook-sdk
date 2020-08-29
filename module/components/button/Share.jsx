import React from 'react';
import classnames from 'classnames';

/**
 * Refer to:
 * - https://developers.facebook.com/docs/plugins/share-button
 */
const Share = (props) => {
  const { children, className, ...propsShare} = props;
  return (
    <div className={classnames('module-fb-share-button', 'fb-share-button', className)} {...propsShare}>
      <blockquote className="fb-xfbml-parse-ignore">
        {children}
      </blockquote>
    </div>
  );
};

export default Share;
