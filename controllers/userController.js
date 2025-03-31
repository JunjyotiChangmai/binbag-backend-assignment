const User = require("../models/user");

// Get User Profile
async function handleGetProfile(req, res) {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: "Error fetching profile", error: err.message });
    }
}

// Update User Profile
async function handlePutProfile(req, res) {
    try {
        const { name, address, bio, profilePicture } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            req.user.id,
            { name, address, bio, profilePicture },
            { new: true }
        ).select("-password");

        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ message: "Error updating profile", error: err.message });
    }
}

module.exports = { handleGetProfile, handlePutProfile };