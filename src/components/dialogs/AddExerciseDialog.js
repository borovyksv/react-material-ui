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

export default class AddExerciseDialog extends Component {
    state = { open: false };

    handleClick = () => this.setState({ open: !this.state.open });

    render() {
        return (
            <div>
                <Fab size="small" color="default" onClick={this.handleClick}>
                  <AddIcon/>
                </Fab>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClick}
                >
                    <DialogTitle>Add exercise</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please input exercise details below
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary">
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
