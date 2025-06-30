
/* 
//Syntax of fetch() API

//Using .then and .catch
fetch(URL, options) //It always returns a promise
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error", error));


//Using async and await
async function fetchData(URL, options) {
    try {
        const response = await fetch(URL, options);
        if(!response.ok) throw new Error("Data not received");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
fetchData('http://localhost:3000/posts'); 
*/

//--------------------------------------------------------------------------------------------

/*
//HTTP Methods

Check this out: https://www.youtube.com/watch?v=Qf2BBZVaAg8

- GET: Fetch data from the server. It does not change anything.
- POST: Send data to the server to create a new resource.
- PUT: Update an entire resource. Replaces the existing data.
- PATCH: Partially update a resource. Only change specific fields.
- DELETE: Delete a resource from the server.
- HEAD: Like GET, but only retrieves the headers (no body). Useful to check if a resource exists or to check metadata.
- OPTIONS: Returns the allowed HTTP methods on a resource (CORS and debugging).
- TRACE: Echoes back the received request to help in debugging or testing — mostly disabled for security reasons.
- CONNECT: Establishes a tunnel to the server, typically for SSL (HTTPS) connections through an HTTP proxy. It’s mostly used for secure communication via a proxy.
*/

//--------------------------------------------------------------------------------------------

//Using fetch() getting resources

//If no options by default is get method

async function fetchPosts() {
    const API_URL = 'http://localhost:3000/posts';
    
    try {
        const response = await fetch(API_URL);
        if(!response.ok) throw new Error('Unable to getting posts');
        const posts = await response.json();
        console.log(posts);
    } catch (error) {
        console.error(error);
    }
}

//fetchPosts();

//--------------------------------------------------------------------------------------------

//Using fetch() with query parameters

async function fetchPostsWithComments() {
    const API_URL = 'http://localhost:3000/posts';
    const queryParams = {
        _embed: "comments",
        views: 160
    };

    try {
        const queryString = new URLSearchParams(queryParams); //It creates a query string
        const url = `${API_URL}?${queryString}`; //Final url

        const response = await fetch(url);
        if(!response.ok) throw new Error('Unable to getting posts');
        const posts = await response.json();
        console.log(posts);

    } catch (error) {
        console.error(error);
    }
}
//fetchPostsWithComments();

//--------------------------------------------------------------------------------------------

//Creating resources using fetch()
//Using POST method


async function createPost(postData) {
    const API_URL = "http://localhost:3000/posts";
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postData),
        });
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

const newPostData = {
    id: crypto.randomUUID(),
    title: "How to use fetch() API for POST?",
    views: 0,
};

//createPost(newPostData);

document.getElementById("postBtn").addEventListener("click", () => {
  createPost(newPostData);
});

//--------------------------------------------------------------------------------------------

//Updating resources
//Using PUT method

//To update only one date like only title or only views use method PATCH. All the other things are same.
async function updatePost(postData) {

    const POST_ID = '0df26b43-127a-4d1a-8e89-f8aa9faf3ca8';
    const API_URL = `http://localhost:3000/posts/${POST_ID}`;
    try {
        const response = await fetch(API_URL, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postData),
        });
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

const updatePostData = {
    title: "updated again: How to use fetch() API for POST?",
    views: 120,
};
//updatePost(updatePostData);

document.getElementById("updateBtn").addEventListener("click", () => {
  updatePost(updatePostData);
});


//--------------------------------------------------------------------------------------------

//Deleting a resource
//Using DELETE method

async function deletePost(postId) {

    const API_URL = `http://localhost:3000/posts/${postId}`;
    try {
        const response = await fetch(API_URL, {
            method: "DELETE"
            //Do not have to tell the other things
        });
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

//deletePost("9d829214-a51e-420b-97ec-a4209f097924");
document.getElementById("deleteBtn").addEventListener("click", () => {
    deletePost("e2c775f9-23a2-4d55-9c37-a42348aad9c8");
});