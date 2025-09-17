import { Container, styled } from "@mui/system"
import Avatar from "../../../../assets/images/avatar.jpg"
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import DownloadIcon from '@mui/icons-material/ArrowCircleDown';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {
    const StyledHero = styled("div")(()=> ({
      backgroundColor: "black",
      height: "100vh",
    }))

    const StyledImg = styled("img")(()=> ({
      width: "100%",
      borderRadius: "50%",
    }))

  return (
    <>
     <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item size={{xs:12, md:4}}>
              <StyledImg src={Avatar} />
            </Grid>
            <Grid item size={{xs:12, md:8}}>
              <Typography color='primary' variant="h1" textAlign="center">Olá, sou o Lucas Borges</Typography>
              <Typography color='primary' variant="h4" textAlign="center">Sou Analista de atualização e Implementação Jr.</Typography>
              <Grid container display="flex" justifyContent="center">
                <Grid item size={{xs:12, md:4}} display="flex" justifyContent="center">
                  <Button>
                    <DownloadIcon />
                    Download CV</Button>
                </Grid>
                <Grid item size={{xs:12, md:4}} display="flex" justifyContent="center">
                  <Button>
                    <EmailIcon />
                    Contato</Button>
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
