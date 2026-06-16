import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'Vision 및 AI 분야에서 약 3년간 연구·개발을 수행하며 의료영상, 산업검사, 디지털 콘텐츠, 3D Vision, AI 포렌식 등 다양한 도메인의 프로젝트를 경험했습니다. 데이터 구축·전처리부터 모델 설계, 학습, 평가, 성능 분석 및 논문 작성까지 AI 연구개발 전 과정을 수행하며 문제를 해결해 왔습니다. 또한 SCI(E) 논문 6편(1저자 2편)을 게재하며 연구 역량과 기술적 전문성을 검증받았습니다.',
    '새로운 기술과 문제를 빠르게 이해하고 실질적인 성과로 연결하는 연구·개발자를 지향합니다. 다양한 도메인 경험과 데이터 중심의 문제 해결 역량을 바탕으로, 연구와 서비스의 간극을 줄이며 조직과 함께 성장하는 AI 엔지니어가 되고자 합니다.',
  ],
  sign: 'Seung-Lee Lee',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
