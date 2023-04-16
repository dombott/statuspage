import React from 'https://unpkg.com/es-react@16.12.0/dev';
import { html } from './utils.js';
import { ListLabels } from './Github.js';

const Components = (props) => {
  const [components, setComponents] = React.useState();
  const [error, setError] = React.useState();

  React.useEffect(() => {
    async function fetchComponents() {
      if (!components) {
        await ListLabels()
          .then((result) => {
            setComponents(result.data)
          })
          .catch((error) => {
            setError(error)
          });
      }
    }
    fetchComponents();
  }, [components]);

  if (error != null) {
    return html`
      <span class="error">Failed to load components, an error occured: ${error}</span>
    `
  }
  return html`
      <div id="components" className="components">
        ${(components || [])
      .map((label) => html`
        <a href="?label=${label.name}" className="component" style=${{ "backgroundColor": '#' + label.color }} key=${label.id}>
          <span>
            ${label.name}
          </span>
        </a>
      `)}
      </div>
  `
}

export default Components;