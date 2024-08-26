package com.example.crescendoserver.domain.auth.service;

import com.example.crescendoserver.domain.auth.dto.LoginRequest;
import com.example.crescendoserver.domain.auth.dto.ReissueRequest;
import com.example.crescendoserver.domain.auth.dto.SignUpRequest;
import com.example.crescendoserver.domain.user.domain.User;
import com.example.crescendoserver.domain.user.dto.UserResponse;
import com.example.crescendoserver.global.security.jwt.dto.Jwt;

public interface AuthService {
    void signup(SignUpRequest signUpRequest);

    Jwt login(LoginRequest request);

    Jwt reissue(ReissueRequest request);

    UserResponse me();

    User getUser();

}
