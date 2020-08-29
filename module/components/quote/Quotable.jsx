import React from 'react';
import classnames from 'classnames';

/**
 * If you need to use this, please set qoute=true when using like as sdk.init({...options, qoute:true}, lang).
 * 
 * Refer to:
 * - https://developers.facebook.com/docs/plugins/quote
 */
const Quotable = (props) => {
  const { children, className, ...propsQuotable } = props;
  return (
    <div className={classnames('module-fb-quotable ', 'fb-quotable ', className)} {...propsQuotable}>
      {children}
    </div>
  );
};

export default Quotable;
