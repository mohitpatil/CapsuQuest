import { useContext } from 'react';
import { ApiContext, IApiContext } from './apiContext';

/**
 * Custom hook to use the ApiContext
 * @returns {IApiContext} The context
 * @throws {Error} If the hook is not used within an ApiProvider
 */
export function useApiContext(): IApiContext {
    const context = useContext(ApiContext);
    if (!context) {
        throw new Error('useApiContext must be used within an ApiProvider');
    }
    return context;
}