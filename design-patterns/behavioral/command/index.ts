// mengelompokkan beberapa method untuk melakukan bisnis logic secara spesifik

namespace Command {
  interface BlogPost {
    execute(params: any): any
  }

  class BlogUtility {
    static titleToSlug() {}
    static dateToHumanize() {}
  }

  class SaveBlogPost implements BlogPost {
    execute() {
      BlogUtility.titleToSlug()
      this.save()
    }

    protected save(){
      // menyimpan ke db
    }
  }

  class UpdateBlogPost implements BlogPost{
    execute() {
      BlogUtility.titleToSlug()
      this.update()
    }

    protected update(){
      // update ke db
    }
  }

  class GetBlogPost implements BlogPost {
    execute(singlePost: boolean) {
      BlogUtility.dateToHumanize()

      if(singlePost){
        this.getPost()
      }else{
        this.getPosts()
      }
    }

    getPost(){}
    getPosts(){}
  }

  new SaveBlogPost().execute()
}

namespace Command2{
  class BlogService {
    save() {}
    update() {}
    titleToSlug() {}
  }

  interface BlogPost {
    execute(params: any): any
  }

  class SaveBlogPost implements BlogPost {
    execute() {
      const blog = new BlogService()
      blog.titleToSlug()
      blog.update()
    }
  }

  new SaveBlogPost().execute()
}