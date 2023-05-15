import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react"
import { FC, useState, useEffect, FormEventHandler } from "react"
import {
  useAuthActions,
  useAuthIsSuccess,
  useAuthIsError,
  useAuthErrorMessage,
} from "@/store/authStore"
import { useRouter } from "next/router"

const LoginForm: FC = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const router = useRouter()

  const toast = useToast()

  const isSuccess = useAuthIsSuccess()
  const isError = useAuthIsError()
  const errorMessage = useAuthErrorMessage()

  const { onLogin, resetAuthState } = useAuthActions()

  const handleLogin: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    onLogin(username, password)
  }

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Login berhasil",
        description: "Selamat datang di SIJAKOM",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      })
      router.push("/dashboard")
    }

    if (isError) {
      toast({
        title: "Login gagal",
        description: errorMessage,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      })
      resetAuthState()
    }
  }, [isSuccess, isError, errorMessage])

  return (
    <Box bg="brand.primary" color="brand.white" p={4} mt={10} borderRadius="md">
      <Text as="h1" fontSize="2xl" fontWeight="bold" textAlign="center">
        Login
      </Text>
      <form onSubmit={handleLogin}>
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
          type="submit"
          bg="brand.green"
          color="brand.white"
          variant="outline"
          borderColor="brand.green"
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
      <Text fontSize="sm" textAlign="center" opacity="90%" mt={4}>
        Khusus untuk kepala dan asisten lab
      </Text>
    </Box>
  )
}

export default LoginForm
