import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '한림대학교',
      subTitle: '컴퓨터공학 석사 졸업',
      startedAt: '2022-09',
      endedAt: '2024-08',
    },
    {
      title: '한림대학교',
      subTitle: '전자공학 / 빅데이터 전공 학사 졸업',
      startedAt: '2018-03',
      endedAt: '2022-08',
    },
    {
      title: '혜원여자고등학교',
      subTitle: '인문계 졸업',
      startedAt: '2015-03',
      endedAt: '2018-02',
    },
  ],
};

export default education;
