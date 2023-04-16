import {Component} from 'https://unpkg.com/es-react@16.12.0/dev';
import Incidents from "./Incidents.js";
import {html} from './utils.js'

const Header = (props) => {
    return html`
      <div className="header">
        <h1 className="title">
          <a href="index.html"><strong>Statuspage</strong></a>
        </h1>
        <p className="description">
          View incidents and status updates.
        </p>
      </div>
    `;
}

class App extends Component {
    render() {
        return (
            html`
                <${Header} />
                <${Incidents} />
            `
        );
    }
}

export default App;