const books = [
    {
        "id":"1",
        "title":"Eloquent JavaScript, Third Edition",
        "subtitle":"A Modern Introduction to Programming",
        "author":"Marijn Haverbeke",
        "published":"2018-12-04T00:00:00.000Z",
        "publisher":"No Starch Press",
        "pages":472,
        "description":"JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
        "website":"http://eloquentjavascript.net/",
        "category": "Technology"
    },
    {
        "id":"2",
        "title":"Practical Modern JavaScript",
        "subtitle":"Dive into ES6 and the Future of JavaScript",
        "author":"Nicolás Bevacqua",
        "published":"2017-07-16T00:00:00.000Z",
        "publisher":"O'Reilly Media",
        "pages":334,
        "description":"To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.",
        "website":"https://github.com/mjavascript/practical-modern-javascript",
        "category": "Technology"
    },
    {
        "id":"3",
        "title":"Understanding ECMAScript 6",
        "subtitle":"The Definitive Guide for JavaScript Developers",
        "author":"Nicholas C. Zakas",
        "published":"2016-09-03T00:00:00.000Z",
        "publisher":"No Starch Press",
        "pages":352,
        "description":"ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
        "website":"https://leanpub.com/understandinges6/read",
        "category": "Technology"
    },
    {
  "id": "4",
  "title": "Crime and Punishment",
  "author": "Fyodor Dostoevsky",
  "published": "2002-01-01T00:00:00.000Z",
  "publisher": "Penguin Classics",
  "pages": 576,
  "description": "A psychological exploration of morality and redemption through the troubled mind of an ex-student.",
  "website": "https://example.com/crime-and-punishment",
  "category": "Fiction"
},
{
  "id": "5",
  "title": "To Kill a Mockingbird",
  "author": "Harper Lee",
  "published": "1960-07-11T00:00:00.000Z",
  "publisher": "J.B. Lippincott & Co.",
  "pages": 281,
  "description": "A young girl’s coming-of-age story in a racially divided Southern town, confronting prejudice and justice.",
  "website": "https://example.com/to-kill-a-mockingbird",
  "category": "Fiction"
},
{
  "id": "6",
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "published": "1925-04-10T00:00:00.000Z",
  "publisher": "Charles Scribner's Sons",
  "pages": 180,
  "description": "A tragic story of love, wealth, and illusion in the Roaring Twenties.",
  "website": "https://example.com/the-great-gatsby",
  "category": "Fiction"
},
{
  "id": "7",
  "title": "Sapiens: A Brief History of Humankind",
  "author": "Yuval Noah Harari",
  "published": "2014-09-04T00:00:00.000Z",
  "publisher": "Harper",
  "pages": 443,
  "description": "Explores how Homo sapiens came to dominate the Earth through cognition, agriculture, and cooperation.",
  "website": "https://example.com/sapiens",
  "category": "Non-Fiction"
},
{
  "id": "8",
  "title": "Outliers",
  "author": "Malcolm Gladwell",
  "published": "2008-11-18T00:00:00.000Z",
  "publisher": "Little, Brown and Company",
  "pages": 309,
  "description": "Reveals how extraordinary success often depends on hidden advantages and timing.",
  "website": "https://example.com/outliers",
  "category": "Non-Fiction"
},
{
  "id": "9",
  "title": "A Brief History of Time",
  "author": "Stephen Hawking",
  "published": "1998-09-01T00:00:00.000Z",
  "publisher": "Bantam",
  "pages": 212,
  "description": "Hawking’s classic explanation of cosmology, black holes, and time for general readers.",
  "website": "https://example.com/a-brief-history-of-time",
  "category": "Science"
},
{
  "id": "10",
  "title": "The Gene: An Intimate History",
  "author": "Siddhartha Mukherjee",
  "published": "2016-05-17T00:00:00.000Z",
  "publisher": "Scribner",
  "pages": 608,
  "description": "A detailed and deeply human history of the gene and how it shapes us.",
  "website": "https://example.com/the-gene",
  "category": "Science"
},
{
  "id": "11",
  "title": "The Elegant Universe",
  "author": "Brian Greene",
  "published": "2003-10-01T00:00:00.000Z",
  "publisher": "W. W. Norton & Company",
  "pages": 464,
  "description": "Explains string theory and the quest for a unified theory of physics.",
  "website": "https://example.com/the-elegant-universe",
  "category": "Science"
},
{
  "id": "12",
  "title": "A Short History of Nearly Everything",
  "author": "Bill Bryson",
  "published": "2003-05-06T00:00:00.000Z",
  "publisher": "Broadway Books",
  "pages": 544,
  "description": "Bryson explores everything from the Big Bang to human civilization in an engaging, accessible way.",
  "website": "https://example.com/history-of-everything",
  "category": "History"
},
{
  "id": "13",
  "title": "Guns, Germs, and Steel",
  "author": "Jared Diamond",
  "published": "1997-03-01T00:00:00.000Z",
  "publisher": "W. W. Norton & Company",
  "pages": 480,
  "description": "Explains how geography and environment shaped civilizations and led to European dominance.",
  "website": "https://example.com/guns-germs-steel",
  "category": "History"
},
{
  "id": "14",
  "title": "The Diary of a Young Girl",
  "author": "Anne Frank",
  "published": "1947-06-25T00:00:00.000Z",
  "publisher": "Contact Publishing",
  "pages": 283,
  "description": "A firsthand account of a Jewish girl’s life hiding during the Nazi occupation of the Netherlands.",
  "website": "https://example.com/anne-frank",
  "category": "History"
}

];
if (!localStorage.getItem('books')) {
  localStorage.setItem('books', JSON.stringify(books)); // ✅ seed only once
}

export default books;