import React from 'https://unpkg.com/es-react@16.12.0/dev';
import htm from 'https://unpkg.com/htm?module'

export const html = htm.bind(React.createElement)

export function FormatTimestamp(message, dateTime) {
    return message + " " + new Date(dateTime).toLocaleDateString() + " " + new Date(dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}