import { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref) {

    const dialog = useRef();
    const userLost = remainingTime <= 0;

    useImperativeHandle(ref, () => ({
        open: () => {
            dialog.current.showModal();
        }
    }));

    return (
        <dialog ref={dialog} className="result-modal" onSubmit={onReset}>
            <h2>{userLost ? "You Lost" : "You Won"}</h2>
            <p>The target time was <strong>{targetTime} seconds</strong></p>
            <p>You stopped the timer with <strong>{(remainingTime / 1000).toFixed(2)} seconds left</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
});

export default ResultModal;