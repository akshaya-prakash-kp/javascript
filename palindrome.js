function Palin(n) {
    // if (n < 0 || (n % 10 ==0 && n !== 0)) {
    //     return false;
    // }

    let rev = 0;
    let temp = n;

    while (n > 0) {
        const rem = n % 10;
        rev = rev * 10 + rem;
        n = Math.floor(n / 10);
    }

    return temp ==rev;
}

const number = parseInt(prompt("Enter num:"));
if (Palin(number)) {
    console.log(number + " is a palindrome.");
} else {
    console.log(number + " is not a palindrome.");
}