import React from 'react';
import classnames from 'classnames';

/**
 * Refer to:
 * - https://developers.facebook.com/docs/plugins/embedded-comments
 */
const EmbedCommits = (props) => {
  const { className, ...propsEmbedCommits } = props;
  return (
    <div className={classnames('btb-react-fb-comment-embed', 'fb-comment-embed', className)} {...propsEmbedCommits} />
  );
};

export default EmbedCommits;