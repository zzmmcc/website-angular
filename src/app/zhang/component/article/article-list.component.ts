import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../service/article-service';
import {ArticleDTO} from '../../model/article-dto';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit{
  list: Array<ArticleDTO> = new Array<ArticleDTO>();
  constructor(private articleService: ArticleService) {
  }

  /**
   * 文本内容
   * @private
   */
  content: string;

  ngOnInit(): void {
    this.articleService.findAll().subscribe(data => this.list = data);
  }

}
