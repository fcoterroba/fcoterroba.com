export function getLanguageFromURL(url: URL): string {
  const pathname = url.pathname;

  if (pathname.startsWith('/es/')) return 'es';
  if (pathname.startsWith('/en/')) return 'en';

  return 'en';
}

export function getLocalizedPath(path: string, lang: string): string {
  if (path.startsWith('/es/') || path.startsWith('/en/')) {
    return path;
  }
  
  return `/${lang}${path}`;
}
