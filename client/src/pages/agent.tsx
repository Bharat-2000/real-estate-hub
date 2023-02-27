import { Box, Typography, Stack } from "@pankod/refine-mui";
import { AgentCard, CustomButton } from "components";
import {useList} from '@pankod/refine-core';

const Agent = () => {
  const {data, isLoading, isError} = useList({
    resource: 'users',
  });
  const allAgents = data?.data;
  return (
    <Box>
      <Stack direction='row'>
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
      </Box>
    </Box>
  )
}

export default Agent;