package com.example.demo.student;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class Student {

    private final UUID studentId;
    private final String firstname;
    private final String lastname;
    private final String email;
    private final Gender gender;

    enum Gender {Male, Female}

    public Student(

            @JsonProperty("studentId") UUID studentId,
            @JsonProperty("firstName") String firstname,
            @JsonProperty("lastName") String lastname,
            @JsonProperty("email") String email,
            @JsonProperty("gender") Gender gender
    ) {
        this.studentId = studentId;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.gender = gender;
    }

    public UUID getStudentId() {
        return studentId;
    }

    public String getFirstname() {
        return firstname;
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
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", email='" + email + '\'' +
                ", gender=" + gender +
                '}';
    }
}




