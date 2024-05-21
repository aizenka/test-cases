import { getCases } from '@/shared/api/cases'
import { createEffect, restore } from 'effector'

export const getCasesFx = createEffect(getCases)

export const $cases = restore(getCasesFx, [])

getCasesFx()