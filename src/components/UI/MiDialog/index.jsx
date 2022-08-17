//Import react
import React from 'react';

//Material-ui
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function MiDialog(props) {

  const {
    title = '',
    actions = [],
    message = '',
    open = false,
    autoClose = false,
    loading = false,
    closeOnLoading = false,
    onClose = () => { },
  } = props;

  function _onClose() {
    if (autoClose === false) return;
    if (loading === true && closeOnLoading === false) return;
    onClose();
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={_onClose}
      >
        {title && title.trim() !== '' && <DialogTitle>{title.trim()}</DialogTitle>}
        <DialogContent>
          <Grid container spacing={2}>

            {message !== '' && (
              <Grid item xs={12}>
                <Typography variant="body1">{message}</Typography>
              </Grid>
            )}

          </Grid>
        </DialogContent>

        {actions.length !== 0 && (
          <DialogActions>
            {actions.map((action, actionIndex) => {
              if (action.autoFocus === undefined) action.autoFocus = false;
              if (action.text === undefined) action.text = '';
              if (action.autoClose === undefined) action.autoClose = true;
              if (action.onClick === undefined) action.onClick = () => { };

              return (
                <Button
                  key={actionIndex}
                  autoFocus={action.autoFocus}
                  variant={action.variant}
                  color={action.color}
                  onClick={() => {
                    if (action.autoClose === true) onClose();
                    action.onClick();
                  }}
                >
                  {action.text}
                </Button>
              );
            })}
          </DialogActions>
        )}
      </Dialog>
    </>
  );
}

export default MiDialog;