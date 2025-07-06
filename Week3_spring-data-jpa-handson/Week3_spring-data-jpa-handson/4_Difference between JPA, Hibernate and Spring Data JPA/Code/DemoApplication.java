package com.example.demo;

import com.example.demo.model.Employee;
import com.example.demo.service.EmployeeService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(DemoApplication.class, args);
        EmployeeService employeeService = context.getBean(EmployeeService.class);

        Employee emp = new Employee("John Doe");
        employeeService.addEmployee(emp);

        System.out.println("✅ Employee saved: " + emp.getName());
    }
}
