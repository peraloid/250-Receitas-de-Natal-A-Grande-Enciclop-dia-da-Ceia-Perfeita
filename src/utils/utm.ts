/**
 * Utility for capturing, persisting in sessionStorage, and forwarding UTM tracking parameters
 * to Cakto checkout links without altering existing parameters.
 */

const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'campaign_id',
  'adset_id',
  'ad_id',
];

const STORAGE_KEY = 'receitas_natal_utms';

/**
 * Captures UTM parameters from current URL and stores in sessionStorage.
 */
export function initUtmTracking(): void {
  if (typeof window === 'undefined') return;

  try {
    const currentParams = new URLSearchParams(window.location.search);
    const stored: Record<string, string> = JSON.parse(
      sessionStorage.getItem(STORAGE_KEY) || '{}'
    );

    let hasChanges = false;

    // Capture standard requested UTM & ID keys
    UTM_KEYS.forEach((key) => {
      const val = currentParams.get(key);
      if (val) {
        stored[key] = val;
        hasChanges = true;
      }
    });

    // Also capture any extra utm_* or tracking parameters
    currentParams.forEach((val, key) => {
      if (key.startsWith('utm_') || key === 'src' || key === 'sck') {
        if (!stored[key]) {
          stored[key] = val;
          hasChanges = true;
        }
      }
    });

    if (hasChanges || !sessionStorage.getItem(STORAGE_KEY)) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
    }
  } catch (e) {
    console.warn('Unable to persist UTMs in sessionStorage', e);
  }
}

/**
 * Builds the destination checkout URL preserving existing query parameters
 * and appending all UTM parameters stored in sessionStorage.
 */
export function buildCheckoutUrl(baseUrl: string): string {
  try {
    const url = new URL(baseUrl);
    let storedParams: Record<string, string> = {};

    if (typeof window !== 'undefined') {
      try {
        storedParams = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}');
      } catch {
        storedParams = {};
      }

      // Check current URL parameters in case of fresh direct click
      const currentParams = new URLSearchParams(window.location.search);
      currentParams.forEach((val, key) => {
        if (UTM_KEYS.includes(key) || key.startsWith('utm_') || key === 'src' || key === 'sck') {
          storedParams[key] = val;
        }
      });
    }

    // Merge parameters into checkout URL without erasing existing parameters
    Object.entries(storedParams).forEach(([key, val]) => {
      if (val && !url.searchParams.has(key)) {
        url.searchParams.set(key, val);
      }
    });

    return url.toString();
  } catch {
    return baseUrl;
  }
}
