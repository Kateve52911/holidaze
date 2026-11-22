import type { RegisterRequest } from '@/services/api/auth/auth.types';
import type { ApiErrorResponse, ApiResponse, ApiResult } from '@/types/api';
import { apiFetch } from '@/services/api/apiFetch';
import { AUTH, BASE_URL, REGISTER } from '@/config/constants';
import type { Profile } from '@/types/profile';

export async function register(
  userData: RegisterRequest,
): Promise<ApiResult<Profile>> {
  try {
    const response = await apiFetch(`${BASE_URL}${AUTH}${REGISTER}`, {
      method: 'POST',
      body: JSON.stringify(userData),
    });

    const json = await response.json();

    if (!response.ok) {
      const errorBody = json as ApiErrorResponse;
      return {
        success: false,
        error: errorBody.errors?.[0]?.message || 'Registration failed',
        statusCode: response.status,
      };
    }
    const successBody = json as ApiResponse<Profile>;
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
