package com.example.demo.student;

import java.util.UUID;

public class Student {

    private final UUID studentId;
    private final String firstName;
    private final String lastname;
    private final String email;
    private final Gender gender;

    enum Gender {Male, Female}

    public Student(UUID studentId, String firstName, String lastname, String email, Gender gender) {
        this.studentId = studentId;
        this.firstName = firstName;
        this.lastname = lastname;
        this.email = email;
        this.gender = gender;
    }

    public UUID getStudentId() {
        return studentId;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastname() {
        return lastname;
    }

    public String getEmail() {
        return email;
    }

    public Gender getGender() {
        return gender;
    }

    @Override
    public String toString() {
        return "Student{" +
                "studentId=" + studentId +
                ", firstName='" + firstName + '\'' +
                ", lastname='" + lastname + '\'' +
                ", email='" + email + '\'' +
                ", gender=" + gender +
                '}';
    }
}




