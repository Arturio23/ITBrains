class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static createTodays() {
    // пам’ятайте, this = Article
    return new this("Сьогоднішній дайджест", new Date());
  }
}

let article = Article.createTodays();

alert( article.title ); // Сьогоднішній дайджест
