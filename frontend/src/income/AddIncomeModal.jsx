import { useState } from "react";

import EmojiPicker from "emoji-picker-react";
import {toast} from "react-toastify"

function AddIncomeModal({ show,onClose }) {
    const [income, setIncome] = useState({
        amount: "",
        source: "",
        date: "",
        emoji: "💸",
    });
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);


    const handleOnSubmit=async()=>{
        try {
            const res = await fetch("https://pocket-vycm.onrender.com/api/income", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    
                },
                credentials: "include",
                body: JSON.stringify(income),
            });
            if(res.ok){
                toast.success("Income added successfully!")
            }
            else{
                toast.error("Failed to add income")
            }

            const data = await res.json();


            
             ///just to rerender
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
            <h5 className="modal-title">Add Income</h5>
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
                        {income.emoji}
                    </button>

                {showEmojiPicker && (
                    <div style={{ position: "absolute", zIndex: 2000 }}>
                    <EmojiPicker
                        onEmojiClick={(emojiData) => {
                        setIncome(prev => ({
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
                    onChange={e => setIncome({ ...income, amount: e.target.value })}
                    required
                    min={0}
                />

                <label className="fs-6">Income Source</label>
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Source (Salary,Freelance)"
                    onChange={e => setIncome({ ...income, source: e.target.value })}
                    required
                />
                <label className="fs-6">Date</label>
                <input
                    type="date"
                    className="form-control mb-3"
                    onChange={e => setIncome({ ...income, date: e.target.value })}
                    required
                    
                />
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
                Cancel
            </button>

            <button className="btn btn-success" onClick={handleOnSubmit}>
                Add Income
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AddIncomeModal;
