import React, { useState } from 'react'
import PaginationInfo from '../../../components/ui/PaginationProps';

const ActiveTab = () => {
    const [currentPage, setCurrentPage] = useState(1);


    return (
        <div>
            <div className='d-flex justify-content-start align-items-center mb-2'>
                <PaginationInfo
                    totalItems={1}
                    currentPage={currentPage}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </div>

            <div className="table-responsive">
                <table className="table table-bordered align-middle text-center">
                    <thead className="table-light">
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Vai trò</th>
                            <th>Xem đơn hàng của Team</th>
                            <th>SKU Prefix</th>
                            <th>Ngày tạo</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>tranchaufw04@gmail.com</td>
                            <td>chau</td>
                            <td>tran</td>
                            <td>Owner</td>
                            <td><input type="checkbox" disabled /></td>
                            <td>TRANCHAUFW04_ZMTW</td>
                            <td>23/05/2025 23:33</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="d-flex justify-content-end align-items-center">
                <PaginationInfo
                    totalItems={1}
                    currentPage={currentPage}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </div>
        </div>
    )
}

export default ActiveTab