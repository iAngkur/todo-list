import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { TodoListContainer } from './components/TodoListContainer';

export default function App() {
  return (
    <Grid container>
      <Grid size={{ xs: 12 }} >
        <Box sx={{ padding: '16px' }}>
          <Typography
            align='center'
            variant='h4'
          >
            Todo List
          </Typography>
        </Box>
      </Grid>
      <Grid
        size={{ xs: 10, md: 8, lg: 6 }} offset={{ xs: 1, md: 2, lg: 3 }}
      >
        <TodoListContainer />
      </Grid>
    </Grid >
  );
}