import React from 'react';
import classnames from 'classnames';

/**
 * Refer to:
 * - https://developers.facebook.com/docs/plugins/embedded-posts
 */
const Post = (props) => {
  const { children, className, ...propsPost} = props;
  return (
    <div className={classnames('module-fb-post', 'fb-post', className)} {...propsPost}>
      <blockquote className="fb-xfbml-parse-ignore" cite={propsPost['data-href']}>
        {children}
      </blockquote>
    </div>
  );
};

export default Post;
