import { useState } from "react";
import { toast } from "react-toastify";
import EmojiPicker from "emoji-picker-react";


function AddExpenseModal({ show,onClose }) {
    const [expense, setExpense] = useState({
        amount: "",
        source: "",
        date: "",
        emoji: "💸",
    });
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);


    const handleOnSubmit=async()=>{
        try {
            const res = await fetch("http://localhost:3000/api/expense", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    
                },
                credentials: "include",
                body: JSON.stringify(expense),
            });
            if(res.ok){
                toast.success("Expense added successfully")

            }
            else{
                toast.error("Failed to delete the income")
            }

            const data = await res.json();


            
             
            onClose();
        } catch (err) {
            toast.error("OOPS! Some error occured!")
            console.error(err);
        }
    }

  if (!show) return null;

  return (
    <div
      className="modal fade show d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Add Expense</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">
                
                <div className="mb-3 position-relative border">
                    <label className="form-label fs-6 ms-2">Pick Icon</label>

                    <button
                        type="button"
                        className="btn btn-light fs-3 mx-4"
                        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    >
                        {expense.emoji}
                    </button>

                {showEmojiPicker && (
                    <div style={{ position: "absolute", zIndex: 2000 }}>
                    <EmojiPicker
                        onEmojiClick={(emojiData) => {
                        setExpense(prev => ({
                            ...prev,
                            emoji: emojiData.emoji,
                        }));
                        setShowEmojiPicker(false);
                        }}
                    />
                    </div>
                )}
            </div>



                <label className="fs-6">Amount</label>

                <input
                    type="number"
                    className="form-control mb-3 "
                    placeholder="Amount"
                    onChange={e => setExpense({ ...expense, amount: e.target.value })}
                    required
                    min={0}
                />

                <label className="fs-6">Expense Source</label>
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Movie,food...."
                    onChange={e => setExpense({ ...expense, source: e.target.value })}
                    required
                />
                <label className="fs-6">Date</label>
                <input
                    type="date"
                    className="form-control mb-3"
                    onChange={e => setExpense({ ...expense, date: e.target.value })}
                    required
                    
                />
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
                Cancel
            </button>

            <button className="btn btn-success" onClick={handleOnSubmit}>
                Add Expense
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AddExpenseModal;
