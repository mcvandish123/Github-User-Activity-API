// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new octokit()

await octokit.request('GET /events', {
  headers: {
    'X-GitHub-Api-Version': '2026-03-10'
  }
})




  