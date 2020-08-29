import React from 'react';
import classnames from 'classnames';

/**
 * Refer to:
 * - https://developers.facebook.com/docs/plugins/page-plugin
 */
const Page = (props) => {
  const { children, className, ...propsPage} = props;
  return (
    <div className={classnames('module-fb-page', 'fb-page', className)} {...propsPage}>
      <blockquote className="fb-xfbml-parse-ignore" cite={propsPage['data-href']}>
        {children}
      </blockquote>
    </div>
  );
};

export default Page;
