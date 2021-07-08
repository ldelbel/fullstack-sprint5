import React from 'react';
import { ILoadingContext } from '../types/interfaces';

const LoadingContext = React.createContext<ILoadingContext>({} as ILoadingContext);

export default LoadingContext;