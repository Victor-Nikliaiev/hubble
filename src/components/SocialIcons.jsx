import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";
import React from "react";
import { StyledSocialIcons } from "./styles";

export const SocialIcons = () => {
    return (
        <StyledSocialIcons>
            <li>
                <a href='https://twitter.com'>
                    <Twitter />
                </a>
            </li>
            <li>
                <a href='https://facebook.com'>
                    <Facebook />
                </a>
            </li>
            <li>
                <a href='https://linkedin.com'>
                    <LinkedIn />
                </a>
            </li>
        </StyledSocialIcons>
    );
};
