import {TagDTO} from '../tag-dto';
import {ArticleBaseDTO} from './article-base-dto';

export interface ArticleDTO extends ArticleBaseDTO{

  /**
   * 标签
   */
  tags: Array<TagDTO>;
}
