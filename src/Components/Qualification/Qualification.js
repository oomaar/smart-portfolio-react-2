import { Container, Section, SectionSubtitle, SectionTitle } from "../../GlobalStyle";
import {
    QualificationContainer,
    QualificationTitle,
    QualificationIcon,
    QualificationGrid,
    QualificationArea,
    QualificationBox,
    QualificationWork,
    QualificationSmallIcon,
} from './styledQualification';

export const Qualification = ({ data }) => {
    const workData = data.work.map(work => (
        <div key={work.id}>
            <QualificationArea>{work.title}</QualificationArea>
            <QualificationBox>
                <QualificationWork>
                    <QualificationSmallIcon>
                        <i className="bx bx-briefcase-alt"></i>
                    </QualificationSmallIcon>
                    {work.place}
                </QualificationWork>
                <QualificationWork>
                    <QualificationSmallIcon>
                        <i className="bx bx-calendar-alt"></i>
                    </QualificationSmallIcon>
                    {work.date}
                </QualificationWork>
            </QualificationBox>
        </div>
    ));

    const educationData = data.education.map(education => (
        <div key={education.id}>
            <QualificationArea>{education.title}</QualificationArea>

            <QualificationBox>
                <QualificationWork>
                    <QualificationSmallIcon>
                        <i className="bx bx-book-alt"></i>
                    </QualificationSmallIcon>
                    {education.place}
                </QualificationWork>
                <QualificationWork>
                    <QualificationSmallIcon>
                        <i className="bx bx-calendar-alt"></i>
                    </QualificationSmallIcon>
                    {education.date}
                </QualificationWork>
            </QualificationBox>
        </div>
    ));

    return (
        <Section>
            <SectionSubtitle>Experince and education</SectionSubtitle>
            <SectionTitle>Qualification</SectionTitle>

            <Container>
                <QualificationContainer>
                    <div>
                        <QualificationTitle>
                            <QualificationIcon>
                                <i className="bx bx-briefcase-alt"></i>
                            </QualificationIcon>
                            Work Experince
                        </QualificationTitle>

                        <QualificationGrid>
                            {workData}
                        </QualificationGrid>
                    </div>

                    <div>
                        <QualificationTitle>
                            <QualificationIcon>
                                <i className="bx bx-book-bookmark"></i>
                            </QualificationIcon>
                            Education
                        </QualificationTitle>

                        <QualificationGrid>
                            {educationData}
                        </QualificationGrid>
                    </div>
                </QualificationContainer>
            </Container>
        </Section>
    );
};
