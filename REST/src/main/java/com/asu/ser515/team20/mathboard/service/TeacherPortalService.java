package com.asu.ser515.team20.mathboard.service;

import com.asu.ser515.team20.mathboard.model.Quiz;
import com.asu.ser515.team20.mathboard.model.QuizWrapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TeacherPortalService {

    private List<QuizWrapper> quizzes = new ArrayList<>();

    public boolean addQuizzes(QuizWrapper quiz) {
        return this.quizzes.add(quiz);
    }

    public QuizWrapper getQuizBasedOnGrade(String grade){
        return quizzes.stream().filter(quizWrapper -> quizWrapper.getGrade().equalsIgnoreCase(grade)).findFirst().orElse(null);
    }
}
