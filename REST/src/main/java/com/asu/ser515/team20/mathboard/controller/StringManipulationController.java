package com.asu.ser515.team20.mathboard.controller;

import com.asu.ser515.team20.mathboard.service.ExpressionEvaluator;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.SwaggerDefinition;
import io.swagger.annotations.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * This was the class used to evaluate the expression provided in the front end. Later the logic was moved to front end.
 * @author Nagarjun Nama Aswath
 */
@Deprecated
@RestController
@Api(tags = {"Math Expression Evaluator"})
@SwaggerDefinition(tags = {
        @Tag(name = "Swagger Resource", description = "Mathematical Expression in take as String and result is displayed")})
public class StringManipulationController {

    @Autowired
    private ExpressionEvaluator expressionEvaluator;

    /*
     * @param expression
     * @return int
     */
    @RequestMapping(value = "/expressionEvaluation/{expression}", method = RequestMethod.GET)
    @ApiOperation(value = "Provide an Expression to be evaluated",response = Integer.class)
    public int ExpressionEvaluator(@RequestParam(value = "expression") String expression) {
        return expressionEvaluator.solve(expression);
    }

}
