import { Box, Flex, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";

interface SevenSegmentDisplayProps {
  number: number;
  digit: string;
}

export default function SevenSegmentDisplay({
  number,
  digit,
}: SevenSegmentDisplayProps) {
  const decoder = [
    {
      a: true,
      b: true,
      c: true,
      d: false,
      e: true,
      f: true,
      g: true,
    },
    {
      a: false,
      b: false,
      c: true,
      d: false,
      e: false,
      f: true,
      g: false,
    },
    {
      a: true,
      b: false,
      c: true,
      d: true,
      e: true,
      f: false,
      g: true,
    },
    {
      a: true,
      b: false,
      c: true,
      d: true,
      e: false,
      f: true,
      g: true,
    },
    {
      a: false,
      b: true,
      c: true,
      d: true,
      e: false,
      f: true,
      g: false,
    },
    {
      a: true,
      b: true,
      c: false,
      d: true,
      e: false,
      f: true,
      g: true,
    },
    {
      a: true,
      b: true,
      c: false,
      d: true,
      e: true,
      f: true,
      g: true,
    },
    {
      a: true,
      b: true,
      c: true,
      d: false,
      e: false,
      f: true,
      g: false,
    },
    {
      a: true,
      b: true,
      c: true,
      d: true,
      e: true,
      f: true,
      g: true,
    },
    {
      a: true,
      b: true,
      c: true,
      d: true,
      e: false,
      f: true,
      g: true,
    },
  ];

  const bgColor = useColorModeValue("blackAlpha.100", "blackAlpha.200");
  const color = useColorModeValue("teal.700", "red.500");

  return (
    <Box w="100%">
      <Grid
        templateColumns="3fr 5fr 3fr"
        templateRows="3fr 7fr 3fr 7fr 3fr"
        gridGap=""
      >
        <GridItem
          pt="2"
          colStart={2}
          colEnd={2}
          rowSpan={1}
          minW="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Flex
            borderRadius={35}
            bg={decoder[number].a ? color : bgColor}
            minW="100%"
            minH="100%"
            transition="0.2s ease-in"
          />
        </GridItem>
        <GridItem pl="1" colStart={1} colEnd={1} rowStart={2} rowEnd={3}>
          <Flex
            borderRadius={35}
            bg={decoder[number].b ? color : bgColor}
            minW="100%"
            minH="100%"
            transition="0.2s ease-in"
          />
        </GridItem>
        <GridItem pr="1" colStart={3} colEnd={3} rowStart={2} rowEnd={3}>
          <Flex
            borderRadius={35}
            bg={decoder[number].c ? color : bgColor}
            minW="100%"
            minH="100%"
            transition="0.2s ease-in"
          />
        </GridItem>
        <GridItem py="1" colStart={2} colEnd={2} rowStart={3}>
          <Flex
            borderRadius={35}
            bg={decoder[number].d ? color : bgColor}
            minW="100%"
            minH="100%"
            transition="0.2s ease-in"
          />
        </GridItem>
        <GridItem pl="1" colStart={1} colEnd={1} rowStart={4}>
          <Flex
            borderRadius={35}
            bg={decoder[number].e ? color : bgColor}
            minW="100%"
            minH="100%"
            transition="0.2s ease-in"
          />
        </GridItem>
        <GridItem pr="1" colStart={3} colEnd={3} rowStart={4}>
          <Flex
            borderRadius={35}
            bg={decoder[number].f ? color : bgColor}
            minW="100%"
            minH="100%"
            transition="0.2s ease-in"
          />
        </GridItem>
        <GridItem pb="2" colStart={2} colEnd={2} rowStart={5}>
          <Flex
            borderRadius={35}
            bg={decoder[number].g ? color : bgColor}
            minW="100%"
            minH="100%"
            transition="0.2s ease-in"
          />
          {digit}
        </GridItem>
      </Grid>
    </Box>
  );
}
