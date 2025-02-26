import { useState } from 'react'
import { FiTrash2 } from 'react-icons/fi'

function Students() {
  const [searchQuery, setSearchQuery] = useState('')
  const [students] = useState([
    { id: 1, name: 'Rahul S', grade: '5th', address: '', contact: '' },
    { id: 2, name: 'Harry Potter', grade: '5th', address: '', contact: '' },
    { id: 3, name: 'Jhon C', grade: '5th', address: '', contact: '' },
    { id: 6, name: 'Nidha A', grade: '6th', address: '', contact: '' },
    { id: 7, name: 'Jemmy Jackson', grade: '6th', address: '', contact: '' },
    { id: 8, name: 'Nil Boston', grade: '7th', address: '', contact: '' },
    { id: 9, name: 'Michael L. Eby', grade: '5th', address: '', contact: '' },
    { id: 10, name: 'Christopher M. Matte', grade: '5th', address: '', contact: '' },
    { id: 11, name: 'Amanda M. McGee', grade: '5th', address: '', contact: '' },
    { id: 12, name: 'Edward C. Gonzalez', grade: '5th', address: '', contact: '' }
  ])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Students</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          + Add New Student
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <input
            type="text"
            placeholder="Search on Anything..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <table className="w-full">
          <thead className="bg-gray-50 border-y">
            <tr>
              <th className="text-left p-4">Id</th>
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Grade</th>
              <th className="text-left p-4">Address</th>
              <th className="text-left p-4">Contact</th>
              <th className="text-left p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b">
                <td className="p-4">{student.id}</td>
                <td className="p-4">{student.name}</td>
                <td className="p-4">{student.grade}</td>
                <td className="p-4">{student.address}</td>
                <td className="p-4">{student.contact}</td>
                <td className="p-4">
                  <button className="text-red-500 hover:text-red-700">
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Students 