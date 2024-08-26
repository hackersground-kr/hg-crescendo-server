package com.example.crescendoserver.domain.ai.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.ai.openai.OpenAiChatModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api")
@RestController
@RequiredArgsConstructor
public class AiController {
    private final OpenAiChatModel openAiChatModel;

    @PostMapping("/chat")
    public String chat(@RequestBody AiRequest request) {
        System.out.println(request.message());
        return openAiChatModel.call(String.valueOf(request.message()));
    }

}