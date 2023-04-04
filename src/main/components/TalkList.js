import styled from "styled-components"
import { CustomParagraph, CustomTitle } from "../custom/CustomText"
import { COLORS_LIGHT } from "../custom/Values"
export const TalksList = ({ talks }) => {
    return (
        <div>
            <VideoContainer>
                {talks.map((talk) => (
                    <Presentaion>
                        <VideoFrame>
                            <iframe src={talk.url} title={talk.title} width={"100%"} height={"100%"} />
                        </VideoFrame>

                        <CustomParagraph title={talk.title} body={talk.description} />
                    </Presentaion>
                ))}
            </VideoContainer>
        </div>
    )
}

export const Posters = ({ posters }) => {
    return (
        <PostersContainer>
            <SectionContainer>
                {posters && (<>

                    <VideoContainer>
                        {posters.map((poster) => (
                            <Presentaion>
                                <PosterFrame href={poster.url} target="_blank" rel="noreferrer">
                                    <img src={poster.coverImage} alt="poster" width={"100%"} height={"100%"} />
                                </PosterFrame>

                                <CustomParagraph title={poster.title} body={poster.description} />
                                <br />
                            </Presentaion>
                        ))}
                    </VideoContainer>
                </>
                )}
            </SectionContainer>
        </PostersContainer>
    )
}

export const News = ({ news }) => {
    return (
        <PostersContainer>
            <SectionContainer>
                {news && (<>

                    <NewsContainer>
                        {news.map((n) => (
                            <NewsItem>
                                <PosterFrame href={n.url} target="_blank" rel="noreferrer">
                                    <img src={n.coverImage} alt="n" width={"100%"} height={"100%"} />
                                </PosterFrame>

                                <CustomParagraph title={n.title} body={n.description} limit={50} />
                            </NewsItem>
                        ))}
                    </NewsContainer>
                </>
                )}
            </SectionContainer>
        </PostersContainer>
    )
}

const VideoContainer = styled.div({
    // border: "1px solid red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "start",
    flexWrap: "wrap"
    // width: "1200px"
})
const NewsContainer = styled.div({
    minWidth: "min-content",
    // border: "1px solid red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "start",
    // flexWrap: "wrap"
    // width: "1200px"
})
const NewsItem = styled.div({
    // border: "1px solid" + COLORS_LIGHT.LIGHT_GRAY,
    backgroundColor: "white",
    boxShadow: "3px 3px 9px #b9b9b9",
    display: "flex",
    width: "265px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    boxSizing: "border-box",
    margin: "10px",
    padding: "10px",
    marginBottom: "15px"
})

const Presentaion = styled.div({
    // border: "1px solid" + COLORS_LIGHT.LIGHT_GRAY,
    backgroundColor: "white",
    boxShadow: "3px 3px 9px #b9b9b9",
    display: "flex",
    width: "31%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    boxSizing: "border-box",
    margin: "10px",
    padding: "10px",
    marginBottom: "15px"
})

const VideoFrame = styled.div({
    width: "100%",
    height: "210px",
    marginBottom: "10px"

})

const SectionContainer = styled.div({
    // border: "1px solid red",
    width: "100%",
    overflow: "auto"

})

const PostersContainer = styled.div({
    // border: "1px solid green",
    // backgroundColor: COLORS_LIGHT.NEUTRAL,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
})


const A = styled.a`
text-decoration: none;
cursor: pointer;
color: ${COLORS_LIGHT.MEDIUM_GRAY};
&:visited{
    color: ${COLORS_LIGHT.MEDIUM_GRAY};
}
&:hover{
    color: ${COLORS_LIGHT.ACCENT};
}
`
const PosterFrame = styled(A)`
    // border: 1px solid red;
    height: 100%;
    margin-bottom: 10px;
`