import { notification } from 'antd'
import { createEffect } from 'effector'

export const showErrorNotificationFx = createEffect((err: Error) =>
  notification.error({ message: err.message })
)