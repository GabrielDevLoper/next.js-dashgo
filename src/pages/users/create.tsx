import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    HStack,
    SimpleGrid,
    VStack,
    useToast
} from "@chakra-ui/react";
import {SubmitHandler, useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import Link from "next/link";
import {Input} from "../../components/Form/Input";
import {Header} from "../../components/Header";
import {Sidebar} from "../../components/Sidebar";

interface CreateUserFormData {
    name: string;
    password: string;
    email: string;
    password_confirmation:string;
}

const createUserFormSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
    password: yup.string().required("Senha obrigatória").min(6, "A senha deve ser maior ou igual á 6"),
    password_confirmation: yup.string().oneOf([
        null,
        yup.ref("password")
    ], "As senhas precisam ser iguais"),

})


export default function UserCreate() {
    const {register, handleSubmit, formState} = useForm({
        resolver: yupResolver(createUserFormSchema)
    });
    const toast = useToast();


    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {

        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log(values);
        toast({
            title: "Conta Criada",
            description: "A conta foi criada com sucesso",
            status: "success",
            duration: 5000,
            isClosable: true,
            position:"top"
        })
    }

    const errors = formState.errors;

    return (
        <Box>
            <Header/>
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar/>

                <Box as="form" onSubmit={handleSubmit(handleCreateUser)} flex="1" borderRadius={8} bg="gray.800"
                     p={["6", "8"]}>
                    <Heading size="lg" fontWeight="normal">
                        Criar usuários
                    </Heading>
                    <Divider my="6" borderColor="gray.700"/>
                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
                            <Input name="name" label="Nome completo" {...register("name")} error={errors.name}/>
                            <Input name="email" label="E-mail" {...register("email")} type="email" error={errors.email}/>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
                            <Input name="password" type="password" label="Senha" {...register("password")}
                                   error={errors.password}/>
                            <Input
                                name="password_confirmation"
                                label="Confirmação da senha"
                                type="password"
                                {...register("password_confirmation")}
                                error={errors.password_confirmation}
                            />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justifyContent="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button as="a" colorScheme="whiteAlpha">
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type="submit" colorScheme="pink" isLoading={formState.isSubmitting}>Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}
