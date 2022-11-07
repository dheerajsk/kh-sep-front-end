
var tweet  ={
    id: 1,
    content :"Hello people",
    author: "Elon Musk",
    timeoftweet: "2 Nov, 2022",
    likes: 20000,
    retweet : function (){
        console.log("Retweeting this tweet");
    },
    comments:[
        {
            id: 2,
            author: {
                fname:"Bill",
                lname:"Gates",
                location:"WA"
            },
            content:"Hello to you too",
            timestamp:  "2 Nov, 2022"
        },
        {
            id: 3,
            author: "Bill Gates",
            content:"Hello to you too",
            timestamp:  "2 Nov, 2022"
        },
        {
            id: 4,
            author: "Bill Gates",
            content:"Hello to you too",
            timestamp:  "2 Nov, 2022"
        },{
            id: 5,
            author: "Bill Gates",
            content:"Hello to you too",
            timestamp:  "2 Nov, 2022"
        }
    ]
}

console.log(typeof tweet); // object.

console.log(tweet);

// How to read specific data from an object.
// Read author of 2nd comment of tweet.

// print author of 2nd comment of tweet
console.log(tweet.comments[1].author);
console.log(tweet.comments.length);

// How to add a new property and value to an object.
// Adds a new property to tweet object.
tweet["noOfRetweets"]=50;

console.log(tweet);
// How to get all the keys in object.
console.log(Object.keys(tweet));

// How to get all the values in object.
console.log(Object.values(tweet));

// How to get all the content of object.
console.log(Object.entries(tweet));

console.log(tweet.retweet());