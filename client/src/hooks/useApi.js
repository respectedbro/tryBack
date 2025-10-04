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

            const res = await fetch(url, config);

            if (res.status !== 200) {
                const json = await res.json();
                alert(json.message);
                return;
            }
            return await res.json();
        } catch (err) {
            console.log(err);
            throw err;
        }
    }, []);
    return request;
};