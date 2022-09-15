export default function interFaceSample() {
  interface Bread {
    colories: number
  }

  interface Bread {
    type: string
  }

  const FrancePan: Bread = {
    colories: 200,
    type: 'hard',
  }

  //型エイリアスで表現

  type MaboDofu = {
    calories: number
    spicyLevel: number
  }

  type Rice = {
    calories: number
    gram: number
  }

  type MaboDon = MaboDofu & Rice //union

  const maboDon: MaboDon = {
    calories: 500,
    spicyLevel: 10,
    gram: 200,
  }

  //

  interface Book {
    page: number
    title: string
  }

  interface Magazine extends Book {
    cycle: 'daily' | 'weekly' | 'monthly'
  }

  const jump: Magazine = {
    page: 230,
    title: 'GanGan',
    cycle: 'daily',
  }

  type bookType = {
    page: number
    title: string
  }

  interface HandBook extends bookType {
    theme: string
  }

  const tabilog: HandBook = {
    page: 30,
    title: 'TABIROGU',
    theme: 'trip',
  }

  //interface implements

  class Comic implements Book {
    page: number
    title: string

    constructor(page: number, title: string, private publishYear: string) {
      this.page = page
      this.title = title
    }

    getPublishYaer() {
      return this.title + 'が発売されたのは' + this.publishYear + 'です'
    }
  }

  const popularComic = new Comic(200, 'fullmetal', '2000')

  console.log(popularComic.getPublishYaer())
}
