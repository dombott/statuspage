import React from 'https://unpkg.com/es-react@16.12.0/dev';
import marked from 'https://unpkg.com/marked@0.8.0/lib/marked.esm.js';
import Updates from './Updates.js'
import { FormatTimestamp, html } from './utils.js';
import { ListIssues } from './Github.js';

const TYPE_PREFIX = "type/"

const Incidents = (props) => {
  const [issues, setIssues] = React.useState();
  const [error, setError] = React.useState();

  React.useEffect(() => {
    async function fetchIssues() {
      if (!issues) {
        await ListIssues()
          .then((result) => {
            setIssues(result.data)
          })
          .catch((error) => {
            setError(error)
          });
      }
    }
    fetchIssues()
  }, [issues]);

  const {
    search,
  } = window.location;

  if (error != null) {
    return html`
      <span class="error">Failed to load incidents, an error occured: ${error}</span>
    `
  }
  return html`
      <div className="incidents">
        ${(issues || [])
      .filter(({ number }) => !search || !search.startsWith("?number=") || Number(search.slice(8)) === number)
      .filter(({ labels }) => !search || !search.startsWith("?label=") || labels.filter((lbl) => lbl.name === search.slice(7)).length > 0)
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
        const icon = type === 'maintenance' ? "\u26a0" : state === 'closed' ? "\u2705" : "\u274c"

        return html`
            <div
              className="incident"
              id={${number}}
              key=${number}
            >
              <h1 className="title">
                <a href="?number=${number}">
                   ${icon} ${title}
                </a>
              </h1>
              ${labels.length > 0 && html`
                <div className="affected">
                  affected:
                  ${labels.map((label) => label.name.startsWith("type/") ? "" : html`
                    <a href="?label=${label.name}" className="component" style=${{ "backgroundColor": '#' + label.color }}  key=${label.id}>
                      <span>
                        ${label.name}
                      </span>
                    </a>
                  `)}
                </div>
              `}
              <span className="date">
                ${FormatTimestamp(type === "maintenance" ? "announced" : "reported", created_at)}
                ${closed_at != null && ", " + FormatTimestamp("resolved", closed_at)}
              </span>
              <br />
              <span className="date">
                <a href="?number=${number}">
                    ${comments} ${comments == 1 ? "update" : "updates"}
                </a>
              </span>
              <div
                className="body"
                dangerouslySetInnerHTML="${{ __html: marked(body).replace(/<pre>/g, '<pre class="prettyprint">') }}"
              />
              ${search && search.startsWith("?number=") && Number(search.slice(8)) === number && html`
              <${Updates} issue_number=${number} />
              `}
            </div>
          `}
      )}
      </div>
    `;
}

export default Incidents;