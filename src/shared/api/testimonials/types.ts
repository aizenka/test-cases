export interface TestimonialResponseData {
  Id: string
  Icon: string
  Company: string
  CustomerName: string
  Text: string
  CaseId: string
}
export interface TestimonialResponse {
  Error: null,
  Data: TestimonialResponseData
}