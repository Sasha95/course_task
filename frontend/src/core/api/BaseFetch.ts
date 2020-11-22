import querystring from 'query-string';

export type IHttpMethods = "GET" | "POST" | "PUT" | "DELETE";

interface IResponse<R> {
  result: R | null;
  status: number;
  error: Error | null;
  message: string | null;
}

export const baseFetch = async <P, R>(
  url: string,
  params: P,
  method: IHttpMethods = "GET",
  headers: { [key: string]: string } = {}
): Promise<IResponse<R>> => {
  try {
    const bodyObj = method !== "GET" ? { body: JSON.stringify(params) } : {};
    const hasParams = Object.keys(params).length > 0;
    
    const res = await fetch(`/api/${url}${hasParams ? '?' : ''}${querystring.stringify(params as any)}`, {
      method,
      ...bodyObj,
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json;charset=UTF-8",
        ...headers,
      },
    });
    if (res.status === 401) {
      return {
        error: null,
        message: res.statusText,
        result: null,
        status: 401,
      };
    }
    return {
      error: null,
      status: res.status,
      message: res.statusText,
      result: await res.json(),
    };
  } catch (error) {
    return {
      message: error.message,
      result: null,
      status: 401,
      error: error as Error,
    };
  }
};
