function App() {
  return (
    <div>
      <h1>Codecamp Thailand</h1>
      <Greeting name="Andy" />
      <Greeting name="Bobby" />

      {Greeting({ name: 'Candy'})}
    </div>
  )
}

function Greeting(props) {
  return (
    <div>
      <h2>Hello, {props.name}</h2>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)