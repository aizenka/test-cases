export interface CaseCardFilters {
  Id: string
  Name: string
}

export interface CaseCardData {
  Id: string
  Image: string
  CaseColor: string
  FeaturesTitle: string
  FriendlyURL: string
  Filters: CaseCardFilters[]
}

export interface CasesResponse {
  Error: null,
  Data: CaseCardData[]
}