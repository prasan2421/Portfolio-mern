import React from "react";
import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts'
import Link from '@mui/material/Link';
import Date from '../../components/date'
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import { useSpring, animated } from '@react-spring/web';
import Backdrop from '@mui/material/Backdrop';
import { GetStaticProps } from 'next'
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import Send from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';
import Stack from '@mui/material/Stack';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import Move from "../../components/Move";
import FormControl from '@mui/material/FormControl';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import qs from 'qs';
import useBreakpoint from 'use-breakpoint';

import axios from 'axios';
// import {Link as Link2} from '@mui/material/Link';

import {Grid, Box, Slide, Grow, Typography, Button, IconButton, Collapse} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { styled, alpha, ThemeProvider, createTheme, useTheme,responsiveFontSizes, } from '@mui/material/styles';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import DownloadIcon from '@mui/icons-material/Download';

const BREAKPOINTS = { mobile: 0, tablet: 900, desktop: 1280 }

const CustomButton = styled(Button)({
 
    padding:'1rem 3rem 1rem 3rem',
    
   });

  

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
   
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
        if (open && onEnter) {
          onEnter();
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited();
        }
      },
    });
  
    return (
      <animated.div ref={ref} style={style} {...other}>
        {children}
      </animated.div>
    );
  });


  interface FadeProps {
    children?: React.ReactElement;
    in: boolean;
    onEnter?: () => {};
    onExited?: () => {};
  }

  const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:{xs:'100%',sm:'auto'},
    
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  interface IFormInputs {
    name: string;
    email: string;
    subject: string;
    message: string;
    // iceCreamType: { label: string; value: string };
    // password: yup.string().min(4).max(20).required(),
  }

  const schema = yup.object({
    name: yup.string().required(),
    // age: yup.number().positive().integer().required(),
    email: yup.string().email().required(),
    subject: yup.string().required(),
    message: yup.string().required()
  }).required();
 

