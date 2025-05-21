console.log("auth.js loaded");
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  validatePassword
} from "firebase/auth";
import { auth } from "./firebase.js";

// ---------- REJESTRACJA ----------
export async function register(email, password) {
  // weryfikacja hasła
  const status = await validatePassword(getAuth(), password);
  if (!status.isValid) throw mapPasswordError(status);

  return createUserWithEmailAndPassword(auth, email, password);
}

// ---------- LOGOWANIE ----------
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// ---------- POMOCNICZE ----------
function mapPasswordError(s) {
  const unmet = [];
  if (!s.containsLowercaseLetter)    unmet.push("małą literę");
  if (!s.containsUppercaseLetter)    unmet.push("wielką literę");
  if (!s.containsNumericCharacter)   unmet.push("cyfrę");
  if (!s.meetsMinPasswordLength)     unmet.push("co najmniej 8 znaków");
  if (!s.meetsMaxPasswordLength)              unmet.push("znak specjalny");
  return new Error("Hasło musi zawierać: " + unmet.join(", "));
}
