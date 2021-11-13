import axios from "axios";
// import { BASE_API_URL } from './constants';
const BASE_API_URL = "https://hacker-news.firebaseio.com/v0";

const getStory = async (id) => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story.data;
  } catch (error) {
    console.log("Error while getting a story.");
  }
};

export const getStories = async () => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/topstories.json`
    );
    const stories = await Promise.all(
      // storyIds.slice(0, storyIds.length).map(getStory)
      storyIds.slice(0, 30).map(getStory)
    );
    return stories;
  } catch (error) {
    console.log("Error while getting list of stories.");
  }
};
