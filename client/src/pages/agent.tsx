import { Box, Typography, Stack } from "@pankod/refine-mui";
import { AgentCard, CustomButton } from "components";
import {useList} from '@pankod/refine-core';

const Agents = () => {
  const {data, isLoading, isError} = useList({
    resource: 'users',
  });

  const allAgents = data?.data ?? [];
  if(isLoading) return <div>loading...</div>
  if(isError) return <div>error...</div>
  return (
    <Box>
      {/* <Stack direction='row'>
        <Typography
          fontWeight={700}
          fontSize={25}
          color="#11142D"
          justifyContent='space-around'
          sx={{flex:1}}
        >
          Agent List
        </Typography>
        <CustomButton
          title="+Add Agent"
          backgroundColor="#475BE8"
          type="button"
          color="#FCFCFC"
          handleClick={() => { }}
        />
      </Stack>
      <Box>
        <AgentCard />
      </Box> */}
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        Agent List
      </Typography>
      <Box
        mt="20px"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          backgroundColor: '#fcfcfc',
        }}
      >
        {allAgents.map((agent) => (
          <AgentCard 
            key={agent._id}
            id={agent._id}
            name={agent.name}
            email={agent.email}
            avatar={agent.avatar}
            noOfProperties={agent.allProperties.lenght}
          />
        ))}
      </Box>
    </Box>
  )
}

export default Agents;