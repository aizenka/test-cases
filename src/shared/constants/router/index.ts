export enum AppRoutes {
  CASES = 'cases',
  CASES_DETAILS = 'casesDetails',
  NOT_FOUND = 'notFound'
}

export const getRouteCases = () => '/'
export const getRouteCasesDetails = (id: string) => `/cases/${id}` // ? use friendlyURL