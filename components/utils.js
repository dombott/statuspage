export function FormatTimestamp(message, dateTime) {
    return message + " " + new Date(dateTime).toLocaleDateString() + " " + new Date(dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}