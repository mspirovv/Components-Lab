import { Component, Input } from '@angular/core';
import { Article } from '../models/article.model';
import { data } from '../data/seed';


@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  private symbols: number = 250;
  @Input() article: Article;
  @Input() articleDesc: string;
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = "Show Image";

  
  constructor() {
    this.articleDescLen = 0;
    this.descToShow = "";
    this.article = new Article("", "", "", ""); // 
    this.articleDesc = "";  
  }

  
 readMore(): void {

  this.articleDescLen = this.symbols;
  if (this.articleDescLen == this.articleDesc.length) {
    this.showHideBtn = true;
    this.showReadMoreBtn = false;
  } else {
    this.descToShow = this.articleDesc.substring(0, this.articleDescLen);
  }
}

toggleImage(): void {
  this.imageIsShown = !this.imageIsShown;
  this.imageButtonTitle = this.imageButtonTitle === "Show Image" ? "Hide Image" : "Show Image";
}

hideDesc() : void{
  this.descToShow = "";
  this.articleDescLen = 0;
  this.showHideBtn = false;
  this.showReadMoreBtn = true;
}
}