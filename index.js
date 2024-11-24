

//Task 01

async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Delay of 1 second
    }
}


iterateWithAsyncAwait(['Value 1', 'Value 2', 'Value 3']);


//TASK 02

async function awaitCall() {
    // Simulating an API call with a delay
    const fetchData = () => new Promise(resolve => {
        setTimeout(() => {
            resolve('Fetched data from API!');
        }, 2000); // Simulating a 2-second delay for the API call
    });

    const data = await fetchData(); //
    console.log(data); //
}


awaitCall();

//Task 05

async function parallelCalls(urls) {
    
    const fetchData = (url) => new Promise(resolve => {
        setTimeout(() => {
            resolve(`Fetched data from ${url}`);
        }, 2000); 
    });

    // Create an array of promises 
    const promises = urls.map(url => fetchData(url));

    // Wait for all promises to resolve
    const results = await Promise.all(promises);

    // Log the responses
    results.forEach(result => console.log(result));
}


parallelCalls(['https://api.example.com/data1', 'https://api.example.com/data2', 'https://api.example.com/data3']);

