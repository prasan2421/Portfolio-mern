import Box from '@mui/material/Box';

import  headerStyles from'../styles/Header.module.css';


export const Logo=()=> {
  return(
    <Box sx={{marginY:'10px'}}>
    {/* <p>{mode}</p> */}
    <h1 className={headerStyles.logoText}>
      {/* <h1 className={theme.palette.mode === 'dark' ? "neonText":"logoText"}> */}
      Prasanna
      </h1>
      <h1 className={headerStyles.logoText} style={{marginLeft:'20px'}}>
      {/* <h1 className={theme.palette.mode === 'dark' ? "neonText":"logoText"}> */}
     Tuladhar
      </h1>
    </Box>

  )
}
   

