import React from "react";
import { Grommet, Box, Meter, Stack, Text } from "grommet";

const MultipleValues = ({ remainingColor, remaining }) => {
  return (
    <Grommet>
      <Box align="center" pad="large">
        <Stack anchor="center">
          <Meter
            type="circle"
            width="200"
            height="200"
            thickness="medium"
            values={[
              {
                value: 55,
                label: "sixty",
                color: `${remainingColor}`,
                onClick: () => {}
              }
            ]}
            aria-label="meter"
            round
          />
          <Box align="center">
            <Box direction="row" align="center" pad={{ bottom: "xsmall" }}>
              <Text size="xlarge" weight="bold">
                {remaining}
              </Text>
            </Box>
            <Text size="small">Remaining</Text>
          </Box>
        </Stack>
      </Box>
    </Grommet>
  );
};
export default MultipleValues;
