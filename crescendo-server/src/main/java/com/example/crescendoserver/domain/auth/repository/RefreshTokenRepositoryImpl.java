package com.example.crescendoserver.domain.auth.repository;

import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class RefreshTokenRepositoryImpl implements RefreshTokenRepository {
    private final RedisTemplate<String, String> redisTemplate;

    @Override
    public void save(String username, String refreshToken) {
        redisTemplate.opsForValue().set("refreshToken:" + username, refreshToken);
    }

    @Override
    public void deleteByUserName(String username) {
        redisTemplate.delete("refreshToken:" + username);
    }

    @Override
    public String findByUsername(String username) {
        return redisTemplate.opsForValue().get("refreshToken:" + username);
    }

    @Override
    public Boolean existsByUserName(String username) {
        return redisTemplate.hasKey("refreshToken:" + username);
    }
}
