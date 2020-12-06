package com.hoaxify.ws.auth;

import com.hoaxify.ws.error.ApiError;
import com.hoaxify.ws.user.User;
import com.hoaxify.ws.user.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.Base64;
import java.util.Date;

@RestController
public class AuthController {
    // For now, we have made the controls on this page. In the future, Spring Security will do these operations.

    private static final Logger log = LoggerFactory.getLogger(AuthController.class);

    UserRepository userRepository;

    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/api/1.0/auth")
    ResponseEntity<?> handleAuthentication(@RequestHeader(name = "Authorization", required = false) String authorization) {
        if (authorization == null) {
            ApiError error = new ApiError(401, "Unauthorized request", "api/1.0/auth");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
        }

        String base64encoded = authorization.split("Basic ")[1];
        String decode = new String(Base64.getDecoder().decode(base64encoded));
        String[] parts = decode.split(":");
        String username = parts[0];
        String password = parts[1];

        User inDb = userRepository.findByUsername(username);
        if (inDb == null) {
            ApiError error = new ApiError(401, "Unauthorized request", "api/1.0/auth");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
        }

        String hashedPassword = inDb.getPassword();

        if (!passwordEncoder.matches(password, hashedPassword)) {
            ApiError error = new ApiError(401, "Unauthorized request", "api/1.0/auth");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);

        }

        log.info("User : " + username + " sisteme giriş yaptı .." + new Date());
        return ResponseEntity.status(HttpStatus.OK).build();//6.13
    }

}
