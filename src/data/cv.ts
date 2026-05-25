export const CV_FILES = {
  es: '/cv/fcoterroba-cv-es.pdf',
  en: '/cv/fcoterroba-cv-en.pdf',
} as const;

export type CvLang = keyof typeof CV_FILES;
