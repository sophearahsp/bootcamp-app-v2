import { Container, Typography, Stack } from '@mui/material';

// Styling can be confusing, look at MUI System docs
// https://mui.com/system/getting-started/overview/

// You can create multiple components in a file!
const SubSection = (props: { header: string, content: string }) => {
    return (
        <Stack spacing={0}>
            <Typography variant="h6" sx={{fontWeight: '600', color: '#0069CA'}}>{props.header}</Typography>
            <Typography> {props.content} </Typography>
        </Stack>
    )
}

const AboutPage = () => {
    return (
        <Container maxWidth="md" >
            <Typography variant="h4" sx={{fontWeight: '600', color: '#0069CA', margin: '24px 0px 40px 0px'}}> About </Typography>

            <Stack spacing={4}>
                {/* Uses the SubSection component from above with different props */}
                <SubSection
                    header="We Believe In Using Tech For Good"
                    content="Hack4Impact believes in technology’s huge potential to empower activists and humanitarians to create lasting and impactful social change. We work to foster the wider adoption of software as a tool for social good."
                />
                <SubSection
                    header="Our Mission"
                    content="Hack4Impact exists for both nonprofits and students. We connect student software developers with nonprofits and other socially responsible businesses to develop powerful new tools for social change. This enables nonprofits to further their mission and better engage their clients. We are committed to increasing awareness of technology's potential for good."
                />
                <SubSection
                    header="How We Work"
                    content="We partner with nonprofits and other socially minded organizations to build impactful products. Each product is spearheaded by a dedicated development team on a one or two semester timeline."
                />
            </Stack>
        </Container>
    )
}

export default AboutPage;