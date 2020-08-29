import React from 'react';
import classnames from 'classnames';

/**
 * Refer to:
 * - https://developers.facebook.com/docs/plugins/embedded-video-player
 * - https://developers.facebook.com/docs/plugins/embedded-video-player/api
 */
const Video = (props) => {
  const { children, className, ...propsVideo} = props;
  return (
    <div className={classnames('module-fb-video', 'fb-video', className)} {...propsVideo}>
      <blockquote className="fb-xfbml-parse-ignore" cite={propsVideo['data-href']}>
        {children}
      </blockquote>
    </div>
  );
};

export default Video;
