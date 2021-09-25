import React from 'react';

const useOnlyChangeEffect = (cb: () => void, deps?: any[]): void => {
    const isMounted = React.useRef(false);

    React.useEffect(() => {
        if (isMounted.current) {
            cb();
        }
    }, deps);

    React.useEffect(() => {
        isMounted.current = true;
    }, []);
};

export default useOnlyChangeEffect;
