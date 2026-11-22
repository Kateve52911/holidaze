export interface ApiResponse<T> {
  data: T;
  meta: Record<string, unknown>;
}

export interface ApiFailure {
  success: false;
  error: string;
  statusCode?: number;
}

export interface ApiSuccess<T> {
  success: true;
  data: T;
}

export type ApiResult<T> = ApiSuccess<T> | ApiFailure;

export interface ApiErrorResponse {
  errors: { message: string }[];
  status: string;
  statusCode: number;
}
