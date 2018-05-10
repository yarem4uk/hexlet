export default class Post {
  static id = 0;
  constructor(title, body) {
    this.id = Post.id += 1;
    this.title = title;
    this.body = body;
  }
}
