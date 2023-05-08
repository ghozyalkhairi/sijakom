import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react"
import { FC, useState } from "react"

const LoginForm: FC = () => {
  const [username, setUsername] = useState<string>("")
  return (
    <Box bg="brand.primary" color="brand.white" p={4} mt={4} borderRadius="md">
      <Text as="h1" fontSize="2xl" fontWeight="bold" textAlign="center">
        Login
      </Text>
      <form>
        <FormControl id="username" mt={4}>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            bg="brand.white"
            color="black"
            placeholder="username"
          />
        </FormControl>
        <FormControl id="password" mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            bg="brand.white"
            color="black"
            placeholder="password"
          />
        </FormControl>
        <Button
          bg="brand.green"
          color="brand.white"
          variant="outline"
          borderColor="brand.green"
          type="submit"
          mt={4}
          w="100%"
          _hover={{
            bg: "brand.white",
            color: "brand.green",
          }}
        >
          Login
        </Button>
      </form>
    </Box>
  )
}

export default LoginForm
