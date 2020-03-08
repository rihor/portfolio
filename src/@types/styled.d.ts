import "styled-components"

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    screens: {
      // max-widths in pixels
      sm: number,
      md: number,
      lg: number,
      xl: number,
    },
    colors: {
      primary: string,
      secundary: string,

      background: string,
      text: string,
    },
  }
}
