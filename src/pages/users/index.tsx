import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  HStack,
  theme,
} from "@chakra-ui/react";
import {
  RiAddLine,
  RiDeleteBinLine,
  RiEditLine,
  RiPencilLine,
} from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justifyContent="space-between" alignItems="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Button
              as="a"
              cursor="pointer"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Novo usuário
            </Button>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th w="8">Ações</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td px="6">
                  <Box>
                    <Text fontWeight="bold">Gabriel Santos</Text>
                    <Text fontSize="sm" color="gray.300">
                      gabriel.limabarreto@hotmail.com
                    </Text>
                  </Box>
                </Td>
                <Td px="6">15 de Fevereiro, 2021</Td>
                <Td px="6">
                  <HStack>
                    <Button
                      as="a"
                      cursor="pointer"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                    >
                      <Icon as={RiEditLine} />
                    </Button>
                    <Button
                      as="a"
                      cursor="pointer"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                    >
                      <Icon as={RiDeleteBinLine} />
                    </Button>
                  </HStack>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
