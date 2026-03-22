import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, UserPlus, Check, X } from 'lucide-react';
import axios from 'axios';

function Friends() {
  const [inviteId, setInviteId] = useState("");
  const [requests, setRequests] = useState([]);
  const [friends, setFriends] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchRequests();
    fetchFriends();
  }, []);

  const fetchRequests = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/user/requests", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setRequests(res.data.requests || []);
    } catch {}
  };

  const fetchFriends = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/user/friends", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setFriends(res.data.friends || []);
    } catch {}
  };

  const sendRequest = async () => {
    if (!inviteId) return;
    try {
      await axios.post(
        "http://localhost:5000/api/user/send-request",
        { receiverId: inviteId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setInviteId("");
    } catch {}
  };

  const acceptRequest = async (senderId) => {
    await axios.post(
      "http://localhost:5000/api/user/accept-request",
      { senderId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchRequests();
    fetchFriends();
  };

  const rejectRequest = async (senderId) => {
    await axios.post(
      "http://localhost:5000/api/user/reject-request",
      { senderId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchRequests();
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-white px-6 py-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="flex flex-col gap-6">

          <div className="rounded-xl border border-white/10 bg-slate-900/70 p-5 backdrop-blur-md shadow-md">
            <h2 className="text-sm font-semibold text-sky-400 mb-4 uppercase tracking-wide">
              Add Friend
            </h2>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter User ID"
                value={inviteId}
                onChange={(e) => setInviteId(e.target.value)}
                className="flex-1 rounded-lg bg-slate-800 px-3 py-2 text-sm outline-none border border-white/10 focus:border-sky-500"
              />
              <button
                onClick={sendRequest}
                className="bg-sky-600 hover:bg-sky-500 px-3 rounded-lg flex items-center justify-center"
              >
                <UserPlus size={16} />
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-slate-900/70 p-5 backdrop-blur-md shadow-md h-[420px] overflow-auto">
            <h2 className="text-sm font-semibold text-sky-400 mb-4 uppercase tracking-wide">
              Requests
            </h2>

            {requests.length === 0 ? (
              <p className="text-sm text-gray-400">No pending requests</p>
            ) : (
              <div className="space-y-3">
                {requests.map((req) => (
                  <div
                    key={req._id}
                    className="flex items-center justify-between bg-slate-800/70 px-4 py-3 rounded-lg hover:bg-slate-800 transition"
                  >
                    <div>
                      <p className="text-sm font-medium">{req.name}</p>
                      <p className="text-xs text-gray-400">{req.userId}</p>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => acceptRequest(req._id)}
                        className="bg-green-600 hover:bg-green-500 p-2 rounded-lg"
                      >
                        <Check size={14} />
                      </button>
                      <button
                        onClick={() => rejectRequest(req._id)}
                        className="bg-red-600 hover:bg-red-500 p-2 rounded-lg"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="md:col-span-2 rounded-xl border border-white/10 bg-slate-900/70 p-5 backdrop-blur-md shadow-md">
          <h2 className="text-sm font-semibold text-sky-400 mb-5 uppercase tracking-wide">
            Your Friends
          </h2>

          {friends.length === 0 ? (
            <p className="text-sm text-gray-400">No friends yet</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {friends.map((friend) => (
                <motion.div
                  key={friend._id}
                  whileHover={{ scale: 1.04 }}
                  className="bg-slate-800/80 rounded-xl p-4 flex items-center gap-3 hover:shadow-lg transition"
                >
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                    <User size={18} />
                  </div>

                  <div className="min-w-0">
                    <p className="font-medium text-sm truncate">
                      {friend.name}
                    </p>
                    <p className="text-xs text-gray-400 truncate">
                      {friend.userId}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Friends;