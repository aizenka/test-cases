import { getCasesFilters } from '@/shared/api/casesFilters'
import { showErrorNotificationFx } from '@/shared/lib/effector/notifications'
import { createEffect, restore, sample } from 'effector'

export const getCasesFiltersFx = createEffect(getCasesFilters)

export const $casesFilters = restore(getCasesFiltersFx, [])

sample({
  clock: getCasesFiltersFx.failData,
  target: showErrorNotificationFx
})