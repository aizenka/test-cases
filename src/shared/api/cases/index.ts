import axios from 'axios'
import type { CasesResponse } from './types'

// TODO: add error handler

const api = axios.create({
  baseURL: 'https://services.it-cron.ru/api',
  headers: {
    'accept': 'text/plain',
    'Accept-language': 'ru'
  }
})

export const getCases = async () => {
  return api.get<CasesResponse>('/cases')
}

export const getCaseById = async (id: string) => {
  return api.get(`/cases/${id}`)
}