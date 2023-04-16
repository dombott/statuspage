import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";
import { retry } from "https://cdn.skypack.dev/@octokit/plugin-retry";
import { throttling } from "https://cdn.skypack.dev/@octokit/plugin-throttling";

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
  
  export function ListIssues(){
    return octokit.rest.issues.listForRepo({
        owner: OWNER,
        repo: REPO,
        state: "all",
    });
  }

  export function ListComments(issue_number){
    return octokit.rest.issues.listComments({
        owner: OWNER,
        repo: REPO,
        issue_number: issue_number,
    });
  }