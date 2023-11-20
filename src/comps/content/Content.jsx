import React from 'react';
import styles from './content.module.css'
import { useSelector } from 'react-redux';
import { TestSelector } from '../../features/TestSlice';

const Content = () => {
    const test = useSelector(TestSelector)
    return (
        <div className={`center ${styles.content}`}>
            <div className={`bg-primery w-1/2 h-full center`}>
                {
                    test.map(v=>{
                        return <p className='text-xl font-m' key={v.title}>{v.title}</p>
                    })
                }
            </div>
            <div className={`bg-secondary w-1/2 h-full bg- center `}>
                {
                    test.map(v=>{
                        return <p className='text-xl font-m' key={v.title}>{v.content}</p>
                    })
                }
            </div>
        </div>
    );
}

export default Content;
