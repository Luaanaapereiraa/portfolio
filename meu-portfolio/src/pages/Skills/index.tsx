import { ContainerSkills, Grid, ImageWrapper, Title } from "./styles";
import Javascript from "../../assets/javascript.svg";
import React from "../../assets/react.svg";
import Typescript from "../../assets/typescript.svg";
import Html from "../../assets/html.svg";
import Css from "../../assets/css.svg";
import Materialui from "../../assets/material-ui.svg";
import Tailwind from "../../assets/tailwind.svg";
import Bootstrap from "../../assets/bootstrap.svg";
import Jest from "../../assets/jest.svg";
import Vite from "../../assets/vitejs.svg";
import GitHub from "../../assets/github.svg";
import GitLab from "../../assets/gitlab.svg";
import NextJS from "../../assets/nextjs.svg";
import Git from "../../assets/git.svg";
import Figma from "../../assets/figma.svg";






const Skills = () => {
    return (

        <>
            <ContainerSkills id= "skills-section">
                <Title>Skills</Title>
                <Grid>
                    <ImageWrapper>
                    <img src={Javascript} />
                    <label>JavaScript</label>
                    </ImageWrapper>
                    <ImageWrapper>
                    <img src={React} />
                    <label>React</label>
                    </ImageWrapper>
                    <ImageWrapper>
                    <img src={Typescript} />
                    <label>TypeScript</label>
                    </ImageWrapper>
                    <ImageWrapper>
                    <img src={Html} />
                    <label>HTML</label>
                    </ImageWrapper>
                    <ImageWrapper>
                    <img src={Css} />
                    <label>CSS</label>
                    </ImageWrapper>
                    <ImageWrapper>
                    <img src={Materialui} />
                    <label>Material UI</label>
                    </ImageWrapper>
                    <ImageWrapper>
                    <img src={Tailwind} />
                    <label>Tailwind CSS</label>
                    </ImageWrapper>
                    <ImageWrapper>
                    <img src={Bootstrap} />
                    <label>Bootstrap</label>
                    </ImageWrapper>
                    <ImageWrapper>
                    <img src={Jest} />
                    <label>Jest</label>
                    </ImageWrapper>
                    <ImageWrapper>
                    <img src={Vite} />
                    <label>ViteJS</label>
                    </ImageWrapper>
                    <ImageWrapper>
                    <img src={NextJS} />
                    <label>Next.JS</label>
                    </ImageWrapper>
                    <ImageWrapper>
                    <img src={GitHub} />
                    <label>GitHub</label>
                    </ImageWrapper>
                    <ImageWrapper>
                    <img src={GitLab} />
                    <label>GitLab</label>
                    </ImageWrapper>
                    <ImageWrapper>
                    <img src={Git} />
                    <label>Git</label>
                    </ImageWrapper>
                    <ImageWrapper>
                    <img src={Figma} />
                    <label>Figma</label>
                    </ImageWrapper>
                </Grid>
            </ContainerSkills>
        </>
    );
};

export default Skills;