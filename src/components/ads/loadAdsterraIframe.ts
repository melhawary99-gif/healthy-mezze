let adsterraQueue: Promise<void> = Promise.resolve();

export function loadAdsterraIframe(
  container: HTMLElement,
  options: {
    key: string;
    width: number;
    height: number;
  },
): Promise<HTMLScriptElement> {
  const run: Promise<HTMLScriptElement> = adsterraQueue.then(
    () =>
      new Promise<HTMLScriptElement>((resolve, reject) => {
        const script = document.createElement("script");

        window.atOptions = {
          key: options.key,
          format: "iframe",
          height: options.height,
          width: options.width,
          params: {},
        };

        script.src = `https://bauval.org/22/${options.key}`;
        script.async = false;

        script.onload = () => resolve(script);
        script.onerror = () =>
          reject(
            new Error(`Failed to load Adsterra banner: ${options.key}`),
          );

        container.appendChild(script);
      }),
  );

  adsterraQueue = run.then(
    () => undefined,
    () => undefined,
  );

  return run;
}
