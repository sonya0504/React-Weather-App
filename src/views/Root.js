import React from "react";
import AppContext from "context";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainTemplate from "templates/MainTemplate";
import MainView from "./MainView";
import DetailsView from "./DetailsView";

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const apiKey = process.env.REACT_APP_API_KEY;

class Root extends React.Component {
    
    state = {
        time: new Date(),
        day: null,
        clock: null,
        city: null,
        weatherData: null,
        forecastWeatherData: null,
        errorMessageCurrent: null,
        errorMessageForecast: null,
        redirect: false,
        coordinates: {
            lon: null,
            lat: null
        },
        showForecast: false,
    }

    componentDidMount() {
        this.intervalId = setInterval(
            () => this.tick(),
            1000
        );
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

    getCityName = (e) => {
        e.preventDefault();
    
        this.setState({
          city: e.target.value,
        });
    
      };

    checkCurrentWeather = async () => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=${apiKey}`;
        const response = await fetch(apiUrl);

        const data = await response.json();

        if(data.cod == '200') {
            this.setState({
                weatherData: data,
                errorMessageCurrent: null,
                errorMessageForecast: null,
                redirect: true,
                coordinates: {
                    lon: data.coord.lon,
                    lat: data.coord.lat,
                }
            });
            
        } else if (data.cod === '404') {
            this.setState({
                errorMessageCurrent: data.message,
                redirect: false,
            })
        }
    }

    checkForecastWeather = async () => {

        const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.coordinates.lat}&lon=${this.state.coordinates.lon}&exclude={daily}&units=metric&appid=${apiKey}`;
        const response = await fetch(apiUrl);

        const data = await response.json();

        this.setState({
            forecastWeatherData: data,
            errorMessageCurrent: null,
            errorMessageForecast: null,
            redirect: true,
            showForecast: true,
            });
    }

    getWeather = async (e) => {
        e.preventDefault();
        await this.checkCurrentWeather();
    }

    goBack = () => (
        this.setState({
            redirect: false,
        })
    );

    render() {

        const contextElement = {
            ...this.state,
            getCityName: this.getCityName,
            getWeather: this.getWeather,
            getForecastWeather: this.checkForecastWeather
        }

        return (
            <BrowserRouter>
            <MainTemplate>
                <AppContext.Provider value={contextElement}>
                    <Routes>
                        <Route exact='true' path='/' element={<MainView />} />
                        <Route path='/details' element={<DetailsView />} />
                    </Routes>
                </AppContext.Provider>
            </MainTemplate>
            </BrowserRouter>
        );
    }
} 

export default Root;