import { ThemeProvider } from "styled-components";
import { Card } from "./components/Card.jsx";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header";
import { Container } from "./components/styles";
import { GlobalStyles } from "./components/styles/Global.js";
import { content } from "./content.js";

const theme = {
    colors: {
        header: "#ebfbff",
        body: "#fff",
        footer: "#003333",
    },
    mobile: "768px",
};
export function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />

            <Header />
            <Container>
                {content.map(item => (
                    <Card key={crypto.randomUUID()} item={item} />
                ))}
            </Container>
            <Footer />
        </ThemeProvider>
    );
}
