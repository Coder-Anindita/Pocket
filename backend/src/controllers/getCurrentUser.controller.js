const getCurrentUser = async (req, res) => {
  try {
    return res.status(200).json({
      message: "User fetched successfully",
      user: req.user
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export default getCurrentUser;
