import type {
  LoginRequest,
  LoginResponse,
} from '@/services/api/auth/auth.types';
import { apiFetch } from '@/services/api/apiFetch';
import { AUTH, BASE_URL, LOGIN } from '@/config/constants';
import type { ApiErrorResponse, ApiResponse, ApiResult } from '@/types/api';

export async function login(
  userData: LoginRequest,
): Promise<ApiResult<LoginResponse>> {
  try {
    const response = await apiFetch(
      `${BASE_URL}${AUTH}${LOGIN}?_holidaze=true`,
      {
        method: 'POST',
        body: JSON.stringify(userData),
      },
    );

    const json = await response.json();

    if (!response.ok) {
      const errorBody = json as ApiErrorResponse;
      return {
        success: false,
        error: errorBody.errors?.[0]?.message || 'Login failed',
        statusCode: response.status,
      };
    }
    const successBody = json as ApiResponse<LoginResponse>;
    return {
      success: true,
      data: successBody.data,
    };
  } catch {
    return {
      success: false,
      error: 'Could not reach the server. Check your connection and try again.',
    };
  }
}
