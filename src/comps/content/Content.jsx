import React from 'react';
import styles from './content.module.css'
import { useSelector } from 'react-redux';
import { TestSelector } from '../../features/TestSlice';

const Content = () => {
    const test = useSelector(TestSelector)
    return (
        <div className={`center ${styles.content}`}>
            <div className={`w-1/2 h-full center ${styles.contentLeft}`}>
            {
                    test.map(v=>{
                        return <p id={v.title}>{v.title}</p>
                    })
                }
            </div>
            <div className={`w-1/2 h-full bg-orange-500 center ${styles.contentRight}`}>
                {
                    test.map(v=>{
                        return <p id={v.title}>{v.content}</p>
                    })
                }
            </div>
        </div>
    );
}

export default Content;
