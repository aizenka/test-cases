import { api } from '../instance'
import type { CasesFiltersResponse } from './types'

export const getCasesFilters = async () => {
  try {
    const { data } = await api.get<CasesFiltersResponse>('/filters')

    return data.Data
  } catch (e) {
    throw new Error(`Handle cases filters error: ${e}`)
  }
}