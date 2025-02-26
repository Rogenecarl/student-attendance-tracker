import { useState } from 'react'
import Calendar from '../components/Calendar'

function Attendance() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedGrade, setSelectedGrade] = useState('5th')
  const [students] = useState([
    { id: 1, name: 'Rahul S', attendance: [true, true, true] },
    { id: 2, name: 'Harry Potter', attendance: [true, true, true] },
    { id: 3, name: 'Jhon C', attendance: [true, true, true] },
    { id: 9, name: 'Michael L. Eby', attendance: [true, true, false] },
    { id: 10, name: 'Christopher M. Matte', attendance: [true, true, true] },
    { id: 11, name: 'Amanda M. McGee', attendance: [false, false, true] },
    { id: 12, name: 'Edward C. Gonzalez', attendance: [true, true, true] },
    { id: 13, name: 'Brenda A. White', attendance: [true, true, true] },
    { id: 14, name: 'Velma E. Hernandez', attendance: [false, false, true] },
    { id: 15, name: 'Elinor L. Woods', attendance: [true, true, true] }
  ])

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Attendance</h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <div className="flex gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Select Month:</span>
            <div className="w-[200px]">
              <Calendar 
                value={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date)
                  // Here you would typically fetch attendance data for the new date
                }}
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Select Grade:</span>
            <select value={selectedGrade} className="px-4 py-2 border rounded-lg">
              <option>5th</option>
            </select>
          </div>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
            Search
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-medium text-gray-600">Student Id</th>
                <th className="text-left p-4 font-medium text-gray-600">Name</th>
                {[...Array(15)].map((_, idx) => (
                  <th key={idx} className="text-center p-4 font-medium text-gray-600">
                    {idx + 1}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-t">
                  <td className="p-4 text-gray-900">{student.id}</td>
                  <td className="p-4 text-gray-900">{student.name}</td>
                  {[...student.attendance, ...Array(12).fill(null)].map((present, idx) => (
                    <td key={idx} className="text-center p-4">
                      <input
                        type="checkbox"
                        checked={present || false}
                        className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        onChange={() => {}}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Attendance 