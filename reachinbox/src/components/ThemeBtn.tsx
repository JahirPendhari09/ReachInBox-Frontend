import React, { useState } from 'react'

const ThemeBtn = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
      setIsChecked(!isChecked);
    };
  return (
    <div className="checkbox-wrapper-54 relative" onClick={toggleCheckbox}>
    <input type="checkbox" className="hidden" checked={isChecked} onChange={() => {}} />
    <label className="switch block cursor-pointer">
      <span className={`absolute h-6 w-6 bg-gray-200 rounded-full slider ${isChecked ? 'bg-gray-800' : ''}`}></span>
      <span className={`absolute h-4 w-4 bg-white rounded-full transform -translate-x-1/2 top-1/2 left-1/2 ${isChecked ? 'translate-x-full' : ''}`}></span>
    </label>
  </div>
  )
}

export default ThemeBtn

