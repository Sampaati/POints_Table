import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BasicButton from '../Button/button';
import Paper from '@mui/material/Paper';

export default function PaperComponent() {
    return (
<Paper elevation={3}>
          <div className="cards">
              <CardContent  className="firstCard">
                <Typography variant="h5" component="div" align="center">
                  Team name
                </Typography>
                <Typography variant="body2" align="center">
                  Point
                  <br />
                </Typography>
                <CardActions >
                  <BasicButton size="small" />
                </CardActions>
              </CardContent>
            &nbsp; 
            &nbsp; 
            &nbsp; 
            &nbsp; 
            &nbsp; 
            &nbsp; 
            &nbsp;

              <CardContent className="secondCard">
                <Typography variant="h5" component="div" align="center">
                  Team name
                </Typography>
                <Typography variant="body2" align="center">
                  Point
                  <br />
                </Typography>
                <CardActions>
                  <BasicButton size="small" />
                </CardActions>
              </CardContent>
          </div>
        </Paper>
        );
    }