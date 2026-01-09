function ConfirmDeleteModal({ show, onClose, onConfirm }) {
    if (!show) return null;

    return (
        <div
            className="modal fade show d-block"
            style={{  backgroundColor: "rgba(0,0,0,0.15)" }}
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title text-danger">
                            Confirm Delete
                        </h5>
                        <button className="btn-close" onClick={onClose}></button>
                    </div>

                    <div className="modal-body">
                        <p>Are you sure you want to delete this source?</p>
                        <small className="text-muted">
                            This action cannot be undone.
                        </small>
                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-secondary" onClick={onClose}>
                            Cancel
                        </button>
                        <button className="btn btn-danger" onClick={onConfirm}>
                            Delete
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ConfirmDeleteModal;
