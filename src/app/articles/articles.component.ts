import { Component, OnInit } from '@angular/core';
import { ArticleData } from '../data/data';
import { Article } from '../models/article.model';
import { ArticleComponent } from '../article/article.component';


@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent implements OnInit {
  articles : Article[];

  constructor() {
  this.articles = [];
  }

  ngOnInit(){
    this.articles = new ArticleData().getData();  
  }

}
