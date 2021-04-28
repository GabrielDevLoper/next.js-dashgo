import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex alignItems="center">
      <Box mr="4" textAlign="right">
        <Text>Gabriel Santos</Text>
        <Text color="gray.300" fontSize="small">
          gabriel.devloper@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Gabriel Santos"
        src="https://github.com/gabrieldevloper.png"
      />
    </Flex>
  );
}
