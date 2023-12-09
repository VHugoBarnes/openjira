import { MainLayout } from "@/layouts";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";

export default function Home() {
  return (
    <MainLayout title="Home">
      <Grid container spacing={2} padding={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Pending" />

            <CardContent>
              {/* Add new entry */}
              {/* List entries */}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="In Progress" />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Done" />
          </Card>
        </Grid>
      </Grid>
    </MainLayout>
  );
}
