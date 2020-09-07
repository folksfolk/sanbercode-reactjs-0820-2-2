import React, { Component } from 'react';

class Timer extends Component{
    constructor(props){
        var date = new Date();
        super(props)
        this.state = {
            time: 100,
            date: date.toLocaleTimeString(['id'], { hour12: false, timeZone: 'UTC' }),
            showTime: true,
            hours: date.getHours,
            mins: date.getMinutes,
            secs: date.getSeconds
        }
    }
  
    tick() {
      this.setState({
        time: this.state.time - 1,
        hours: this.state.hours + 1,
        mins: this.state.mins + 1,
        secs: this.state.secs + 1,
      });
    }
  
    componentDidMount(){
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentDidUpdate(){
        if (this.state.showTime === true){
            if (this.state.time < 1){
                this.setState({
                  showTime: false
                })
              }
        }
    }
  
    componentWillUnmount(){
      clearInterval(this.timerID);
    }
  
    stopTheTimer = ()=>{
      this.componentWillUnmount()
    }
  
    deleteTheTimer = ()=>{
      this.setState({
        showTime: false
      })
    }
  
  
    render(){
      return(
        <>
          {this.state.showTime && (
            <>
              <h1 style={{textAlign: "center"}}>
                Hitung Mundur: {this.state.time}
              </h1>
              <h1 style={{textAlign: "center"}}>
                Sekarang Jam: {this.state.date}
              </h1>
            </>
          )}
        </>
      )
    }
  }
  
  export default Timer