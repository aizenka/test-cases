export interface CaseCardFilters {
  Id: string
  Name: string
}

export interface CasesResponseCardData {
  Id: string
  Image: string
  CaseColor: string
  Title: string
  FeaturesTitle: string
  FriendlyURL: string
  Filters: CaseCardFilters[]
}

export interface CasesResponse {
  Error: null,
  Data: CasesResponseCardData[]
}