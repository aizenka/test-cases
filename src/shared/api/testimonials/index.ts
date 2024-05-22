import { api } from '../instance'
import type { TestimonialResponse } from './types'

export const getTestimonialById = async (id: string) => {
  try {
    const { data } = await api.get<TestimonialResponse>(`/testimonials/${id}`)

    return data.Data
  } catch (e) {
    throw new Error(`Handle testimonial error: ${e}`)
  }
}