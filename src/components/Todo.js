import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(params) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteTodo() {
        setModalIsOpen(true);

    }

    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <div className='card'>
            <h2>{params.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteTodo}>Delete</button>
            </div>
            {modalIsOpen && <Modal onCancel={closeModal} onConfirm={closeModal} />}
            {modalIsOpen && <Backdrop onClick={closeModal} />}
        </div>
    );
}

export default Todo;