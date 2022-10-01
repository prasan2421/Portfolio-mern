
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

type TextProps = {
   
    text:string
  }

const BackgroundText = ({text}:TextProps) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return <Box className="back-text" sx={{color: prefersDarkMode ?'rgba(255,255,255,0.04)':'rgba(78,78,78,0.15)'}}>{ text }</Box>
  ;
};

export default BackgroundText;
