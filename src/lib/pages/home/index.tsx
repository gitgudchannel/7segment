import { Box, Flex, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import dayjs from "dayjs";

import SevenSegmentDisplay from "lib/components/SevenSegmentDisplay";
import { useEffect, useState } from "react";

const Home = () => {
  const [nums, setNums] = useState([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = dayjs().format("HHMMss");
      const timeArr = [...time];
      const timeNumArr = timeArr.map((n) => parseInt(n, 10));
      setNums(timeNumArr);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const color = useColorModeValue("teal.700", "red.500");

  return (
    <Grid gap={4} templateColumns="repeat(14, 1fr)">
      <GridItem colSpan={4}>
        <Flex>
          <SevenSegmentDisplay number={nums[0]} digit="H" />
          <SevenSegmentDisplay number={nums[1]} digit="H" />
        </Flex>
      </GridItem>
      <GridItem>
        <Flex
          justifyContent="space-evenly"
          alignItems="center"
          flexDirection="column"
          h="100%"
        >
          <Box
            borderRadius={4}
            w="1.2rem"
            minW="1.2rem"
            minH="1.2rem"
            bgColor={color}
            transition="0.2s ease-in"
          />
          <Box
            borderRadius={4}
            w="1.2rem"
            minW="1.2rem"
            minH="1.2rem"
            transition="0.2s ease-in"
            bgColor={color}
          />
        </Flex>
      </GridItem>
      <GridItem colSpan={4}>
        <Flex>
          <SevenSegmentDisplay number={nums[2]} digit="M" />
          <SevenSegmentDisplay number={nums[3]} digit="M" />
        </Flex>
      </GridItem>
      <GridItem>
        <Flex
          justifyContent="space-evenly"
          alignItems="center"
          flexDirection="column"
          h="100%"
        >
          <Box
            borderRadius={4}
            w="1.2rem"
            minW="1.2rem"
            minH="1.2rem"
            transition="0.2s ease-in"
            bgColor={color}
          />
          <Box
            borderRadius={4}
            w="1.2rem"
            minW="1.2rem"
            minH="1.2rem"
            transition="0.2s ease-in"
            bgColor={color}
          />
        </Flex>
      </GridItem>
      <GridItem colSpan={4}>
        <Flex>
          <SevenSegmentDisplay number={nums[4]} digit="S" />
          <SevenSegmentDisplay number={nums[5]} digit="S" />
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Home;
