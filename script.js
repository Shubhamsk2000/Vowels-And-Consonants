
function throwValue(){
    let CountVowels = 0;
    let CountConsonents = 0;
    let val = document.querySelector(".input").value;
    let arr = val.split("");
    for(i=0; i<arr.length; i++){
        if(arr[i]=="a"||arr[i]=="e"||arr[i]=="i"||arr[i]=="o"||arr[i]=="u"){
            CountVowels++;
        }
        else if(arr[i]==" "){
            continue;
       }
        else{
            CountConsonents++;
        }
    }
    document.querySelector(".displayVowel").innerHTML = `No. of Vowels are : ${CountVowels}`;
    document.querySelector(".displayConsonent").innerHTML = `No. of Consonents are : ${CountConsonents}`;
}