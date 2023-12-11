import { EntryList } from "@/components/ui/EntryList";
import { NewEntry } from "@/components/ui/NewEntry";
import { MainLayout } from "@/layouts";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";

export default function Home() {
  return (
    <MainLayout title="Home">
      <Grid container spacing={2} padding={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Pending" />
            <NewEntry />
            <EntryList status="pending" />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="In Progress" />
            <EntryList status="in-progress" />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Done" />
            <EntryList status="done" />
          </Card>
        </Grid>
      </Grid>
    </MainLayout>
  );
}
