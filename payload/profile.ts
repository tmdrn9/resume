import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/victory.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '이승리',
    small: '(Seung-Lee Lee)',
  },
  contact: [
    {
      title: 'tmdrn9@naver.com',
      link: 'mailto:tmdrn9@naver.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: '@tmdrn9',
      link: 'https://github.com/tmdrn9',
      icon: faGithub,
    },
    {
      link: 'https://linkedin.com/in/leeseunglee/',
      icon: faLinkedin,
    },
  ],
  notice: {
    title:
      "이메일로 연락 부탁드립니다.",
    icon: faBell,
  },
};

export default profile;
