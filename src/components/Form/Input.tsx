import {
  FormControl,
  FormLabel,
  Input as ChackraInput,
  InputProps as ChakraInputProps,
  FormErrorMessage
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import {FieldError} from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error = null, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChackraInput
        name={name}
        id={name}
        {...rest}
        focusBorderColor="pink.500"
        bg="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
        placeholder="Insira seu e-mail"
      />

      {!!error && (
          <FormErrorMessage>
              {error.message}
          </FormErrorMessage>
      )}

    </FormControl>
  );
}

export const Input = forwardRef(InputBase);