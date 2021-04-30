import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex alignItems="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gabriel Santos</Text>
          <Text color="gray.300" fontSize="small">
            gabriel.devloper@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Gabriel Santos"
        src="https://github.com/gabrieldevloper.png"
      />
    </Flex>
  );
}
