See it in action https://dombott.github.io/statuspage

# statuspage

The goal of this project is to display a simple status page that uses github issues as a data store.
The statuspage is written in React and is hosted as a static GitHub Page.

Issues with the label `type/incident` are treated as incidents.
The statuspage loads the 30 latest issues ordering descending by the creation timestamp.

To update an incident, simply comment on the issue.
Affected components/systems can be added as labels.
Closing an issue signifies the incident is resolved.

Issues with the label `type/maintenance` are treated as maintenance announcements.

# Authentication

The requests to the GitHub API are not authenticated.
React apps hosted as a GitHub page have no way to securely store a GitHub PAT.
This means the standard rate-limit of 60 requests/hour/ip applies.

# How to use this

Fork the repo, change `.env` file and set `name` and `homepage` in `package.json` accordingly.
Run `yarn start` to run locally, run `yarn deploy` to deploy on github pages.
Configure GitHub Page to deploy from branch `gh-pages`.
For local dev/debugging using a GitHub PAT token is recommended.
