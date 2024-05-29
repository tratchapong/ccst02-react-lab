function MyApp() {
  const [allCounter,setAllCounter] = React.useState([
    { id: 1, value: 0}
  ])
  const sum = allCounter.reduce( (a,c) => a+c.value, 0)

  const updateCounter = (id, n) => {
    const idx = allCounter.findIndex(el => el.id === id)
    console.log(idx)
    if (allCounter[idx].value + n < 0) {
      return
    }
    const clonedCounter = [...allCounter]
    clonedCounter[idx].value += n
    setAllCounter(clonedCounter)
  }

  const addCounter = () => {
    let newCounter = {id: allCounter[allCounter.length-1].id + 1, value: 0}
    setAllCounter(prv=>[...prv, newCounter])
  }
  return (
    <>
      <h1>Sum = {sum} </h1>
      <button className="btn-add" onClick={addCounter}>Add Counter</button>
      <hr />
      {allCounter.map( el=> (
        <Counter key={el.id}  data={el} updateCounter={updateCounter}/>
      ))

      }
    </>
  );
}

function Counter(props) {
  const {data, updateCounter} = props
  // const [count, setCount] = React.useState(0)

  // const updateCounter = (n) => {
  //   if (count + n < 0) {
  //     return
  //   }
  //   setCount(count+n)
  // }
  return (
    <div className="counter">
      <button className="btn btn-dec" onClick={()=>updateCounter(data.id, -1)}>-</button>
      <h3 className="number">{data.value}</h3>
      <button className="btn btn-inc" onClick={()=>updateCounter(data.id, +1)}>+</button>
      <button className="btn btn-clr" onClick={()=>updateCounter(data.id, -data.value)}>C</button>
    </div>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);
