import {
  POST,
  PUT,
  DELETE,
  GET,
  RequestBody,
  RouteParam,
  QueryParam,
  Controller,
  Cors,
} from "https://deno.land/x/mandarinets/mod.ts";
import { BooksRepository } from "../database/repositories/booksRepository.ts";
import { IBook, BooksModel } from "../database/models/booksModel.ts";

@Controller("/api")
@Cors({ origin: "https://myorigin.com" })
export class BooksController {
  constructor(private readonly booksRepository: BooksRepository) {}

  @POST("/add-book")
  public async addBook(@RequestBody() bookToAdd: IBook) {
    let newBook: BooksModel = new BooksModel();
    newBook.author = bookToAdd.author;
    newBook.name = bookToAdd.name;
    await this.booksRepository.save(newBook);

    return { msg: "New book have been added" };
  }

  @GET("/get-book/:id")
  public async getBookById(@RouteParam() id: number) {
    return await this.booksRepository.findById(id);
  }

  @GET("/:author/books")
  public async getBooksByAuthor(@RouteParam() author: string) {
    return await this.booksRepository.findByAuthor(author);
  }

  @GET("/search")
  public async getBooksByIdAndName(
    @QueryParam() id: number,
    @QueryParam() name: string
  ) {
    return await this.booksRepository.findByIdAndName(id, name);
  }

  @GET("/all-books")
  public async getAllBooks() {
    return await this.booksRepository.findAll();
  }

  @PUT("/up-book")
  public async upBook(@RequestBody() requestBody: IBook) {
    return await this.booksRepository.upBook(requestBody);
  }

  @DELETE("/delete-book")
  public async deleteBook(@QueryParam() id: number) {
    return await this.booksRepository.deleteBook(id);
  }
}