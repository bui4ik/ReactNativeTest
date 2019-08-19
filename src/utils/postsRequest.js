import {POSTS_API} from "../api/api";

const postsRequest = async () => {
    const postsResponse = await fetch(POSTS_API);
    return await postsResponse.json();
};

export default postsRequest;