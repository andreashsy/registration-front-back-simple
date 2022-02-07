package ibf2021.customerbackend.controllers;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.json.Json;
import jakarta.json.JsonObject;

@RestController
//@CrossOrigin("*")
@RequestMapping(path="/api/customer", produces = MediaType.APPLICATION_JSON_VALUE)
public class CustomerController {
    
    @GetMapping
    //@CrossOrigin("*")
    public ResponseEntity<String> getCustomer(
        @RequestParam(required = false) String id, @RequestParam(required = false) String comments
    ) {
        JsonObject jo = Json.createObjectBuilder()
            .add("name", "fred")
            .add("email", "fred@fred.com")
            .add("address", "1 fred ave")
            .build();

        //HttpHeaders headers = new HttpHeaders();
        //headers.add("Access-Control-Allow-Origin", "http://localhost:4200");
        System.out.println("id = %s, comments = %s".formatted(id, comments));
        return ResponseEntity.ok().body(jo.toString());
    }
}
