function MyApp() {
  return (
    <>
      <h1>Hello, world!</h1>;
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = React.useState(0)

  const updateCounter = (n) => {
    if (count + n < 0) {
      return
    }
    setCount(count+n)
  }
  return (
    <div className="counter">
      <button className="btn btn-dec" onClick={()=>updateCounter(-1)}>-</button>
      <h3 className="number">{count}</h3>
      <button className="btn btn-inc" onClick={()=>updateCounter(+1)}>+</button>
      <button className="btn btn-clr" onClick={()=>updateCounter(-count)}>C</button>
    </div>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);
