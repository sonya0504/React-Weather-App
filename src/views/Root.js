import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainTemplate from "templates/MainTemplate";
import MainView from "./MainView";
import DetailsView from "./DetailsView";

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

class Root extends React.Component {

    state = {
        time: new Date(),
        day: '',
        clock: ''
    }

    componentDidMount() {
        this.intervalId = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    tick() {
        this.setState({
          time: new Date(),
          clock: this.state.time.toLocaleTimeString(navigator.language, {
            hour: '2-digit',
            minute:'2-digit'
          }),
          day: `${days[this.state.time.getDay()]}, ${this.state.time.getDate()} ${months[this.state.time.getMonth()]}`
        });
    }

    render() {

        const { time, clock, day } = this.state;

        return (
            <BrowserRouter>
            <MainTemplate>
                <Routes>
                <Route exact='true' path='/' element={<MainView time={time}/>} />
                <Route path='/details' element={<DetailsView  clock={clock} day={day}/>} />
                </Routes>
            </MainTemplate>
            </BrowserRouter>
        );
    }
} 

export default Root;