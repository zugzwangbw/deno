import {
  Repository,
  MandarineRepository,
  CustomQuery,
} from "https://deno.land/x/mandarinets/mod.ts";
import { BooksModel, IBook } from "../models/booksModel.ts";


@Repository()
export abstract class BooksRepository extends MandarineRepository<BooksModel> {
    constructor() {
    super(BooksModel);
  }

  @CustomQuery(`SELECT * FROM public.books WHERE id = $1`)
  public findById(id: number) {}

  public findByAuthor(author: string) {}
  public findByName(name: string) {}
  public findByIdAndName(id: number, name: string) {}
  public upBook(book: IBook): void {}

  //   @CustomQuery("DELETE FROM books WHERE id = $1")
  @CustomQuery('DELETE FROM books WHERE id = $1')
  public async deleteBook(id: number) {
    // const foundBeer = await this.findById(id);
    // if (!foundBeer) {
    //   return { msg: `Beer with ID ${id} not found` };
    // }
    // let sql: string = `DELETE FROM books WHERE id = $1`;

  }
}
