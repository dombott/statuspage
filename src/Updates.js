import React from 'react';
import { formatTimestamp, renderBody } from './utils.js';

const Updates = (props) => {
  const {
    comments,
  } = props;

  return (
    <div id="updates" className="updates">
      {(comments || [])
        .map(({
          id,
          created_at,
          body,
        }) => (
          <div key={id} className="update">
            <div className='dot' />
            <span className="date">
              {formatTimestamp(created_at)}
            </span>
            <div
              className="body"
              dangerouslySetInnerHTML={renderBody(body)}
            />
          </div>
        ))}
    </div>
  );
}

export default Updates;