import styled from "styled-components"
import { COLORS_LIGHT } from "./Values"


export const Section = styled.div`
// border: 1px solid green;
display: flex;
justify-content: space-around;
align-items:  ${(props) => props.align ? "start" : "center"};;
padding-top: 45px;
width: 100%;
margin-bottom: 5px;
background-color: ${(props) => props.bg2 ? COLORS_LIGHT.SECONDARY_BG : ""}
`



export const Col = styled.div({
    // border: "1px solid red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    width: "100%",
    fontFamily: "Montserrat",
    margin: "0px 25px",

})