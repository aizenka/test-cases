import { getTestimonialById } from '@/shared/api/testimonials'
import { showErrorNotificationFx } from '@/shared/lib/effector/notifications'
import { createEffect, restore, sample } from 'effector'

export const getTestimonialFx = createEffect(getTestimonialById)

export const $testimonial = restore(getTestimonialFx, null)

sample({
  clock: getTestimonialFx.failData,
  target: showErrorNotificationFx
})