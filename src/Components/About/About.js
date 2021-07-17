import { Container, Section, SectionSubtitle, SectionTitle } from "../../GlobalStyle";
import {
    AboutContainer,
    AboutData,
    AboutDescription,
    AboutNumber,
    AboutImage,
} from "./styledAbout";

export const About = ({ data }) => {
    const description = data.description;
    const experience = data.experience;

    return (
        <Section>
            <Container>
                <SectionSubtitle>My history</SectionSubtitle>
                <SectionTitle>About me</SectionTitle>

                <AboutContainer>
                    <AboutData>
                        <AboutDescription>
                            <span>Hello, I am a <br /></span>
                            {description}
                        </AboutDescription>

                        {experience.map((exp, i) => (
                            <div key={i}>
                                <AboutNumber>{exp.number}+ </AboutNumber>
                                <span>{exp.achevement}</span>
                            </div>
                        ))}

                        <AboutImage src="/img/about.jpg" />
                    </AboutData>
                </AboutContainer>
            </Container>
        </Section>
    );
};
