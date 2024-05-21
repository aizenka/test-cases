import axios from 'axios'
import type { CaseResponse } from './types/caseTypes'
import type { CasesResponse } from './types/casesTypes'

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
  try {
    const { data } = await api.get<CaseResponse>(`/cases/${id}`)

    return data.Data
  } catch (e) {
    console.log('Handle cases error: ', e)
    return []
  }
}

// export const getCaseByFriendlyURL = async (friendlyURL: string) => {
//   try {
//     const { data } = await api.get(`/cases/${friendlyURL}`)

//     return data.Data
//   } catch (e) {
//     console.log('Handle cases error: ', e)
//     return []
//   }
// }