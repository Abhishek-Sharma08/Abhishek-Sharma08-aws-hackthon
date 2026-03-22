import { useEffect, useState } from "react";
import axios from "axios";
import { Trophy } from "lucide-react";

export default function Leaderboard() {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user/leaderboard", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUsers(res.data.leaderboard))
      .catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1120] text-white px-6 py-12">
      <div className="max-w-2xl mx-auto">
        
        <div className="flex flex-col items-center mb-12">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-600/90">
            <Trophy className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-semibold mt-4">Leaderboard</h1>
        </div>

        <div className="space-y-3">
          {users.map((user, i) => (
            <div
              key={user._id}
              className="flex items-center justify-between px-4 py-3 rounded-lg bg-[#111827] border border-slate-800 hover:border-sky-400/40 transition"
            >
              <div className="flex items-center gap-4">
                <span className="w-8 text-center text-slate-400 font-medium">
                  {i + 1}
                </span>
                <span className="font-medium">{user.name}</span>
              </div>

              <span className="font-mono text-sm text-sky-400">
                {user.xp.toLocaleString()} XP
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}