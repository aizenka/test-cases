import { createEvent, createStore } from 'effector'

export const $filtersOpened = createStore(false)
export const toggleFiltersOpened = createEvent()


$filtersOpened.on(toggleFiltersOpened, (value) => !value)