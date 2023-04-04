import styled from "styled-components"
import { UnderConstruction } from "../components/UnderConstruction"
import { CustomParagraph, CustomTitle } from "../custom/CustomText"
import { COLORS_LIGHT, FONT, TEXT } from "../custom/Values"
import { Section, Col } from "../custom/Elements"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt, faComputerMouse, faCopy, faLocationDot, faMouse } from '@fortawesome/free-solid-svg-icons'
import { faClipboard } from '@fortawesome/free-regular-svg-icons'
import { News } from "../components/TalkList"
import { Shapes } from "../components/Shapes"
import { Socials } from "../components/Socials"

export const HomePage = () => {

    const edu = [{
        logoUrl: "./umich-logo.jpg",
        institute: "University of Michigan",
        title: "Doctor of Philosophy - PhD, Computer Science",
        duration: "Aug 2021 - Jun 2026",
        grade: "Grade: 4.0"
    },
    {
        logoUrl: "./aau-logo.jpg",
        institute: "Addis Ababa University",
        title: "Bachelor's degree, Software Engineering",
        duration: "Sep 2015 - Dec 2020",
        grade: "Grade: 3.82"
    }]
    const news = [
        {
            "title": "NEWS!",
            "description": "Consequat velit cillum anim tempor proident culpa sunt sunt commodo consequat culpa cillum. Amet do dolor ad nulla do Lorem cupidatat quis ea eu consequat excepteur in id. Amet do amet reprehenderit enim dolor ullamco culpa nisi veniam et tempor. Sunt eiusmod ad eiusmod ad deserunt laborum occaecat tempor dolor minim fugiat deserunt. Laboris incididunt consequat consectetur sit quis irure esse pariatur deserunt irure. Ad deserunt culpa magna pariatur proident ut amet.",
            "url": "https://cse.umich.edu/2022visitday-abresearch/posters/Poster-Biniyam.pdf",
            "coverImage": "./update.jpg",

        },
        {
            "title": "NEWS!",
            "description": "Esse esse sint anim proident veniam ut et do quis. Enim quis ipsum officia ut aliqua ut incididunt est fugiat proident ipsum. Sint quis proident occaecat amet nulla duis exercitation. Cillum sit reprehenderit culpa tempor pariatur aliqua deserunt magna sit.",
            "url": "https://cse.umich.edu/2022visitday-abresearch/posters/Poster-Biniyam.pdf",
            "coverImage": "./update.jpg",

        }]


    return (
        <>
            <HomeSection>
                <Col>
                    <MyName>
                        BINIYAM MENGIST TIRUYE
                    </MyName>
                    <MyTitle>
                        <strong>
                            Phd pre-candidate,
                        </strong>
                        {" "}
                        Computer Science and Engineering
                    </MyTitle>
                    <MyCampus>
                        University of Michigan
                    </MyCampus>
                    <MyLocation>
                        <InfoIcons>
                            <FontAwesomeIcon icon={faLocationDot} size="lg" color={COLORS_LIGHT.ACCENT} />
                        </InfoIcons>
                        <InfoText>
                            2260 Hayward St, Ann Arbor, MI, USA
                        </InfoText>
                    </MyLocation>
                    <MyEmail>
                        <InfoIcons>
                            <FontAwesomeIcon icon={faAt} size="lg" color={COLORS_LIGHT.ACCENT} />
                        </InfoIcons>
                        <InfoText>
                            btiruye@umich.edu
                        </InfoText>
                        {/* <CopyIcon>
                            <FontAwesomeIcon icon={faCopy} size="lg" color={COLORS_LIGHT.LIGHT_GRAY} />
                        </CopyIcon> */}
                    </MyEmail>
                </Col>
                <S1C2>
                    <ImageContainer>
                        <div style={{
                            width: "600px",
                            height: "600px",
                            // border: "1px solid blue",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <div style={{
                                // border: "5px solid green",
                                position: "absolute",
                                width: "750px",
                                height: "750px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                overflow: "hidden"




                            }}>
                                <Shapes />
                            </div>

                            <div style={{
                                width: "500px",
                                height: "500px",
                                borderRadius: "50%",
                                backgroundColor: "#e1d19b",
                                overflow: "hidden",
                                // border: "5px solid yellow",
                                // position: "absolute"

                            }}>
                                <img marginTop="-10px" class="contour" src="./contour2.png" height={"115%"} />

                            </div>

                            <div style={{
                                width: "500px",
                                height: "500px",
                                borderRadius: "50%",
                                // border: "5px solid blue",
                                position: "absolute",
                                // overflow: "hidden"

                            }}>
                                <img src="./me-cut.png" width="500px" style={{
                                    // border: "1px solid red",
                                    position: "absolute",
                                    top: -124,
                                    left: 0,
                                }} />
                            </div>


                            <div style={{
                                width: "500px",
                                height: "500px",
                                // backgroundColor: "red"
                                // border: "5px solid blue",
                                position: "absolute",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "end",
                                alignItems: "center",

                            }}>
                                <Socials />
                            </div>

                        </div>
                    </ImageContainer>
                </S1C2>
            </HomeSection>
            <Section>
                <ScrollDown>
                    <div class="box bounce-5">
                        <div  >
                            <svg class="bi bi-mouse" fill="currentColor" height="16" viewBox="0 0 16 16" width="26" xmlns="http://www.w3.org/2000/svg"><path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z" /></svg>
                        </div>
                        <div>
                            Scroll Down
                        </div>
                    </div>
                </ScrollDown>
            </Section>
            <Section align={true} bg2={true}>
                <Col>
                    <div>

                        <CustomParagraph display="full" limit={800} title={"BIO"} body={"Exercitation est incididunt mollit velit et ut nulla. Elit pariatur sit ex ad aliqua sit. Nisi nostrud proident amet sint.Nostrud nisi amet ea commodo nisi nostrud. Dolore non eiusmod et tempor do sunt Lorem cillum sit magna consectetur ea. Irure aute occaecat ut irure excepteur deserunt elit dolore eiusmod sint occaecat. Cupidatat eu exercitation eu anim. Irure in id voluptate sit nulla occaecat amet duis sunt cupidatat tempor."} />
                    </div>

                </Col>
                <Col>
                    <div>
                        <CustomTitle title={"EDUCATION"} />
                        {
                            edu.map((ed) => (<Education edu={ed} />))
                        }
                    </div>
                </Col>
            </Section>
            <S3>
                <CustomTitle title={"RECENT NEWS"} />
                <S3R1>
                    <News news={news} />
                </S3R1>
            </S3>

        </>
    )
}

