package com.asu.ser515.team20.mathboard.controller;

import com.asu.ser515.team20.mathboard.model.User;
import com.asu.ser515.team20.mathboard.service.UserRegistrationService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.SwaggerDefinition;
import io.swagger.annotations.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@CrossOrigin
@RestController
@Api(tags = {"User Registration"})
@SwaggerDefinition(tags = {
        @Tag(name = "Swagger Resource", description = "User Registration Swagger")})
public class UserRegistrationController {

    @Autowired
    private UserRegistrationService userRegistrationService;
    @CrossOrigin
    @RequestMapping(value = "/RegisterUser", method = RequestMethod.POST)
    @ApiOperation(value = "Provide a user to be registered in JSON format",response = ResponseEntity.class)
    public ResponseEntity<String> getUser(@RequestBody User user){
        userRegistrationService.addUser(user);
        return new ResponseEntity<>("User Added Successfully", HttpStatus.OK);
    }
    @CrossOrigin
    @RequestMapping(value = "/getUser/{userId}", method = RequestMethod.GET)
    @ApiOperation(value = "Provide userId",response = User.class)
    public User ExpressionEvaluator(@PathVariable String userId) {
        return userRegistrationService.getUsers(userId);
    }
}