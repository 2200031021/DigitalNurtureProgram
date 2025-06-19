package com.ds.algorithms;

import java.util.Scanner;

public class ForecastApp {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter current revenue: ");
        double currentRevenue = sc.nextDouble();

        System.out.print("Enter expected annual growth rate (%): ");
        double growthRate = sc.nextDouble();

        System.out.print("Enter number of years for forecast: ");
        int years = sc.nextInt();

        System.out.println("\nYear-wise Forecast:");
        for (int i = 1; i <= years; i++) {
            currentRevenue += currentRevenue * (growthRate / 100);
            System.out.printf("Year %d: ₹%.2f%n", i, currentRevenue);
        }

        sc.close();
    }
}
