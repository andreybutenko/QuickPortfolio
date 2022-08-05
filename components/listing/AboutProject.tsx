import { Grid, Paper, Typography } from '@mui/material';

const AboutProject = () => {
  return (
    <div style={{ paddingBottom: 50 }}>
      <Paper
        elevation={12}
        style={{ backgroundColor: 'rgba(255, 255,255, 0.6)', paddingTop: 10 }}
      >
        <Grid container direction={'column'}>
          <Grid item>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              align="center"
              color="black"
              fontWeight="bold"
            >
              Mission Statement
            </Typography>
          </Grid>
          <Grid item marginRight={60} marginLeft={60} color="black">
            <Typography variant="h6">
              <p>
                QuickPortfolio is a platform for early-career computing
                professionals to easily create a portfolio that showcases their
                projects, their problem-solving process, and artifacts of work
                to potential employers.
              </p>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default AboutProject;
