import classNames from 'classnames/bind';
import styles from './List.module.scss';
import SearchBar from '../SearchBar';
import Filter from '../Filter';
import { useState } from 'react';

const cx = classNames.bind(styles);

function List() {

    const placeholder = 'Tìm kiếm theo mã sản phẩm tên sản phẩm';

    const [input, setInput] = useState('');

    // console.log('List re-render');

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
                    <h1>{input}</h1>
                </div>
                <div className={cx('pagination-container')}>

                </div>
            </div>
        </div >
    );
}

export default List;
