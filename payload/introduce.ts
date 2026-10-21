import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '3D Vision·생성 모델 기반 연구개발 엔지니어입니다. 석사 과정의 NeRF 연구를 시작으로 Generative 3D Scene Generation, Indoor 3D Reconstruction과 Mesh Refinement까지 3D 문제를 이어서 다뤄왔습니다. NeRF·Diffusion 기반 1저자 논문 2편(ACM TOMM, Image and Vision Computing)을 포함해 SCI(E) 6편을 게재했습니다.',
    '데이터 구축과 문제 정의부터 모델 설계·학습·평가까지 수행했고, 사내 서비스 배포까지 맡았습니다. 익숙하지 않은 문제를 정의하고 끝까지 끌고 가는 방식으로 일해왔으며, 3D 공간 데이터를 실제 서비스의 가치로 연결하는 엔지니어를 지향합니다',
  ],
  sign: 'Seung-Lee Lee',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
