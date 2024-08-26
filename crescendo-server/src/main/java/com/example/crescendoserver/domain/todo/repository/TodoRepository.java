package com.example.crescendoserver.domain.todo.repository;

import com.example.crescendoserver.domain.todo.domain.Todo;
import com.example.crescendoserver.domain.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
    List<Todo> findAllByAuthorOrderByIdDesc(User author);
}
