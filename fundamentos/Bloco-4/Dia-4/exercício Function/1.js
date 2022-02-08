function palindrome(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
        console.log('true')
    } else {
        console.log('false')
    }
}


console.log(palindrome('mococo'))








