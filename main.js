const HelloWorld = () => {
    return React.createElement('h2', {}, "Hello world.")
}

const App = () => {
    {
       return React.createElement('h1', {style:{color: "red"}}, "This is the fokkira element.", HelloWorld())
    }
} 
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(React.createElement(App))