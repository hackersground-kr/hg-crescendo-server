package com.example.crescendoserver.domain.post.service;

import com.example.crescendoserver.domain.post.comment.Comment;
import com.example.crescendoserver.domain.post.repository.CommentRepository;
import com.example.crescendoserver.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class CommentService {

    private final CommentRepository commentRepository;
    private final UserRepository userRepository;
    private final BlogRepository blogRepository;

    //댓글 추가 메서드
    public Comment save(Long id, AddCommentRequest request, String userName) {
        Optional<User> userOptional = userRepository.findByEmail(userName);
        User user;
        if (userOptional.isPresent()) { // Optional이 값으로 채워져 있는지 확인
            user = userOptional.get(); // User 객체 추출
        } else {
            System.out.println("사용자가 존재하지 않습니다: " + userName);
            return null;
        }
        Article article = blogRepository.findById(id).orElseThrow(() ->
                new IllegalArgumentException("댓글 쓰기 실패: 해당 게시글이 존재하지 않습니다. " + id));

        request.setUser(user);
        request.setArticle(article);

        return commentRepository.save(request.toEntity());
    }
    //댓글을 읽어온다.
    @Transactional(readOnly = true)
    public List<Comment> findAll(Long id) {
        Article article = blogRepository.findById(id).orElseThrow(() ->
                new IllegalArgumentException("해당 게시글이 존재하지 않습니다. id: " + id));
        List<Comment> comments = article.getComments();
        return comments;
    }

    //댓글 업데이트
    @Transactional
    public void update(Long articleId, Long id, UpdateCommentRequest dto) {
        Comment comment = commentRepository.findByArticleIdAndId(articleId, id).orElseThrow(() ->
                new IllegalArgumentException("해당 댓글이 존재하지 않습니다. " + id));

        comment.update(dto.getComment());
    }

    //댓글 삭제
    @Transactional
    public void delete(Long articleId, Long id) {
        Comment comment = commentRepository.findByArticleIdAndId(articleId, id).orElseThrow(() ->
                new IllegalArgumentException("해당 댓글이 존재하지 않습니다. id=" + id));

        commentRepository.delete(comment);
    }
    //게시글을 작성한 유저인지 확인
    private static void authorizedArticleAuthor(Article article){
        String UserName= SecurityContextHolder.getContext().getAuthentication().getName();
        if(!article.getAuthor().equals(UserName)){

        }
    }
}
