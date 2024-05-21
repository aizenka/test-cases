/* eslint-disable @typescript-eslint/no-explicit-any */

declare module '*.module.css'

declare module '*.scss' {
  const cls: { [className: string]: string }
  export default cls
}

declare module '*.svg' {
  import type { FunctionComponent, SVGProps } from 'react'

  const SVG: FunctionComponent<SVGProps<SVGSVGElement>>
  export default SVG
}

declare module '*.png' {
  const value: any
  export default value
}

declare module '*.jpg' {
  const value: any
  export default value
}

declare module '*.jpeg' {
  const value: any
  export default value
}