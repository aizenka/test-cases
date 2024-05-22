import type { AvailableFilters, CommonFields } from '../../commonTypes'

export interface Technologies extends CommonFields {}
export interface Platforms extends CommonFields {}
export interface Stages extends CommonFields {}

export interface CaseResponseData {
  Id: string
  Title: string
  QRCode: string
  ShortQrCode: string
  Filters: AvailableFilters[]
  Images: string[]
  Task: string
  Technologies: Technologies[]
  Platforms: Platforms[]
  Stages: Stages[]
  FeaturesTitle: string
  FeaturesDone: string[]
  Audience: string
  TestimonialId: string
  CaseColor: string
  iOSUrl: string
  AndroidUrl: string
  WebUrl: string
  FriendlyURL: string
}

export interface CaseResponse {
  Error: null,
  Data: CaseResponseData
}