import React, {useContext} from "react"
import {BuahContext} from './BuahContext'

const BuahList = () => {
    const [buah, setBuah, inputForm, setInputForm] = useContext(BuahContext)

    const handleDelete = (event) => {
        var idBuah = parseInt(event.target.value)
        var newBuah = buah.filter(x => x.id !== idBuah)
        setBuah([...newBuah])
    }

    const handleEdit = (event) => {
        var idBuah = parseInt(event.target.value)
        var dataBuah = buah.find(x => x.id === idBuah)
        setInputForm({...inputForm, nama: dataBuah.nama, harga:dataBuah.harga, berat:dataBuah.berat, id: idBuah})
    }

    return(
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
                    {buah.map((el, idx) => {
                        return(
                            <tr key={el.id}>
                                <td>{idx+1}</td>
                                <td>{el.name}</td>
                                <td>{el.harga}</td>
                                <td>{el.berat/1000} Kg</td>
                                <td>
                                    <button value={el.id} style={{marginRight: "5px"}} onClick={handleEdit}>Edit</button>
                                    <button value={el.id} onClick={handleDelete}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default BuahList