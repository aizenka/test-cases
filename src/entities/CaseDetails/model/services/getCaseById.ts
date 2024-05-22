import { getCaseById } from '@/shared/api/cases'
import { showErrorNotificationFx } from '@/shared/lib/effector/notifications'
import { createEffect, restore, sample } from 'effector'

export const getCaseFx = createEffect(getCaseById)

export const $case = restore(getCaseFx, null)

getCaseFx.failData.watch(() => {
  console.log('FAIL DATA')
  $case.reset()
})

sample({
  clock: getCaseFx.failData,
  target: showErrorNotificationFx
})