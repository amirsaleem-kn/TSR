/**
 * Author: Amir Saleem
 * Topic: Required type in Typescript
 * Syntax: Required<T>
 * Description: Make all properties in T required
 */

/**
 * Request Options Interface
 */
interface RequestOptions {
    url: string;
    method: "GET" | "POST",
    body?: {[key: string]: any}; // body is optional as it can be GET request
    params?: {[key: string]: any}; // params is optional as it can be a POST request
}

/**
 * Here we define the Get request options
 * params are always required, but body isn't.
 * To acheive this we Omit the body from RequestOptions and
 * add Required to rest of the keys in the interface. We have
 * Read about Omit in our previous topic
 */
type GetRequestOptions = Required<Omit<RequestOptions, "body">>;

/**
 * Here we define the Post request options
 * body is always required, but params aren't.
 */
type PostRequestOptions = Required<Omit<RequestOptions, "params">>;

const request = (options: Required<RequestOptions>) => {
    return true;
}

const getRequest = (options: GetRequestOptions) => {
    return true;
}

const postRequest = (options: PostRequestOptions) => {
    return true;
}

getRequest({
    url: "",
    method: "GET",
    params: {},
});

postRequest({
    url: "",
    method: "POST",
    body: {},
});

// Pro Tip: You can also use Required to mark all properties of Partial<T> as required. 
// The syntax is: Required<Partial<T>>
