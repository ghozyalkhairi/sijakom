import { Box, Button, Text } from "@chakra-ui/react"
import { FC, ReactNode } from "react"
import DashboardNav from "./DashboardNav"

interface Props {
  children: ReactNode
}

const DashboardLayout: FC<Props> = ({ children }) => {
  return (
    <Box w="100%" minH="100vh" display="flex" flexDir="column">
      <Box w="100%" mb={4} display="flex" flexDir="row">
        <DashboardNav />
        <Box w="100%" bg="brand.semiWhite">
          <Box
            w="100%"
            bg="brand.primary"
            p={3}
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Button
              bg="brand.white"
              color="brand.primary"
              size="md"
              mr={4}
              fontSize="sm"
              fontWeight="normal"
            >
              Logout
            </Button>
          </Box>
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default DashboardLayout
