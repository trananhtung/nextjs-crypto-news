import { hash, compare } from 'bcryptjs';

/**
 * Create a hash password
 */
export async function hashPassword(password: string) {
  const hashedPassword = await hash(password, 1);
  return hashedPassword;
}

/**
 * Verify if the password and hashed password is correct
 */
export async function verifyPassword(password: string, hashedPassword: string) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}

declare global {
  interface Response {
    json(): Promise<{ message?: string; watchList?: string[] }>;
  }
}
/**
 * Create an user
 */
export async function createUser(username: string, password: string) {
  const response = await fetch('/api/auth/sign-up', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
}

/**
 * Validate user name
 */
export function validateUserName(username: string) {
  const regex = /^[a-z]{6,12}$/;
  const isValid = regex.test(username);
  return isValid;
}

/**
 * Validate password
 */
export function validatePassword(password: string) {
  const regex = /^[a-zA-z0-9]{8,12}$/;
  const isValid = regex.test(password);
  return isValid;
}
