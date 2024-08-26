package com.example.crescendoserver.domain.auth.service;

import com.example.crescendoserver.domain.auth.dto.LoginRequest;
import com.example.crescendoserver.domain.auth.dto.ReissueRequest;
import com.example.crescendoserver.domain.auth.dto.SignUpRequest;
import com.example.crescendoserver.domain.auth.repository.RefreshTokenRepository;
import com.example.crescendoserver.domain.user.domain.User;
import com.example.crescendoserver.domain.user.domain.UserRole;
import com.example.crescendoserver.domain.user.dto.UserResponse;
import com.example.crescendoserver.domain.user.repository.UserRepository;
import com.example.crescendoserver.global.exception.CustomErrorCode;
import com.example.crescendoserver.global.exception.CustomException;
import com.example.crescendoserver.global.security.jwt.dto.Jwt;
import com.example.crescendoserver.global.security.jwt.enums.JwtType;
import com.example.crescendoserver.global.security.jwt.provider.JwtProvider;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final RefreshTokenRepository refreshTokenRepository;
    private final JwtProvider jwtProvider;

    @Transactional
    @Override
    public void signup(SignUpRequest request) {
        String username = request.username();
        String password = request.password();

        if (userRepository.existsByUsername(username)) throw new CustomException(CustomErrorCode.USERNAME_DUPLICATION);

        User user = User.builder()
                .username(username)
                .password(passwordEncoder.encode(password))
                .role(UserRole.USER)
                .build();

        userRepository.save(user);
    }

    @Transactional
    @Override
    public Jwt login(LoginRequest request) {
        String username = request.username();
        String password = request.password();

        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new CustomException(CustomErrorCode.USER_NOT_FOUND));

        if (!passwordEncoder.matches(password, user.getPassword()))
            throw new CustomException(CustomErrorCode.WRONG_PASSWORD);

        Jwt token = jwtProvider.generateToken(username, user.getRole());

        refreshTokenRepository.save(username, token.refreshToken());

        return token;
    }

    @Override
    public Jwt reissue(ReissueRequest request) {
        String refreshToken = request.refreshToken();

        if (jwtProvider.getType(refreshToken) != JwtType.REFRESH)
            throw new CustomException(CustomErrorCode.INVALID_TOKEN_TYPE);

        String username = jwtProvider.getSubject(refreshToken);

        if (!refreshTokenRepository.existsByUserName(username))
            throw new CustomException(CustomErrorCode.INVALID_REFRESH_TOKEN);

        if (!refreshTokenRepository.findByUsername(username).equals(refreshToken))
            throw new CustomException(CustomErrorCode.INVALID_REFRESH_TOKEN);


        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new CustomException(CustomErrorCode.USER_NOT_FOUND));

        Jwt token = jwtProvider.generateToken(username, user.getRole());

        refreshTokenRepository.save(username, token.refreshToken());

        return token;
    }

    @Override
    public UserResponse me() {
        String username  = SecurityContextHolder.getContext().getAuthentication().getName();

        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new CustomException(CustomErrorCode.USER_NOT_FOUND));

        return new UserResponse(user.getId(), user.getUsername(), user.getRole());
    }

    @Override
    public User getUser() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();

        return userRepository.findByUsername(username)
                .orElseThrow(() -> new CustomException(CustomErrorCode.USER_NOT_FOUND));
    }
}