const Education = ({ edu }) => {
    return (
        <EduContainer>
            <EduLogo>
                <ImageContainer>
                    <img src={edu.logoUrl} width={"100%"} />
                </ImageContainer>
            </EduLogo>
            <EduText>
                <EduCampus>{edu.institute}</EduCampus>
                <EduTitle>{edu.title}</EduTitle>
                <EduDate>{edu.duration}</EduDate>
                <EduGrade>{edu.grade}</EduGrade>
            </EduText>

        </EduContainer>

    )
}

export const HomeSection = styled.div`
height: calc(100vh - 150px);
// max-height:950px;
box-sizing: border-box;
// border: 1px solid green;
display: flex;
justify-content: space-around;
align-items:  ${(props) => props.align ? "start" : "center"};;
padding-top: 45px;
width: 100%;
margin-bottom: 5px;
background-color: ${(props) => props.bg2 ? COLORS_LIGHT.SECONDARY_BG : ""}
`

const EduContainer = styled.div({
    // border: "1px solid green",
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
    marginBottom: "15px"

})
const EduLogo = styled.div({
    // border: "1px solid green",
    width: 40,
    height: 40,
    margin: "0px 15px 10px 10px",
})

const EduText = styled.div({
    // border: "1px solid green",
    fontFamily: TEXT.FONT

})

const EduCampus = styled.div({
    // border: "1px solid red",
    color: COLORS_LIGHT.BLACK,
    fontSize: TEXT.SIZE_3,
    fontWeight: "bold",
    marginBottom: 2
})

const EduTitle = styled.div({
    // border: "1px solid green",
    color: COLORS_LIGHT.BLACK,
    marginBottom: 2,
    fontSize: TEXT.SIZE_2,
})
const EduDate = styled.div({
    // border: "1px solid red",
    color: COLORS_LIGHT.MEDIUM_GRAY,
    fontSize: TEXT.SIZE_1,
    marginBottom: 5

})

const EduGrade = styled.div({
    // border: "1px solid green",
    color: COLORS_LIGHT.BLACK,
    fontSize: TEXT.SIZE_2,
    fontWeight: "bold",
    marginBottom: 2
})


const MyName = styled.div({
    // fontWeight: "bold",
    fontSize: TEXT.SIZE_7,
    marginBottom: "15px"

})

const MyTitle = styled.div({
    color: COLORS_LIGHT.BLACK,
    marginBottom: "5px"


})
const MyCampus = styled.div({
    color: COLORS_LIGHT.MEDIUM_GRAY,
    marginBottom: "15px"

})

const MyLocation = styled.div({
    // border: "1px solid red",
    width: "100%",
    color: COLORS_LIGHT.MEDIUM_GRAY,
    marginBottom: "10px",
    display: "flex",
    justifyContent: "start",
    fontSize: TEXT.SIZE_1
    // alignItems: "center",

})

const MyEmail = styled.div({
    color: COLORS_LIGHT.MEDIUM_GRAY,
    marginBottom: "5px",
    display: "flex",
    justifyContent: "start",
    fontSize: TEXT.SIZE_1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

})

const InfoIcons = styled.div({
    // border: "1px solid red",
    width: "25px",
})
const CopyIcon = styled.div({
    // border: "1px solid " + COLORS_LIGHT.LIGHT_GRAY,
    width: "20px",
    height: "20px",
    marginLeft: "20px",
    borderRadius: "15%",
    padding: "3px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 1px 3px " + COLORS_LIGHT.LIGHT_GRAY,
})
const InfoText = styled.span({
    // border: "1px solid red",
    // width: "9px",
})

const S1C2 = styled.div({
    // border: "1px solid red",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
})





const ScrollDown = styled.div({
    // border: "1px solid red",
    width: "100%",
    alignSelf: "start",
    color: COLORS_LIGHT.LIGHT_GRAY,
    fontFamily: TEXT.FONT,
    fontSize: TEXT.SIZE_2,
    marginBottom: "20px"
})

const S3 = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    paddingTop: "35px"

})

const S4 = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    paddingTop: "35px"

})



const S2R1 = styled.div({
    // border: "1px solid red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    width: "95%",
    padding: "0px 10px"
})

const S3R1 = styled.div({
    // border: "1px solid red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    width: "95%",
    padding: "0px 10px",
    marginBottom: "30px"
})

const ImageContainer = styled.div({

})