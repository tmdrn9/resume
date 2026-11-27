import { IIntroduce } from '../component/introduce/IIntroduce';
import { latestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'Generative AI와 Computer Vision 기반 연구개발 엔지니어입니다. 석사 과정에서 GAN, Diffusion, NeRF 기반 연구를 수행했으며, 이후 산업 현장에서 Multimodal Retrieval, Agentic 3D Scene Generation, 3D Reconstruction 등 다양한 AI 기술을 개발하고 실제 업무와 서비스에 적용해 왔습니다. 1저자 논문 2편(ACM TOMM, Image and Vision Computing)을 포함해 SCI(E) 논문 6편을 게재했습니다.',
    '데이터 구축과 문제 정의부터 모델 설계·학습·평가, 시스템 개발 및 서비스 배포까지 전 과정을 경험했습니다. 새로운 기술을 이해하고 실제 문제에 맞게 적용하여 연구 성과를 서비스 가치로 연결하는 엔지니어를 지향합니다.',
  ],
  sign: 'Seung-Lee Lee',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: latestUpdatedAt,
};

export default introduce;
