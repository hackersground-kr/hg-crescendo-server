package com.example.crescendoserver.domain.todo.repository;

import com.example.crescendoserver.domain.todo.domain.Todo;
import com.example.crescendoserver.domain.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TodoRepository extends JpaRepository<Todo, Long> {
    List<Todo> findAllByAuthorOrderByIdDesc(User author);
}
