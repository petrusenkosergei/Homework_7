function findLongestWords() {
    var text = document.getElementById('ConfirmText');
    var longestWords = text.value.split(' ');
    var newArr = longestWords.sort(compare);
    function compare(a, b) {
        if (a.length > b.length) {
            return -1;
        }
        if (a.length < b.length) {
            return 1;
        }
        return 0;
    }
    alert(newArr[0] + ' ; ' + newArr[1] + ' ; ' + newArr[2] + ' ; ');
}
Answer.addEventListener('click', findLongestWords);