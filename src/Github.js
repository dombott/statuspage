import { Octokit } from "@octokit/rest";
import { retry } from "@octokit/plugin-retry";
import { throttling } from "@octokit/plugin-throttling";

const WithPlugins = Octokit.plugin(retry, throttling);

const TOKEN = ''
const OWNER = 'dombott'
const REPO = 'statuspage'

const octokit = new WithPlugins({
  auth: TOKEN,
  throttle: {
    onRateLimit: (retryAfter, options) => {
      octokit.log.warn(
        `Request quota exhausted for request ${options.method} ${options.url}`
      );

      if (options.request.retryCount === 0) {
        // only retries once
        octokit.log.info(`Retrying after ${retryAfter} seconds!`);
        return true;
      }
    },
    onSecondaryRateLimit: (retryAfter, options, octokit) => {
      // does not retry, only logs a warning
      octokit.log.warn(
        `Secondary quota detected for request ${options.method} ${options.url}`
      );
    },
  },
});

export function ListIssues() {
  return octokit.rest.issues.listForRepo({
    owner: OWNER,
    repo: REPO,
    state: "all",
    per_page: 100
  });
}

export function ListComments(issue_number) {
  return octokit.rest.issues.listComments({
    owner: OWNER,
    repo: REPO,
    issue_number: issue_number
  });
}

export function ListLabels() {
  return octokit.rest.issues.listLabelsForRepo({
    owner: OWNER,
    repo: REPO,
    per_page: 100
  });
}