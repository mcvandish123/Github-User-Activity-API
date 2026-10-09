import {descEvent} from './indexGit.js';

async function fetchingAPI(description) {
  try {
    const response = await fetch(`https://api.github.com/users/${description}/events`);

    if (!response.ok) {
      throw new Error(`HTTP error!: ${response.status}`);
    }
    
    const data = await response.json();

    for (const event of data) {
      console.log(descEvent(event));
    }
  } catch(error) {
    console.log(`Fetching error: ${error}`);
  }
}

export {fetchingAPI};


  