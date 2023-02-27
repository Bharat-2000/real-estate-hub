import { Box, Typography, Stack } from '@pankod/refine-mui';
import img1 from '../../photos/photo1.png';


const AgentCard = () => {
  return (
    <Stack
      direction='row'
    >
      <Box>
        <img
          src={img1}
          alt="agent profile picture"
          style={{
            width: "250px",
            height: "193px",
            borderRadius: "8px"
          }}
        />
      </Box>
      <Box>
        
      </Box>
    </Stack>
  )
}

export default AgentCard