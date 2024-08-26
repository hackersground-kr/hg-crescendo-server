package com.example.crescendoserver.domain.todo.dto.request;

import java.time.LocalDate;

public record TodoEditRequest(String title, LocalDate date) {
}
