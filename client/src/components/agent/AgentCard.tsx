import { Box, Typography, Stack } from '@pankod/refine-mui';
import img1 from '../../photos/photo1.png';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import { AgentCardProp, InfoBarProps } from 'interfaces/agent';
import {Link} from '@pankod/refine-react-router-v6';
import { useGetIdentity } from '@pankod/refine-core';
import { EmailOutlined, LocationCity, Phone, Place } from '@mui/icons-material';

const InfoBar = ({icon, name} : InfoBarProps) => (
  <Stack flex={1} minWidth={{xs: '100%', sm: 300}} gap={1.5} direction="row">
    {icon}
    <Typography fontSize={14} color="#808191">{name}</Typography>
  </Stack>
)

const AgentCard = ({id, name, email, avatar, noOfProperties} : AgentCardProp) => {

  const {data: currentUser} = useGetIdentity();
  const generateLink = () =>{
    if(currentUser.email === email) return '/my-profile'
    return `/agent/show/${id}`;
  }
  return (
    // <Stack
    //   direction='row'
    //   gap={1}
    // >
    //   <Box>
    //     <img
    //       src={img1}
    //       alt="agent profile picture"
    //       style={{
    //         width: "250px",
    //         height: "193px",
    //         borderRadius: "8px"
    //       }}
    //     />
    //   </Box>
    //   <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    //     <Box>
    //       <Typography fontWeight={600} fontSize="22px">Karen Ellia Boyette</Typography>
    //       <Typography fontWeight={400} fontSize="14px">Real-Estate Agent</Typography>
    //     </Box>
    //     <Stack direction="row" sx={{flexWrap:'true'}} gap={5}>
    //       <Stack>
    //         <Stack direction="row" gap={1}>
    //           <MailIcon fontSize='small' />
    //           <Typography variant="caption">kareneboyette@armyspy.com</Typography>
    //         </Stack>
    //         <Stack direction="row" gap={1}>
    //           <PhoneIcon fontSize='small' />
    //           <Typography variant="caption">+502-324-4194</Typography>
    //         </Stack>
    //       </Stack>
    //       <Stack>
    //         <Stack direction="row" gap={1}>
    //           <LocationOnIcon fontSize='small' />
    //           <Typography variant="caption">Menchester</Typography>
    //         </Stack>
    //         <Stack direction="row" gap={1}>
    //           <BusinessIcon fontSize='small' />
    //           <Typography variant="caption">15 Properties</Typography>
    //         </Stack>
    //       </Stack>
    //     </Stack>
    //   </Box>
    // </Stack>
    <Box
      component={Link}
      to={generateLink()}
      width="100%"
      sx={{
        display: 'flex',
        flexDirection: {xs: 'column', sm: 'row'},
        gap:"20px",
        padding: '20px',
        '& : hover': {
          boxShadow: '0 22px 45px 2px rgba(176, 176, 176, 0.1)'
        }
      }}
    >
      <img 
        src={avatar}
        alt="user"
        width={90}
        height={90}
        style={{borderRadius: 8, objectFit: 'cover'}}
      />
      <Stack direction='column' justifyContent='space-between' flex={1} gap={{xs: 4, sm: 2}}>
        <Stack gap={2} direction="row" flexWrap="wrap" alignItems='center'>
          <Typography fontSize={22} fontWeight={600} color="#11142d">{name}</Typography>
          <Typography fontSize={14} color="#808191">Real-Estate Agent</Typography>
        </Stack>
        <Stack direction="row" flexWrap="wrap" justifyContent='space-between' alignItems='center' gap={2}>
          <InfoBar
            icon={<EmailOutlined sx={{color:'#808191'}}/>}
            name={email}
          />
          <InfoBar
            icon={<Place sx={{color:'#808191'}}/>}
            name="Londn"
          />
          <InfoBar
            icon={<Phone sx={{color:'#808191'}}/>}
            name='+502-111-1345'
          />
          <InfoBar
            icon={<LocationCity sx={{color:'#808191'}}/>}
            name={`${noOfProperties} Properties`}
          />
        </Stack>
      </Stack>
    </Box>
  )
}

export default AgentCard