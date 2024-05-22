import { $selectedFilterIds } from '@/entities/CasesFilters'
import { getCases } from '@/shared/api/cases'
import { showErrorNotificationFx } from '@/shared/lib/effector/notifications'
import { combine, createEffect, restore, sample } from 'effector'

export const getCasesFx = createEffect(getCases)

export const $cases = restore(getCasesFx, [])

export const $filteredCases = combine(
  $cases,
  $selectedFilterIds,
  (cases, selectedFilterIds) => {
    if (selectedFilterIds.length === 0) return cases

    return cases.filter(caseItem =>
      caseItem.Filters.some(filter => selectedFilterIds.includes(filter.Id))
    )
  }
)

sample({
  clock: getCasesFx.failData,
  target: showErrorNotificationFx
})