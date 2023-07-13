import { ContainerContact, EmailStyle, IconStyle, LinkIcon, LinkedinStyle, PurpleText, Title } from "./styles";
import { Icon } from '@iconify/react';
import { useInView } from "react-intersection-observer";

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
        }); 

    return (
        <ContainerContact isActive={inView} ref={ref} className={inView ? "active" : ""}>
            <Title id="contact-section" >Contato</Title>
            <PurpleText>Vamos conversar?</PurpleText>
            <p>Entre em contato comigo clicando nos links abaixo por e-mail ou Linkedin:</p>
            <IconStyle>
                <EmailStyle>
                <LinkIcon href="mailto:luanapdsantos@gmail.com" target="_blank">
                    <Icon icon="line-md:email" color="#8519ff" width="80" height="80" />
                </LinkIcon>
                <p>luanapdsantos@gmail.com</p>
                </EmailStyle>
                <LinkedinStyle>
                <LinkIcon href="https://www.linkedin.com/in/luaanaapereiraa" target="_blank">
                    <Icon icon="devicon:linkedin" width="70" height="70" />
                </LinkIcon>
                <p>luaanaapereiraa</p>
                </LinkedinStyle>
            </IconStyle>
        </ContainerContact>
    )
};

export default Contact;