import { useState } from 'react'

function Attendance() {
  const [selectedMonth, setSelectedMonth] = useState('May 2024')
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

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span>Select Month:</span>
            <input type="month" value="2024-05" className="px-4 py-2 border rounded-lg" />
          </div>
          <div className="flex items-center gap-2">
            <span>Select Grade:</span>
            <select value={selectedGrade} className="px-4 py-2 border rounded-lg">
              <option>5th</option>
            </select>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            Search
          </button>
        </div>

        <table className="w-full">
          <thead className="bg-gray-50 border-y">
            <tr>
              <th className="text-left p-4">Student Id</th>
              <th className="text-left p-4">Name</th>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((day) => (
                <th key={day} className="text-center p-4">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b">
                <td className="p-4">{student.id}</td>
                <td className="p-4">{student.name}</td>
                {[...student.attendance, ...Array(12).fill(null)].map((present, idx) => (
                  <td key={idx} className="text-center p-4">
                    <input
                      type="checkbox"
                      checked={present || false}
                      className="h-4 w-4 text-indigo-600 rounded"
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
  )
}

export default Attendance 