package ibf2021.customerbackend.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.json.Json;
import jakarta.json.JsonObject;

@RestController
@RequestMapping(path="/api/register", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserController {
    
    @PostMapping(consumes = {MediaType.APPLICATION_FORM_URLENCODED_VALUE})
    public ResponseEntity<String> registerUser(@RequestBody MultiValueMap<String, String> form) {
        String name = form.getFirst("name");
        String email = form.getFirst("email");
        System.out.println("name: %s, email: %s".formatted(name, email));

        if (name.trim().startsWith("justin")) {
            System.out.println("justin not allowed");
            JsonObject jsonResponse = Json.createObjectBuilder()
            .add("message", "not allowed")
            .build();

            return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .contentType(MediaType.APPLICATION_JSON)
                .body(jsonResponse.toString());
        }

        JsonObject jsonResponse = Json.createObjectBuilder()
        .add("message", "%s, you have been registered".formatted(name))
        .build();

        
        return ResponseEntity.ok(jsonResponse.toString());

    } 
}
