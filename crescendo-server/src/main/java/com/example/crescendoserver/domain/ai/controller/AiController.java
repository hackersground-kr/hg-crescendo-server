package com.example.crescendoserver.domain.ai.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.ai.openai.OpenAiChatModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/ai")
@RestController
@RequiredArgsConstructor
public class AiController {
    private final OpenAiChatModel openAiChatModel;

    @GetMapping("/chat")
    public String chat(@RequestBody String message) {
        return openAiChatModel.call(String.valueOf(message));
    }

}