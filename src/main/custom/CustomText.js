import { useState } from "react";
import styled from "styled-components"
import { COLORS_LIGHT } from "./Values";

export const CustomParagraph = ({ title = "", body = "", display = "trimmed", limit = 300 }) => {

    let trimmedContent = body.slice(0, limit);
    let overflowContent = body.slice(limit);


    let assigned = display === "full" ? body : trimmedContent
    const [content, setContent] = useState(assigned);
    const [detail, setDetail] = useState(display === "full" ? "full" : "trimmed");

    return (
        <CustomDiv>
            <Header>
                {/* <Beacon /> */}
                <CustomTitleDiv>{title}</CustomTitleDiv>
            </Header>
            <Body>
                {trimmedContent}
                {detail === "full" && overflowContent}


                {body.length > limit && detail === "trimmed" && <><span>...</span><ReadMore onClick={() => { setDetail("full") }}>Show More</ReadMore></>}
                {body.length > limit && detail === "full" && <ReadMore onClick={() => { setDetail("trimmed") }}>Show Less</ReadMore>}
            </Body>
        </CustomDiv>
    )
}

export const CustomTitle = ({ title, style = "dark" }) => {
    return (
        <CustomDiv>
            <Header>
                {/* <Beacon /> */}
                <CustomTitleDiv light={style == "light"}>{title}</CustomTitleDiv>
            </Header>
        </CustomDiv>
    )
}

const CustomDiv = styled('div')`
// border:1px solid red;
// padding: 15px 15px;
`
const CustomTitleDiv = styled('div')`
font-size: 95%;
font-weight: ${(props) => props.light ? "400" : "600"};
font-family: Montserrat;
padding: 1px;
color:${(props) => props.light ? COLORS_LIGHT.MEDIUM_GRAY : COLORS_LIGHT.BLACK}
`

const Header = styled('div')`
// border:1px solid red;
display: flex;
margin-bottom: 20px;
flex-direction: row;
justify-content: start;
align-items: center;
`
const Beacon = styled('div')`
    background-color: ${COLORS_LIGHT.ACCENT};
    height: 12px;
    width: 4px;
    margin-right: 5px
`
const Body = styled('div')`
color: ${COLORS_LIGHT.MEDIUM_GRAY};
line-height: 24px;
`

const ReadMore = styled('div')`
color: ${COLORS_LIGHT.ACCENT};
margin-top: 15px;
cursor: pointer
`
