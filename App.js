// 1.lets see how to create h1 tag inside React
// const heading = React.createElement(
//   "h1", //name of the element tag
//   { id: "heading", xyz: "xyz" }, //,Attributes, this object used to give attributes to our tags
//   "Hello World from React!" //children ,text of the element tag
// );
// console.log(heading); //React Element nothing but a JavaScript element.
/*it takes 3 arguments 'tagname',{} this is the place where you give Attributes to the tag.,'text insde tag'
  it comes from react.development.js */
/* 2. Now we have to create a root to put h1 inside root
  Then I created a root inside React. This root is the place where all the React code will run. 
  Everything we will render we will render inside this root
   it comes from react-dom.development.js*/
//const root = ReactDOM.createRoot(document.getElementById("root"));
// 3. Render
// is likely a piece of code that takes a heading (text or component) and renders it into the specified root element on the web page.
//root.render(heading);

// NOTE:
// root: This likely refers to the root element or container where the rendering will take place. In many web development frameworks, such as React or Vue.js, there's often a concept of a root element where the entire application is mounted.

// render(): This is a method or function used to render or display something on the web page. In React, for instance, you might use ReactDOM.render() to render a React component into the DOM.

// (heading): This is the content that you want to render. It could be a text string representing a heading, or it could be a reference to a variable or object that contains the information about the heading to be rendered.

// Q:How to create Nested Elements?
/* 
Q: How to create Nested Elements?
<div id="parent">
  <div id="child">
    <h1>I'm a an h1 tag</h1>
  </div>
</div> 
               Object becomes html that the browser understands       
* ReactElement(Object)=>HTML(Browser Understands)
while rendering it convertes itself into html and puts it up into the DOM
*/
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I'm a an h1 tag")
//   )
// );

// console.log(parent); //object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

/* Q. How to create Siblings?
like h1 and h2 are siblings inside <div id="child">
h1 and h2 are children inside div
A: we have to create an Array of children 

<div id="parent">
  <div id="child">
    <h1>I'm  h1 tag</h1>
    <h2>I'm  h2 tag</h2>
  </div>
</div> 
*/
/** 
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm  h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ])
);

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
*/

/**if there is more nested strucure?
 * <div id="parent">
  <div id="child">
    <h1>I'm  h1 tag</h1>
    <h2>I'm  h2 tag</h2>
  </div>
  <div id="child2">
    <h1>I'm  h1 tag</h1>
    <h2>I'm  h2 tag</h2>
  </div>
</div> 
 * 
 * 
 * 
 */
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm  h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm  h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ])
);

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// This is untidy, ugly so we have JSX
// NOTE: JSX;
// JSX will make our life easy when we have to create tags

/**React is a library.  why?
 * React can be applied to small portion of our page only.and to the existing app also
 * Ex: React can work only in header,footer,sidebar
 * React only works in the place whatever you make the root as
 * React is a library ,it can work independently in a small portion of your app as well
 */
