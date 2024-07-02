import { forwardRef, useImperativeHandle, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, Button, Typography, Box } from '@mui/material';


interface ResultModalProps {
  targetTime: number;
  remainingTime: number;
  onReset: () => void;
}

const ResultModal = forwardRef(({ targetTime, remainingTime, onReset }: ResultModalProps, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setOpen(true),
    close: () => setOpen(false),
  }));

  const handleClose = () => {
    setOpen(false);
    onReset();
  };

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  return (
    <Dialog open={open} onClose={handleClose} sx={{ '& .MuiDialog-paper': { borderRadius: '8px', padding: '2rem', backgroundColor: '#d7fcf8', textAlign: 'center' } }}>
      <DialogTitle>
        <Typography variant='h2' sx={{ fontFamily: 'Handjet, monospace', textTransform: 'uppercase', fontSize: '3rem', mb: 1 }}>
          {userLost ? 'You lost' : `Your Score: ${score}`}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography>
          The target time was <strong>{targetTime} seconds.</strong>
        </Typography>
        <Typography>
          You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong>
        </Typography>
        <Box component='form' method='dialog' onSubmit={handleClose} sx={{ textAlign: 'right', mt: 2 }}>
          <Button variant='contained' type='submit' sx={{ background: '#12352f', color: '#edfcfa', '&:hover': { background: '#051715' } }}>
            Close
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
});

export default ResultModal;
