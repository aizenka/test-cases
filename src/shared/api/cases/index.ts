import axios from 'axios'
import type { CasesResponse } from './types'

const api = axios.create({
  baseURL: 'https://services.it-cron.ru/api',
  headers: {
    'accept': 'text/plain',
    'Accept-language': 'ru'
  }
})

export const getCases = async () => {
  try {
    const { data } = await api.get<CasesResponse>('/cases')

    return data.Data
  } catch (e) {
    console.log('Handle cases error: ', e)
    return []
  }
}

export const getCaseById = async (id: string) => {
  return api.get(`/cases/${id}`)
}