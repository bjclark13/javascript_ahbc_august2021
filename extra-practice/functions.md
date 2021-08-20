## Functions Extra Practice

1. Create a function that takes in a first name parameter, and a last name parameter, and return the person's full name.

```
    getFullName('Bruce', 'Wayne'); // Should return "Bruce Wayne"
```

2. Given an array of words, return a string that lists them out in english, in commas, with an "and".

For example:

```
    readInEnglish(["This", "that", "those"])
```

should return "This, that, and those"

3. Re-write #2 to accept an unlimited amount of aruments instead of an array.

For example:

```
    readInEnglish("This", "that", "those")
```

should return "This, that, and those".

4. Convert the following to an arrow function.

```
 function reverseString(str) {
        let newString = '';

        for (let i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }

        return newString;
    }

```

5. Fix this function:

```
    const iNeedIceCream => {
        console.log('I need ice cream')
    }
```
