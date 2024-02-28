// store/users.ts
import { atom } from "nanostores";

interface User {
  name: string;
  age: number;
}

export const $users = atom<User[]>([]);

export function $addUser(user: User) {
  $users.set([...$users.get(), user]);
}

export function $setThemePreference(theme: any) {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("theme", theme);
  } else {
    console.error("localStorage is not supported in this browser.");
    console.log("set theme preference: false");
  }
}

export function $applyTheme(html: any) {
  if (html !== null) {
    html.classList.toggle("dark");
    // , theme === "dark"
  }
}

export function $toggleTheme(html: any) {
  const currentTheme = localStorage.getItem("theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  $setThemePreference(newTheme);
  $applyTheme(html);
  $updateCurrentTheme()
}

export const $currentTheme = atom("dark");

export function $updateCurrentTheme() {
  const currentTheme = localStorage.getItem("theme");
  
  if (currentTheme) {
      $currentTheme.set(currentTheme);
  }
}

