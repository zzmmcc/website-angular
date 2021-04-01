import {AbstractTreeEntity} from './common/abstract-tree-entity';

export interface MenuDTO extends AbstractTreeEntity<MenuDTO>{
  /**
   * 菜单名称
   */
  name: string;

  /**
   * 菜单路径
   */
  urlPath: string;

  /**
   * 图标路径
   */
  iconPath?: string;

  /**
   * 是否禁用
   */
  disabled: boolean;
}
