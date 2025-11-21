const status = false;
console.log("Task 1");
const promise = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        if(status){
            resolve("task 2");
        }else{
            reject("Failed");
        }
    },2000);
});

promise 
    .then((val)=>console.log(val))
    .catch((err)=>console.log(err));
console.log("Task 3")