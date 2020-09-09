import React, {useState, useEffect} from "react"

const Example = () =>{
  const [name, setName] = useState("")
  const [harga, setHarga] = useState("")
  const [berat, setBerat] = useState("")
  const [count, setCount] = useState(0)

  const showName = (event) =>{
    var getName = event.target.value
    setName(getName)
  }

  const showHarga = (event) => {
    var getHarga = event.target.value
    setHarga(getHarga)
  }

  const showBerat = (event) => {
    var getBerat = event.target.value
    setBerat(getBerat)
  }

  useEffect(() => {
    // Memperbarui judul dokumen menggunakan API browser
    if (count > 5){
      document.title = `You clicked ${count} times`;
    }
  }, [count]);

  return (
    <>
      <div style={{marginTop: "20px", textAlign: "center"}}>
        <input onChange={showName} value={name}/> 
        <h1>{name}</h1>
        <input onChange={showHarga} value={harga}/> 
        <h1>{harga}</h1>
        <input onChange={showBerat} value={berat}/> 
        <h1>{berat}</h1>
        <br/>
        <br/>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Click to added Count</button>
      </div>
    </>
  )
}

export default Example