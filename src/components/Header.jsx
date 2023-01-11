import { Button, Container, Flex } from "./styles";
import { StyledHeader, Nav, Logo, Image } from "./styles/header";
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src='./images/logo.svg' />
                    <Button>Try it free</Button>
                </Nav>
                <Flex>
                    <div>
                        <h1>Build The Community Your Fans Will Love</h1>
                        <p>
                            The Hubble Space Telescope peers deep into the
                            vastness of space with its amazing view. Unveiling
                            undiscovered galaxies, stars and other cosmic
                            wonders. Shedding light on the mysteries of our
                            universe.
                        </p>
                        <Button bg='#ff0099' color='#fff'>
                            Get Started For Free
                        </Button>
                    </div>
                    <Image src='./images/illustration-mockups.svg' alt='' />
                </Flex>
            </Container>
        </StyledHeader>
    );
};
