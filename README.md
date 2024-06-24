# Frontend Mentor - Blogr landing page solution

This is a solution to the [Project: Library](https://www.theodinproject.com/lessons/node-path-javascript-library).

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   Add a book to the libary with the following details: author, title, number of pages, and whether it's been read.
-   Remove a book from the library.

## My process

### Built with

-   HTML5
-   Vanila JS

### What I learned

I learned how to create objects in javascript. In this project, I created an object called `Book` and the structured is as follows.

```js
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
```

I also learned how to create and update the DOM using `document.createElement` and `.innerHTML`. Doing this challenge is a lot of fun because it gives an insight how to work with javascript.

### Continued development

-   The ui is ugly since I didn't add any styling with it.
-   Updating the `read` status is not possible right now.
-   Lack of form validation.

## Author

-   Frontend Mentor - [@oshudev](https://www.frontendmentor.io/profile/oshudev)
