let b = [10, 20, 40, 100, 45]
let res = []

function sort(lis){
    n = lis.length
    for(i=0;i<n-1;i++)
        for (j=0;j<n-1;j++)
         if(lis[j]>lis[j+1])
         {
            temp = lis[j];
            lis[j]=lis[j+1];
            lis[j+1]=temp;
         }
    return lis
}

list=[45,78,12,32,11,98,76,25,54,-23]
sorted = sort(list)
console.log(sorted)

let doIt = (num, l) => {
    for (let i = 0; i < l; i++) {
        res.push(b[i] * num)
    }
    console.log(res)
}

function oddEvenish(num) {
    let s = 0
    while (num) {
        s += num % 10
        num = Math.floor(num / 10)
    }

    if (s % 2 != 0) {
        document.getElementById('ish').innerText = "Odd Ish"
    } else {
        document.getElementById('ish').innerText = "Even Ish"
    }
}

function digits(num) {
    let s = 0
    let nos = 0
    while (num) {
        s += num % 10
        num = Math.floor(num / 10)
        nos+=1
    }
        document.getElementById('digits').innerText = `Sum : ${s} , Count : ${nos}`

}

function checkUpper() {
   s = prompt("Enter input String : ").toString()
   if(s.charAt(0) == s.charAt(0).toUpperCase()){
    document.getElementById('str').innerText = `Upper case`
   }else{
    document.getElementById('str').innerText = `Not upper case`
   }
}

let getEls = ()=>{
    let el = document.getElementById('venue')
    let els = []
    for(let i =0; i<el.length;i++){
        els.push((el[i].innerHTML))
    }
    alert(els)
}