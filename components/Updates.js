import React from 'https://unpkg.com/es-react@16.12.0/dev';
import { endpoint } from 'https://cdn.skypack.dev/@octokit/endpoint';
import marked from 'https://unpkg.com/marked@0.8.0/lib/marked.esm.js';
import {OWNER, REPO, TOKEN, html} from '../Global.js'
import { FormatTimestamp } from './utils.js';

const Updates = (props) => {
    const [comments, setComments] = React.useState();
    const {
        issue_number,
    } = props;

    React.useEffect(() => {
      async function fetchComments() {
        if (issue_number && !comments) {
          const { url, ...options } = endpoint('GET /repos/:owner/:repo/issues/:issue_number/comments', {
            owner: OWNER,
            repo: REPO,
            issue_number,
            auth: TOKEN,
            // headers: {
            //   Authorization: `Bearer ${TOKEN}`
            // }
          });

          console.log(options);
          const res = await fetch(url, options);
          setComments(await res.json());
        }
      }

      fetchComments();
    }, [issue_number, comments]);

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
                dangerouslySetInnerHTML="${{ __html: marked(body)}}"
              />
            </div>
          `)}
      </div>
    `;
  }

  export default Updates;