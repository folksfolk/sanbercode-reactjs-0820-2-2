import React, { useState, createContext } from "react";

export const BuahContext = createContext();

export const BuahProvider = props => {
    const [buah, setBuah] = useState([
        {id: 1, nama: "Semangka", harga: 10000, berat: 1000},
        {id: 2, nama: "Anggur", harga: 40000, berat: 500},
        {id: 3, nama: "Strawberry", harga: 30000, berat: 400},
        {id: 4, nama: "Jeruk", harga: 30000, berat: 1000},
        {id: 5, nama: "Mangga", harga: 30000, berat: 500},
    ]);

    const [inputForm, setInputForm] = useState({
        nama: "",
        harga: "",
        berat: 0,
        id: null
    })

    return (
        <BuahContext.Provider value = {[buah, setBuah, inputForm, setInputForm]}>
            {props.childern}
        </BuahContext.Provider>
    );
};