See it in action https://dombott.github.io/statuspage

# statuspage

The goal of this project is to display a simple status page that uses github issues as a data store.
The statuspage is written in React and is hosted as a static GitHub Page.

Issues are treated as incidents.
The statuspage loads the 30 latest issues ordering descending by the creation timestamp.

To update an incident, simply edit the issue text.
Affected components/systems can be added as labels.
Closing an issue signifies the incident is resolved.

# Authentication

The requests to the GitHub API are not authenticated.
This means the standard rate-limit of 60 requests/hour/ip applies.
