import {AbstractBaseEntity} from '../common/abstract-base-entity';

export interface ArticleBaseDTO extends AbstractBaseEntity {

  /**
   * 标题
   */
  title: string;

  /**
   * 描述
   */
  description: string;

  /**
   * 文章内容
   */
  content: string;

}
