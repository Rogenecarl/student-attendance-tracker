import { NavLink } from 'react-router-dom'
import { RiDashboardLine, RiSettings4Line } from 'react-icons/ri'
import { PiStudentBold } from 'react-icons/pi'
import { MdFactCheck } from 'react-icons/md'

function Sidebar() {
  return (
    <div className="w-64 bg-indigo-600 text-white p-6">
      <div className="flex items-center gap-2 mb-8">
        <div className="text-2xl font-bold">Logoipsum</div>
      </div>
      
      <nav className="space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive ? 'bg-indigo-700' : 'hover:bg-indigo-700/50'
            }`
          }
        >
          <RiDashboardLine className="text-xl" />
          Dashboard
        </NavLink>
        
        <NavLink
          to="/students"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive ? 'bg-indigo-700' : 'hover:bg-indigo-700/50'
            }`
          }
        >
          <PiStudentBold className="text-xl" />
          Students
        </NavLink>
        
        <NavLink
          to="/attendance"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive ? 'bg-indigo-700' : 'hover:bg-indigo-700/50'
            }`
          }
        >
          <MdFactCheck className="text-xl" />
          Attendance
        </NavLink>
        
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive ? 'bg-indigo-700' : 'hover:bg-indigo-700/50'
            }`
          }
        >
          <RiSettings4Line className="text-xl" />
          Settings
        </NavLink>
      </nav>
    </div>
  )
}

export default Sidebar 