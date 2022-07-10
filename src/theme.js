import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0, 
      xs: 300,
      sm: 600, 
      md: 900, 
      lg: 1200, 
      xl: 1536 
    }
  }
});