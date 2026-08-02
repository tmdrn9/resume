import { ISideProject } from '../component/sideProject/ISideProject';

const sideProject: ISideProject.Payload = {
  disable: false,
  showMoreCount: 3,
  list: [
    {
      title: 'Personal Body',
      websiteHref: 'https://personalbody.co.kr/business',
      startedAt: '2025-12',
      endedAt: '2026-04',
      where: 'AI 기반 3D 체형 분석 서비스',
      descriptions: [
        {
          content: '전신 사진 기반 3D 체형 분석 서비스 기획 및 개발',
        },
        {
          content: '프로젝트 아이디어 제안 및 테스트 데이터셋 직접 수집·구축',
        },
        {
          content: 'SAM3D-Body 기반 3D 인체 모델 생성 및 Gemini API 기반 체형 분석 파이프라인 구축',
        },
        {
          content: '실제 서비스 배포 및 파트너사 협업을 통한 서비스 운영',
        },
      ],
    },
  ],
};

export default sideProject;
