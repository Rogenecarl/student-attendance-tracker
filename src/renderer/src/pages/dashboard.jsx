import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, PieChart, Pie, Cell } from 'recharts'
import { PiStudentBold } from 'react-icons/pi'
import { IoCheckmarkCircle, IoCloseCircle } from 'react-icons/io5'
import Calendar from '../components/Calendar'

function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedGrade, setSelectedGrade] = useState('5th')

  const stats = {
    totalStudents: 10,
    presentPercentage: 83.3,
    absentPercentage: 16.7
  }

  const attendanceData = [
    { day: '3', present: 9, absent: 1 },
    { day: '2', present: 8, absent: 2 },
    { day: '1', present: 8, absent: 2 }
  ]

  const pieData = [
    { name: 'Present', value: stats.presentPercentage },
    { name: 'Absent', value: stats.absentPercentage }
  ]

  const COLORS = ['#4F46E5', '#86EFAC']

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="w-[200px]">
            <Calendar 
              value={selectedDate}
              onChange={(date) => {
                setSelectedDate(date)
                // Here you would typically fetch dashboard data for the new date
              }}
            />
          </div>
          <select
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option>5th</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-blue-50 p-6 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-lg">
              <PiStudentBold className="text-2xl text-blue-600" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Total Student</div>
              <div className="text-2xl font-bold">{stats.totalStudents}</div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-lg">
              <IoCheckmarkCircle className="text-2xl text-green-600" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Total Present</div>
              <div className="text-2xl font-bold">{stats.presentPercentage}%</div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-lg">
              <IoCloseCircle className="text-2xl text-red-600" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Total Absent</div>
              <div className="text-2xl font-bold">{stats.absentPercentage}%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Attendance</h2>
          <BarChart width={500} height={300} data={attendanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Bar dataKey="present" fill="#4F46E5" name="Present" />
            <Bar dataKey="absent" fill="#86EFAC" name="Absent" />
          </BarChart>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Monthly Attendance</h2>
          <PieChart width={300} height={300}>
            <Pie
              data={pieData}
              cx={150}
              cy={150}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
    </div>
  )
}

export default Dashboard 