import { grommet } from "grommet"
import { deepMerge } from "grommet/utils";


  export const theme = deepMerge(grommet, {
    global: {
        colors: {
          focus: "none"
        }
      },
    radioButton: {
        color: '#85A588',
        check: {
            background: '#85A588',
            color: '#85A588',
        }
    },
    carousel: {
      icons: {
        color: '#708C7E'
      },
    },
    accordion: {
      icons: {
        color: '#708C7E'
      }
    } 
});

    