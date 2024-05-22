import { createEvent, createStore } from 'effector'

export const $selectedFilterIds = createStore<string[]>([])

export const toggleFilter = createEvent<string>()
export const clearSelectedFilters = createEvent()

$selectedFilterIds.on(toggleFilter, (state, filterId) => {
  if (state.includes(filterId)) {
    return state.filter(id => id !== filterId)
  } else {
    return [...state, filterId]
  }
})

$selectedFilterIds.on(clearSelectedFilters, () => [])