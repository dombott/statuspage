import React from 'react';
import { Link } from 'react-router-dom'
import Updates from './Updates.js'
import { formatTimestamp, renderBody } from './utils.js';

const TYPE_PREFIX = "type/"

const Incidents = (props) => {
  const {
    incidents,
    incident_number,
    incident_filter,
    incident_comments
  } = props;

  return (
    <div className="incidents">
      {(incidents || [])
        .filter(({ number }) => incident_number === null || Number(incident_number) === number)
        .filter(({ labels }) => incident_filter === null || labels.filter((lbl) => lbl.name === incident_filter).length > 0)
        .filter(({ labels }) => labels.filter((lbl) => lbl.name.startsWith(TYPE_PREFIX)).length > 0)
        .map(({
          number,
          title,
          labels,
          created_at,
          closed_at,
          comments,
          body,
          state
        }) => {
          const typeLabels = labels.filter((lbl) => lbl.name.startsWith(TYPE_PREFIX));
          var type = null
          if (typeLabels.length > 0) {
            type = typeLabels[0].name.slice(TYPE_PREFIX.length)
          }
          const dotClass = type === 'maintenance' ? type : state

          return (
            <div
              className="incident"
              id={number}
              key={number}
            >
              <div className={"dot " + dotClass} title={dotClass} />
              <h1 className="title">
                <Link to={`?number=${number}`}>
                  {title} 
                </Link>
              </h1>
              {labels.length > 0 && (
                <div className="affected">
                  affected:
                  {labels.map((label) => (
                    <Link to={`?filter=${label.name}`} className="component" style={{ "backgroundColor": '#' + label.color }} key={label.id}>
                      <span>
                        {label.name}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
              <span className="date">
                {formatTimestamp(type === "maintenance" ? "announced" : "reported", created_at)}
                {closed_at != null && ", " + formatTimestamp("resolved", closed_at)}
              </span>
              <br />
              <span className="date">
                <Link to={`?number=${number}`}>
                  {comments} {comments === 1 ? "update" : "updates"}
                </Link>
              </span>
              <div
                className="body"
                dangerouslySetInnerHTML={renderBody(body)}
              />
              {incident_number != null && Number(incident_number) === number &&
                (
                  <Updates comments={incident_comments} />
                )}
            </div>
          )
        }
        )}
    </div>
  );
}

export default Incidents;