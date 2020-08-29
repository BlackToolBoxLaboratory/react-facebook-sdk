import React from 'react';
import classnames from 'classnames';

/**
 * Refer to:
 * - https://developers.facebook.com/docs/facebook-login/web/login-button
 */
const Login = (props) => {
  const {className, ...propsLogin} = props;
  return (
    <div className={classnames('module-fb-login-button', 'fb-login-button', className)} {...propsLogin} />
  );
};

export default Login;