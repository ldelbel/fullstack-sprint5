import { useState } from 'react';

interface IuseLoading {
    addRequest: () => void;
    removeRequest: () => void;
    isLoading: () => boolean;
}

function useLoading(): IuseLoading {

    const [liveRequests, setLiveRequests] = useState<number>(0);

    function addRequest() {
        setLiveRequests(liveRequests => {
            return liveRequests + 1;
        });
    }

    function removeRequest() {
        setLiveRequests(liveRequests => {
            return liveRequests - 1;
        });
    }

    function isLoading() {
        return liveRequests > 0;
    }

    return { addRequest, removeRequest, isLoading };
}

export default useLoading;