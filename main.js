// Task #1

function printTimeout(str, n){
    const time= n*1000;
    setTimeout(function () {
        console.log(str)},time)


}

// Task #2

function sumAll(n){
    if (n <= 0){
        return n;
    } else{
        return n +sumAll(n-1)
    }
}

// task #3

function bombTimer(str,time){
    let timeToEnd=setInterval(function () {
        console.log(time);
        time = time - 1;
    },1000);
    setTimeout(function () {
        clearInterval(timeToEnd);
        console.log(str)

    },time*1000)
}



// Task #4

function factorial(n){
    if (n == 0){
        return 1;
    } else{
        return n * factorial(n-1);
    }
}

// Task #5

function bombTimer(str,time){
    let timeToEnd=setInterval(function () {
        console.log(time);
        time = time - 1;
    },1000);
    setTimeout(function () {
        clearInterval(timeToEnd);
        console.log(str)

    },time*1000)
}



// Task#6

    function filterNumbers(arr, maxNumber) {
        let newArr = [];
        arr.filter(function(number) {
            if (maxNumber > number) {
                newArr.push(number);
            }
        });

        return newArr;
    }