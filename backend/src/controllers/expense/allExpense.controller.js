import { Expense } from "../../models/expense.model.js";

const allExpense = async (req, res) => {
  try {
    const limit = req.query.limit ? Number(req.query.limit) : null;

    let query = Expense.find({ user: req.user._id })
      .sort({ createdAt: -1 });

    if (limit) {
      query = query.limit(limit);
    }

    const allExpenses = await query;

    if (allExpenses.length === 0) {
      return res.status(404).json({ message: "No expenses found" });
    }

    return res.status(200).json({
      message: "All expenses retrieved successfully",
      allExpenses,
    });

  } catch (err) {
    return res.status(500).json({
      message: "Error while retrieving data",
      error: err.message,
    });
  }
};

export default allExpense;
