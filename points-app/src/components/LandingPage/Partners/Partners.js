import {
    PartnersContainer,
    PartnersTextWrapper,
    SectionText,
    SectionTitle,
    Separator
} from "./PartnersElements"

const Partners = () => {
    return (
        <PartnersContainer id='partners'>
            <PartnersTextWrapper>
                <SectionTitle>Partners</SectionTitle>
                <Separator></Separator>
                <SectionText>We are very grateful to the people who support us. However, no one supports us yet (maybe despite our parents but it is deferent story). The carousel below is waiting for your logo to sit inside. Support us or join our community!</SectionText>
            </PartnersTextWrapper>
        </PartnersContainer>
    )
}

export default Partners
