import styles from './ProductItem.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const ProductItem = [
    {
        name: 'Mã sản phẩm',
        sortable: true,
        selector: row => (
            <div
                key={row.id}
                className={cx('id-container')}
            >
                <div
                    className={cx('product-img')}
                    style={{
                        backgroundImage: `url('${row.image[0]}')`,
                    }}
                >
                </div>
                <div className={cx('product-id-name')}>
                    <div className={cx('product-id')}>
                        {row.id}
                    </div>
                    <div className={cx('product-name')}>
                        {row.name}
                    </div>
                </div>
            </div>
        ),
    },
];