package com.example.crescendoserver.domain.user.dto;

import com.example.crescendoserver.domain.user.domain.User;
import com.example.crescendoserver.domain.user.domain.UserRole;

public record UserResponse(
        Long id,
        String username,
        UserRole role) {

    public static UserResponse of(User user) {
        return new UserResponse(user.getId(), user.getUsername(), user.getRole());
    }
}
