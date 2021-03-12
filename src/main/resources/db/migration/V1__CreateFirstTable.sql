Create table if not exists tbl_students (
    student_id UUID primary key not null,
    first_name varchar(100) not null,
    last_name varchar(100) not null,
    email varchar(100) not null unique,
    gender varchar(6) not null
        check(
            gender = 'Male' or
            gender = 'Female'
        )
);