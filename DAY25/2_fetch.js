//Custom headers

async function login() {
    const API_URL = 'http://localhost:3000/login';

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer secret-token",
                "Custom-Header": "Learning JS"
            },
            body: JSON.stringify({username: "tapascript", password: "helo"}),
        })
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

//login()

//------------------------------------------------------------------------------------

//Create REQUESTs
//Helps not to pollute the code inside async function

const request1 = new Request("http://localhost:3000/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        id: crypto.randomUUID(),
        title: "How to use fetch() API for POST? another3",
        views: 0,
    })
});

//Adding a new request just changing some portion of request1
//Helps to extend the previous request
const request2 = new Request(request1, {
    body: JSON.stringify({
        id: crypto.randomUUID(),
        title: "How to use fetch() API for POST? another4",
        views: 0,
    })
})

async function post(request) {
    
    try {
        const response = await fetch(request);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

//post(request2);

//------------------------------------------------------------------------------------
//Handling response

async function postHandleError(request) {
    
    try {
        const response = await fetch(request);

        //Throwing an error
        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        //Throwing a type error
        const contentType = response.headers.get("content-type");
        if(!contentType || !contentType.includes("application/json")) {
            throw new TypeError("Oops, we haven't get JSON!");
        }
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}