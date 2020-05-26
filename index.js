/**
* Different methods you can use to perform GET http requests with axios
**/

const axios = require('axios')

axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(response=>{
        console.log(response.data);

    })
    .catch(error=>{
        console.log("ERROR HERE", error);

    })

async function callToServer(){
    let response;

    try{
        response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        console.log(response.data);
        return response.data;
    
    } catch(error){
        console.log("ERROR HERE", error);

    }
}
// callToServer()

function callAgain(){
    return new Promise((resolve,reject)=>{
        
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(response=>{
                console.log(response.data);
                resolve(response.data);
            })
            .catch(error=>{
                console.log("ERROR HERE", error);
                reject(response.data); 
            })
    })
};
// callAgain()