package com.anitha.library.service;

import com.anitha.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    // Setter method for DI
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayAllBooks() {
        bookRepository.getAllBooks().forEach(System.out::println);
    }
}
