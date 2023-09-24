import { Container, Grid, Box, Button, Typography } from "@mui/material";
import { ReactNode } from "react";

export function Layout({
  actions,
  mainPageInfo,
  mainContent,
  sidebar
}: {
  actions: ReactNode;
  mainPageInfo: ReactNode;
  sidebar: ReactNode;
  mainContent: ReactNode;
}) {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container>
        <Grid item xs={12} md={3}>
          {actions}
        </Grid>
        <Grid item>{mainPageInfo}</Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>{sidebar}</Grid>
        <Grid item xs={12} md={9}>{mainContent}</Grid>
      </Grid>
    </Container>
  );
}

<Box sx={{ display: "flex", alignItems: "center" }}>
  <Button variant="contained">Добавить</Button>
</Box>;

<Typography variant="h4" gutterBottom>
  Список предложений
</Typography>;
