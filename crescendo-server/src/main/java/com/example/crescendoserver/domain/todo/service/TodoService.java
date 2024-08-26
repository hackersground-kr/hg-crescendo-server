package com.example.crescendoserver.domain.todo.service;

import com.example.crescendoserver.domain.todo.domain.Todo;
import com.example.crescendoserver.domain.todo.dto.request.TodoCreateRequest;
import com.example.crescendoserver.domain.todo.dto.request.TodoEditRequest;

import java.util.List;

public interface TodoService {
    void createTodo(TodoCreateRequest request);

    void deleteTodo(Long todoId);

    void editTodo(Long todoId, TodoEditRequest request);

    List<Todo> getTodos();

    Todo getTodo(Long todoId);

    void todoCheck(Long todoId);
}
