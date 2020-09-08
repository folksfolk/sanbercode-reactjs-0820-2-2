import React, {Component} from "react"

class Lists extends Component{
    render() {
      return (
        <>
        <table style={{border: "1px solid", margin: "0 auto"}}>
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
                <tr>
                    <td>{this.props.item.nama}</td>
                    <td>{this.props.item.harga}</td>
                    <td>{this.props.item.berat / 1000} Kg</td>
                </tr>
            </tbody>
        </table>
        </>
      )
    }
}

export default Lists