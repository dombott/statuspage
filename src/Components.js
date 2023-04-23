import React from 'react';
import { Link } from 'react-router-dom';

const Components = (props) => {
  const {
    components,
  } = props;

  return (
    <div id="components" className="components">
      {(components || []).map((label) => {
        return (
          <Link to={`?filter=${label.name}`} className="component" style={{ "backgroundColor": '#' + label.color }} key={label.id}>
            <span>{label.name}</span>
          </Link>
        );
      })
      }
    </div>
  );
}

export default Components;