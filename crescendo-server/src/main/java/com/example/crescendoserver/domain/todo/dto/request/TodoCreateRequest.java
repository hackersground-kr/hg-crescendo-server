package com.example.crescendoserver.domain.todo.dto.request;

import java.time.LocalDate;

public record TodoCreateRequest(String title, LocalDate date) {
}
