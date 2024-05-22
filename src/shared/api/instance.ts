import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://services.it-cron.ru/api',
  headers: {
    'accept': 'text/plain',
    'Accept-language': 'ru'
  }
})