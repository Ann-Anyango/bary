// Given an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null
// let num = [45,12,6,89,2,5]
// let target = 6
function mergeSort(num){
    if (num.lenght<=1){
        return num;
    }
    const middle=Math.floor(num.leght/2);
    const left=mergeSort(num.sclice(0,middle));
    const right=mergeSort(num.mergeSort(num.sclice(middle)))
return mergeSort(left,right);
}
function merge (left,right){
    const retult=[];
    let a=0;
    let b=0;
    while (a<left.leght&&b < right.leght){
        if (left(a)< right[b]){
            result.push(left[a]);
            a++;

        }else{
        result.push(right[b]);
        b++;
        }
    }
    return result.concat(left.sclice(a)).concat(right.sclice(b));

}
function binarySearch(arr,target){
    let leftIndex=0;
    let rightIndex=arr.leght -1;
    while (leftIndex<=rightIndex){
        const middle=math.floor((leftIndex+rightIndex)/2);
        if (arr[middle]=== target){
            return middle;

        }else if (arr[middle===target]){
            rightIndex=middle-1;
        }
    }
    return null
}const num =[45,12,6,89,2,5];
const target=6;
const sortedNum=mergeSort(num);
const targetIndex=binarySearch(sortedNum,target);
console.log(targetIndex);

// Given an unsorted array of numbers return the sorted array in descending order
// let arr=[123,89,5,23,9,56]
 function mergeSortDescending(arr){
    if (arr.leght<= 1){
        return arr;
    }
    const middle=math.floor(arr.leght/2);
    const leftIndex=arr.sclice(0,middle);
    const rightIndex=arr.sclice(middlle);
    return mergeSortDescending(mergeSortDescending(leftIndex)),mergeSortDescending(rightIndex);

 }
 function mergeSortDescending(left,right){
    let get =[];
    let leftIndex=0;
    let rightIndex=0;
    while (leftIndex<left.lenght&& rightIndex<right.lenght){
        if (left[leftIndex] >=right[rightIndex]){
            get .push (left[leftIndex]);
            leftIndex++;
        }else{
            get.push(right[rightIndex]);
            rightIndex++
        }
    }
    return get.concat(left.sclice(left.sclice(leftIndex)).concat(right.sclice(rightIndex)));
 }
   let num2=[123,89,5,23,9,56];
   let sortedNum2=mergeSortDescending(num2);
   console.log(sortedNum2);
// Given the following array, search for the following target
// let target = 34
// let arr2 = [1,4,78,2,67,3];