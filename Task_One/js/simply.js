var str = [];
answerTask:
    for (var i = 1; i <= 1001; i++) {
        for (var j = 2; j < i; j++) {
            if (i % j == 0) continue answerTask;
        }
        str.push(i);
    }
console.log(str);


