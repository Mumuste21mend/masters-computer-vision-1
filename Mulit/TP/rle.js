const prompt = require('prompt-sync')();
const input = prompt(); // input from the user 
const compress = (input) => {
    // declaration and initialising 
    let count = 0,
        nextChar, currentChar, compressed = '',
        repeated = true;
    let index = 0;
    // a loop for the String 
    while (index < input.length) {
        // picking the current and the next character for comparession 
        currentChar = input[index];
        nextChar = input[index + 1];
        //increasing the repitition count  
        count++;
        // condition for compressing the  current  repetition string  
        // launches when the next character is different (end of repetition)
        // or the count of the current character surpasses 255
        if (currentChar != nextChar || count > 254) {
            //condition for the repetitions   below 3  
            if (count < 3) {
                //condition for the previous string if it contained a 0
                // if yes  don't write it again
                compressed += repeated ? '0 ' : ''
                compressed += (' ' + currentChar).repeat(count);
                // flag of having the zero repetition indicator 
                repeated = false;

            } else {
                compressed += ' ' + count + ' ' + currentChar + ' ';
                // flag of having the numper of repetition indicator
                // (next repetition below 3 will have a 0) 
                repeated = true;
            }
            //reinitialising the count into 0 starting a new count 
            count = 0;
        }
        index++;
    }
    return compressed;
}

const taux = (input) => {
    // trimming and  deleting spaces   
    let str = compress(input.replace(/ /g, '')).replace(/ /g, '');

    let i = 0,
        count = 0;
    // calculating the length of alphabatical characters only 
    while (i < str.length) {
        if (isNaN(str[i])) count++;
        i++;
    }
    //adding the length of numerical values 
    // ex 18 can be written in 1 byte so it will be counted as one
    count += (str.match(/\d+/g)).reduce((num, ele) => ele == 0 ? num + 1 : num + (Math.ceil(Math.log2(ele) / 8)), 0)
    return (count / input.replace(/ /g, '').length) * 100
}
// initial Strings to test
let ch = 'X'.repeat(260)
let ch1 = 'ABABABABABABABABAABAABABABABABABABABAB';
let ch2 = 'AAAAAABBBBBBAAAAAABBBBBBAAAAAABBBBBB';
let ch3 = 'AAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBB';
// compressing 
let compressedCh = compress(ch);
let compressedCh1 = compress(ch1);
let compressedCh2 = compress(ch2);
let compressedCh3 = compress(ch3);
// display 
console.log(`the string ${ch } \nis compressed into \n ${compressedCh } \n with rate of ${taux(ch ).toFixed(2)}%  `);
console.log(`the string ${ch1} \nis compressed into \n ${compressedCh1} \n with rate of ${taux(ch1).toFixed(2)}%  `);
console.log(`the string ${ch2} \nis compressed into \n ${compressedCh2} \n with rate of ${taux(ch2).toFixed(2)}%   `);
console.log(`the string ${ch3} \nis compressed into \n ${compressedCh3} \n with rate of ${taux(ch3).toFixed(2)}%  `);