import User from "../models/user.models.js";

export const getProfile  = async (req, res) => {
    try {

        const userId = req.user.userId || req.user.id || req.user._id;

        const user = await User.findById(userId).select("-password");

        res.json({
            success : true,
            user
        });


        
    } catch (error) {
        res.status(500).json({
            message : "Error while fetching"
        })
    }
}   

export const updateStats = async (req, res) => {
    try {
        const { xp, difficulty } = req.body; 
        const userId = req.user.userId || req.user.id || req.user._id;

        if (!userId) {
             return res.status(400).json({ message: "Invalid token data" });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (difficulty) {
            user.difficulty = difficulty; 
        }

        if (xp && Number(xp) > 0) {
            user.xp = (user.xp || 0) + Number(xp);
            user.level = Math.floor(0.1 * Math.sqrt(user.xp)) + 1;
        }

        await user.save();

        res.json({
            message: "Stats updated successfully",
            updatedStats: {
                xp: user.xp,
                level: user.level,
                difficulty: user.difficulty
            }
        });

    } catch (error) {
        console.error("Stats Update Error:", error);
        res.status(500).json({ message: error.message || "Server error updating stats" });
    }
};


export const sendFriendRequest = async (req, res) => {
  try {
    const senderId = req.user._id;
    const { receiverId } = req.body;

    const sender = await User.findById(senderId);
    const receiver = await User.findById(receiverId);

    if (!sender || !receiver) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!sender.friends) sender.friends = [];
    if (!sender.sentRequests) sender.sentRequests = [];
    if (!receiver.receivedRequests) receiver.receivedRequests = [];

    if (senderId.toString() === receiverId) {
      return res.status(400).json({ message: "Cannot send to yourself" });
    }

    if (sender.friends.some(id => id.toString() === receiverId)) {
      return res.status(400).json({ message: "Already friends" });
    }

    if (sender.sentRequests.some(id => id.toString() === receiverId)) {
      return res.status(400).json({ message: "Request already sent" });
    }

    sender.sentRequests.push(receiverId);
    receiver.receivedRequests.push(senderId);

    await sender.save();
    await receiver.save();

    res.json({ message: "Friend request sent" });

  } catch (error) {
    console.error("ERROR:", error); 
    res.status(500).json({ message: "Server error" });
  }
};

export const acceptFriendRequest = async (req, res) => {
  try {
    const userId = req.user._id; 
    const { senderId } = req.body;

    const user = await User.findById(userId);
    const sender = await User.findById(senderId);

    if (!user || !sender) {
      return res.status(404).json({ message: "User not found" });
    }

    user.receivedRequests = user.receivedRequests || [];
    sender.sentRequests = sender.sentRequests || [];
    user.friends = user.friends || [];
    sender.friends = sender.friends || [];

    user.receivedRequests = user.receivedRequests.filter(
      id => id.toString() !== senderId
    );

    sender.sentRequests = sender.sentRequests.filter(
      id => id.toString() !== userId.toString()
    );

    user.friends.push(senderId);
    sender.friends.push(userId);

    await user.save();
    await sender.save();

    res.json({ message: "Friend request accepted" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const rejectFriendRequest = async (req, res) => {
  try {
    const userId = req.user._id;
    const { senderId } = req.body;

    const user = await User.findById(userId);
    const sender = await User.findById(senderId);

    if (!user || !sender) {
      return res.status(404).json({ message: "User not found" });
    }

    user.receivedRequests = user.receivedRequests || [];
    sender.sentRequests = sender.sentRequests || [];

    user.receivedRequests = user.receivedRequests.filter(
      id => id.toString() !== senderId
    );

    sender.sentRequests = sender.sentRequests.filter(
      id => id.toString() !== userId.toString()
    );

    await user.save();
    await sender.save();

    res.json({ message: "Friend request rejected" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getFriends = async (req, res) => {
  try {
    const userId = req.user._id;

    const user = await User.findById(userId)
      .populate("friends", "name userId xp");

    res.json({ friends: user.friends });

  } catch (error) {
    res.status(500).json({ message: "Error fetching friends" });
  }
};

export const getRequests = async (req, res) => {
  try {
    const userId = req.user._id;

    const user = await User.findById(userId)
      .populate("receivedRequests", "name userId");

    res.json({ requests: user.receivedRequests });

  } catch (error) {
    res.status(500).json({ message: "Error fetching requests" });
  }
};

export const getLeaderboard = async (req, res) => {
  try {
    const userId = req.user._id;

    const currentUser = await User.findById(userId);

    const ids = [userId, ...currentUser.friends];

    const users = await User.find({ _id: { $in: ids } })
      .select("name xp")
      .sort({ xp: -1 });

    res.json({
      leaderboard: users
    });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
