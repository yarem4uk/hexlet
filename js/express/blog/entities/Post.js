export default class Post {
  static id = 0;
  constructor(title, body) {
    Post.id += 1;
    this.id = Post.id;
    this.title = title;
    this.body = body;
  }
}
