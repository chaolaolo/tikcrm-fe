import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateRangePicker.css';

interface DateRangePickerProps {
  onChange?: (dates: [Date | null, Date | null]) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ onChange }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [hovering, setHovering] = useState(false);

  const handleChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (onChange) onChange(dates);
  };

  const clearDates = () => {
    setStartDate(null);
    setEndDate(null);
    if (onChange) onChange([null, null]);
  };

  const CustomInput = React.forwardRef<HTMLInputElement, any>(({ value, onClick }, ref) => (
    <div className="position-relative w-100">
      <input
        type="text"
        className="form-control rounded"
        onClick={onClick}
        value={value}
        ref={ref}
        readOnly
        placeholder="Start date → End date"
      />
      <span
        className="position-absolute end-0 top-50 translate-middle-y pe-1"
        style={{ cursor: 'pointer' }}
        onClick={(e) => {
          e.stopPropagation();
          if (startDate || endDate) clearDates();
        }}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {hovering && (startDate || endDate) ? (
          <i className="bi bi-x-circle text-secondary bg-white"></i>
        ) : (
          <i className="bi bi-calendar text-secondary bg-white"></i>
        )}
      </span>
    </div>
  ));

  return (
    <DatePicker
      selectsRange
      startDate={startDate}
      endDate={endDate}
      onChange={handleChange}
      calendarClassName="custom-calendar"
      customInput={<CustomInput />}
    />
  );
};

export default DateRangePicker;
