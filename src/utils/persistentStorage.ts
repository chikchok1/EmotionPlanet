import { Storage } from "@apps-in-toss/web-framework";

type AppsInTossWindow = Window & {
  ReactNativeWebView?: {
    postMessage: (message: string) => void;
  };
};

const isBrowser = () => typeof window !== "undefined";

const canUseAppsInTossStorage = () => {
  if (!isBrowser()) return false;
  const appWindow = window as AppsInTossWindow;
  return typeof appWindow.ReactNativeWebView?.postMessage === "function";
};

const getLocalItem = (key: string) => {
  if (!isBrowser()) return null;
  return window.localStorage.getItem(key);
};

const setLocalItem = (key: string, value: string) => {
  if (!isBrowser()) return;
  window.localStorage.setItem(key, value);
};

const withTimeout = async <T,>(task: Promise<T>, timeoutMs = 1500) =>
  Promise.race<T>([
    task,
    new Promise<T>((_, reject) => {
      window.setTimeout(() => reject(new Error("Apps in Toss storage timed out")), timeoutMs);
    })
  ]);

let writeQueue = Promise.resolve();

export const getPersistentItem = async (key: string) => {
  if (canUseAppsInTossStorage()) {
    try {
      const appsInTossValue = await withTimeout(Storage.getItem(key));
      if (appsInTossValue !== null) return appsInTossValue;

      const legacyLocalValue = getLocalItem(key);
      if (legacyLocalValue !== null) {
        await withTimeout(Storage.setItem(key, legacyLocalValue));
      }
      return legacyLocalValue;
    } catch {
      return getLocalItem(key);
    }
  }

  return getLocalItem(key);
};

export const setPersistentItem = (key: string, value: string) => {
  writeQueue = writeQueue
    .then(async () => {
      if (canUseAppsInTossStorage()) {
        await withTimeout(Storage.setItem(key, value));
        return;
      }

      setLocalItem(key, value);
    })
    .catch(() => {
      setLocalItem(key, value);
    });

  return writeQueue;
};
