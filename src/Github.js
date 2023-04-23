import { Octokit } from "@octokit/rest";
import { retry } from "@octokit/plugin-retry";
import { throttling } from "@octokit/plugin-throttling";

const WithPlugins = Octokit.plugin(retry, throttling);

const octokit = new WithPlugins({
    auth: process.env.REACT_APP_GH_TOKEN,
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
        owner: process.env.REACT_APP_REPO_OWNER,
        repo: process.env.REACT_APP_REPO_NAME,
        state: "all",
        per_page: 100
    });
  }

  export function ListComments(issue_number){
    return octokit.rest.issues.listComments({
        owner: process.env.REACT_APP_REPO_OWNER,
        repo: process.env.REACT_APP_REPO_NAME,
        issue_number: issue_number
    });
  }

  export function ListLabels(){
    return octokit.rest.issues.listLabelsForRepo({
      owner: process.env.REACT_APP_REPO_OWNER,
      repo: process.env.REACT_APP_REPO_NAME,
      per_page: 100
    });
  }