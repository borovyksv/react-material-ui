import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Fab from "@material-ui/core/Fab/Fab";
import Grid from "@material-ui/core/Grid/Grid";
import {withStyles} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import connect from "react-redux/es/connect/connect";
import {saveExercise, selectExercise} from "../../actions";

const styles = () => ({
  textCenter: {textAlign: 'center'}
});


class SaveExerciseDialog extends Component {

  defaultState = {
    open: false,
    form: {
      title: '',
      description: '',
      muscle: '',
    }
  }

  state = this.defaultState;

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.exercise && prevState.form.title==='') {
      return {...prevState, form: nextProps.exercise}
    }
    return null
  }

  handleClick = () => this.setState({open: !this.state.open})

  handleChange = name => event => this.setState({
    form: {
      ...this.state.form,
      [name]: event.target.value
    }
  })

  handleSubmit = () => {
    const {form: exercise} = this.state
    this.props.saveExercise(exercise)
    this.setState(this.defaultState);
  }

  render() {
    const {classes, muscles: categories, exercise} = this.props
    const {form} = this.state
    return (
      <Grid container justify="center" alignItems="center">
        {exercise
          ? <EditIcon onClick={this.handleClick}/>
          : <Fab size="small" color="default" onClick={this.handleClick}><AddIcon/></Fab>
        }
        <Dialog
          open={this.state.open}
          onClose={this.handleClick}
        >
          <DialogTitle className={classes.textCenter}>{exercise ? 'Edit' : 'Add'} exercise</DialogTitle>
          <DialogContent className={classes.textCenter}>
            <DialogContentText>
              Please input exercise details below
            </DialogContentText>
            <TextField
              select
              fullWidth
              variant="outlined"
              label="Muscle category"
              value={form.muscle}
              onChange={this.handleChange('muscle')}
              margin="normal"
            >
              {categories.map(category =>
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              )}
            </TextField>
            <TextField
              fullWidth
              autoFocus
              label="Title"
              value={form.title}
              onChange={this.handleChange('title')}
            />
            <TextField
              fullWidth
              multiline
              rows={2}
              label="Description"
              value={form.description}
              onChange={this.handleChange('description')}
              margin="dense"
            />
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  muscles: state.muscles,
})
export default connect(mapStateToProps, {selectExercise, saveExercise})(withStyles(styles)(SaveExerciseDialog))