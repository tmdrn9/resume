import languageIcon from '../../asset/language-translation.png';

export function LanguageButton({ href, language }: { href: string; language: 'ko' | 'en' }) {
  const label = language === 'ko' ? '한국어' : 'English';

  return (
    <a
      href={href}
      lang={language}
      className="language-button"
      aria-label={`View resume in ${label}`}
      data-tooltip={label}
    >
      <img src={languageIcon} alt="" />
    </a>
  );
}
