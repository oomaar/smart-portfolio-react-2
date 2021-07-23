import { Button, Container, Section, SectionSubtitle, SectionTitle } from "../../GlobalStyle";
import {
    ContactContainer,
    ContactContent,
    ContactBox,
    ContactIcon,
    ContactTitle,
    ContactText,
    ContactSocial,
    ContactForm,
    ContactInputs,
    Input,
    TextArea,
} from "./styledContact";

export const Contact = () => {
    return (
        <Section id="contact">
            <Container>
                <SectionSubtitle>For projects</SectionSubtitle>
                <SectionTitle>Contact Me</SectionTitle>

                <ContactContainer>
                    <ContactContent>
                        <ContactBox>
                            <ContactIcon>
                                <i className="bx bx-home"></i>
                            </ContactIcon>
                            <ContactTitle>Location</ContactTitle>
                            <ContactText>#123 Lima-peru</ContactText>
                        </ContactBox>

                        <ContactBox>
                            <ContactIcon>
                                <i className="bx bx-envelope"></i>
                            </ContactIcon>
                            <ContactTitle>Email</ContactTitle>
                            <ContactText>email@gmail.com</ContactText>
                        </ContactBox>

                        <ContactBox>
                            <ContactIcon>
                                <i className="bx bx-phone"></i>
                            </ContactIcon>
                            <ContactTitle>Phone</ContactTitle>
                            <ContactText>+0-999-888-777</ContactText>
                        </ContactBox>

                        <ContactBox>
                            <ContactIcon>
                                <i className="bx bx-chat"></i>
                            </ContactIcon>
                            <ContactTitle>Chat</ContactTitle>
                            <div>
                                <ContactSocial href="#">
                                    <i className="bx bxl-whatsapp-square"></i>
                                </ContactSocial>
                                <ContactSocial href="#">
                                    <i className="bx bxl-telegram"></i>
                                </ContactSocial>
                                <ContactSocial href="#">
                                    <i className="bx bxl-messenger"></i>
                                </ContactSocial>
                            </div>
                        </ContactBox>
                    </ContactContent>

                    <ContactForm>
                        <ContactInputs>
                            <Input type="text" placeholder="Name" />
                            <Input type="email" placeholder="Email" />
                        </ContactInputs>

                        <ContactInputs>
                            <Input type="text" placeholder="Project" />
                            <Input type="text" placeholder="Phone Number" />
                        </ContactInputs>

                        <TextArea cols="0" rows="7" placeholder="Message"></TextArea>

                        <Button contact type="submit">Send Message</Button>
                    </ContactForm>
                </ContactContainer>
            </Container>
        </Section>
    );
};
