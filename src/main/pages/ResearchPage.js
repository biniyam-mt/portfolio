import styled from "styled-components"
import { UnderConstruction } from "../components/UnderConstruction"
import { CustomParagraph, CustomTitle } from "../custom/CustomText"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileInvoice, faQuoteRight, faFilePdf, faAward } from '@fortawesome/free-solid-svg-icons'
import { COLORS_LIGHT } from "../custom/Values"
import { PublicationList } from "../components/PublicationList"
import { Posters, TalksList } from "../components/TalkList"
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
export const ResearchPage = () => {

    const acceptedPublication = [
        {
            "title": "Twine: a chisel extension for component-level heterogeneous design",
            "conference": "2022 Design, Automation & Test in Europe Conference & Exhibition (DATE)",
            "publisher": "IEEE",
            "year": 2022,
            "authors": [
                "Shibo Chen",
                "Yonathan Fisseha",
                "Jean-Baptiste Jeannin",
                "Todd Austin"
            ],
            "citations": 0,
            "link": "https://ieeexplore.ieee.org/iel7/9774496/9774497/09774555.pdf",
            "awards": []
        }
    ]

    const submittedPublication = [
        {
            "title": "Twine: a chisel extension for component-level heterogeneous design",
            "conference": "2022 Design, Automation & Test in Europe Conference & Exhibition (DATE)",
            "publisher": "IEEE",
            "year": 2022,
            "authors": [
                "Shibo Chen",
                "Biniyam Tiruye",
                "Yonathan Fisseha",
                "Jean-Baptiste Jeannin",
                "Todd Austin"
            ],
            "citations": 0,
            "link": "https://ieeexplore.ieee.org/iel7/9774496/9774497/09774555.pdf",
            "awards": []
        }
    ]

    const presentations = [
        {
            "title": "Microarchitectural Side Channel Attacks",
            "description": "Tutorial",
            "url": "https://www.youtube.com/embed/dLkyuUrAuzg"
        },
        {
            "title": "Toward Durable System Security",
            "description": "May 2021 - MEST Center Webinar",
            "url": "https://www.youtube.com/embed/zN8Xp53Sz7g"
        },
        {
            "title": "Morpheus II - The Director's Cut",
            "description": "HotChips 2021 Presentation",
            "url": "https://www.youtube.com/embed/s617RZXP0fw"
        }]
    const posters = [
        {
            "title": "Simulating Devices on the Morpheus Secure Processor",
            "author": "Biniyam Tiruye",
            "description": "Aura 2019",
            "url": "https://cse.umich.edu/2022visitday-abresearch/posters/Poster-Biniyam.pdf",
            "coverImage": "./poster1.png",

        }]

    return (
        <>
            <S1>
                <S1C1>
                    <CustomParagraph display="full" limit={800} title={"MY RESEARCH"} body={"Exercitation est incididunt mollit velit et ut nulla. Elit pariatur sit ex ad aliqua sit. Nisi nostrud proident amet sint.Nostrud nisi amet ea commodo nisi nostrud. Dolore non eiusmod et tempor do sunt Lorem cillum sit magna consectetur ea. Irure aute occaecat ut irure excepteur deserunt elit dolore eiusmod sint occaecat. Cupidatat eu exercitation eu anim. Irure in id voluptate sit nulla occaecat amet duis sunt cupidatat tempor."} />

                </S1C1>
                <PetsContainer>
                    <ImageContainer>
                        <img src="./pets.png" width="600px" />
                    </ImageContainer>
                </PetsContainer>
                {/* <UnderConstruction /> */}
            </S1>
            <S2>
                <CustomTitle title={"PUBLICATIONS"} />
                <S2R1>
                    <CustomTitle title={"UNDER REVIEW"} style="light" />
                    <PublicationList publicationRecord={acceptedPublication} />
                </S2R1>
                <S2R1>

                    <CustomTitle title={"PUBLISHED"} style="light" />
                    <PublicationList publicationRecord={submittedPublication} />
                </S2R1>
            </S2>
            <S3>
                <CustomTitle title={"PRESENTATIONS & TUTORIALS"} />
                <S3R1>
                    <TalksList talks={presentations} />
                </S3R1>
                <CustomTitle title={"POSTERS"} />
                <S3R1>
                    <Posters posters={posters} />
                </S3R1>
            </S3>
            <S4>
                <CustomTitle title={"CURRICULUM VITTAE"} />

                <iframe src="https://drive.google.com/file/d/1F6DhCUGKE9fRmn5sQTwpbURwVVMiy85D/preview" width="840" height="680" ></iframe>
            </S4>
        </>)
}

const S1 = styled.div({
    // border: "1px solid green",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "start",
    paddingTop: "45px"
})

const S2 = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    paddingTop: "45px"

})

const S3 = styled.div({
    backgroundColor: COLORS_LIGHT.SECONDARY_BG,
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

const S1C1 = styled.div({
    // border: "1px solid red",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    width: "40%",
    marginTop: "80px"
})

const PetsContainer = styled.div({
    // border: "1px solid red",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
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




