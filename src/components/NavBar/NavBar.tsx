import styled from "@emotion/styled"
import { AppBar, Toolbar,MenuItem } from "@mui/material"

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)(({theme})=> ({
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: theme.palette.primary.main,
  }))

  return (
    <>
      <AppBar position="absoute">
        <StyledToolbar>
          <MenuItem>Sobre</MenuItem>
          <MenuItem>Hailidades</MenuItem>
          <MenuItem>Projetos</MenuItem>
        </StyledToolbar>
      </AppBar>
    </>
  )
}
export default NavBar
