import classNames from 'classnames/bind';
import styles from './List.module.scss';
import SearchBar from '../SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

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

                    <div className={cx('filters')}>

                    </div>

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
