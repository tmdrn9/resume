import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '한림대학교 일반대학원',
      subTitle: '컴퓨터공학 석사',
      startedAt: '2022-09',
      endedAt: '2024-08',
    },
    {
      title: '한림대학교',
      subTitle: '전자공학 / 빅데이터 전공 학사',
      startedAt: '2018-03',
      endedAt: '2022-08',
    },
  ],
};

export default education;
