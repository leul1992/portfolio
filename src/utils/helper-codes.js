import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names and resolves conflicts using Tailwind-merge
 * @param {...string} inputs - Class names to merge
 * @returns {string} Merged class names
 */
export const cn = (...inputs) => twMerge(clsx(inputs));

/**
 * Creates a CSS variable string
 * @param {string} name - Variable name
 * @param {string} value - Variable value
 * @returns {string} CSS variable string
 */
export const cssVar = (name, value) => ({ [`--${name}`]: value });

/**
 * Generates a random ID
 * @returns {string} Random ID
 */
export const generateId = () => Math.random().toString(36).substring(2, 11);