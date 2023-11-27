import './styles.css'
const LoadingSkeleton = () => {
    return (
        <div className='loading-skeleton'>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default LoadingSkeleton;