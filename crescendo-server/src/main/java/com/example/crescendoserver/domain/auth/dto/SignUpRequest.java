package com.example.crescendoserver.domain.auth.dto;

import jakarta.validation.constraints.NotBlank;

public record SignUpRequest(
        @NotBlank
        String username,
        @NotBlank
        String password
) {
}
