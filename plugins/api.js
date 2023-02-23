import { defineNuxtPlugin } from "#app";
import apis from '~/api/index';

export default defineNuxtPlugin((nuxtApp) => {
    let fullUrl = {};
    let keys = Object.keys(apis);
    keys.forEach(key => {
        apis[key] = useRuntimeConfig().public.API_URL + apis[key];
        fullUrl[key] = apis[key];
    });
    return {provide: {api: fullUrl}};
});