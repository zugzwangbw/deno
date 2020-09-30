import { BooksController } from "./controllers/booksController.ts";
import { BooksRepository } from "./database/repositories/booksRepository.ts";
import { MandarineCore } from "https://deno.land/x/mandarinets/mod.ts";

const controllers = [BooksController];
const repositories = [BooksRepository];

new MandarineCore().MVC().run({ port: 8083, hostname: "127.0.0.1" });
