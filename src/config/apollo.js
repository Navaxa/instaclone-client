import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "apollo-link-context";
import { createUploadLink } from 'apollo-upload-client';
import { getToken } from '../utils/token';

// https://instaclone-server.azurewebsites.net/
const httpLink = createUploadLink({
    uri: "https://instaclone-server.azurewebsites.net/",
});

const authLink = setContext((_, {headers}) => {
    const token = getToken();
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
});

const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink)
});

export default client;