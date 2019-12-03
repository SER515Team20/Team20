package com.asu.ser515.team20.mathboard.service;

import com.asu.ser515.team20.mathboard.dao.ExcelReader;
import com.asu.ser515.team20.mathboard.dao.ExcelWriter;
import com.asu.ser515.team20.mathboard.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/*
 * This is the service which acts as a brdige between the REST API of Users and the DB connectivity methods.
 * @author Nagarjun Nama Aswath
 */
@Service
public class UserService {

    @Autowired
    private ExcelReader excelReader;

    @Autowired
    private ExcelWriter excelWriter;

    /*
     * @param user
     * @return boolean value
     * Accepts User from front end and passes it on excelWriter to store the user in DB
     */
    public boolean addUser(User user){
        return excelWriter.addUser(user);
    }

    /*
     *
     * @param userId
     * @param pass
     * @return User
     * Accepts userId and Password from the REST API and passes it on to excelReader to fetch the User and returns it.
     */
    public User getUsers(String userId, String pass) {
       return excelReader.searchUser(userId, pass);
    }

    /*
     * @param userId
     * @return User
     * Accepts userId from REST API and passes it on to excelReader to  fetch the User for deletion and returns it.
     */
    public User getUsersforDelete(String userId) {
        return excelReader.searchUserForDelete(userId);
    }

    /*
     * @param userId
     * @return User
     * Accepts userId from REST API and passes it on to excelWritter for deletion.
     */
    public boolean deleteUser(String userId){
        return ExcelWriter.DeleteUser(userId);
    }
}
