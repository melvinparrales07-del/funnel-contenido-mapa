import type { LeadDataPartial } from "./types";

const STORAGE_KEY = "leadData";

/**
 * Guarda (o actualiza) los datos del lead en localStorage.
 *
 * Es el único punto de entrada para persistir datos del funnel. Cuando
 * se conecte una API real (Kit, Skool, ManyChat, etc.), reemplazar el
 * cuerpo de esta función por la llamada correspondiente sin tener que
 * tocar los componentes que la usan.
 */
export function saveLeadData(data: LeadDataPartial): LeadDataPartial {
  if (typeof window === "undefined") return data;

  const existing = getLeadData();
  const merged = { ...existing, ...data };

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  return merged;
}

export function getLeadData(): LeadDataPartial {
  if (typeof window === "undefined") return {};

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return {};

  try {
    return JSON.parse(raw) as LeadDataPartial;
  } catch {
    return {};
  }
}

export function clearLeadData(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
}
