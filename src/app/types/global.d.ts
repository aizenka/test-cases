/* eslint-disable @typescript-eslint/no-explicit-any */

declare type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>
} : T

declare type OptionalRecord<K extends keyof any, T> = {
    [P in K]?: T;
};

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