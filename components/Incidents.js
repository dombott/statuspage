import React from 'https://unpkg.com/es-react@16.12.0/dev';
import { endpoint } from 'https://cdn.skypack.dev/@octokit/endpoint';
import marked from 'https://unpkg.com/marked@0.8.0/lib/marked.esm.js';
import { OWNER, REPO, TOKEN, html } from '../Global.js'
import Updates from './Updates.js'
import { FormatTimestamp } from './utils.js';

const TYPE_PREFIX = "type/"

const Incidents = (props) => {
    const [issues, setIssues] = React.useState();

    React.useEffect(() => {
        async function fetchIssues() {
            if (!issues) {
                const { url, ...options } = endpoint("GET /repos/:owner/:repo/issues", {
                    owner: OWNER,
                    repo: REPO,
                    state: "all",
                    auth: TOKEN,
                    // headers: {
                    //     Authorization: `Bearer ${TOKEN}`
                    // }
                });
                const res = await fetch(url, options);
                setIssues(await res.json());
            }
        }

        fetchIssues();
    }, [issues]);

    const {
        search,
    } = window.location;

    return html`
      <div className="incidents">
        ${(issues || [])
            .filter(({ user }) => user.login === 'dombott')
            .filter(({ number }) => !search || Number(search.slice(1)) === number)
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
              key={${number}}
            >
              <h1 className="title">
                <a href="?${number}">
                   ${icon} ${title}
                </a>
              </h1>
              ${labels.length > 0 && html`
                <div className="affected">
                  affected:
                  ${labels.map((label) => label.name.startsWith("type/") ? "" : html`
                    <span
                      key="${label.id}"
                      style=${{ color: '#' + label.color, padding: '0 .25em' }}
                    >
                      ${label.name}
                    </span>
                  `)}
                </div>
              `}
              <span className="date">
                ${FormatTimestamp(type === "maintenance" ? "announced" : "reported", created_at)}
                ${closed_at != null && ", " + FormatTimestamp("resolved", closed_at)}
              </span>
              <br />
              <span className="date">
                <a href="?${number}">
                    ${comments} ${comments == 1 ? "update" : "updates"}
                </a>
              </span>
              <div
                className="body"
                dangerouslySetInnerHTML="${{ __html: marked(body).replace(/<pre>/g, '<pre class="prettyprint">') }}"
              />
              ${search && Number(search.slice(1)) === number && html`
              <${Updates} issue_number=${number} />
              `}
            </div>
          `}
        )}
      </div>
    `;
}

export default Incidents;