import api from "../api";
import Config from "../../../config";

const endPoints = {
	authenticate: "/oauth/token",
	revoke: "/users/auth/revoke",
	refresh: "/users/auth/refresh",
};

export const authenticate = (username, password) => api.post(endPoints.authenticate, {
  "grant_type": "password",
  "client_id": Config.api.clientId,
  "client_secret": Config.api.clientSecret,
  "username": username,
  "password": password,
  "scope": "*",
});

export const refresh = (token, user) => api.post(endPoints.refresh, {
  "grant_type": "password",
  "client_id": Config.api.clientId,
  "client_secret": Config.api.clientSecret,
  "token": token,
  "user": user,
  "scope": "*",
});

export const revoke = tokens => api.post(endPoints.revoke, {
	"tokens": tokens
});
