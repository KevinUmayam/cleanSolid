import { LocalDataBaseService, JsonDataBaseService, PostProvider } from './05-dependency-c';

// normaly you want to define this elsewahre 
export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor(private postProvider:PostProvider) {}

    async getPosts() {
        // const jsonDB = new LocalDataBaseService();
        // this.posts = await jsonDB.getFakePosts();
        this.posts = await this.postProvider.getPosts();

        return this.posts;
    }
}