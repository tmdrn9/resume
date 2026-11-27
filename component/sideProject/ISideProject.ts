import { IRow } from '../common/IRow';
import { ICommon } from '../common/ICommon';

export declare namespace ISideProject {
  export interface Payload extends ICommon.Payload {
    list: Item[];
  }

  export interface Item {
    title: string;
    websiteHref?: string;
    where: string;
    startedAt: string;
    endedAt?: string;
    contribution?: string;
    skillKeywords?: string[];
    descriptions: IRow.Description[];
  }
}
