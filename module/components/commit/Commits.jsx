import React from 'react';
import classnames from 'classnames';

/**
 * Refer to:
 * - https://developers.facebook.com/docs/plugins/comments
 */
const Commits = (props) => {
  const { className, ...propsCommit } = props;
  return (
    <div className={classnames('btb-react-fb-comments', 'fb-comments', className)} {...propsCommit} />
  );
};

export default Commits;