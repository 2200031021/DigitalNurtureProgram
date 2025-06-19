package com.ds.algorithms;

import java.util.*;

public class SearchApp {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        List<String> products = Arrays.asList(
            "Laptop", "Smartphone", "Headphones", "Smartwatch", "Shoes", "Jacket", "Lamp"
        );

        System.out.println("Enter search keyword:");
        String keyword = sc.nextLine().toLowerCase();

        System.out.println("Search Results:");
        for (String product : products) {
            if (product.toLowerCase().contains(keyword)) {
                System.out.println("- " + product);
            }
        }

        sc.close();
    }
}
