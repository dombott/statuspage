import React from 'https://unpkg.com/es-react@16.12.0/dev';
import marked from 'https://unpkg.com/marked@0.8.0/lib/marked.esm.js';
import { FormatTimestamp, html } from './utils.js';
import { ListComments } from './Github.js';

const Updates = (props) => {
  const [comments, setComments] = React.useState();
  const [error, setError] = React.useState();
  const {
    issue_number,
  } = props;

  React.useEffect(() => {
    async function fetchComments() {
      if (issue_number && !comments) {
        await ListComments(issue_number)
          .then((result) => {
            setComments(result.data)
          })
          .catch((error) => {
            setError(error)
          });
      }
    }
    fetchComments();
  }, [issue_number, comments]);

  if (error != null) {
    return html`
      <span class="error">Failed to load updates, an error occured: ${error}</span>
    `
  }
  return html`
      <div id="updates" className="updates">
        ${(comments || [])
      .map(({
        id,
        created_at,
        body,
      }) => html`
            <div key=${id} className="update">
              <span className="date">
                ${FormatTimestamp("", created_at)}
              </span>
              <div
                className="body"
                dangerouslySetInnerHTML="${{ __html: marked(body) }}"
              />
            </div>
          `)}
      </div>
  `
}

export default Updates;