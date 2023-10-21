import { Heading, Text } from "@chakra-ui/react";

export function Header() {
    return (
        <>
            <Heading color="white" marginBottom="1rem">AI Keywords Generator</Heading>
            <Text textAlign="center" fontSize="25px" marginBottom="45px">
                Paste your text below and we will generate the keywords for you.
            </Text>
        </>
    )
}