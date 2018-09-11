import pages from '@/content/main.js'

class StaticPageRepo {
  constructor() {
    this.pages=pages
  }

  load(name) {
    return Promise.resolve(this.pages[name])
  }
}

export default StaticPageRepo;
