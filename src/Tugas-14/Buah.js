import React from "react"
import {BuahProvider} from "./BuahContext"
import BuahList from "./BuahList"
import BuahForm from "./BuahForm"

const Buah = () => {
    return(
        <BuahProvider>
            <div style={{width: "40%", margin: "0 auto"}}>
                <BuahList />
                <br/>
                <br/>
                <BuahForm />
            </div>
        </BuahProvider>
    )
}

export default Buah