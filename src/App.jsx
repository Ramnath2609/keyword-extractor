import { Box, Container } from "@chakra-ui/react"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { TextInput } from "./components/TextInput"
import { useCallback } from "react"

function App() {
  // const [keyword, setKeywords] = useState("");
  // const [loading, setIsLoading] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  const extractKeywords = useCallback(async (text) => {
    // setIsLoading(true);
    // setIsOpen(true);
    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPEN_API_KEY}`
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: 'Extract keywords from this text. Make the first letter of each word uppercase and separate with commas.\n\n' + text + '',
        temperature: 0.5,
        max_tokens: 60,
        frequency_penalty: 0.8
      })
    }
    const response = await fetch(import.meta.env.VITE_OPENT_API_ENDPOIT, options);
    const json = await response.json();
    const data = json.choices[0].text.trim();
    console.log(data);
    // setKeywords(data);
    // setIsLoading(false);
  }, []);

  return (
    <Box bg="blue.600" color="white" height="100vh" padding="130px">
      <Container maxW="3xl" centerContent>
        <Header />
        <TextInput extractKeywords={extractKeywords} />
        <Footer />
      </Container>
    </Box>
  )
}

export default App
