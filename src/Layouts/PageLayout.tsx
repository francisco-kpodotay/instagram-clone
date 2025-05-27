import Sidebar from "@/components/Sidebar";
import { Box, Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

function PageLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  return (
    <Flex>
      {/* left siebar */}
      {pathname !== "/auth" && (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      )}

      {/* page content */}
      <Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}>
        {children}
      </Box>
    </Flex>
  );
}

export default PageLayout;
