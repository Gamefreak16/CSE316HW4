import { useContext } from 'react'
import AuthContext from '../auth'
import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MUIErrorModal() {
    const { auth } = useContext(AuthContext);

    function closedal() {
        auth.modalConfirm();
    }
    
    let modalClass = "modal";
    if (auth.isModal()) {
        modalClass += " is-visible";
    }
    

    return (
        <Modal
            open={auth.isModal()}
        >
            <Box sx={style}>
                <div className="modal-dialog">
                <Alert severity='error'>
                    <AlertTitle>Error</AlertTitle>
                    <Button
                        onClick={closedal}
                    >
                    Confirm
                    </Button>
                </Alert>
            </div>
            </Box>
        </Modal>
    );
}