import React from 'react';
import { Link } from 'react-router-dom';

const Components = (props) => {
  const {
    components,
    incidents
  } = props;

  return (
    <div id="components" className="components">
      <h3>Current status</h3>
      {(components || [])
        .sort((a, b) => a.name > b.name ? 1 : -1)
        .filter((label) => !label.name.startsWith("type/"))
        .map((label) => {
          return (
            <Link to={`?filter=${label.name}`} className="component" style={{ "backgroundColor": '#' + label.color }} key={label.id}>
              <div className={"dot " + (incidents.some((inc) => inc.state === "open" && inc.labels.some((lbl) => lbl.name === label.name)) ? "red" : "green")} />
              <span>{label.name}</span>
            </Link>
          );
        })
      }
    </div>
  );
}

export default Components;