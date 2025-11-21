const paymentSuccess = true;
const marks = 90;

function enroll(){
    console.log("course enrollment is in progressing");
    //Define promise
    const promise = new Promise((resolve,reject)=>{
        setTimeout(function(){
            if(paymentSuccess){
                resolve();
            }else{
                reject("Payment failed");
            }
        },2000);
    })
    return promise;
}
function progress(){
    console.log("Course on progress");
    const promise = new Promise((resolve , reject) => {
        setTimeout(()=>{
            if( marks>=80){
                resolve();
            }else{
                reject("You can not get enough mark to get certificate");
            }
        },3000)
    })
    return promise;
}
function getCertificate(){
    console.log("Your certificate is in progress");
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Congats! You got certificate!")
        },1000)
    });
    return promise;
}

// enroll()
//     .then(progress)
//     .then(getCertificate)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

async function course (){
    try{
        await enroll();
        await progress();
        const data = await getCertificate();
        console.log(data)
    }catch(err){
        console.log(err)
    }
 

}
course ()