import React, {Component, useState, useEffect} from 'react' 
import axios from 'axios';
import "./TableAPI.css"

const DaftarBuahAPI = () => {
    const [dataBuah, setdataBuah] = useState(null)
    const [input, setInput] = useState({name: "", id: null})
    const [harga, setHarga] = useState({harga: ""})
    const [berat, setBerat] = useState({berat: ""})
    const [statusFORM, setStatusFORM] = useState(-1)

    useEffect(() => {
        if (dataBuah === null) {
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
                setdataBuah(res.data)
                console.log(res.data)
            })
        }
    }, [dataBuah]);

    const submitForm = (event) => {
        event.preventDefault()

        if (input.id === null) {
            axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name: input.nama}, {harga: harga.harga}, {berat: berat.berat})
            .then(res => {
                var data = res.data
                setdataBuah([...dataBuah, {id: data.id, name: data.nama}, {harga: data.harga}, {berat: data.berat}])
                setInput({id: null, name: ""})
                setHarga({harga: ""})
                setBerat({berat: ""})
            })
        } else {
            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${input.id}`, {name: input.nama}, {harga: harga.harga}, {berat: berat.berat})
            .then(res => {
                var newDatabuah = dataBuah.map(x => {
                    if(x.id === input.id) {
                        x.name = input.name
                        x.harga = input.harga
                        x.berat = input.berat
                    }
                    return x
                })
                setdataBuah(newDatabuah)
                setInput({id: null, name: ""})
                setHarga({harga: ""})
                setBerat({berat: ""})
            })
        }
    }

    const deleteBuah = (event) => {
        var idBuah = parseInt(event.target.value)
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
        .then(res => {
            var newDatabuah = dataBuah.filter(x => x.id !== idBuah)
            setdataBuah(newDatabuah)
        })
    }

    const changeInputName = (event) => {
        var value = event.target.value
        setInput({...input, name: value})
    }

    const changeInputHarga = (event) => {
        var value = event.target.value
        setHarga({...harga, harga: value})
    }

    const changeInputBerat = (event) => {
        var value = event.target.value
        setBerat({...berat, berat: value})
    }

    const editForm = (event) => {
        var idBuah = parseInt(event.target.value)
        var buah = dataBuah.find(x => x.id === idBuah)

        setInput({id: idBuah, name: buah.name})
        setHarga({harga: buah.harga})
        setBerat({berat: buah.berat})
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
                                        <td>{item.berat}</td>
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
                <form style={{textAlign: "center"}} onSubmit={submitForm}>
                    <strong style={{marginRight: "10px"}}>Nama</strong>
                    <input required type="text" value={input.name} onChange={changeInputName}/>
                    <br/>
                    <strong style={{marginRight: "10px"}}>Harga</strong>
                    <input required type="text" value={input.harga} onChange={changeInputHarga}/>
                    <br/>
                    <strong style={{marginRight: "10px"}}>Berat</strong>
                    <input required type="text" value={input.berat} onChange={changeInputBerat}/>
                    <br/>
                    <button>Save</button>
                </form>
            </div>
        </>
    )
}

export default DaftarBuahAPI