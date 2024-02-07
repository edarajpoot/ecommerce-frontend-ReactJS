import { Container, Typography, Grid, Stack, Avatar ,Paper, Box , Link, LinearProgress} from '@mui/material'
import React from 'react'
import img1 from './images/pic.png'
import Navbar from './Navbar'
import { blue, blueGrey, grey, deepOrange, deepPurple, green, lightGreen, lime, orange, yellow, red } from '@mui/material/colors'
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CallMissedIcon from '@mui/icons-material/CallMissed';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CircleIcon from '@mui/icons-material/Circle';
function GridTest() {

  return (
    <Container fluid>

        <Navbar />

        <Typography sx={styles.mainTitle}>Hi John, Welcome here!</Typography>
        <Typography sx={styles.subTitle}>Explore your own powerful admin panel and keep track of all activity of Today's Quick Stats</Typography>

        

        <Box>
        <Paper sx={{padding:3}} elevation={3}> 
        <Grid  container spacing={3}>
            <Grid item xs={12} sm={6} md={3} >
                <Box>
                   <Stack direction="row">
                    <Avatar sx={{marginRight:2, bgcolor:blueGrey[100]}}>
                        <GroupAddIcon sx={{color:blue[500]}} />
                    </Avatar>
                <Box>
                     <Typography sx={{fontSize:'13px',fontWeight:'600'}}>523</Typography>
                     <Typography>New Visitors</Typography>
                </Box>
                </Stack>
                <Typography sx={{fontSize:'13px',fontWeight:'600', mt:3}}>Quick Links</Typography>
                <Link sx={styles.link}>
                <Stack direction="row" sx={{mt:3}}>
                <MessageOutlinedIcon sx={{ mr:1 }} fontSize='medium' />
                <Typography>35</Typography>
                <Typography sx={{ml:1}}>New Comments</Typography>
                </Stack>
                </Link>
                <Link sx={styles.link}>
                <Stack direction="row" sx={{mt:2}}>
                <EmailOutlinedIcon sx={{ mr:1 }} fontSize='medium' />
                <Typography>23</Typography>
                <Typography sx={{ml:1}}>Emails</Typography>
                </Stack>
                </Link>

                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} >
                <Box>
                   <Stack direction="row">
                   <Avatar sx={{marginRight:2, bgcolor:lightGreen[100]}}>
                        <ShoppingCartIcon sx={{color:green[500]}} />
                    </Avatar>
                <Box>
                     <Typography sx={{fontSize:'13px',fontWeight:'600'}}>104</Typography>
                     <Typography>New Sales</Typography>
                </Box>
                </Stack>
                <Link sx={styles.link}>
                <Stack direction="row" sx={{mt:8}}>
                <MessageOutlinedIcon sx={{ mr:1 }} fontSize='medium' />
                <Typography>35</Typography>
                <Typography sx={{ml:1, fontSize: '15px', fontWeight:400}}>New Mesaages</Typography>
                </Stack>
                </Link>
                <Link sx={styles.link}>
                <Stack direction="row" sx={{mt:2}} >
                <EmailOutlinedIcon sx={{ mr:1 }} fontSize='medium' />
                <Typography>23</Typography>
                <Typography sx={{ml:1}}>Support Requests</Typography>
                </Stack>
                </Link>
    
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} >
                <Box>
                   <Stack direction="row">
                   <Avatar sx={{marginRight:2, bgcolor:deepOrange[50]}}>
                        <CallMissedIcon sx={{color:orange[500]}} />
                    </Avatar>
                <Box>
                     <Typography sx={{fontSize:'13px',fontWeight:'600'}}>45%</Typography>
                     <Typography>Bounce Rate</Typography>
                </Box>
                </Stack>
                <Typography sx={{fontSize:'13px',fontWeight:'600', mt:3}}>Frequently Used Sections</Typography>
                <Link sx={styles.link}>
                <Stack direction="row" sx={{mt:3}}>
                <PostAddOutlinedIcon sx={{ mr:1 }} fontSize='medium' />
                
                <Typography sx={{ml:1}}>Add New Posts</Typography>
                </Stack>
                </Link>
                <Link sx={styles.link}>
                <Stack direction="row" sx={{mt:2}}>
                <EmailOutlinedIcon sx={{ mr:1 }} fontSize='medium' />
        
                <Typography sx={{ml:1}}>Email Inbox</Typography>
                </Stack>
                </Link>
        
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} >
                <Box>
                   <Stack direction="row">
                   <Avatar sx={{marginRight:2, bgcolor:lime[100]}}>
                        <AttachMoneyIcon sx={{color:'red'}} />
                    </Avatar>
                <Box>
                     <Typography sx={{fontSize:'13px',fontWeight:'600'}}>$52,783</Typography>
                     <Typography>Earnings</Typography>
                </Box>
                </Stack>
                <Link sx={styles.link}>
                <Stack direction="row" sx={{mt:8}}>
                <SupervisedUserCircleOutlinedIcon sx={{ mr:1 }} fontSize='medium' />
                
                <Typography sx={{ml:1, fontSize: '15px', fontWeight:400}}>Manage User</Typography>
                </Stack>
                </Link>
                <Link sx={styles.link}>
                <Stack direction="row" sx={{mt:2}}>
                <PersonOutlinedIcon sx={{ mr:1 }} fontSize='medium' />
                
                <Typography sx={{ml:1}}>Profile Setting</Typography>
                </Stack>
                </Link>
    
                
                </Box>
            </Grid>
        </Grid>
        </Paper>
        </Box>
        <Box>
            <Grid sx={{mt:2}} container spacing={3}>
                <Grid item xs={12} sm={12} md={6}>
                    <Paper sx={{padding:3}} elevation={6}>
                        <Stack>
                            <Typography sx={{fontSize:'21px' ,fontWeight:'500'}}>New User</Typography>
                            <Stack direction="column"justifyContent="flex-end"alignItems="flex-end">
                                <Typography sx={{ml:2, fontSize:'22px',color:'black'}}>96%</Typography>
                                <Stack direction="row" >
                            
                                    <TrendingUpIcon sx={{fontSize:'22px',mr:1 ,color:green[300] }} fontSize='medium' /> 
                                    <Typography sx={{ fontSize:'22px',color:green[300] }} >9.2%</Typography>
                                </Stack>
                                <div>
                                     <img src={img1}  alt="" />
                                </div>
                            </Stack>
                        </Stack>
                     </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                <Paper sx={{padding:3}} elevation={6}>
                        
                            <Typography sx={{fontSize:'21px' ,fontWeight:'500'}}>Views</Typography>

                            <Stack direction="row" justifyContent="center" alignItems="center" sx={{mt:2}}>
                                <Typography sx={{fontSize:'30px',fontWeight:'500',color:blue[500]}}>37.</Typography>
                                <Typography sx={{fontSize:'29px',fontWeight:'400',color:blue[500]}}>44k</Typography>
                            </Stack>
                            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                                <ArrowDropUpIcon sx={{color:green[300]}} fontSize='large' />
                                <Typography sx={{fontSize:'28px',fontWeight:'500',color:green[300]}}>937</Typography>
                                <Typography sx={{fontSize:'21px',fontWeight:'400',color:'black'}}>/day</Typography>
                            </Stack>
                        
                </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                <Paper sx={{padding:3}} elevation={6}> 
                        <Stack>
                               <Typography sx={{fontSize:'21px' ,fontWeight:'500'}}>Users % Growth</Typography> 
                               <Typography sx={{fontSize:'26px',fontWeight:'500',color:blue[700], mt:1}}>45,340</Typography>
                               <LinearProgress sx={{color:blue[700] , mt:1, height:8}} variant='determinate' value={86} />
                            <Stack direction="row" justifyContent="space-between"alignItems="flex-end"spacing={2}>
                                <Typography sx={{fontSize:'15px',fontWeight:'400',color:grey[500] , mt:2}}>Since last month</Typography>
                                <Typography sx={{fontSize:'15px',color:blue[700]}}>86%</Typography>
                            </Stack>
                         </Stack>
                </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                <Paper sx={{padding:3}} elevation={6}>
                        <Stack>
                            <Typography sx={{fontSize:'21px' ,fontWeight:'500'}}>Avg.Users</Typography>
                            <Typography sx={{fontSize:'15px',fontWeight:'400',color:grey[500]}}>(Last 30 Days)</Typography>
                            <Typography sx={{fontSize:'38px',fontWeight:'500',color:'black', mt:2}}>1172</Typography>
                        </Stack>
                </Paper>
                </Grid>
            </Grid>
        </Box>
        <Box>
            <Grid sx={{mt:2}} container spacing={3}>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={12}>
                            <Paper sx={{padding:3}} elevation={6}>
                                <Stack>
                                    <Typography sx={{fontSize:'21px' ,fontWeight:'500'}}>Growth</Typography>
                                    <Typography sx={{fontSize:'15px',fontWeight:'400',color:grey[500]}}>(Last 30 Days)</Typography>
                                    <Typography sx={{fontSize:'36px',fontWeight:'500',color:'black', mt:2}}>20.23%</Typography>
                                </Stack>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}> 
                            <Paper sx={{padding:3}} elevation={6}>
                                <Typography sx={{fontSize:'21px' ,fontWeight:'500'}}>Avg.Time</Typography>
                                <Stack direction="row" justifyContent="center" alignItems="center" >
                                    <Typography sx={{fontSize:'30px',fontWeight:'500',color:green[300]}}>3:</Typography>
                                    <Typography sx={{fontSize:'29px',fontWeight:'400',color:green[300]}}>54s</Typography>
                                </Stack>
                                
                                <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                                     <ArrowDropDownIcon sx={{color:red[700]}} fontSize='large' />
                                     <Typography sx={{fontSize:'22px',fontWeight:'500',color:red[700], mr:1}}>3.5%</Typography>
                                     <Typography sx={{fontSize:'18px',fontWeight:'400',color:'black'}}>/day</Typography>
                                </Stack>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                        <Paper sx={{padding:3}} elevation={6}>
                            <Typography sx={{fontSize:'21px' ,fontWeight:'500'}}>Rating</Typography>
                            <Stack direction="row" justifyContent="space-between"alignItems="flex-end"spacing={2} sx={{mt:25}}>
                                <Stack>
                                    <Stack direction="row"> 
                                        <CircleIcon sx={{color:blue[400]}} fontSize='medium' />
                                        <Typography sx={{ml:1,fontSize:'13px'}}>93.4%</Typography>
                                    </Stack>
                                    <Typography sx={{fontSize:'14px'}}>Satisfied</Typography>
                                </Stack>
                                <Stack>
                                    <Stack direction="row"> 
                                        <CircleIcon sx={{color:deepOrange[300]}} fontSize='medium' />
                                        <Typography sx={{ml:1,fontSize:'13px'}}>6.6%</Typography>
                                    </Stack>
                                    <Typography sx={{fontSize:'14px'}}>Unsatisfied</Typography>
                                </Stack>
                            </Stack>
                        </Paper>
                </Grid>
            </Grid>
        </Box>
    </Container>
  )
}

const styles={
    mainTitle:{
        fontSize:'40px',
        fontWeight:'700' ,
         mt:10
    },
    subTitle:{
        fontSize:'15px',
        fontWeight:'500' ,
        color: grey[400],
        mb:4
    },
   
    link:{
        color:'black',
        textDecoration:'none',
        cursor:'pointer',
        '&:hover': {
            color: orange[700],
          }
    }
}
export default GridTest
