const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:4000'

export interface User {
  id: string
  name: string
  email: string
  createdAt: string
}

interface ApiSuccess<T> {
  ok: true
  data: T
}

interface ApiFailure {
  ok: false
  error: string
}

type ApiResponse<T> = ApiSuccess<T> | ApiFailure

export class ApiError extends Error {
  constructor(message: string) {
    super(message)
  }
}

async function request<T>(path: string, options: RequestInit = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })
  const payload = (await response.json()) as ApiResponse<T>

  if (!response.ok || !payload.ok) {
    throw new ApiError(payload.ok ? 'Request failed' : payload.error)
  }

  return payload.data
}

export function login(input: { email: string; password: string }) {
  return request<{ user: User }>('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(input),
  })
}

export function register(input: {
  name: string
  email: string
  password: string
  confirmPassword: string
}) {
  return request<{ user: User }>('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify(input),
  })
}

export function logout() {
  return request<{ message: string }>('/api/auth/logout', {
    method: 'POST',
  })
}

export function getCurrentUser() {
  return request<{ user: User }>('/api/auth/me')
}
