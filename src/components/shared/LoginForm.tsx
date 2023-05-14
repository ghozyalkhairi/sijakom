import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react"
import { FC, FormEventHandler, useState } from "react"
import { signIn } from "next-auth/react"

const LoginForm: FC = () => {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const onLogin: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    signIn("credentials", {
      username,
      password,
      callbackUrl: "/dashboard",
    })
  }
  return (
    <Box bg="brand.primary" color="brand.white" p={4} mt={10} borderRadius="md">
      <Text as="h1" fontSize="2xl" fontWeight="bold" textAlign="center">
        Login
      </Text>
      <form onSubmit={onLogin}>
        <FormControl id="username" mt={4}>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            bg="brand.white"
            color="black"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            bg="brand.white"
            color="black"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        <Text fontSize="sm" textAlign="center" opacity="90%" mt={4}>
          Khusus untuk kepala dan asisten lab
        </Text>
      </form>
    </Box>
  )
}

export default LoginForm
