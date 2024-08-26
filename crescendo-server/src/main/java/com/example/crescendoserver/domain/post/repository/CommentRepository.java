package com.example.crescendoserver.domain.post.repository;

import com.example.crescendoserver.domain.post.comment.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}

