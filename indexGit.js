import {fetchingAPI} from './githubFetching.js';

function activityUsers() {
  const description = process.argv.slice(2);
  fetchingAPI(description);
}

function descEvent(event) {
  const eventName = event.repo.name;
  const eventPayLoad = event.payload;

  switch (event.type) {
    case "PushEvent":
      return `Pushed commits to ${eventName}`;

    case "IssuesEvent":
      return `${eventPayLoad.action} a new issue in ${eventName}`;

    case "WatchEvent":
      return `${eventPayLoad.action} ${eventName}`;

    case "CreateEvent":
      return `${eventPayLoad.ref_type} : ${eventName}`;

    default:
      return `${event.type.replace("Event", "")} in ${eventName}`;
  }
}

activityUsers();

export {descEvent};


