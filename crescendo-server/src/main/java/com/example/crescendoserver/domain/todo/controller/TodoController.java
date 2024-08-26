package com.example.crescendoserver.domain.todo.controller;

import com.example.crescendoserver.domain.todo.domain.Todo;
import com.example.crescendoserver.domain.todo.dto.request.TodoCreateRequest;
import com.example.crescendoserver.domain.todo.dto.request.TodoEditRequest;
import com.example.crescendoserver.domain.todo.service.TodoService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@Tag(name = "투두", description = "ToDo")
@RestController
@RequestMapping("/posts")
@RequiredArgsConstructor
public class TodoController {
    private final TodoService todoService;

    @PostMapping
    public void createTodo(@RequestBody TodoCreateRequest todoCreateRequest) {
        todoService.createTodo(todoCreateRequest);
    }

    @GetMapping
    public List<Todo> getAllTodos() {
        return todoService.getTodos();
    }

    @GetMapping("/{todoId}")
    public Todo getTodo(@PathVariable Long todoId) {
        return todoService.getTodo(todoId);
    }

    @DeleteMapping("/{todoId}")
    public void deleteTodo(@PathVariable Long todoId) {
        todoService.deleteTodo(todoId);
    }

    @PostMapping("/{todoId}")
    public void checkTodo(@PathVariable Long todoId) {
        todoService.todoCheck(todoId);
    }

    @PatchMapping("/{todoId}")
    public void editTodo(@PathVariable Long todoId, @RequestBody TodoEditRequest request) {
        todoService.editTodo(todoId, request);
    }
}
