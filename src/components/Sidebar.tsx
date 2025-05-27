import { Avatar as ChakraAvatar, Box, Flex, Link, useBreakpointValue } from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../assets/constants";
import { BiLogOut } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { Tooltip } from "./ui/tooltip";

function Sidebar() {
  /* TypeScript sees Chakra's Avatar as a namespace (due to how Chakra bundles types), 
  which is not callable in JSX. Casting it as React.FC<any> bypasses the incorrect 
  type resolution safely. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Avatar = ChakraAvatar as unknown as React.FC<any>;
const shouldShowTooltip = useBreakpointValue({ base: true, md: false })

  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },

    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      avatar: <Avatar size={"sm"} name="Burak Orkmez" src="/profilepic.png" />,
      text: "Profile",
      link: "/asaprogrammer",
    },
  ];

  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={10} w={"full"} height={"full"}>
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor={"pointer"}
        >
          <InstagramLogo />
        </Link>
        <Link
          to={"/"}
          as={RouterLink}
          p={2}
          display={{ base: "block", md: "none" }}
          cursor={"pointer"}
          borderRadius={6}
          _hover={{ bg: "whiteAlpha.200" }}
          w={10}
        >
          <InstagramMobileLogo />
        </Link>

        {
          <Flex direction={"column"} gap={5} cursor={"pointer"}>
            {sidebarItems.map((item, index) => {
              return (
                <Tooltip
                  key={index}
                  showArrow={true}
                  content={item.text}
                 positioning={{ placement: "right-end" }}
                  /*  ml={1} */
                  openDelay={500}
                  disabled={!shouldShowTooltip}
                >
                  <Link
                    display={"flex"}
                    to={item.link || null}
                    as={RouterLink}
                    alignItems={"center"}
                    gap={4}
                    _hover={{ bg: "whiteAlpha.400" }}
                    borderRadius={6}
                    p={2}
                    w={{ base: 10, md: "full" }}
                    justifyContent={{ base: "center", md: "flex-start" }}
                  >
                   
                    {item.icon}
                    <Box display={{ base: "none", md: "block" }}>
                      {item.text}
                    </Box>
                  </Link>
                </Tooltip>
              );
            })}
          </Flex>
        }

        <Tooltip
          showArrow={true}
          content={"Logout"}
          positioning={{ placement: "right-end" }}
          /* ml={1} */
          openDelay={500}
          disabled={!shouldShowTooltip}
        >
          <Link
            display={"flex"}
            to={"/auth"}
            as={RouterLink}
            alignItems={"center"}
            gap={4}
            _hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: "full" }}
            mt={"auto"}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <BiLogOut size={25} />
            <Box display={{ base: "none", md: "block" }}>Logout</Box>
          </Link>
        </Tooltip>
      </Flex>
    </Box>
  );
}

export default Sidebar;
