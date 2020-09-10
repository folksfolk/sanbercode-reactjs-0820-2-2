import React, {useContext} from "react"
import {BuahContext} from './BuahContext'

const BuahForm = () => {
    const [buah, setBuah, inputForm, setInputForm] = useContext(BuahContext)

    const handleSubmit = (event) => {
        event.preventDefault()

        var newId = buah.length + 1

        if(inputForm.id === null){
            setBuah([...buah, {nama: inputForm.nama, harga: inputForm.harga, berat: inputForm.berat, id: newId}])
        } else {
            var dataBuah = buah.find(x => x.id === inputForm.id)
            dataBuah.nama = inputForm.nama
            dataBuah.harga = inputForm.harga
            dataBuah.berat = inputForm.berat
            setBuah([...buah])
        }

        setInputForm({nama: "", harga: "", berat: 0, id: null})
    }

    const handleChange = (event) => {
        let typeOfInput = event.target.nama

        switch(typeOfInput) {
            case "nama":{
                setInputForm({...inputForm, nama: event.target.value});
                break
              }
              case "harga":{
                setInputForm({...inputForm, harga: event.target.value});
                break
              }
              case "berat":{
                setInputForm({...inputForm, berat: event.target.value});
                break
              }
              default: {break;}
        }
    }

    return(
        <>
            <h1>Form Daftar Harga Buah</h1>
            <div style={{width: "50%", margin: "0 auto", display: "block"}}>
                <div style={{border: "1px solid #aaa", padding: "20px"}}>
                    <form style={{textAlign: "center"}} onSubmit={handleSubmit}>
                        <strong> Nama Buah : </strong>
                        <input type="text" value={inputForm.nama} onchange={handleChange} required name="nama" />
                        <br />
                        <strong> Harga Buah : </strong>
                        <input type="text" value={inputForm.harga} onchange={handleChange} required name="harga" />
                        <br />
                        <strong> Berat Buah : </strong>
                        <input type="number" value={inputForm.berat} onchange={handleChange} required name="berat" />
                        <br />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default BuahForm