import './App.css'

function App() {
  const onChangeHandler = (e) => console.log(e.target.value)

  return (
    <>
      <input type="text" onChange={onChangeHandler} />
    </>
  )
}

export default App
