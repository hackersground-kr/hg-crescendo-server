package com.example.crescendoserver.domain.auth.repository;

public interface RefreshTokenRepository {
    void save(String username, String refreshToken);

    void deleteByUserName(String username);

    String findByUsername(String username);

    Boolean existsByUserName(String username);
}
