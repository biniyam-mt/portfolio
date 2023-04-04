import { useEffect, useState } from "react"
import styled from "styled-components"
import { Link, useLocation } from 'react-router-dom'
import { COLORS_LIGHT } from "../custom/Values";
import basicInfo from "../content/basicInfo.json"
import Toggle from "react-toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt, faCloudMoon, faLocationDot, faPhone, faUserGraduates } from '@fortawesome/free-solid-svg-icons'
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
export const Nav = () => {

    const currentPath = useLocation().pathname;
    const [navBarColor, setNavBarColor] = useState("white")
    const [isDark, setIsDark] = useState(false)

    const listenScrollEvent = (event) => {
        if (window.scrollY === 0) {
            return setNavBarColor("transparent")
        } else {
            return setNavBarColor("yellow")
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);
    return (
        <NavContainer style={{ backgroundColor: navBarColor }}>
            {/* <TitleContainer >
                <Title>
                    
                </Title>
                <Beacon active={currentPath === "/"} />

            </TitleContainer> */}
            <NavItemsContainer>
                <StyledLink to={"/"}>
                    <NavItem active={currentPath === "/"}>
                        <NavBeacon active={currentPath === "/"} />
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                </StyledLink>
                <StyledLink to={"/research"}>
                    <NavItem active={currentPath === "/research"}>
                        <NavBeacon active={currentPath === "/research"} />
                        <NavText>
                            Research
                        </NavText>
                    </NavItem>
                </StyledLink>
                <StyledLink to={"/personal"}>
                    <NavItem active={currentPath === "/personal"}>
                        <NavBeacon active={currentPath === "/personal"} />
                        <NavText>
                            Personal
                        </NavText>
                    </NavItem>
                </StyledLink>
            </NavItemsContainer>
            <DarkModeContainer>
                {isDark && <ThemeIcons>
                    <FontAwesomeIcon icon={faCloudMoon} size="s" color={COLORS_LIGHT.ACCENT} />
                </ThemeIcons>}
                {!isDark && <ThemeIcons>
                    <FontAwesomeIcon icon={faSun} size="s" color={COLORS_LIGHT.ACCENT} />
                </ThemeIcons>}
                <Toggle
                    defaultChecked={false}
                    className='custom'
                    icons={{
                        checked: null,
                        unchecked: null,
                    }}
                    onChange={() => { setIsDark(!isDark) }} />
                {/* <ThemeModeText>{!isDark ? "Dark Mode" : "Light Mode"}</ThemeModeText> */}

            </DarkModeContainer>
        </NavContainer>
    )
}

const NavContainer = styled.div({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    padding: "0px 20px",
    position: "fixed",
    right: 0,
    left: 0,
    zIndex: 1000,
    fontFamily: "Montserrat"


})

const TitleContainer = styled.div({
    // border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    cursor: "pointer"


})
const Title = styled.div({
    border: "1px solid red",
    fontSize: "115%",
    fontWeight: 600

})
const Beacon = styled('div')`
    background-color: ${(props) => props.active ? COLORS_LIGHT.ACCENT : "transparent"};
    height: 5px;
    width: 15px;
`
const NavItemsContainer = styled.div({
    // border: "1px solid red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    width: "50%",
    // fontWeight: "bold"

})

const NavItem = styled('div')`
// border: 1px solid green;
    height: 33px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin:0px 20px;
    padding-bottom: 15px;
    // font-family: Montserrat  ${(props) => props.active ? "" : ""};
    cursor: pointer;
    font-size: 85%;
    font-weight:${(props) => props.active ? "Bold" : ""};
    color: ${(props) => props.active ? COLORS_LIGHT.BLACK : COLORS_LIGHT.DARK_GRAY}
`

const NavBeacon = styled('div')`
    background-color: ${(props) => props.active ? COLORS_LIGHT.ACCENT : "transparent"};
    height: 3px;
    width: 20px


`;

const DarkModeContainer = styled.div({
    // border: "1px solid red",
    fontWeight: 500,
    fontSize: "85%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    paddingRight: "10px"

})

const NavText = styled.span({
    // border: "1px solid red",
    textDecoration: "none"
})

const StyledLink = styled(Link)`
    text-decoration: none
`

const ThemeModeText = styled.span({
    // border: "1px solid red",
    width: 80,
    marginLeft: 2
})

const ThemeIcons = styled.div({
    // border: "1px solid red",
    margin: 5
})