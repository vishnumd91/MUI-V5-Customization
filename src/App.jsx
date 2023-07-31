import { Container, CssBaseline, ThemeProvider, styled } from "@mui/material";
import { CdtButton } from "./components";
import { useThemeTogglerContext } from "./context";
import { darkTheme, lightTheme } from "./constants";

const ContainerLayout = styled(Container)(({ theme }) => ({
  display: "flex !important",
  justifyContent: "center",
  alignItems: "center",
  marginTop: theme.spacing(30),
  gap: "10px",
  flexDirection: "column",
  backgroundColor: theme.palette.mode === "dark" ? "#000000" : "#ffffff", // Fix background color here
}));

const App = () => {
  const { isDarkMode, setIsDarkMode } = useThemeTogglerContext();
  console.log(isDarkMode);

  const handleToggler = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <ContainerLayout>
          <CdtButton onClick={handleToggler}>Toggle Dark Mode</CdtButton>
          {/* Primary Button */}
          <CdtButton
            bsStyle="primary"
            type="submit"
            onClick={() => console.log("Primary")}
          >
            Primary Button
          </CdtButton>

          {/* Secondary Button */}
          <CdtButton
            bsStyle="secondary"
            type="submit"
            onClick={() => console.log("Secondary")}
          >
            Secondary Button
          </CdtButton>

          {/* Disabled Button */}
          <CdtButton bsStyle="primary" type="submit" disabled>
            Disabled Button
          </CdtButton>
        </ContainerLayout>
      </ThemeProvider>
    </>
  );
};

export default App;