export default function HomeSectionFirst(
  
  // { dateString }: { dateString: string }
  ) {
    const [checked, setChecked] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const [openEmoji, setOpenEmoji] = React.useState(false);
    const [sendTrigger, setSendTrigger] = React.useState(false);
    const [success, setSuccess] = React.useState(true);
    const [alertOpen, setAlertOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleOpenEmoji = () => setOpenEmoji(true);
  const handleCloseEmoji = () => setOpenEmoji(false);
  const theme = useTheme();

  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, 'desktop');

  // const handleSubmit = async (event:any) => {
  //   // Stop the form from submitting and refreshing the page.
  //   event.preventDefault()

  //   // Get data from the form.
  //   const data = {
  //     first: event.target.first.value,
  //     last: event.target.last.value,
  //   }

  //   alert(data)

  //   // Send the data to the server in JSON format.
  //   const JSONdata = JSON.stringify(data)

  //   // API endpoint where we send form data.
  //   const endpoint = '/api/form'

  //   // Form the request for sending data to the server.
  //   const options = {
  //     // The method is POST because we are sending data.
  //     method: 'POST',
  //     // Tell the server we're sending JSON.
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     // Body of the request is the JSON data we created above.
  //     body: JSONdata,
  //   }

  //   // Send the form data to our forms API on Vercel and get a response.
  //   const response = await fetch(endpoint, options)

  //   // Get the response data from server as JSON.
  //   // If server returns the name submitted, that means the form works.
  //   const result = await response.json()
  //   alert(`Is this your full name: ${result.data}`)
  // }
  
  const AnimationDisplay=()=>{
   
      return(
        <svg  className={theme.palette.mode === 'dark'?"textAnim textAnimContainer":"textAnimLight textAnimContainer"} width={breakpoint=='desktop'?"220px":"185px"} viewBox="0 0 302 112" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M231.74 94.712V92.212H229.24H196.604V5V2.5H194.104H181H178.5V5V105.368V107.868H181H229.24H231.74V105.368V94.712Z" stroke={theme.palette.mode === 'light'?"black":"white"} stroke-width="5"/>
<path d="M95.604 5V2.5H93.104H80H77.5V5V68.36C77.5 77.0329 79.1952 84.5386 82.7209 90.7605L82.7332 90.7822L82.7459 90.8035C86.3422 96.8659 91.2099 101.436 97.3292 104.444L97.3366 104.447L97.3441 104.451C103.479 107.416 110.289 108.876 117.728 108.876C125.163 108.876 131.93 107.418 137.976 104.447C144.188 101.443 149.109 96.8742 152.71 90.8035L152.715 90.7956L152.719 90.7877C156.352 84.5601 158.1 77.0442 158.1 68.36V5V2.5H155.6H142.496H139.996V5V68.504C139.996 77.0607 137.88 82.9148 134.124 86.5889L134.114 86.5985L134.104 86.6082C130.366 90.346 125.069 92.356 117.872 92.356C110.578 92.356 105.177 90.3446 101.342 86.5986C97.676 82.9258 95.604 77.0669 95.604 68.504V5Z" stroke={theme.palette.mode === 'light'?"black":"white"} stroke-width="5"/>
<path d="M64.236 5V2.5H61.736H5H2.5V5V105.368V107.868H5H18.104H20.604V105.368V62.652H53.528H56.028V60.152V49.496V46.996H53.528H20.604V18.156H61.736H64.236V15.656V5Z" stroke={theme.palette.mode === 'light'?"black":"white"} stroke-width="5"/>
<path d="M298.74 94.712V92.212H296.24H263.604V5V2.5H261.104H248H245.5V5V105.368V107.868H248H296.24H298.74V105.368V94.712Z" stroke={theme.palette.mode === 'light'?"black":"white"} stroke-width="5"/>

        
        </svg>



      )
    
   
  }

  const submitMessage= async(data:any) =>{

    setSendTrigger(true);
    // alert(JSON.stringify(data));return;

    // const config = {
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   }
    // }

    axios.post('/api/contacts'
    ,qs.stringify(data)
    )
    .then(function (response) {
      setSendTrigger(false)
      setSuccess(true)
      setAlertOpen(true)
      setOpen(false)
      
      // handle success
      // console.log(response);
      // alert(JSON.stringify(response.data))
    })
    .catch(function (error) {
      setSendTrigger(false)
      setSuccess(false)
      setAlertOpen(true)
      // handle error
      console.log(error);
      alert(JSON.stringify(error))
    })
    // .finally(function () {
    //   // trigger after finish
    //   // setSendTrigger(false)
    //   // alert('Something went wrong.')
    // });
    


    
    // const dataMessage = JSON.stringify({'name':'ram','email':'dasdas','message':'dasdasdas'})
    
    // alert(dataMessage)


   
    // const response = await fetch('/api/contact', {
    //   method:'POST',
    //   body:JSON.stringify({'name':'ram','email':'dasdas','message':'dasdasdas'}),
    //   headers:{
    //     'Content-Type':'application/json'
    //   }

    // })

    // const datames = await response.json()
  
    // console.log(datames)
  }

  const { control, handleSubmit, formState: { errors }  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    
    submitMessage(data)
    // alert(JSON.stringify(data))
    
  // setMessage(data)
  
  };

  const renderForm = (
    
    <Modal
    aria-labelledby="spring-modal-title"
    aria-describedby="spring-modal-description"
    open={open}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    <Fade in={open}>
      <Box sx={style} >
      <Container>
      <Box >
      <Button size='small' onClick={handleClose} sx={{position:'absolute',right:0,top:0,minWidth:0}}>
        <CancelIcon fontSize='large' sx={{color:'red',}}/>
      </Button>
        <Box sx={{marginBottom:'20px'}}>
        <h1>Contact Me</h1>
        </Box>
        
  
        <form onSubmit={handleSubmit(onSubmit)} >

        <Controller
            name="name"
            control={control}
            // defaultValue="John Doe"
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                variant="outlined"
                error={!!errors.name}
                helperText={errors.name ? errors.name?.message : ''}
                fullWidth
                margin="dense"
                sx={{ width:{xs: '100%',sm:'100%', md:'50%'}, marginBottom:'10px' , paddingRight:{sm:0,md:'5px'}}}
              />
            )}
          />

        <Controller
            name="email"
            control={control}
            // defaultValue="example@dev.com"
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email ? errors.email?.message : ''}
                sx={{width:{xs: '100%',sm:'100%', md:'50%'}, marginBottom:'10px',paddingLeft:{sm:0,md:'5px'} }}
                fullWidth
                margin="dense"
              />
            )}
          />
          <Controller
            name="subject"
            control={control}
            // defaultValue="Greetings"
            render={({ field }) => (
              <TextField
                {...field}
                label="Subject"
                
                variant="outlined"
                error={!!errors.subject}
                helperText={errors.subject ? errors.subject?.message : ''}
                sx={{width: '100%', marginBottom:'10px', }}
                fullWidth
                margin="dense"
              />
            )}
          />    

        <Controller
            name="message"
            control={control}
            // defaultValue="You are awesome!!"
            render={({ field }) => (
              <TextField
                {...field}
                label="Message"
                
              multiline
              rows={4}
             
                variant="outlined"
                error={!!errors.message}
                helperText={errors.message ? errors.message?.message : ''}
                sx={{width: '100%', marginBottom:'10px', }}
                fullWidth
                margin="dense"
              />
            )}
          />    
           
            <LoadingButton type="submit" variant="contained" loading={sendTrigger?true:false}
          loadingPosition="end"
          endIcon={<Send/>}>
              Send 
            </LoadingButton>
        </form>
      </Box>
    </Container>
      </Box>
    </Fade>
  </Modal>
  );

  const emojiForm=(
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openEmoji}
        onClose={handleCloseEmoji}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openEmoji}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              What&apos;s your reaction? (Select one or more)
            </Typography>
            <Stack direction="row" alignItems="center" spacing={2}>
              <IconButton color="primary" aria-label="upload picture" component="label">
                
                <InsertEmoticonIcon sx={{color:'#ffd100'}}/>
              </IconButton>
              <IconButton color="primary" aria-label="upload picture" component="label">
                
                <SentimentSatisfiedIcon sx={{color:'#ffd100'}} />
              </IconButton>
              <IconButton color="primary" aria-label="upload picture" component="label">
                
                <SentimentVeryDissatisfiedIcon sx={{color:'#ffd100'}} />
              </IconButton>
            </Stack>
            
          </Box>
        </Fade>
      </Modal>
  )

  // const downloadFile=()=>{
  //   fetch(path).then(response => {
  //     response.blob().then(blob => {
  //         // Creating new object of PDF file
  //         const fileURL = window.URL.createObjectURL(blob);
  //         // Setting various property values
  //         let alink = document.createElement('a');
  //         alink.href = fileURL;
  //         alink.download = 'PrasnnaCV.pdf';
  //         alink.click();
  //     })
  // })
  // }

  return (

    <Grid container sx={{height:'100vh',paddingX: {xs:'2.5rem',md:'4.5rem'}}}>  
    
    <Collapse in={alertOpen} sx={{position:'absolute', bottom:0, right:20}} >
        <Alert
        variant="filled" severity={success?"success":"error"}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setAlertOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {success?'Message Sent':'Message sending Failed'}
        </Alert>
      </Collapse>
    {renderForm}
    {emojiForm}
    <Grid item xs={12} style={{display:'flex', alignItems:'center'}}>
        <Slide direction="up" in={checked} 
        // container={containerRef.current}
        >
          <Box sx={{ color: 'inherit',marginTop:'30px'}} >
        <Box className="introText">
          <Grow in={checked} style={{ transformOrigin: '0 0 0' }}>
          <Typography variant="h1"> Hi,</Typography>
          </Grow>
          <Grow in={checked} style={{ transformOrigin: '0 0 0' }}
              {...(checked ? { timeout: 1000 } : {})}>
                   <Typography variant="h1">I&apos;m Prasanna,</Typography>
          </Grow>
          <Grow in={checked} style={{ transformOrigin: '0 0 0' }} className='introTextLast'
              {...(checked ? { timeout: 2000 } : {})}>
                  <Typography variant="h1">{AnimationDisplay()} Stack JS Developer</Typography>
                 
          </Grow>
          <Box>
          

          </Box>
          
        </Box>
      <Box className='subTitle'><Typography  variant="subtitle1">React | React Native | Express | JS / TS | <Box className='subTitleUIUX'> UI / UX</Box></Typography></Box>
      <Box  sx={{marginTop:'50px', display:{sm:'flex'},  }}>
                <Box sx={{display:{xs:'flex'}, border:'5px solid ',borderColor:'inherit', borderRadius:'20px', overflow:'hidden', alignItems:{sm:'center'}, width:{xs:'100%',sm:'auto'},marginTop:{xs:'10px',sm:'0'} }}>
                  <CustomButton variant="text" 
                  onClick={handleOpen}
                   sx={{width:{xs:'100%',sm:'auto'},  color:"inherit", padding:{
                    xs:'1rem', sm:'1rem 3rem 1rem 3rem'
                  } }}>Contact Me</CustomButton>
               
                  <Box
                  // href={require("../assets/files/PrasannaCV.pdf")} 
                  sx={{width:{xs:'inherit'},borderLeft:'2px solid lightgray',borderColor:"inherit", }} 
                  // download underline="none"
                  >
                    <Link href={'files/PrasannaCV.pdf'} sx={
                    {color:"inherit"}
                  }
                    >
                      <CustomButton 
                      // onClick={downloadFile} 
                      sx={{width:{xs:'100%',sm:'auto'},color:"inherit", padding:{xs:'1rem', sm:'1rem 3rem 1rem 3rem'}}} 
                      variant="text" endIcon={<DownloadIcon color="inherit"/>} >CV</CustomButton>
                    </Link>
                  </Box>
                </Box>
                  <Box sx={{display:'flex', alignItems:'center', marginLeft:{xs:'0',sm:'10px'}, marginTop:{xs:'10px',sm:'0'}, justifyContent:{xs:'center',sm:'left'} }}>
                  <IconButton disableRipple
                  onClick={handleOpenEmoji}
                    color="primary" aria-label="upload picture" component="label" sx={{padding:0,margoin:0}}>
                      <Move scale={1.5} springConfig={{ tension: 150, friction: 10 }} >
       
                        <AddReactionIcon   sx={{fontSize:'50px',color: '#ffd100',marginTop:'2px'}}/>
                     </Move>
                  </IconButton>
                 
                  </Box>
                </Box>
                
                
            <Box>
            </Box>
          </Box>
          </Slide>
    </Grid>
</Grid>
  );
}