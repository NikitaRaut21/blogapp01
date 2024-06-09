
const blogs =[
    {
        id:"Introduction to react-001",
        title:"Introduction to react",
        content:"React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook this blog post about react and how awesome it is.react is front end library devloped by facebook it is used for handling viwes layer for web and mobile.it is one of the popular libaries and has a strong foundation.In this article, we have created the blog app using react js, First of all, we have created the project name blog by entering the command npx create-react-app blog and installing all modules. Then we create the folder name component under src and make two jsx file post.jsx and posts.jsx and styling the jsx component by post.css and posts.css. And last we import the component into App.js and styling the main into App.css.",
        author:{
            name:"john doe",
            avatar:"https://i.pravatar.cc/150?img=15"
        },
        date:"May 30 2021",
        categories:["react","javascript"]

    },
    {
        id:"Introduction to javascript-002",
        title:"Introduction to javascript", 
        content:"In this article, we will be creating a Blog website using JavaScript. The user can Create and Delete a post which will be displayed on the home page. The create Post modal has 3 input fields that are “Title”, “Category” and “Description” of the Blog post with a Responsive Design. We will be using HTML to structure our project, CSS for designing purposes and JavaScript will be used to provide the required functionality.Implement event listeners for interactive elements such as buttons to open and close modals.Add a delete button functionality to remove specific posts, ensuring a smooth transition and adjustment of other posts.",
         author:{
            name:"rutuja Jadhav",
            avatar:"https://i.pravatar.cc/150?img=16"
         },
         date:"May 30 2021",
         categories:["javascript","web Devlopment"],
    },
    {
    id:"Introduction to HTML-003",
    title: "Introduction to HTML",
    content: "In this article, we will explore the basics of HTML (Hypertext Markup Language). HTML is the standard markup language for creating web pages and web applications. It provides the structure for web content, defining elements such as headings, paragraphs, lists, links, images, and more. We'll cover essential HTML tags, including <html>, <head>, <title>, <body>, <h1>-<h6>, <p>, <a>, <img>, <ul>, <ol>, <li>, and others. Understanding HTML is fundamental for anyone interested in web development, as it forms the backbone of every web page.HTML, short for Hypertext Markup Language, is the backbone of the World Wide Web. It serves as the foundation for creating web pages, providing the structural framework necessary for displaying content online. Using a combination of tags and attributes, HTML allows developers to define the various elements that make up a webpage, including headings, paragraphs, images, links, forms, and more. ",
    author: {
        name: "Tejasvi Tarde",
        avatar: "https://i.pravatar.cc/150?img=17"
    },
    date: "May 30 2021",
    categories: ["HTML", "Web Development"]
},
{
    id:"Introduction to CSS-004",
    title: "Introduction to CSS",
    content: "Welcome to our beginner's guide on CSS! CSS, which stands for Cascading Style Sheets, is a powerful styling language used for controlling the presentation of web pages. While HTML provides the structure of a webpage, CSS allows you to customize its appearance, including aspects such as colors, fonts, layouts, and more. In this article, we'll explore the fundamentals of CSS, including selectors, properties, values, and the box model. By understanding CSS, you'll gain the ability to enhance the visual appeal and usability of your web projects, making them more engaging and professional.",
    author: {
        name: "Nikita Raut",
        avatar: "https://i.pravatar.cc/150?img=18"
    },
    date: "May 30 2021",
    categories: ["CSS", "Web "]
},

{
         id:"Introduction to Python-005",
        "title": "Introduction to Python",
        "content": "Python is a high-level, interpreted programming language created by Guido van Rossum and first released in 1991. It emphasizes code readability and simplicity, allowing developers to express concepts in fewer lines of code compared to languages like C++ or Java. Python supports multiple programming paradigms, including procedural, object-oriented, and functional programming Python's syntax is clear and easy to understand, which makes it an excellent choice for beginners Python code is executed line by line, which makes debugging easier and more interactive.",
        "author": {
            "name": "Ram ",
            "avatar": "https://i.pravatar.cc/150?img=19"
        },
        "date": "June 1, 2021",
        "categories": ["Python", "Programming"]
 },
 {
     id:"Introduction to C++-006",
    "title": "Introduction to C++",
    "content":" C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language. It was designed to provide object-oriented features while maintaining the efficiency and performance of C. C++ supports multiple programming paradigms, including procedural, object-oriented, and generic programming Object-Oriented Programming (OOP) C++ introduces the concept of classes and objects, allowing for a modular and organized approach to coding  C++ is known for its high performance and low-level memory manipulation capabilities, making it ideal for system programming and applications requiring real-time performancePython is dynamically typed, meaning you don't need to declare the type of a variable when you create one.",
    "author": {
        "name": "Rutuja",
        "avatar": "https://i.pravatar.cc/150?img=20"
    },
    "date": "June 1, 2021",
    "categories": ["C++", "Programming"]
}

    


]
export default blogs
