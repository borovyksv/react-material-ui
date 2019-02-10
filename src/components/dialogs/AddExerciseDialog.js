import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab/Fab";
import Grid from "@material-ui/core/Grid/Grid";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
  textCenter: { textAlign: 'center' }
});


class AddExerciseDialog extends Component {
  state = {
    open: true,
    form: {
      title: '',
      description: '',
      muscle: '',
    }
  };

  handleClick = () => this.setState({open: !this.state.open});

  handleChange = name => event => this.setState({
    form: {
      ...this.state.form,
      [name]: event.target.value
    }
  });

  render() {
    const {classes} = this.props;
    const {form} = this.state;
    return (
      <Grid container justify="center" alignItems="center">
        <Fab size="small" color="default" onClick={this.handleClick}>
          <AddIcon/>
        </Fab>
        <Dialog
          open={this.state.open}
          onClose={this.handleClick}
        >
          <DialogTitle className={classes.textCenter}>Add exercise</DialogTitle>
          <DialogContent className={classes.textCenter}>
            <DialogContentText>
              Please input exercise details below
            </DialogContentText>
            <TextField
              fullWidth
              autoFocus
              label="Title"
              value={form.title}
              onChange={this.handleChange('title')}
              margin="normal"
            />
            <TextField
              fullWidth
              autoFocus
              label="Description"
              value={form.description}
              onChange={this.handleChange('description')}
              margin="normal"
            />
            <TextField
              fullWidth
              autoFocus
              label="Muscle"
              value={form.muscle}
              onChange={this.handleChange('muscle')}
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    );
  }
}

export default withStyles(styles)(AddExerciseDialog)