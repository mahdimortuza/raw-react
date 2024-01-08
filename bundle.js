const HelloWorld = () => {
    return React.createElement('h2', {}, "Hello world.")
};

const AnotherHello =() => {
    return  React.createElement('p', {}, "Another hello world.")
};

const App = () => {
    {
       return React.createElement('h1', {style:{color: "red"}}, "This is the fokkira element.", HelloWorld(), AnotherHello())
    }
}; 


// const HelloWorld = () => {
//     return (
//         <React.Fragment>
//         <h1>Hello world</h1>
//         <p>this is a website </p>
//         </React.Fragment>
//     )
// }
// const App =() => {
//     return <div style ={{color: "red"}}> this is a fokira app</div>
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
