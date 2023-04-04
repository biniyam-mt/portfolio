import { Nav } from "./components/Nav"
import { Footer } from "./components/Footer"
import { BrowserRouter as BRouter, Route, Routes } from 'react-router-dom'
import { ResearchPage } from "./pages/ResearchPage"
import { HomePage } from "./pages/HomePage"
import { PersonalPage } from "./pages/PersonalPage"
import styled from "styled-components"

export const Root = () => {
    return (
        <div>
            <BRouter>
                <StyledRoot>
                    <Nav />
                    <Body>
                        <Routes>
                            <Route exact path="/" element={<HomePage />} />
                            <Route exact path="/research" element={<ResearchPage />} />
                            <Route exact path="/personal" element={<PersonalPage />} />
                        </Routes>
                    </Body>
                </StyledRoot>
            </BRouter>
            <Footer />
        </div>
    )
}

const StyledRoot = styled.div({
    display: "flex",
    justifyContent: "center",

})

const Body = styled.div({
    // backgroundColor: "lightGrey",
    padding: "50px 40px",
    maxWidth: "1400px",



})