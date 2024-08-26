package com.example.crescendoserver.global.security.jwt.dto;

public record Jwt(
        String accessToken,
        String refreshToken
) {
}
