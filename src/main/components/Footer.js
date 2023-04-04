import { text } from "@fortawesome/fontawesome-svg-core"
import styled from "styled-components"
import { COLORS_LIGHT } from "../custom/Values"
export const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>

                © 2023 Biniyam Tiruye. All rights reserved.
            </FooterText>
        </FooterContainer>
    )
}



const FooterContainer = styled.div({
    // border: "1px solid red",
    // width: "100%",
    backgroundColor: COLORS_LIGHT.OFF_WHITE,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 0px",
    fontFamily: "Montserrat",

    // position: "absolute",
    // left: 0,
    // bottom: 0,
    // right: 0,
    // height: 30,

})

const FooterText = styled.div({
    // border: "1px solid red",
    color: COLORS_LIGHT.BLACK,
    fontSize: "80%",

})