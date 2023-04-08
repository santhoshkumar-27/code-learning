/*
 * @decritption checking the string content whether it has a palindrom or not
*/
function checkContentIsPalindrom(content) {
    let len = content.length;

    for (let i = 0; i < len; i++) {
        if (content[i] != content[len - 1 - i]) {
            return 'Content is NOt Palindrom';
        }
    }
    return 'content is palindrom';
}

// console.log(checkContentIsPalindrom('malayalam'));

const mainObject = {
    firstName: 'inner object',
    lastName: 'inner object',
    fullName : function () {
        return `${this.firstName} ${this.lastName}`;
    }
};

const secendObject = {
    firstName: 'santhoshkumar',
    lastName: 'viswanathan'
}
// console.log(mainObject.fullName());
console.log(mainObject.fullName.call(secendObject));

