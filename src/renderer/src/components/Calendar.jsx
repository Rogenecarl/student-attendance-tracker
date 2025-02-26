import { useState, useEffect } from 'react'
import { IoChevronBackOutline, IoChevronForwardOutline, IoCopyOutline, IoCalendarOutline } from 'react-icons/io5'

function Calendar({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(value)

  useEffect(() => {
    setSelectedDate(value)
  }, [value])

  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  
  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const handleCopyDate = () => {
    navigator.clipboard.writeText(currentMonth.toLocaleDateString('en-US', { 
      month: 'long', 
      year: 'numeric' 
    }))
  }
  
  const renderCalendarDays = () => {
    const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1)
    const lastDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0)
    
    const days = []
    const startPadding = firstDay.getDay()
    
    // Add padding days from previous month
    for (let i = 0; i < startPadding; i++) {
      const prevDate = new Date(firstDay)
      prevDate.setDate(-i)
      days.unshift(
        <div key={`pad-${i}`} className="h-8 flex items-center justify-center text-gray-400 text-sm">
          {prevDate.getDate()}
        </div>
      )
    }
    
    // Add current month days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const currentDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i)
      const isToday = currentDate.toDateString() === new Date().toDateString()
      const isSelected = currentDate.toDateString() === selectedDate.toDateString()
      
      days.push(
        <div 
          key={i}
          className="h-8 relative flex items-center justify-center"
        >
          <button
            onClick={() => {
              setSelectedDate(currentDate)
              onChange(currentDate)
              setIsOpen(false)
            }}
            className={`
              w-8 h-8 flex items-center justify-center rounded-full relative
              hover:bg-gray-100 transition-colors
              ${isSelected ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'text-gray-900'}
              ${isToday && !isSelected ? 'text-indigo-600 font-semibold' : ''}
            `}
          >
            {i}
          </button>
        </div>
      )
    }
    
    // Add padding days for next month
    const totalDays = days.length
    const remainingDays = 42 - totalDays
    
    for (let i = 1; i <= remainingDays; i++) {
      days.push(
        <div key={`next-${i}`} className="h-8 flex items-center justify-center text-gray-400 text-sm">
          {i}
        </div>
      )
    }
    
    return days
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-10 px-4 border rounded-lg flex items-center gap-2 bg-white hover:bg-gray-50 transition-colors"
      >
        <IoCalendarOutline className="w-4 h-4 text-gray-500" />
        <span className="text-sm text-gray-900">
          {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-1 bg-white rounded-lg shadow-lg border p-4 z-50 w-[280px]">
          <div className="flex justify-between items-center mb-4">
            <button 
              onClick={handlePrevMonth}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
            >
              <IoChevronBackOutline className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-900">
                {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </span>
              <button 
                onClick={handleCopyDate}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
              >
                <IoCopyOutline className="w-4 h-4" />
              </button>
            </div>
            <button 
              onClick={handleNextMonth}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
            >
              <IoChevronForwardOutline className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-0">
            {days.map(day => (
              <div key={day} className="h-8 flex items-center justify-center text-xs text-gray-500 font-medium">
                {day}
              </div>
            ))}
            {renderCalendarDays()}
          </div>
        </div>
      )}
    </div>
  )
}

export default Calendar 