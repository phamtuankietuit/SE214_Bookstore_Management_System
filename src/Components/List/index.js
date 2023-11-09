import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './List.module.scss';
import SearchBar from '../SearchBar';
import Filter from '../Filter';
import Table from '../Table';


const cx = classNames.bind(styles);

function List() {

    const placeholder = 'Tìm kiếm theo mã sản phẩm tên sản phẩm';

    const [input, setInput] = useState('');


    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')} >
                <div className={cx('search-filter-container')}>
                    <SearchBar
                        className={cx('search-bar')}
                        placeholder={placeholder}
                        setInput={setInput}
                    />

                    <Filter />


                </div>
                <div className={cx('table-container')}>
                    <Table />
                </div>
            </div>
        </div >
    );
}

export default List;
