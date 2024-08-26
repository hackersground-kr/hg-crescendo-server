package com.example.crescendoserver.domain.post.dto;

import com.example.crescendoserver.domain.post.comment.Comment;
import com.example.crescendoserver.domain.user.domain.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class AddCommentRequest {
    private Long id;
    private String comment;
    private String createdDate = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy.MM.dd HH:mm"));
    private String modifiedDate = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy.MM.dd HH:mm"));
    private String user;
    private int article;

    public Comment toEntity() { //생성자를 사용해 객체 생성
        return Comment.builder()
                .comment(comment)
                .createdDate(LocalDateTime.parse(createdDate))
                .modifiedDate(LocalDateTime.parse(modifiedDate))
                .user(user)
                .article(article)
                .build();
    }
}