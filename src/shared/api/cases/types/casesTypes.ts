import type { AvailableFilters } from './common'

export interface CasesResponseCardData {
  Id: string
  Image: string
  CaseColor: string
  Title: string
  FeaturesTitle: string
  FriendlyURL: string
  Filters: AvailableFilters[]
}

export interface CasesResponse {
  Error: null,
  Data: CasesResponseCardData[]
}