package com.example.crescendoserver.domain.post.repository;

import com.example.crescendoserver.domain.post.Post;
import com.example.crescendoserver.domain.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findAllByAuthorOrderByIdDesc(User author);
}
