/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { Education } from '../component/education';
// import { Etc } from '../component/etc';
import { Experience } from '../component/experience';
import { Footer } from '../component/footer';
import { Introduce } from '../component/introduce';
// import { OpenSource } from '../component/openSource';
// import { Presentation } from '../component/presentation';
import { Profile } from '../component/profile';
import { Project } from '../component/project';
import { SideProject } from '../component/sideProject';
import { Skill } from '../component/skill';
import { PrintButton } from '../component/common/PrintButton';
import { FloatingNav } from '../component/nav/FloatingNav';
import Payload from '../payload';
import { Article } from '../component/article';

function Yosume() {
  return (
    <>
      <NextSeo {...Payload._global.seo} />
      <Head>
        <title>{Payload._global.headTitle}</title>
        <link rel="shortcut icon" href={Payload._global.favicon} />
      </Head>
      <FloatingNav />
      <PrintButton />
      <main>
        <div className="resume-container">
          <Profile.Component payload={Payload.profile} />
          <Introduce.Component payload={Payload.introduce} />
          <Experience.Component payload={Payload.experience} />
          <Article.Component payload={Payload.article} />
          <Project.Component payload={Payload.project} />
          <SideProject.Component payload={Payload.sideProject} />
          {/* <OpenSource.Component payload={Payload.openSource} /> */}
          {/* <Presentation.Component payload={Payload.presentation} /> */}
          <Skill.Component payload={Payload.skill} />
          <Education.Component payload={Payload.education} />
          {/* <Etc.Component payload={Payload.etc} /> */}
          <Footer.Component payload={Payload.footer} />
        </div>
      </main>
    </>
  );
}

export default Yosume;
