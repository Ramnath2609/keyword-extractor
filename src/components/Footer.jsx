import { Text, Flex } from "@chakra-ui/react";
import { RiOpenaiFill } from "react-icons/ri";

export function Footer() {
    return (
        <Flex flexDirection="row" alignItems="center" marginTop="50px">
            <RiOpenaiFill />
            <Text textAlign="center" fontSize="16px" color="white">Powered by OpenAI</Text>
        </Flex>
    )
}