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
        <svg  className={theme.palette.mode === 'dark'?"textAnim textAnimContainer":"textAnimLight textAnimContainer"} width={breakpoint=='desktop'?"250px":"200px"} viewBox="0 0 375 111" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M109.396 6.35199V3.85199H106.896H92.928H91.3079L90.6461 5.33072L56.064 82.6001L21.4819 5.33072L20.8201 3.85199H19.2H5.08801H2.58801V6.35199V106V108.5H5.08801H18.192H20.692V106V43.2756L49.1735 107.02L49.8348 108.5H51.456H60.672H62.2948L62.9554 107.018L91.292 43.4453V106V108.5H93.792H106.896H109.396V106V6.35199Z" stroke={theme.palette.mode === 'light'?"black":"white"} stroke-width="5"/>
        <path d="M181.299 49.84V47.34H178.799H144.723V18.788H183.119H185.619V16.288V5.48801V2.98801H183.119H129.119H126.619V5.48801V106V108.5H129.119H183.119H185.619V106V95.2V92.7H183.119H144.723V63.14H178.799H181.299V60.64V49.84Z" stroke={theme.palette.mode === 'light'?"black":"white"} stroke-width="5"/>
        <path d="M253.635 107.258L254.358 108.5H255.795H271.491H275.904L273.636 104.715L250.158 65.5401C256.972 63.5063 262.363 60.0104 266.143 54.9459C270.516 49.2141 272.695 42.5836 272.695 35.152C272.695 29.0916 271.304 23.606 268.463 18.7665C265.589 13.8702 261.258 10.0544 255.609 7.27985C249.99 4.472 243.2 3.13202 235.347 3.13202H202.947H200.447V5.63202V106V108.5H202.947H216.051H218.551V106V67.46H230.454L253.635 107.258ZM249.615 23.1456L249.627 23.1573L249.64 23.1688C252.56 25.8522 254.159 29.7238 254.159 35.152C254.159 40.4566 252.573 44.48 249.576 47.4841C246.659 50.3137 242.073 51.948 235.347 51.948H218.551V18.932H235.347C242.23 18.932 246.813 20.4992 249.615 23.1456Z" stroke={theme.palette.mode === 'light'?"black":"white"} stroke-width="5"/>
        <path d="M369.469 108.5H371.969V106V5.48801V2.98801H369.469H356.365H353.865V5.48801V76.9445L305.747 4.10996L305.005 2.98801H303.661H290.557H288.057V5.48801V106V108.5H290.557H303.661H306.161V106V34.4121L354.278 107.376L355.019 108.5H356.365H369.469Z" stroke={theme.palette.mode === 'light'?"black":"white"} stroke-width="5"/>
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
                  <Typography variant="h1">{AnimationDisplay()} Stack Developer</Typography>
                 
          </Grow>
          <Box>
          


          </Box>
          
        </Box>
      <Box className='subTitle'><Typography variant="subtitle1">React | React Native | Express | JS / TS</Typography></Box>
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