import type { AvailableFilters } from '../commonTypes'

export interface CasesFiltersResponseData {
  Id: string
  Name: string
  Filters: AvailableFilters[]
}

export interface CasesFiltersResponse {
  Error: null,
  Data: CasesFiltersResponseData[]
}