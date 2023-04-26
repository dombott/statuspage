import React from 'react';
import { Link } from 'react-router-dom'
import { formatTimestamp, renderBody } from './utils.js';

const Maintenances = (props) => {
    const {
        incidents,
        incident_number,
        incident_filter,
    } = props;

    var data = (incidents || [])
        .filter(({ number }) => incident_number === null || Number(incident_number) === number)
        .filter(({ labels }) => incident_filter === null || labels.filter((lbl) => lbl.name === incident_filter).length > 0)
        .filter(({ labels }) => labels.filter((lbl) => lbl.name === "type/maintenance").length > 0)
        .filter(({ state }) => state === "open")

    if (data.length === 0)
        return

    return (
        <div className="incidents">
            <h3>Maintenances</h3>
            {data.map(({
                number,
                title,
                labels,
                created_at,
                body,
            }) => {
                const type = 'maintenance'

                return (
                    <div
                        className="incident"
                        id={number}
                        key={number}
                    >
                        <div className={"dot " + type} title={type} />
                        <span className="date">
                            {formatTimestamp(created_at)}
                        </span>
                        <h3 className="title">
                            <Link to={`?number=${number}`}>
                                {title}
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
                    </div>
                )
            }
            )}
        </div>
    );
}

export default Maintenances;