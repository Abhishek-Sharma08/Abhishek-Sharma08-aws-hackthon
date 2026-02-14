import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({ 
    xp: 0, 
    level: 1, 
    completedLessons: [] 
  });
  const [loading, setLoading] = useState(true);

  // --- LOGOUT FUNCTION ---
  const logout = () => {
    localStorage.removeItem('token'); // Destroy the session
    setUserData({ xp: 0, level: 1, completedLessons: [] }); // Reset state
  };

  const refreshProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setLoading(false);
        return;
      }

      const [profileRes, submissionRes] = await Promise.all([
        axios.get('http://localhost:5000/api/user/profile', { 
          headers: { Authorization: `Bearer ${token}` } 
        }),
        axios.get('http://localhost:5000/api/submissions/me', { 
          headers: { Authorization: `Bearer ${token}` } 
        })
      ]);

      const completedIds = submissionRes.data.submission.map(item => {
        if (item.lesson && typeof item.lesson === 'object') {
          return item.lesson._id;
        }
        return item.lesson;
      });

      setUserData({
        ...profileRes.data.user || profileRes.data,
        completedLessons: completedIds 
      });

    } catch (err) {
      console.error("UserContext Sync Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { 
    refreshProfile(); 
  }, []);

  return (
    // Add logout to the Provider value here
    <UserContext.Provider value={{ userData, refreshProfile, loading, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};