import { jwtDecode } from "jwt-decode";

export function checkTokenIsValid(token?: string | null): Boolean {
  if (!token || token === "undefined") return false;

  const decodedToken = jwtDecode(token);
  const expirationTime = decodedToken?.exp;
  const isTokenValid = expirationTime
    ? expirationTime > Date.now() / 1000
    : false;

  return isTokenValid;
}
