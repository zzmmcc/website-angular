import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
})
export class ArticleDetailComponent implements OnInit{

  /**
   *
   */
  isVisible: boolean = false;

  ngOnInit(): void {}

}
