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
import { LanguageButton } from './common/LanguageButton';
import { FloatingNav } from './nav/FloatingNav';
import { Article } from './article';
import { Payload } from '../payload';
import { homepage } from '../package.json';

export function ResumePage({
  payload,
  language,
}: {
  payload: Payload;
  language: 'ko' | 'en';
}) {
  const targetPath = language === 'ko' ? '' : 'ko';
  const homepageUrl = new URL(homepage);
  const isGitHubPages =
    typeof window !== 'undefined' && window.location.hostname === homepageUrl.hostname;
  const basePath = isGitHubPages ? homepageUrl.pathname : '';
  const languageSwitchHref = `${basePath.replace(/\/$/, '')}/${targetPath}`;

  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <NextSeo {...payload._global.seo} />
      <Head>
        <title>{payload._global.headTitle}</title>
        <link rel="shortcut icon" href={payload._global.favicon} />
      </Head>
      <FloatingNav />
      <PrintButton />
      <LanguageButton href={languageSwitchHref} language={language === 'ko' ? 'en' : 'ko'} />
      <main lang={language}>
        <div className="resume-container">
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
