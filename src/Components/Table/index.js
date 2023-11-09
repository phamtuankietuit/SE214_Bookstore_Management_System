import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import DataTable from 'react-data-table-component';
import { Checkbox, CircularProgress, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Table.module.scss';
import { ProductItem } from '../ProductItem';

const cx = classNames.bind(styles);

const data = [
    {
        id: 'SP0001',
        image: [
            'https://cdn0.fahasa.com/media/catalog/product/d/n/dntttttuntitled.png',
            'https://eccthai.com/wp-content/uploads/2021/01/tom-tat-dac-nhan-tam.jpg',
        ],
        name: 'Đắc nhân tâm',
        status: 1,
        type_id: 'LSP0001',
        type_name: 'Sách',
        group_id: 'NSP0001',
        group_name: 'Sách triết lý',
        price: 50000,
        cost: 25000,
        quantity: 100,
        date_create: '03/01/2015',
    },
    {
        id: 'SP0002',
        image: [
            'https://cdn0.fahasa.com/media/catalog/product/d/n/dntttttuntitled.png',
            'https://eccthai.com/wp-content/uploads/2021/01/tom-tat-dac-nhan-tam.jpg',
        ],
        name: 'Đắc nhân tâm',
        status: 1,
        type_id: 'LSP0001',
        type_name: 'Sách',
        group_id: 'NSP0001',
        group_name: 'Sách triết lý',
        price: 50000,
        cost: 25000,
        quantity: 100,
        date_create: '03/01/2015',
    },
    {
        id: 'SP0003',
        image: [
            'https://cdn0.fahasa.com/media/catalog/product/d/n/dntttttuntitled.png',
            'https://eccthai.com/wp-content/uploads/2021/01/tom-tat-dac-nhan-tam.jpg',
        ],
        name: 'Đắc nhân tâm',
        status: 1,
        type_id: 'LSP0001',
        type_name: 'Sách',
        group_id: 'NSP0001',
        group_name: 'Sách triết lý',
        price: 50000,
        cost: 25000,
        quantity: 100,
        date_create: '03/01/2015',
    },
    {
        id: 'SP0004',
        image: [
            'https://cdn0.fahasa.com/media/catalog/product/d/n/dntttttuntitled.png',
            'https://eccthai.com/wp-content/uploads/2021/01/tom-tat-dac-nhan-tam.jpg',
        ],
        name: 'Đắc nhân tâm',
        status: 1,
        type_id: 'LSP0001',
        type_name: 'Sách',
        group_id: 'NSP0001',
        group_name: 'Sách triết lý',
        price: 50000,
        cost: 25000,
        quantity: 100,
        date_create: '03/01/2015',
    },
]

const selectProps = { indeterminate: isIndeterminate => isIndeterminate };

function Table() {

    const [pending, setPending] = useState(true);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setRows(data);
            setPending(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);

    const [showHeader, setShowHeader] = useState(false);

    const handleSelectedProducts = ({ allSelected, selectedCount, selectedRows }) => {
        selectedCount > 0 ? setShowHeader(true) : setShowHeader(false);
    }

    return (
        <div className={cx('data-table-container')}>
            <DataTable
                columns={ProductItem}
                data={rows}

                progressPending={pending}
                progressComponent={
                    <Box
                        sx={{ display: 'flex', marginTop: '50px', marginBottom: '50px' }}
                    >
                        <CircularProgress
                            color='primary'
                        />
                    </Box>
                }


                subHeader={showHeader}
                subHeaderAlign={'left'}
                subHeaderComponent={<div>hello</div>}



                selectableRows
                selectableRowsComponent={Checkbox}
                selectableRowsComponentProps={selectProps}
                onSelectedRowsChange={handleSelectedProducts}

                pagination
                paginationPerPage={20}
                paginationComponentOptions={{
                    rowsPerPageText: 'Hiển thị: ',
                    rangeSeparatorText: 'trên',
                    noRowsPerPage: false,
                    selectAllRowsItem: false,
                    selectAllRowsItemText: 'Tất cả'
                }}
                paginationRowsPerPageOptions={[20, 50, 100]}
                paginationIconNext={<FontAwesomeIcon icon={faAngleRight} />}
                paginationIconPrevious={<FontAwesomeIcon icon={faAngleLeft} />}
                paginationIconLastPage={<FontAwesomeIcon icon={faAnglesRight} />}
                paginationIconFirstPage={<FontAwesomeIcon icon={faAnglesLeft} />}
            />
        </div>
    );
}

export default Table;