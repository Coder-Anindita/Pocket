import { Income } from "../../models/income.model.js";

const allIncome = async (req, res) => {
  try {
    const limit = req.query.limit ? Number(req.query.limit) : null;

    let query = Income.find({ user: req.user._id })
      .sort({ createdAt: -1 });

    if (limit) {
      query = query.limit(limit);
    }

    const allIncomes = await query;

    return res.status(200).json({
      message: "All income retrieved successfully",
      allIncomes,
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Some error occurred" });
  }
};

export default allIncome;
