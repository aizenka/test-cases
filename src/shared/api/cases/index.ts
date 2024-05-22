import { api } from '../instance'
import type { CaseResponse } from './types/caseTypes'
import type { CasesResponse } from './types/casesTypes'


export const getCases = async () => {
  try {
    const { data } = await api.get<CasesResponse>('/cases')

    return data.Data
  } catch (e) {
    throw new Error(`Handle cases error: ${e}`)
  }
}

export const getCaseById = async (id: string) => {
  try {
    const { data } = await api.get<CaseResponse>(`/cases/${id}`)

    return data.Data
  } catch (e) {
    throw new Error(`Handle case error: ${e}`)
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