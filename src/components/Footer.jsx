import { SocialIcons } from "./SocialIcons.jsx";
import { Container, Flex, StyledFooter } from "./styles";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <img src='./images/logo_white.svg' alt='' />
                <Flex>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Molestiae sapiente aperiam earum expedita
                            possimus animi cumque quaerat? Dolorem, unde quam.
                        </li>
                        <li>+1-343-222-1342</li>
                        <li>example@email.com</li>
                    </ul>
                    <ul>
                        <li>About us</li>
                        <li>What we do</li>
                        <li>FAQ</li>
                    </ul>
                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>

                    <SocialIcons />
                </Flex>
                <p>&copy; 2023 Huddle. All right reserved</p>
            </Container>
        </StyledFooter>
    );
};
