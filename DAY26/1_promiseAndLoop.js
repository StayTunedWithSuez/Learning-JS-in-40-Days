//1st mistake: Don't use loop when you are dealing with asynchronous operations or the promises
const ids = ["1", "2", "3", "4", "5"];

const fetchData = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
}

//Using .then
const loopFetches = () => {
    for(let i = 0; i <= 4; i++) {
        console.log(`***Fetching data of id ${i+1}***`);
        const response = fetchData(ids[i])
        response.then((response) => {
            response.json().then((data) => {
                console.log(`
                        ID: ${data.id}
                        Name: ${data?.name}
                        Company: ${data?.company?.name}
                        Address: ${data?.address?.city}
                    `)
            })
        })
    }
}

//loopFetches();

//using async await
const loopFetchesAsync = async () => {
    for(let i = 0; i <= 4; i++) {
        console.log(`===Fetching data of id ${i+1}===`);
        const response = await fetchData(ids[i]);
        const data = await response.json();
        
        console.log(`
                ID: ${data.id}
                Name: ${data?.name}
                Company: ${data?.company?.name}
                Address: ${data?.address?.city}
        `)
            
        
    }
}
//loopFetchesAsync();

//Settling all promises using Promise.allSettled
const loopAll = async () => {
    const responses = await Promise.allSettled(ids.map(id => fetchData(id)));
    //console.log(responses);
    const data = await Promise.allSettled(responses.map(response => response.value.json()));
    console.log(data);
    data.map((user) => {
        const data = user.value;
        console.log(`===Fetching data of id ${data?.id}===`);

        console.log(`
                ID: ${data.id}
                Name: ${data?.name}
                Company: ${data?.company?.name}
                Address: ${data?.address?.city}
        `)
    })
}

loopAll();