import React from 'react' ;

class FormPembelian extends React.Component {
    render(){
        return(
            <>
            <div className="container">
                <div style={{width: "40%", margin: "0 auto", padding: "10px", border: "1px solid #000", borderRadius: "10px"}}>
                    <h1 style={{textAlign: "center"}}> Daftar Pesanan Buah </h1>
                    <div style={{display: "block", marginBottom: "1em"}}>
                        <div style={{display: "inline-block", width: "150px", fontWeight: "bold", fontSize: "16px"}}>
                        Nama Pelanggan
                        </div>
                        <input style={{display: "inline-block"}} type="text" name="name">
                        </input>
                    </div>
                    <div style={{display: "block", marginBottom: "1em"}}>
                    <div style={{display: "inline-block", width: "150px", fontWeight: "bold", fontSize: "16px"}}>
                        Daftar Item
                        </div>
                        <div style={{display: "inline-block"}}>
                        <input type="checkbox" id="Semangka" name="buah" value="Semangka"></input>
                        <label for="Semangka">Semangka</label><br></br>
                        <input type="checkbox" id="Jeruk" name="buah" value="Jeruk"></input>
                        <label for="Jeruk">Jeruk</label><br></br>
                        <input type="checkbox" id="Nanas" name="buah" value="Nanas"></input>
                        <label for="Nanas">Nanas</label><br></br>
                        <input type="checkbox" id="Salak" name="buah" value="Salak"></input>
                        <label for="Salak">Salak</label><br></br>
                        <input type="checkbox" id="Anggur" name="buah" value="Anggur"></input>
                        <label for="Anggur">Anggur</label><br></br>
                        </div>
                    </div>
                    <button>
                        <a href="" style={{textDecoration: "none", color: "black", borderRadius: "20px"}}>Kirim</a>
                    </button>
                </div>
            </div>
            </>
        )
    }
}

export default FormPembelian;