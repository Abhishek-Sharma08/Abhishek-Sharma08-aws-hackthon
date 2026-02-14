import { useState, useEffect, useRef } from 'react';
import { Link, NavLink as RouterNavLink, useNavigate } from 'react-router-dom';
import { 
  Snowflake, 
  User, 
  LayoutDashboard, 
  CheckCircle2, 
  LogOut, 
  BookOpen, 
  Contact, 
  ExternalLink 
} from 'lucide-react'; 
import { useUser } from '../context/UserContext';
import XpBadge from './XpBadge'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  
  const { userData, logout } = useUser();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout(); 
    setIsOpen(false);
    navigate('/'); 
  };

  return (
    <>
      <style>
        {`
          @keyframes navbarEnter {
            from { opacity: 0; transform: translateY(-12px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes navItemEnter {
            from { opacity: 0; transform: translateY(-8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes popupEnter {
            from { opacity: 0; transform: scale(0.95) translateY(-10px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }
        `}
      </style>

      <nav
        className="sticky top-0 z-50 w-full"
        style={{ animation: 'navbarEnter 500ms ease-out both' }}
      >
        <div className="flex w-full items-center justify-between border-b border-white/5 bg-slate-900/80 px-4 py-3 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.8)] backdrop-blur-xl md:px-6">
          
          <Link
            to="/courses" 
            className="group flex items-center gap-3 text-white transition-transform duration-300 hover:scale-[1.01]"
            style={{ animation: 'navItemEnter 600ms ease-out both' }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-sky-400/30 blur-lg transition-opacity duration-300 group-hover:opacity-100 md:opacity-80" />
              <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-sky-100/20 bg-linear-to-br from-sky-300 via-blue-500 to-blue-700 shadow-[0_0_18px_rgba(56,189,248,0.65),0_0_36px_rgba(37,99,235,0.4)] transition-transform duration-300 group-hover:-translate-y-0.5">
                <Snowflake size={20} className="text-white" strokeWidth={2.6} />
              </div>
            </div>
            <span className="text-lg font-black tracking-tighter text-white md:text-xl">
              SNOW<span className="text-sky-200/85">VAULT</span>
            </span>
          </Link>

          <div className="flex items-center gap-6">
            
            {userData && (
               <div className="hidden lg:block">
                  <XpBadge xp={userData.xp || 0} level={userData.level || 1} />
               </div>
            )}

            <div className="flex items-center gap-3">
              <div className="hidden md:flex gap-3">
                <NavItem to="/courses" icon={<BookOpen size={16} strokeWidth={2.3} />} label="Courses" />
                <NavItem to="/skill-check" icon={<CheckCircle2 size={16} strokeWidth={2.3} />} label="Skill Check" />
                <NavItem to="/progress" icon={<LayoutDashboard size={16} strokeWidth={2.3} />} label="Map" />
              </div>
              
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`group flex h-10 w-10 items-center justify-center rounded-[1.05rem] border transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-100/40 hover:bg-sky-200/20 
                    ${isOpen ? 'border-sky-100/40 bg-sky-200/20' : 'border-white/15 bg-sky-300/10'}`}
                  style={{ animation: 'navItemEnter 650ms ease-out both' }}
                >
                  <User size={19} className={`transition-colors duration-300 ${isOpen ? 'text-white' : 'text-slate-400 group-hover:text-white'}`} strokeWidth={2.3} />
                </button>

                {isOpen && (
                  <div 
                    className="absolute right-0 top-full mt-3 w-48 origin-top-right overflow-hidden rounded-xl border border-white/10 bg-[#0f172a]/95 p-1 shadow-2xl backdrop-blur-xl ring-1 ring-black/5"
                    style={{ animation: 'popupEnter 200ms ease-out both' }}
                  >
                    {/* FIXED: Added manual onClick to close dropdown on navigation */}
                    <Link 
                      to="/profile"
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 border-b border-white/5 mb-1 hover:bg-white/5 rounded-t-lg transition-colors"
                    >
                        <p className="text-xs font-bold text-white">{userData?.name || "Agent"}</p>
                        <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider flex items-center gap-1">
                          View Profile <ExternalLink size={10} className="inline" />
                        </p>
                    </Link>
                    
                    <div className="md:hidden block border-b border-white/5 mb-1 pb-1">
                        <Link to="/courses" onClick={() => setIsOpen(false)} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white">
                           <BookOpen size={14} /> Courses
                        </Link>
                        <Link to="/profile" onClick={() => setIsOpen(false)} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white">
                           <Contact size={14} /> Profile
                        </Link>
                        <Link to="/skill-check" onClick={() => setIsOpen(false)} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white">
                           <CheckCircle2 size={14} /> Skill Check
                        </Link>
                        <Link to="/progress" onClick={() => setIsOpen(false)} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white">
                           <LayoutDashboard size={14} /> Map
                        </Link>
                    </div>

                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/10 hover:text-red-300"
                    >
                      <LogOut size={16} strokeWidth={2} />
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        [
          'flex items-center rounded-xl text-xs font-bold uppercase tracking-wide transition-all duration-300 gap-2 px-3 py-2',
          isActive
            ? 'text-white bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-white/10'
            : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent',
        ].join(' ')
      }
      style={{ animation: 'navItemEnter 550ms ease-out both' }}
    >
      {icon}
      {label}
    </RouterNavLink>
  );
}