import React, {useState, useEffect} from 'react' 
import axios from 'axios';
import "./TableAPI.css"

const DaftarBuahAPI = () => {
    const [dataBuah, setdataBuah] = useState(null)
    const [input, setInput] = useState({name: "", harga: "", berat: 0, id: null})

    useEffect(() => {
        if (dataBuah === null) {
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
                setdataBuah(res.data.map(el=>{ return {id: el.id, name: el.name, harga: el.harga, berat: el.berat}}))
            })
        }
    }, [dataBuah]);

    const deleteBuah = (event) => {
        let idBuah = parseInt(event.target.value)

        let newDatabuah = dataBuah.filter(el => el.id !== idBuah)

        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
        .then(res => {
            console.log(res)
        })

        setdataBuah([...newDatabuah])
    }

    const editForm = (event) => {
        let idBuah = parseInt(event.target.value)
        let buah = dataBuah.find(x => x.id === idBuah)
        setInput({name: buah.name, harga: buah.harga, berat: buah.berat, id: idBuah})
    }

    const handleChange = (event) => {
        let typeOfInput = event.target.name

        switch(typeOfInput) {
            case "name":{
                setInput({...input, name: event.target.value});
                break
              }
              case "harga":{
                setInput({...input, harga: event.target.value});
                break
              }
              case "berat":{
                setInput({...input, berat: event.target.value});
                break
              }
              default: {break;}
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let name = input.name
        let harga = input.harga.toString()

        if(input.id === null) {
            axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name, harga, berat:input.berat})
            .then(res => {
                setdataBuah([...dataBuah, {
                    id: res.data.id,
                    name,
                    harga,
                    berat: input.berat
                }])
            })
        } else {
            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${input.id}`, {name, harga, berat: input.berat})
            .then(() => {
                let data = dataBuah.find(el => el.id === input.id)
                data.name = name
                data.harga = harga
                data.berat = input.berat
                setdataBuah([...dataBuah])
            })
        }

        setInput({name: "", harga: "", berat: 0, id: null})
    }

    return(
        <>
            <div style={{width: "70vw", margin: "0 auto"}}>
                <h1 style={{textAlign: "center"}}>Daftar Buah</h1>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama Buah</th>
                            <th>Harga</th>
                            <th>Berat</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataBuah !== null && dataBuah.map((item, index) => {
                                return(
                                    <tr key={item.id}>
                                        <td>{index+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.harga}</td>
                                        <td>{item.berat/1000} Kg</td>
                                        <td>
                                            <button value={item.id} style={{marginRight: "5px"}} onClick={editForm}>Edit</button>
                                            <button value={item.id} onClick={deleteBuah}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <br/>
                <br/>
                <h1>Form Daftar Harga Buah</h1>
                <div style={{width: "50%", margin: "0 auto", display: "block"}}>
                    <div style={{border: "1px solid #aaa", padding: "20px"}}>
                    <form style={{textAlign: "center"}} onSubmit={handleSubmit}>
                        <strong style={{marginRight: "10px"}}>Nama</strong>
                        <input required name="name" type="text" value={input.name} onChange={handleChange}/>
                        <br/>
                        <strong style={{marginRight: "10px"}}>Harga</strong>
                        <input required name="harga" type="text" value={input.harga} onChange={handleChange}/>
                        <br/>
                        <strong style={{marginRight: "10px"}}>Berat</strong>
                        <input required name="berat" type="text" value={input.berat} onChange={handleChange}/>
                        <br/>
                        <button>Save</button>
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DaftarBuahAPI