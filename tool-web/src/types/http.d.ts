declare global {
  /**
   * 统一响应体
   */
  interface HttpResponse<T = unknown> {
    message?: string;
    status: number;
    data: T;
  }

  /**
   * 统一异常体
   */
  interface HttpError<T = unknown> {
    message?: string;
    data: T;
  }

  interface SearchParams {
    page?: number;
    size?: number;
    field?: string;
    order?: 'ASC' | 'DESC';
    [x: string]: any;
  }

  interface SearchResult<T> {
    data: T[];
    page: number;
    size: number;
    total: number;
  }
}

export {};
