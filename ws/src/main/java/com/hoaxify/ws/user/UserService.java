package com.hoaxify.ws.user;

import org.springframework.stereotype.Service;

@Service
public class UserService {
	
	UserRepository userRepository;

	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}



	public User save(User user) {
		// TODO Auto-generated method stub
		return userRepository.save(user);
	}

}
