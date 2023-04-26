import { marked } from 'marked';

export function formatTimestamp(dateTime) {
    return new Date(dateTime).toLocaleDateString() + " " + new Date(dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

export function renderBody(body) {
    const renderedHTML = marked(body).replace("<pre>", "<pre class='prettyprint'>");
    return { __html: renderedHTML };
}