import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'Vision 및 AI 분야에서 약 3년간 의료영상, 산업검사, 디지털 콘텐츠, 3D Vision 등 다양한 도메인의 연구·개발 경험을 쌓았습니다. 데이터 구축과 전처리, 모델 설계, 학습·평가뿐 아니라 데이터 특성을 분석하고 문제를 정의하여 서비스 적용까지 이어지는 AI 연구개발 전 과정을 경험했으며, 이를 바탕으로 SCI(E) 논문 6편(1저자 2편)을 게재했습니다.',
    '다양한 도메인에서 데이터를 이해하고 문제를 정의하는 경험을 바탕으로, 새로운 기술을 실제 서비스의 가치로 연결하는 AI 엔지니어를 지향합니다.',
  ],
  sign: 'Seung-Lee Lee',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
