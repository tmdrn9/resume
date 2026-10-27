import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { Education } from './education';
import { Experience } from './experience';
import { Footer } from './footer';
import { Introduce } from './introduce';
import { Profile } from './profile';
import { Project } from './project';
import { SideProject } from './sideProject';
import { Skill } from './skill';
import { PrintButton } from './common/PrintButton';
import { FloatingNav } from './nav/FloatingNav';
import { Article } from './article';
import { Payload } from '../payload';

export function ResumePage({
  payload,
  language,
  languageSwitchHref,
}: {
  payload: Payload;
  language: 'ko' | 'en';
  languageSwitchHref: string;
}) {
  const languageSwitchLabel = language === 'ko' ? 'English' : '한국어';

  return (
    <>
      <NextSeo {...payload._global.seo} />
      <Head>
        <title>{payload._global.headTitle}</title>
        <link rel="shortcut icon" href={payload._global.favicon} />
      </Head>
      <FloatingNav />
      <PrintButton />
      <main lang={language}>
        <div className="resume-container">
          <div className="language-switch">
            <a href={languageSwitchHref} lang={language === 'ko' ? 'en' : 'ko'}>
              {languageSwitchLabel}
            </a>
          </div>
          <Profile.Component payload={payload.profile} />
          <Introduce.Component payload={payload.introduce} />
          <Experience.Component payload={payload.experience} />
          <Article.Component payload={payload.article} />
          <Project.Component payload={payload.project} />
          <SideProject.Component payload={payload.sideProject} />
          <Skill.Component payload={payload.skill} />
          <Education.Component payload={payload.education} />
          <Footer.Component payload={payload.footer} />
        </div>
      </main>
    </>
  );
}
