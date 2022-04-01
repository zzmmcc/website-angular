import {AbstractBaseEntity} from './common/abstract-base-entity';

export interface TagDTO extends AbstractBaseEntity{
  /**
   * 名称
   */
  name: string;
}
