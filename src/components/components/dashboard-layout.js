
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AuthGuard } from './auth-guard';
import { DashboardNavbar } from './dashboard-navbar';
import { DashboardSidebar } from './dashboard-sidebar';
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';
// import { getGoals, reset } from '../../features/blog/blogSlice'
import { logout, spinner } from '../../store/features/auth/authSlice'

const DashboardLayoutRoot = styled('div')(({ theme ,user}) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: user=="true"?85:0,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: user=="true"?200:0
  }
}));



export const DashboardLayout = (props) => {
  const { children } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(true);
 
  const router = useRouter()


  const dispatch = useDispatch()

  const { user, isSuccess, spinnerAuth } = useSelector((state) => state.auth)
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  )

  

  async function checkAuthenticate() {
    if (!user) {
       await router.push('/admin/login' )
    }

    dispatch(spinner(false))
    // setSpinner(false)
  }

  

  useEffect(() => {
  
    checkAuthenticate() 
  }, [
    user
    // ,  isError, message, dispatch
  ])



  if (spinnerAuth) {
    return ( <Box sx={{ display: 'flex', justifyContent:'center', height:'100vh', alignItems:'center' }}>
    <Box sx={{textAlign:'center'}}><CircularProgress sx={{marginBottom:3}} /><Box>Loading ...</Box></Box>
    
  </Box>)
  }

  return (
    // <AuthGuard>
    <>
      <DashboardLayoutRoot user={user?'true':'false'} >
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%'
          }}
        >
          {children}
        </Box>
      </DashboardLayoutRoot>
      {user ?
      (<><DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
      <DashboardSidebar
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      /></>):null}
      </>
    // </AuthGuard>
  );

};
