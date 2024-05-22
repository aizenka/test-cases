import { getCases } from '@/shared/api/cases'
import { showErrorNotificationFx } from '@/shared/lib/effector/notifications'
import { createEffect, restore, sample } from 'effector'

export const getCasesFx = createEffect(getCases)

export const $cases = restore(getCasesFx, [])

sample({
  clock: getCasesFx.failData,
  target: showErrorNotificationFx
})