#!/usr/bin/env node

const axios = require('axios');
const { Command } = require('commander');
require('dotenv').config();

const program = new Command();

program
  .version('1.0.0')
  .description('Weather CLI Tool')
  .option('-c, --city <city>', 'City to get weather for', 'London');

program.parse(process.argv);

const options = program.opts();
const city = options.city;

const API_KEY = process.env.OPEN_WEATHER_API_KEY;


async function getWeather(city) {
  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const weather = response.data;
    console.log(`The weather in ${city} is currently ${weather.weather[0].description} with a temperature of ${weather.main.temp}°C.`);
  } catch (error) {
    console.error('Error fetching the weather data:', error);
  }
}

getWeather(city);
