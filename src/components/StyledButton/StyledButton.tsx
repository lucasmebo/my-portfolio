import { styled } from '@mui/material/styles';
import React from 'react';

interface StyledButtonProps {
  children: React.ReactNode;
}

const StyledButton: React.FC<StyledButtonProps> = ({children}) => {

  const StyledButton = styled("button")(({theme}) => ({
    backgroundColor: "transparent",
    border: `2px solid ${theme.palette.secondary.contrastText}`,
    borderRadius: "2px",
    padding: "5px 10px",
    width: "100%",
    color: theme.palette.secondary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
    display:"inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
    fontSize: "1.2rem",
    cursor: "pointer",

  }))

  return (
    <>
      <StyledButton>
        {children}
      </StyledButton>
    </>
  )
}
export default StyledButton
