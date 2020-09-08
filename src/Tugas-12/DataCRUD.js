import React, {Component} from 'react' ;
import Lists from './TableCRUD';

class Data extends Component {
    constructor(props){
        super(props)
        this.state ={
            dataHargaBuah: [
                {nama: "Semangka", harga: 10000, berat: 1000},
                {nama: "Anggur", harga: 40000, berat: 500},
                {nama: "Strawberry", harga: 30000, berat: 400},
                {nama: "Jeruk", harga: 30000, berat: 1000},
                {nama: "Mangga", harga: 30000, berat: 500},
              ],
                inputName : "",
                inpuName_edit: "",
                inputHarga : "",
                inputBerat : "",
                index: -1   
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteForm = this.deleteForm.bind(this);
      }
    
      handleChange(event){
        this.setState({
            inputName: event.target.value,
            inputBerat: event.target.value,
            inputHarga: event.target.value
        });
      }
    
      handleSubmit(event){
        event.preventDefault()
        var index = this.state.index
        if(index === -1){
            const tambahData = {
                nama : this.state.inputName,
                harga : parseInt(this.state.inputHarga),
                berat : parseFloat(this.state.inputBerat)
            }
            
            this.setState({
              dataHargaBuah: [...this.props, ...tambahData],
              inputName: ""
            })
        } else {
            var newdataHargaBuah = this.state.dataHargaBuah
            newdataHargaBuah[index] = this.state.inputName

            this.setState({
                dataHargaBuah: [...newdataHargaBuah],
                inputName: "",
                index: -1
            })
        }
      }

      changeInputName = (event) => {
          this.setState({inputName: event.target.value})
      }

        changeInputHarga = (event) => {
            this.setState({inputHarga: event.target.value})
        }

        changeInputBerat = (event) => {
            this.setState({inputBerat: event.target.value})
        }

        editForm = (event) => {
            var index = event.target.value
            var buah = this.state.dataHargaBuah[index]
            this.setState({
                inputName: buah,
                index
            })
        }

        deleteForm(event) {
            var index = event.target.value
            var newdataHargaBuah = this.state.dataHargaBuah
            dataHargaBuah.splice(index, 1)
            this.setState({
                inputName: "",
                index: -1
            })
        }


    render() {
        

        return(
            <>
            <h1 style={{textAlign : "center"}}> Daftar Harga Buah</h1>
            <table>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
              <th>Aksi</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {
                this.state.pesertaLomba.map((val, index)=>{
                  return(                    
                    <tr>
                      <td>{val.nama}</td>
                      <td>{val.harga}</td>
                      <td>{val.berat}</td>
                      <td>
                        <button value={index} style={{marginRight:"5px"}} onClick={this.editForm}>Edit</button>
                        <button value={index} onClick={this.deleteForm}>Delete</button>
                      </td>
                    </tr>
                  )
                })
              }
          </tbody>
        </table>
            <h1>Form Buah</h1>
            <form onSubmit={this.handleSubmit}>
            <strong style={{marginRight: '10px'}}>Nama Buah: </strong>         
            <input required= "required" type="text" value={this.state.inputName} onChange={this.changeInputName}/>
            <br/>
            <strong style={{marginRight: '10px'}}>Harga Buah: </strong>
            <input required= "required" type="text" value={this.state.inputHarga} onChange={this.changeInputHarga}/>
            <br/>
            <strong style={{marginRight: '10px'}}>Harga Buah (dalam gram): </strong>
            <input required= "required" type="text" value={this.state.inputBerat} onChange={this.changeInputBerat}/>
            <button>submit</button>
            </form>
            </>
        )
    }
}

export default Data