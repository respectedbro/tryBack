import {useCallback} from 'react';

export const useApi = () => {
    const request = useCallback(async (url, options) => {
        const {
            method = 'GET',
            body = null,
            headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        } = options;

        try {
            const config = {
                method,
                headers
            };

            if (body && method !== 'GET') {
                config.body = JSON.stringify(body);
            }

            const response = await fetch(url, config);

            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.message);
            }
            return await response.json();
        } catch (err) {
            console.log(err);
            throw err;
        }
    }, []);
    return request;
};