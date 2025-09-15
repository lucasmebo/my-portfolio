import { Container, styled } from "@mui/system"
import Avatar from "../../../../assets/images/avatar.jpg"
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

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
        <Container>
        <Grid container spacing={2}>
          <Grid item size={4}>
            <StyledImg src={Avatar} />
          </Grid>
          <Grid item size={8}>
            <Typography color='primary' variant="h1">Olá, eu sou Lucas Borges</Typography>
            <Typography color='primary' variant="h3">Sou Analista de atualização e Implementação de Sistemas Jr.</Typography>
            <Button>Download CV</Button>
            <Button>Contato</Button>
          </Grid>
        </Grid>
        </Container>
     </StyledHero>
    </>
  )
}
export default Hero
