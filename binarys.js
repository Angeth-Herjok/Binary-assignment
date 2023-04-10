// The Math.floor() static method always rounds down and returns
//  the largest integer less than or equal to a given number.
// finding a value in an array -binary search
// merge sort is defined as a sorting algorithm that works by dividing an array 
// into smaller subarrays, sorting each subarray, and then merging
//  the sorted, divide and conquer technique


// Given an array of unsorted numbers, return the index of the 
// following target if the target exists in the array. 
// If the target is not found, return null
// let num = [45,12,6,89,2,5]
// let target = 6
function binary(num,target1){
    let left=0;
    let right=num.length-1;
    while(left<=right){
        let middle=Math.floor((left+right)/2);
        if(num[middle]===target1){
         return middle;
        }
        else if (num[middle]<target1){
            left=middle+1;
        }
        else{
            right=middle-1;
        }
    }
    return null
}
let num=[45,12,6,89,2,5]
let target1=6
console.log(binary(num,target1))

// Given an unsorted array of numbers return the sorted array in descending order
// let arr=[123,89,5,23,9,56]
       let arr=[123,89,5,23,9,56];
       let unsorted=arr.sort().reverse();
       console.log(unsorted.sort().reverse());

// Given the following array, search for the following target
// let arr2 = [1,4,78,2,67,3];
// let target = 34

   function binary(arr2,target){
   let left=0;
   let right=num.length-1;
   while(left<=right){
   let middle=Math.floor((left+right)/2);
   if(num[middle]===target){
         return middle;
         }
       else if (num[middle]<target){
           left=middle+1;
        }
       else{
            right=middle-1;
        }
     }
     return num
 }
 let arr2=[1,4,78,2,67,3]
 let target=34
 console.log(binary(arr2,target))



 function divideArray(num1){
    if(num1.length<=1){
        return num1
    }
    let middle=Math.floor(num1.length/2)
    let left=num1.slice(0,middle)
    let right=num1.slice(middle)
    return sortArray=(divideArray(left),divideArray(right))
 }
 function sortArray(left,right){
    newEmptyArray=[]
    while(left.length && right.length){
        if(left[0],right[0]){
            newEmptyArray.push(left.shift())
        }
        else{
            newEmptyArray.push(right.shift())
        }
    }
    return [...newEmptyArray,...left,...right]
 }
 let num1=[2,5,8,9,6]
 console.log(divideArray(num1))


// merge sort 

 function divideArr(arr1){
    if(arr1.length<=1){
        return arr1;
    }
    let middle=Math.floor(arr1.length/2)
    let left=arr1.slice(0,middle)
    let right=arr1.slice(middle)
    return sortedArr(divideArr(left),divideArr(right))
 }
function sortedArr(left,right){
    let newEmptyArr=[]
    while(left.length && right.length){
        if(left[0]<right[0]){
            newEmptyArr.push(left.shift())
        }
        else{
            newEmptyArr.push(right.shift())
        }
    }
    return [...newEmptyArr,...left,...right]
}
let arr1=[9,8,7,4,6,1,5,3,2]
console.log(divideArr(arr1));

function binary(arr3,target3){
    let left=0;
    let right=arr3.length-1;
    while(left<=right){
    let middle=Math.floor(left+right/2)
    if(arr3[middle]===target3){
        return middle;
    }
    else if(arr3[middle]<target3){
        left=middle+1
    }
    else{
        right=middle-1
    }
    }
    return arr3
 }
 let arr3=[1,2,3,4,5,6,7,8,9]
 let target3=5
 console.log(binary(arr3,target3));

 let books=["1212","1323","21321","421"]
 books.length=3;
 console.log(books);
//   first value means position 3,remove 1 elements and add 5
 let book=["1","2","3","4","7"]
console.log(book.splice(3,1,"5"))
console.log(book);

function divideArrs(arrs){
    if(arrs.length<=1){
        return arrs
    }
    let middle=Math.floor(arrs.length/2)
    let left=arrs.slice(0,middle)
    let right=arrs.slice(middle)
    return sortedArrs(divideArrs(left),(divideArrs(right)))
}
function sortedArrs(left,right){
    let newEmptyArrs=[]
    while(left.length && right.length){
        if(left[0]<right[0]){
            newEmptyArrs.push(left.shift())
        }
        else{
            newEmptyArrs.push(right.shift())
        }
    }
    return [...newEmptyArrs,...left,...right]
}
let arrs=[2,3,4,5,7]
console.log(divideArrs(arrs));

function binary(arrs1,target4){
    let left=0;
    let right=arrs1.length-1;
    while(left<=right){
        let middle=Math.floor(arrs1.length/2)
        if(arrs1[middle]===target4){
            return middle;
        }
        else if(arrs1[middle]<target4){
            left=middle+1
        }
        else{
            right=middle-1
        }
    }
    return arrs1
}
let arrs1=[1,2,3,4,5]
let target4=3
console.log(binary(arrs1,target4));

let names=["Becky","Jonh","Moses"];
for(let i=0;i<names.length;i++){
    console.log(names[i])
}
const age=21;
const myAge="21"
if(age===myAge){
    console.log("My age is really 21")
}