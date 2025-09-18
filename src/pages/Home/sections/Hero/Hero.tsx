import { Container, styled } from "@mui/system"
import Avatar from "../../../../assets/images/avatar.jpg"
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DownloadIcon from '@mui/icons-material/ArrowCircleDown';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground";
import { Box } from "@mui/material";

const Hero = () => {
    const StyledHero = styled("div")(({theme})=> ({
      backgroundColor: theme.palette.primary.main,
      height: "100vh",
      alignItems: "center",
      display: "flex",
    }))

    const StyledImg = styled("img")(({theme})=> ({
      width: "100%",
      borderRadius: "50%",
      border: `4px solid ${theme.palette.primary.contrastText}`,
    }))

  return (
    <>
     <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item size={{xs:12, md:4}}>
              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position={"relative"} textAlign={"center"}>
                  <StyledImg src={Avatar} />
                </Box>
              </Box>
            </Grid>
            <Grid item size={{xs:12, md:8}}>
              <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Olá, sou o Lucas Borges</Typography>
              <Typography color="primary.contrastText" variant="h4" textAlign="center">Sou Analista de atualização e Implementação Jr.</Typography>
              <Grid container display="flex" justifyContent="center" spacing={2} pt={3}>
                <Grid item size={{xs:12, md:4}} display="flex" justifyContent="center">
                  <StyledButton>
                    <DownloadIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>
                <Grid item size={{xs:12, md:4}} display="flex" justifyContent="center">
                  <StyledButton>
                    <EmailIcon />
                    <Typography>Contato</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
     </StyledHero>
    </>
  )
}
export default Hero
