import axios from 'axios';

export const sendContact = axios.create({
    baseURL: 'https://webhook.site/e12d953e-c1aa-47f5-9a22-0bc7560b34bd'
}) 