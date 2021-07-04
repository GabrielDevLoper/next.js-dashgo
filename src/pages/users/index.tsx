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
    useBreakpointValue,
    Spinner
} from "@chakra-ui/react";
import Link from "next/link";
import {
    RiAddLine,
    RiDeleteBinLine,
    RiEditLine,
    RiPencilLine,
} from "react-icons/ri";

import HorizontalScroll from "react-scroll-horizontal";

import {Header} from "../../components/Header";
import {Pagination} from "../../components/Pagination";
import {Sidebar} from "../../components/Sidebar";

import { useQuery } from "react-query";
import {api} from "../../services/api";
import {useUsers} from "../../services/hooks/useUsers";
import {useState} from "react";

export default function UserList() {
   const [page, setPage] = useState(1);

    const { data, isLoading, isFetching ,error } = useUsers(page);

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Box>
            <Header/>
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar/>

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justifyContent="space-between" alignItems="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuários
                            { !isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4"/>}

                        </Heading>
                        <Link href="/users/create" passHref>
                            <Button
                                as="a"
                                cursor="pointer"
                                size="sm"
                                fontSize="sm"
                                colorScheme="pink"
                                leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
                            >
                                Novo usuário
                            </Button>
                        </Link>
                    </Flex>
                    {
                        isLoading ? (
                            <Flex justify="center">
                                <Spinner />
                            </Flex>
                        ) : error ? (
                            <Flex justify="center">
                                <Text>Falha ao obter dados</Text>
                            </Flex>
                        ) : (
                            <>
                            <Table colorScheme="whiteAlpha">
                                <Thead>
                                    <Tr>
                                        <Th>Usuário</Th>
                                        {isWideVersion && <Th>Data de cadastro</Th>}
                                        <Th w="8">Ações</Th>
                                    </Tr>
                                </Thead>

                                <Tbody>
                                    {data.users.map(user => (
                                        <Tr key={user.id}>
                                            <Td px={["4", "4", "6"]}>
                                                <Box>
                                                    <Text fontWeight="bold">{user.name}</Text>
                                                    <Text fontSize="sm" color="gray.300">
                                                        {user.email}
                                                    </Text>
                                                </Box>
                                            </Td>
                                            {isWideVersion && <Td px="6">{user.createdAt}</Td>}
                                            <Td px={["4", "4", "6"]}>
                                                <HStack>
                                                    <Button
                                                        as="a"
                                                        cursor="pointer"
                                                        size="sm"
                                                        fontSize="sm"
                                                        colorScheme="purple"
                                                    >
                                                        <Icon as={RiEditLine}/>
                                                    </Button>
                                                    <Button
                                                        as="a"
                                                        cursor="pointer"
                                                        size="sm"
                                                        fontSize="sm"
                                                        colorScheme="purple"
                                                    >
                                                        <Icon as={RiDeleteBinLine}/>
                                                    </Button>
                                                </HStack>
                                            </Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                            <Pagination totalCountOfRegister={data.totalCount} currentPage={page} onPageChange={setPage} />
                            </>
                        )
                    }

                </Box>
            </Flex>
        </Box>
    );
}
