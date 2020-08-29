import React from 'react';
import classnames from 'classnames';

/**
 * Refer to:
 * - https://developers.facebook.com/docs/plugins/group-plugin
 */
const Group = (props) => {
  const { children, className, ...propsGroup} = props;
  return (
    <div className={classnames('module-fb-group', 'fb-group', className)} {...propsGroup}>
      <blockquote className="fb-xfbml-parse-ignore" cite={propsGroup['data-href']}>
        {children}
      </blockquote>
    </div>
  );
};

export default Group;
