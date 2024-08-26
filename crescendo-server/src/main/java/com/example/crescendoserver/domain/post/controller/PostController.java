package com.example.crescendoserver.domain.post.controller;


import com.example.crescendoserver.domain.post.Post;
import com.example.crescendoserver.domain.post.dto.PostCreateRequest;
import com.example.crescendoserver.domain.post.dto.PostEditRequest;
import com.example.crescendoserver.domain.post.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/posts")
@RequiredArgsConstructor
public class PostController {
    private final PostService postService;

    @GetMapping
    public List<Post> getAllPosts() {
        return postService.getPosts();
    }

    @GetMapping("/{postId}")
    public Post getPost(@PathVariable Long postId) {
        return postService.getPost(postId);
    }

    @PostMapping
    public void createPost(@RequestBody PostCreateRequest request) {
        postService.createPost(request);
    }

    @DeleteMapping("/{postId}")
    public void deletePost(@PathVariable Long postId) {
        postService.deletePost(postId);
    }

    @PatchMapping("/{postId}")
    public void editPost(@PathVariable Long postId, @RequestBody PostEditRequest request) {
        postService.editPost(postId, request);
    }
}
