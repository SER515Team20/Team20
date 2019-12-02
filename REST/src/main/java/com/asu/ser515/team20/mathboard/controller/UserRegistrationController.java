package com.asu.ser515.team20.mathboard.controller;

import com.asu.ser515.team20.mathboard.model.User;
import com.asu.ser515.team20.mathboard.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.SwaggerDefinition;
import io.swagger.annotations.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/*
 * User Portal is used by Admin of the application to create a new user, retrieve a user and delete user
 * @author Nagarjun Nama Aswath
 */
@CrossOrigin
@RestController
@Api(tags = {"User Registration"})
@SwaggerDefinition(tags = {
        @Tag(name = "Swagger Resource", description = "User Registration Swagger")})
public class UserRegistrationController {

    @Autowired
    private UserService userService;

    /*
     * @param user
     * @return ResponseEntity<String>
     * This method accepts user information in JSON format and stores passes the information to backend methods
     */
    @CrossOrigin
    @RequestMapping(value = "/RegisterUser", method = RequestMethod.POST)
    @ApiOperation(value = "Provide a user to be registered in JSON format",response = ResponseEntity.class)
    public ResponseEntity<String> createUser(@RequestBody User user){
        return userService.addUser(user) ? new ResponseEntity<>("User Added Successfully", HttpStatus.OK) : new ResponseEntity<>("Failed to add user.", HttpStatus.EXPECTATION_FAILED);
    }

    /*
     * @param userId
     * @param password
     * @return User
     * This methods accepts userId and password and returns User to the front end
     */
    @CrossOrigin
    @RequestMapping(value = "/getUser/{userId}/{password}", method = RequestMethod.GET)
    @ApiOperation(value = "Provide userId",response = User.class)
    public User getUser(@PathVariable(value = "userId") String userId, @PathVariable(value = "password") String password) {
        return userService.getUsers(userId, password);
    }

    /*
     * @param userId
     * @return User
     * This method accepts userId and returns User information back to front end.
     */
    @CrossOrigin
    @RequestMapping(value = "/getUserforDelete/{userId}", method = RequestMethod.GET)
    @ApiOperation(value = "Provide userId",response = User.class)
    public User getUserForDeletion(@PathVariable(value = "userId") String userId ) {
        return userService.getUsersforDelete(userId);
    }


    /*
     * @param userId
     * @return ResposeEntity<String>
     * Accepts the userId of the user that has to be deleted.
     */
    @CrossOrigin
    @RequestMapping(value = "/DeleteUser/{userId}", method = RequestMethod.GET)
    @ApiOperation(value = "Provide a user to be deleted in JSON format",response = ResponseEntity.class)
    public ResponseEntity<String> delUser(@PathVariable(value = "userId") String userId){
        return userService.deleteUser(userId) ? new ResponseEntity<>("User Deleted Successfully", HttpStatus.OK) : new ResponseEntity<>("Failed to delete user.", HttpStatus.EXPECTATION_FAILED);
    }





}
