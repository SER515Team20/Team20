package com.asu.ser515.team20.mathboard.service;

import com.asu.ser515.team20.mathboard.model.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserRegistrationService {
    private List<User> users = new ArrayList<>();

    public void addUser(User user){
        users.add(user);
    }

    public User getUsers(String userId) {
        return users.stream().filter(user -> user.getUserid().equalsIgnoreCase(userId)).findFirst().orElse(null);
    }
}
