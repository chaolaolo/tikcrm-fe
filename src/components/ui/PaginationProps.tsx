import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface PaginationInfoProps {
  totalItems: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PaginationInfo: React.FC<PaginationInfoProps> = ({
  totalItems,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / 1);

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="d-flex align-items-center gap-2">
      <span>
        Total <strong>{totalItems}</strong> products
      </span>

      {/* Prev arrow */}
      <button
        className="btn btn-link px-1 py-0"
        disabled={currentPage === 1}
        onClick={handlePrev}
        style={{ color: '#ccc', pointerEvents: currentPage === 1 ? 'none' : 'auto' }}
      >
        <i className='bi bi-chevron-left'></i>
      </button>

      {/* Page number with border */}
      <button
        className="btn btn-outline-primary px-2 py-0 text-black"
        disabled
      >
        {currentPage}
      </button>

      {/* Next arrow */}
      <button
        className="btn btn-link px-1 py-0"
        disabled={currentPage === totalPages}
        onClick={handleNext}
        style={{ color: '#ccc', pointerEvents: currentPage === totalPages ? 'none' : 'auto' }}
      >
        <i className='bi bi-chevron-right'></i>
      </button>
    </div>
  );
};

export default PaginationInfo;
