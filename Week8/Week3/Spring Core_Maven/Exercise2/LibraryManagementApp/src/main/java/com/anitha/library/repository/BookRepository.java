package com.anitha.library.repository;

import java.util.Arrays;
import java.util.List;

public class BookRepository {
    public List<String> getAllBooks() {
        return Arrays.asList("Java Fundamentals", "Spring in Action", "Effective Java");
    }
}
