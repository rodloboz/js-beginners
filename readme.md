# JavaScript for Beginners
1. [Setup](#setup)
2. [Exercise 1](#exercise1)
3. [Exercise 2](#exercise2)
4. [Exercise 3](#exercise3)
5. [Exercise 4](#exercise4)

## Setup

Install Sublime Text 👉 https://www.sublimetext.com/

## Exercise 1

Go to **JS Bin** 👉 https://jsbin.com/?js,console

Use **contatenation** to join two strings together and press the `run` button to see the result.

Then use **interpolation** to embed JavaScript *expressions* inside a string. Press the `run` button to see the result.

**HINT:** Create a `variable` and store a `string` value inside it. Then embed this `variable` inside a string using interpolation (`template literals` syntax).

## Exercise 2

Use **JS Bin** 👉 https://jsbin.com/?js,console

You should start by defining an `Array` of names and storing it in a `variable`. Make sure that the Array **contains** `strings` starting with the letter **B**.

Then use one of the `loop` techniques discussed to `iterate` over the `Array` and select the names starting with **B**. Inside the loop, use an `if` condition and *compare* the first character of each name with the letter **B**.

**HINT:** You may need to define an empty array to store the *matching results*. You can use `console.log()` to see the results.

## Exercise 3

Use **JS Bin** 👉 https://jsbin.com/?js,console

Let's *refactor* the previous exercise to use a `function` (use any type of function you'd like).

This `function` takes two `parameters`: one that represents a list of `names` and the other representing the `letter` to be filtered.

Once you've created the function, `call` it with two `arguments`: a list of names (`Array`) and a letter (`String`).

**HINT:** Inside your function, don't forget to `return` the results.

## Exercise 4

Inside the project folder you downloaced during the **setup** there is a folder `todos`. Inside we have prepared an HTML file `index.html` and a css file `style.css`. These provide the basic structure and styling for a **todo app** and you *will not* need to touch them.

Open `index.html` in our browser to see what the app looks like (you can **doubleclick** on the file to open it).

Let's add behaviour to our **todo** app. You only need to code inside the file `app.js`.

1. **Rendering items in the todos array**

The *todos* are items of an array stored in a constant `todos`.

The first step is to render the existing item(s).

Iterate over the array `todos` with `forEach` and call the function `renderTodo`. This function receives both the `todo` and the respective `index`.

**HINT:** The `forEach` function can receive the array `item` but also its `index` 👉 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

2. **Adding new todos with the form**

Use `querySelector` to target the `form` element and then `addEventListener` for the `submit` event. Remember to pass the `event` as a `callback` of the function:

```javascript
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    // Do something

  });
```

By default, forms will `reload` a page. We want to stay on the same page and simply add a new todo to the `DOM`. How can we prevent this default behaviour?

**HINT:** You can use `preventDefault()` on the event.

Next, we need to read the value that the user has typed in the `input`. You can use `getElementById` to find the input `newitem`. Then use `value` to get what the user typed.

```javascript
  const todo = document.getElementById('#newitem').value;
```

Finally, you need to add the new todo to the `todos` array and insert the new todo in the `DOM`.

**HINT:** You can use `push()` to add an item to the end of an array and `renderTodo` to insert it in the `DOM`.

3. **Deleting todos**

You can use the function `addDeleteEvent`, which receives a `li` element from the todos `ul` list, to add a `click` event listener to the `delete` button.

First, select all the todos *already* rendered on the page. Use `querySelectorAll`.

```javascript
  const todoItems = document.querySelectorAll('#todos ul li');
```

Then iterate through the `todoItems` and call the function `addDeleteEvent` on each item.

Finally, you also need to call this function `addDeleteEvent` every time you add a new todo with the form.

That's it! We can check out the complete solution here 👉 https://github.com/rodloboz/lw-fullstack/tree/master/todo-app-js





