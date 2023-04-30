import React from 'react';
import { Link } from 'react-router-dom'
import Updates from './Updates.js'
import { formatTimestamp, renderBody } from './utils.js';

const Incidents = (props) => {
  const {
    incidents,
    incident_number,
    incident_filter,
    incident_comments,
  } = props;

  var data = (incidents || [])
    .filter(({ number }) => incident_number === null || Number(incident_number) === number)
    .filter(({ labels }) => incident_filter === null || labels.filter((lbl) => lbl.name === incident_filter).length > 0)
    .filter(({ labels }) => labels.filter((lbl) => lbl.name === "type/incident").length > 0)

  if (data.length === 0)
    return

  return (
    <div className="incidents">
      <h3>Incidents</h3>
      {data
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
          // remove the updog alert identifier if necessary
          const cleanTitle = title.split("updog:")[0].trim()

          return (
            <div
              className="incident"
              id={number}
              key={number}
            >
              <div className={"dot " + state} title={state === "closed" ? "resolved " + formatTimestamp(closed_at) : "open"} />
              <span className="date">
                {formatTimestamp(created_at)}
              </span>
              <h3 className="title">
                <Link to={`?number=${number}`}>
                  {cleanTitle}
                </Link>
              </h3>
              {labels.length > 0 && (
                <div className="affected">
                  {labels
                    .filter((label) => !label.name.startsWith("type/"))
                    .map((label) => (
                      <Link to={`?filter=${label.name}`} className="component" style={{ "backgroundColor": '#' + label.color }} key={label.id}>
                        <span>
                          {label.name}
                        </span>
                      </Link>
                    ))}
                </div>
              )}
              <div
                className="body"
                dangerouslySetInnerHTML={renderBody(body)}
              />
              {incident_number != null && Number(incident_number) === number &&
                (
                  <Updates comments={incident_comments} />
                )}
              {incident_number === null && (
                <span className="date">
                  <Link to={`?number=${number}`}>
                    {comments} {comments === 1 ? "update" : "updates"}
                  </Link>
                </span>
              )}
            </div>
          )
        }
        )}
    </div>
  );
}

export default Incidents;