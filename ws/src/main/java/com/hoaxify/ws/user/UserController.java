package com.hoaxify.ws.user;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

	
	
	private static final Logger log = LoggerFactory.getLogger(UserController.class);

	@PostMapping("/api/1.0/users")
	public User createUser(@RequestBody User user) {
		System.out.println("Run users controller --> " + user);
		return user;	
	}
}
