package com.example.crescendoserver.domain.post.service;


import com.example.crescendoserver.domain.auth.service.AuthService;
import com.example.crescendoserver.domain.post.Post;
import com.example.crescendoserver.domain.post.dto.PostCreateRequest;
import com.example.crescendoserver.domain.post.dto.PostEditRequest;
import com.example.crescendoserver.domain.post.repository.PostRepository;
import com.example.crescendoserver.domain.user.domain.User;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PostService {
    private final PostRepository postRepository;
    private final AuthService authService;

    @Transactional
    public void createPost(PostCreateRequest request) {
        User user = authService.getUser();
        Post post = Post.builder()
                .title(request.title())
                .content(request.content())
                .author(user)
                .build();
        postRepository.save(post);
    }

    @Transactional
    public void deletePost(Long postId) {
        postRepository.deleteById(postId);
    }


    public void editPost(Long postId, PostEditRequest request) {
        Post post = postRepository.findById(postId).orElseThrow();
        post.setTitle(request.title());
        post.setContent(request.content());
        postRepository.save(post);
    }

    public List<Post> getPosts() {
        User author = authService.getUser();

        return postRepository.findAllByAuthorOrderByIdDesc(author);
    }


    public Post getPost(Long postId) {
        Optional<Post> post = postRepository.findById(postId);

        return post.orElse(null);
    }
}

