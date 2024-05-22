import type { AvailableFilters } from '../../commonTypes'

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