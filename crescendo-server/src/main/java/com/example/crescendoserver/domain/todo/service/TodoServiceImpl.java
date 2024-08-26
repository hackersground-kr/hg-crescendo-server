package com.example.crescendoserver.domain.todo.service;

import com.example.crescendoserver.domain.auth.service.AuthService;
import com.example.crescendoserver.domain.todo.domain.Todo;
import com.example.crescendoserver.domain.todo.dto.request.TodoCreateRequest;
import com.example.crescendoserver.domain.todo.dto.request.TodoEditRequest;
import com.example.crescendoserver.domain.todo.repository.TodoRepository;
import com.example.crescendoserver.domain.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
public class TodoServiceImpl implements TodoService {
    private TodoRepository todoRepository;
    private final AuthService authService;

    @Override
    public void createTodo(TodoCreateRequest request) {
        User user = authService.getUser();
        Todo todo = Todo.builder()
                .title(request.title())
                .author(user)
                .date(request.date())
                .checked(false)
                .build();
        todoRepository.save(todo);
    }

    @Override
    public void deleteTodo(Long todoId) {
        todoRepository.deleteById(todoId);
    }

    @Override
    public void editTodo(Long todoId, TodoEditRequest request) {
        Todo todo = todoRepository.findById(todoId).orElse(null);
        todo.setTitle(request.title());
        todo.setDate(request.date());

        todoRepository.save(todo);
    }

    @Override
    public List<Todo> getTodos() {
        User user = authService.getUser();
        return todoRepository.findAllByAuthorOrderByIdDesc(user);
    }

    @Override
    public Todo getTodo(Long todoId) {
        return todoRepository.findById(todoId).orElse(null);
    }

    @Override
    public void todoCheck(Long todoId) {
        Todo todo = todoRepository.findById(todoId).orElse(null);
        todo.setChecked(!todo.getChecked());
        todoRepository.save(todo);
    }
}
