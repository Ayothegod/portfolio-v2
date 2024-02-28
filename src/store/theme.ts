import { atom } from "nanostores";
const html = document.querySelector("html");

export function $setThemePreference(theme: any) {
    if (typeof localStorage !== "undefined") {
    localStorage.setItem("theme", theme);
  } else {
    console.error("localStorage is not supported in this browser.");
  }
}

export function $applyTheme() {
  if (html !== null) {
    html.classList.toggle("dark");
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }
}

export function $toggleTheme() {
  const currentTheme = localStorage.getItem("theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  $setThemePreference(newTheme);
  $applyTheme(html);
}
const localStorageTheme = localStorage.getItem("theme");

export const $currentTheme = atom(localStorageTheme);
