import { Container, Section } from "../../GlobalStyle";
import {
    ProjectContainer,
    ProjectData,
    ProjectIcon,
    ProjectTitle,
} from "./styledProject";

export const Project = () => {
    return (
        <Section>
            <Container>
                <ProjectContainer>
                    <ProjectData>
                        <ProjectIcon>
                            <i className="bx bx-chat"></i>
                        </ProjectIcon>

                        <div>
                            <ProjectTitle>
                                Hire me to carry out the followind projects.
                            </ProjectTitle>
                        </div>
                    </ProjectData>
                </ProjectContainer>
            </Container>
        </Section>
    );
};
