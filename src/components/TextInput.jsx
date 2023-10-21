/* eslint-disable react/prop-types */
import { Button, Textarea, useToast } from "@chakra-ui/react";
import { useCallback, useState } from "react";

export function TextInput({ extractKeywords }) {
    const [text, setText] = useState("");
    const toast = useToast();

    const onExtract = useCallback(() => {
        if(text === "") {
            toast({
                title: "Text is empty",
                description: "Please enter some text to extract keywords.",
                status: "error",
                duration: 5000
            })
        } else {
            extractKeywords(text)
        }
    }, [extractKeywords, text, toast]);

    return (
        <>
            <Textarea
                height={200}
                padding={4}
                value={text}
                onChange={(e) => setText(e.target.value)}
                bg="blue.300"
                color="white"
            />
            <Button bg="blue.500" color="white" width="100%" marginTop={4} _hover={{ bg: 'blue.700'}} onClick={onExtract}>
                Extract Keywords
            </Button>
        </>
    );
}
