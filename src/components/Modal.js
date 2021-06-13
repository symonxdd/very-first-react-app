function Modal(params) {
    function cancel() {
        params.onCancel();
    }

    function confirm() {
        params.onConfirm();
    }

    return (
        <div className='modal'>
            <p>Are you sure, bro?</p>
            <button className='btn btn--alt' onClick={cancel}>Cancel</button>
            <button className='btn' onClick={confirm}>Confirm</button>
        </div>
    );
}

export default Modal;