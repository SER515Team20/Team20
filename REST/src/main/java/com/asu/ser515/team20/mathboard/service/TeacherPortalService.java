package com.asu.ser515.team20.mathboard.service;

import com.asu.ser515.team20.mathboard.dao.ExcelReader;
import com.asu.ser515.team20.mathboard.dao.ExcelWriter;
import com.asu.ser515.team20.mathboard.model.QuizWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/*
 * This is a service class which acts as a bridge between the REST Controllers and the DB connective methods.
 * @author Nagarjun Nama Aswath
 */
@Service
public class TeacherPortalService {

    @Autowired
    private ExcelWriter excelWriter;

    @Autowired
    private ExcelReader excelReader;

    /*
     * @param quizWrapper
     * @return Boolean value
     * Accepts quizwrapper from the REST API and passes it on to the excelWrites
     */
    public boolean addQuizzes(QuizWrapper quizWrapper) {
        return excelWriter.addQuizzes(quizWrapper);
    }

    /*
     * @param grade
     * @return QuizWrapper
     * Accepts grade from REST API and fetches the QuizWrapper using the excelReader.
     */
    public QuizWrapper getQuizBasedOnGrade(String grade){
        return excelReader.getQuizzes(grade);
    }
}
