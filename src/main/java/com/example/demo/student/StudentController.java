package com.example.demo.student;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/v1")
public class StudentController {

    @GetMapping
    @RequestMapping("students")
    List<Student> getAllStudents() {
        Student s1 = new Student(UUID.randomUUID(),"James","Bond","jamesbond@gmail.com", Student.Gender.Male);
        Student s2 = new Student(UUID.randomUUID(),"Anna","Bond","annabond@gmail.com", Student.Gender.Female);
        return Arrays.asList(s1,s2);
    }

}

