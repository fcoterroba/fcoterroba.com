export function getLanguageFromURL(url: URL): string {
  const langParam = url.searchParams.get('lang');
  if (langParam === 'en' || langParam === 'es') {
    return langParam;
  }

  if (url.pathname.startsWith('/en/')) return 'en';
  if (url.pathname.startsWith('/es/')) return 'es';
  
  if (url.pathname.startsWith('/en')) return 'en';
  if (url.pathname.startsWith('/es')) return 'es';

  return 'en';
}

export function getLocalizedPath(path: string, lang: string): string {
  if (path.startsWith('/es/') || path.startsWith('/en/')) {
    return path;
  }
  
  return `/${lang}${path}`;
}
