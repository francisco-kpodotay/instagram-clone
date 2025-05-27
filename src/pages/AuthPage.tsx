import AuthForm from "@/components/AuthForm";
import { Box, Flex, Image, VStack } from "@chakra-ui/react";

function AuthPage() {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      {/* left side */}
      <Box display={{ base: "none", md: "block" }}>
        <Image src="/auth.png" h={650} alt="Phone img" />
      </Box>

      {/* right side */}
      <VStack align={"stretch"}>
        <AuthForm />
        <Box textAlign={"center"}>Get the app.</Box>
        <Flex justifyContent={"center"} gap={5}>
          <Image src="/playstore.png" h={10} alt="Playstore logo" />
          <Image src="/microsoft.png" h={10} alt="Microsoft logo" />
        </Flex>
      </VStack>
    </Flex>
  );
}

export default AuthPage;
