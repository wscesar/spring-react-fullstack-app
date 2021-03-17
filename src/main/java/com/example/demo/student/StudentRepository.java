package com.example.demo.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public class StudentRepository {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public StudentRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    Student getStudent(UUID id) {
        String sql =
                "select student_id, first_name, last_name, email, gender " +
                "from tbl_students where id = " + id;

//        return jdbcTemplate.query(sql, Student);
        return null;
    }

    int addStudent(Student student) {
        String sql = "INSERT INTO tbl_students(student_id, first_name, last_name, email, gender) VALUES(?, ?, ?, ?, ?)";
        return jdbcTemplate.update(
                sql,
                UUID.randomUUID(),
                student.getFirstname(),
                student.getLastname(),
                student.getEmail(),
                student.getGender().name()
        );

    }

    List<Student> getAllStudents() {
        String sql = "select student_id, first_name, last_name, email, gender from tbl_students";
        return jdbcTemplate.query(sql, mapStudentsFromDb());
    }

    RowMapper<Student> mapStudentsFromDb() {
        return  (resultSet, i) -> {
            String studentIdStr = resultSet.getString("student_id");
            UUID studentId = UUID.fromString(studentIdStr);

            String firstName = resultSet.getString("first_name");
            String lastName = resultSet.getString("last_name");
            String email = resultSet.getString("email");

            String genderStr = resultSet.getString("gender");
            Student.Gender gender = Student.Gender.valueOf(genderStr);

            return new Student(studentId, firstName, lastName, email, gender);
        };
    }

    int deleteStudent(UUID studentId) {
        String sql = "" +
                "DELETE FROM tbl_students " +
                "WHERE student_id = ?";
        return jdbcTemplate.update(sql, studentId);
    }
}
